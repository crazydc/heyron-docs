import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentStep: 0,
  completed: false,
  
  // Identity (from NamesScreen)
  yourName: '',
  agentName: '',
  
  // Use cases (from UseCasesScreen)
  useCases: [],
  
  // Personality & communication (new screens)
  personality: '',
  commStyle: '',
  model: '',
  
  // Integrations
  tools: [],
  toSetup: [],
  
  // Memory & schedule (new screens)
  memory: '',
  editableMemory: true,
  timezone: 'Pacific (PT)',
  workStart: '09:00',
  workEnd: '17:00',
  workDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  
  // Notifications (new screen)
  notifyEmail: true,
  notifyPush: false,
  notifyFreq: 'daily',
  
  // Privacy (new screen)
  learnFromMe: true,
  shareUsage: true,
  autoDelete: 'Never',
  
  // About you (new screen)
  aboutYou: '',
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
    updateOnboarding: (state, action) => {
      return { ...state, ...action.payload }
    },
    resetOnboarding: () => initialState,
  },
})

export const { setStep, nextStep, prevStep, completeOnboarding, updateOnboarding, resetOnboarding } = onboardingSlice.actions
export default onboardingSlice.reducer
