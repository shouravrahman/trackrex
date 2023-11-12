import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
   adapter: PrismaAdapter(prisma),
   providers: [CredentialsProvider({

      name: "Credentials",

      credentials: {
         email: { label: "Email", type: "text", placeholder: "jsmith@gmail.com" },
         password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
         // Add logic here to look up the user from the credentials supplied
         if (!credentials?.email || !credentials.password) return null;
         const user = await prisma.user.findUnique({

            where: { email: credentials.email }
         })
         if (!user) return null


         const matchPass = await bcrypt.compare(credentials.password, user.hashedPassword!)
         return matchPass ? user : null

      }
   }),
   GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
   })
   ],
   session: {
      strategy: 'jwt'
   }
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }