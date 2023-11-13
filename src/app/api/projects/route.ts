import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
//if we dont put request in the parameter nextjs will cache the result of this resposne
import { z } from 'zod'

// const schema = z.object({

//    password: z.string().min(6),
//    email: z.string().email()
// })

export async function GET(request: NextRequest) {
   const users = await prisma.user.findMany();
   return NextResponse.json(users);
}