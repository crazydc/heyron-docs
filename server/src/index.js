import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(helmet());
app.use(cors());
app.use(express.json());
app.get('/api/health', (req, res) => { res.json({ status: 'ok', timestamp: new Date().toISOString(), version: '1.0.0' }); });
app.listen(PORT, () => { console.log(`🚀 Heyron API running on port ${PORT}`); });

// Update user's onboarding complete flag
app.patch('/api/user/onboarding-complete', requireAuth, async (req, res) => {
  try {
    const { completed } = req.body
    await prisma.user.update({
      where: { id: req.user.id },
      data: { onboardingComplete: completed }
    })
    res.json({ success: true })
  } catch (error) {
    console.error('Error updating onboarding:', error)
    res.status(500).json({ error: 'Failed to update onboarding status' })
  }
})

// Get current user profile (includes onboardingComplete)
app.get('/api/user/me', requireAuth, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        email: true,
        fullName: true,
        onboardingComplete: true,
        onboardingStep: true
      }
    })
    res.json(user)
  } catch (error) {
    console.error('Error fetching user:', error)
    res.status(500).json({ error: 'Failed to fetch user' })
  }
})
