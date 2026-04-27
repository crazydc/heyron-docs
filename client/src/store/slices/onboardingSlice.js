import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentStep: 0,
  completed: false,
  agentConfig: {
    serverName: '',
    connectionType: 'cloud',
    sshKey: '',
    serverRegion: '',
  },
}

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.currentStep = action.payload
    },
    nextStep: (state) => {
      state.currentStep += 1
    },
    prevStep: (state) => {
      state.currentStep = Math.max(0, state.currentStep - 1)
    },
    completeOnboarding: (state) => {
      state.completed = true
    },
    setAgentConfig: (state, action) => {
      state.agentConfig = { ...state.agentConfig, ...action.payload }
    },
    resetOnboarding: () => initialState,
  },
})

export const { setStep, nextStep, prevStep, completeOnboarding, setAgentConfig, resetOnboarding } = onboardingSlice.actions
export default onboardingSlice.reducer
