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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<GuestRoute><SignUp /></GuestRoute>} />
          <Route path="/signin" element={<GuestRoute><SignIn /></GuestRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
