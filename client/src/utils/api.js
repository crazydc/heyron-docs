// Mark onboarding as complete with config
export async function completeOnboarding(config = {}) {
  const user = JSON.parse(localStorage.getItem('heyron_user') || '{}')
  if (!user?.id) return { error: 'Not authenticated' }
  
  const res = await fetch(`/api/update-user?id=${user.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      onboardingComplete: true, 
      onboardingStep: 99,
      ...config
    })
  })
  
  if (!res.ok) {
    const data = await res.json()
    return { error: data.error }
  }
  
  // Update localStorage with new user data
  localStorage.setItem('heyron_user', JSON.stringify({ ...user, ...config, onboardingComplete: true }))
  
  return { error: null }
}

// Fetch user profile
export async function fetchUserProfile() {
  const user = JSON.parse(localStorage.getItem('heyron_user') || '{}')
  if (!user?.id) return { data: null, error: 'Not authenticated' }
  
  const res = await fetch(`/api/user?id=${user.id}`)
  const data = res.ok ? await res.json() : null
  return { data, error: res.ok ? null : 'Failed to fetch' }
}