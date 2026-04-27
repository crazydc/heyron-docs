import { supabase } from './supabase'

// Mark onboarding as complete
export async function completeOnboarding() {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Not authenticated' }
  
  const { error } = await supabase
    .from('users')
    .update({ onboarding_complete: true })
    .eq('id', user.id)
  
  return { error }
}

// Fetch user profile
export async function fetchUserProfile() {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { data: null, error: 'Not authenticated' }
  
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single()
  
  return { data, error }
}
