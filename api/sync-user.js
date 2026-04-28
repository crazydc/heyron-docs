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

    console.log('Syncing user:', userId, email)

    if (!userId || !email) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Check if user already exists
    const existing = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (existing) {
      console.log('User already exists:', existing.id)
      return res.json({ success: true, message: 'User already exists' })
    }

    // Create user in database
    const user = await prisma.user.create({
      data: {
        id: userId,
        email,
        fullName: fullName || 'User',
        passwordHash: 'supabase-managed'
      }
    })

    console.log('User created:', user.id)

    return res.json({ success: true, user: { id: user.id, email: user.email } })
  } catch (error) {
    console.error('Error syncing user:', error)
    return res.status(500).json({ error: 'Failed to sync user', details: error.message })
  }
}