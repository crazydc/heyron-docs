import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis
const prisma = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const userId = req.query.id

    if (!userId) {
      return res.status(400).json({ error: 'User ID required' })
    }

    console.log('Fetching user:', userId)

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        fullName: true,
        discordId: true,
        avatarUrl: true,
        onboardingComplete: true,
        onboardingStep: true,
        createdAt: true
      }
    })

    console.log('User found:', user)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    return res.json(user)
  } catch (error) {
    console.error('Error fetching user:', error)
    return res.status(500).json({ error: 'Failed to fetch user', details: error.message })
  }
}