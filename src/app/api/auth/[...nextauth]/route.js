import { authOptions } from '@/utils/auth'
import NextAuth from 'next-auth/next'

// const handler = NextAuth(authOptions)
const handler = NextAuth({
  ...authOptions,
  secret: process.env.NEXT_PUBLIC_SECRET,
})

export { handler as GET, handler as POST }
