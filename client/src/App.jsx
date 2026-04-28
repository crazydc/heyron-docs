import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { useEffect, useState } from 'react'
import store from './store'
import { loginSuccess, logout, setOnboardingComplete, setAuthLoaded } from './store/slices/authSlice'
import { supabase } from './utils/supabase'
import './styles/global.css'
import Landing from './pages/Landing'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Onboarding from './pages/Onboarding'
import Account from './pages/Account'
import Support from './pages/Support'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Resources from './pages/Resources'
import Academy from './pages/Academy'
import Partner from './pages/Partner'
import About from './pages/About'
import FAQ from './pages/FAQ'
import ProtectedRoute, { GuestRoute } from './components/ProtectedRoute'

function App() {
  const [ready, setReady] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session }, error }) => {
      if (session && !error) {
        try {
          // Get user from local database
          const res = await fetch(`/api/user?id=${session.user.id}`)
          const profile = res.ok ? await res.json() : null
          
          const onboardingComplete = profile?.onboardingComplete ?? false
          
          store.dispatch(loginSuccess({
            user: {
              id: session.user.id,
              email: session.user.email,
              fullName: profile?.fullName || session.user.user_metadata?.full_name || 'User',
              discordId: profile?.discordId,
              createdAt: profile?.createdAt
            },
            onboardingComplete
          }))
          store.dispatch(setOnboardingComplete(onboardingComplete))
        } catch (err) {
          console.error('Auth error:', err)
        }
      }
      store.dispatch(setAuthLoaded())
    }).catch(() => {
      store.dispatch(setAuthLoaded())
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        try {
          // Get user from local database
          const res = await fetch(`/api/user?id=${session.user.id}`)
          const profile = res.ok ? await res.json() : null
          
          const onboardingComplete = profile?.onboardingComplete ?? false
          
          store.dispatch(loginSuccess({
            user: {
              id: session.user.id,
              email: session.user.email,
              fullName: profile?.fullName || session.user.user_metadata?.full_name || 'User',
              discordId: profile?.discordId,
              createdAt: profile?.createdAt
            },
            onboardingComplete
          }))
          store.dispatch(setOnboardingComplete(onboardingComplete))
        } catch (err) {
          console.error('Auth change error:', err)
        }
      } else {
        store.dispatch(logout())
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter basename={import.meta.env.VITE_BASE_PATH || '/heyron-docs'}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<GuestRoute><SignUp /></GuestRoute>} />
          <Route path="/signin" element={<GuestRoute><SignIn /></GuestRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
