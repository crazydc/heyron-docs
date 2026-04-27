import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis
const prisma = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { userId, email, fullName } = req.body

    if (!userId || !email) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Upsert user - create or update
    const user = await prisma.user.upsert({
      where: { id: userId },
      update: {
        email,
        fullName: fullName || 'User'
      },
      create: {
        id: userId,
        email,
        fullName: fullName || 'User',
        passwordHash: 'supabase-managed'
      },
      select: {
        id: true,
        email: true,
        fullName: true,
        discordId: true,
        onboardingComplete: true,
        createdAt: true
      }
    })

    return res.json({ success: true, user })
  } catch (error) {
    console.error('Error upserting user:', error)
    return res.status(500).json({ error: 'Failed to upsert user', details: error.message })
  }
}