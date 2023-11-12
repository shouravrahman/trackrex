import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
//if we dont put request in the parameter nextjs will cache the result of this resposne
import { z } from 'zod'
import bcrypt from "bcrypt"
const schema = z.object({

   password: z.string().min(6),
   email: z.string().email()
})

export async function POST(request: NextRequest) {
   const body = await request.json();
   //validate
   const validation = schema.safeParse(body);
   if (!validation.success)
      return NextResponse.json(validation.error.errors, { status: 400 });

   const user = await prisma.user.findUnique({
      where: { email: body.email },
   });
   if (user)
      return NextResponse.json({ error: "user already exists" }, { status: 400 });

   const hashedPassword = await bcrypt.hash(body.password, 12)
   const newUser = await prisma.user.create({
      data: {
         hashedPassword: body.password,
         email: body.email,
      },
   });

   return NextResponse.json({ email: newUser.email }, { status: 201 });
}
