import { createSlice } from '@reduxjs/toolkit'

// Load persisted user from localStorage
const loadPersistedUser = () => {
  try {
    const stored = localStorage.getItem('heyron_user')
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

const initialState = {
  isAuthenticated: false,
  user: loadPersistedUser(),
  onboardingComplete: loadPersistedUser()?.onboardingComplete ?? true,
  loading: true,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true
      state.error = null
    },
    loginSuccess: (state, action) => {
      state.loading = false
      state.isAuthenticated = true
      state.user = action.payload.user
      state.onboardingComplete = action.payload.onboardingComplete ?? true
      // Persist to localStorage
      localStorage.setItem('heyron_user', JSON.stringify(action.payload.user))
    },
    loginFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.onboardingComplete = true
      localStorage.removeItem('heyron_user')
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }
    },
    setOnboardingComplete: (state, action) => {
      state.onboardingComplete = action.payload
    },
    setAuthLoaded: (state) => {
      state.loading = false
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout, updateUser, setOnboardingComplete, setAuthLoaded } = authSlice.actions
export default authSlice.reducer