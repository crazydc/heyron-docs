// Mark onboarding as complete
export async function completeOnboarding() {
  const user = JSON.parse(localStorage.getItem('heyron_user') || '{}')
  if (!user?.id) return { error: 'Not authenticated' }
  
  const res = await fetch(`/api/update-user?id=${user.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ onboardingComplete: true, onboardingStep: 99 })
  })
  
  if (!res.ok) {
    const data = await res.json()
    return { error: data.error }
  }
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