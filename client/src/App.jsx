import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { useEffect, useState } from 'react'
import store from './store'
import { loginSuccess, logout, setOnboardingComplete } from './store/slices/authSlice'
import { supabase } from './utils/supabase'
import './styles/global.css'
import Landing from './pages/Landing'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Onboarding from './pages/Onboarding'
import Account from './pages/Account'

function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Check for existing session on load
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session) {
        // Fetch user profile to get onboarding status
        const { data: profile } = await supabase
          .from('users')
          .select('full_name, onboarding_complete')
          .eq('id', session.user.id)
          .single()
        
        const onboardingComplete = profile?.onboarding_complete ?? false
        
        store.dispatch(loginSuccess({
          user: {
            id: session.user.id,
            email: session.user.email,
            fullName: profile?.full_name || session.user.user_metadata?.full_name || 'User'
          },
          onboardingComplete
        }))
        store.dispatch(setOnboardingComplete(onboardingComplete))
      }
      setReady(true)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        const { data: profile } = await supabase
          .from('users')
          .select('full_name, onboarding_complete')
          .eq('id', session.user.id)
          .single()
        
        const onboardingComplete = profile?.onboarding_complete ?? false
        
        store.dispatch(loginSuccess({
          user: {
            id: session.user.id,
            email: session.user.email,
            fullName: profile?.full_name || session.user.user_metadata?.full_name || 'User'
          },
          onboardingComplete
        }))
        store.dispatch(setOnboardingComplete(onboardingComplete))
      } else {
        store.dispatch(logout())
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!ready) return null

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
