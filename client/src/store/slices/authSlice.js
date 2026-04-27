import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  user: null,
  onboardingComplete: true, // default true, set to false for new users
  loading: false,
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
    },
    loginFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.onboardingComplete = true
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }
    },
    setOnboardingComplete: (state, action) => {
      state.onboardingComplete = action.payload
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout, updateUser, setOnboardingComplete } = authSlice.actions
export default authSlice.reducer
