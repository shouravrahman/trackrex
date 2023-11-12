import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "../../../../../prisma/client";
import { useParams } from "next/navigation";
import { requestToBodyStream } from "next/dist/server/body-streams";
//if we dont put request in the parameter nextjs will cache the result of this resposne

type Props = {
	params: { id: string };
};

export async function GET(request: NextRequest, { params: { id } }: Props) {
	//fetch data
	const user = await prisma.user.findUnique({
		where: { id: parseInt(id) },
	});
	//if not found return 404
	//else return data

	if (!user)
		return NextResponse.json({ error: "user not found" }, { status: 404 });

	return NextResponse.json(user);
}

//put for replacing patch for updating 1 or more properties

export async function PUT(request: NextRequest, { params: { id } }: Props) {
	//validate

	const body = await request.json();
	//if we use parse it will throw an exception if anything fails safeparse just return the result without yelling
	const validation = schema.safeParse(body);
	if (!validation.success)
		return NextResponse.json(validation.error.errors, { status: 400 });
	const user = await prisma.user.findUnique({
		where: { id: parseInt(id) },
	});
	//fetch with the given id
	if (!user) {
		return NextResponse.json({ error: "user not found" }, { status: 404 });
	}

	//update in db and return updated user
	const updatedUser = await prisma.user.update({
		where: { id: user.id },
		data: {
			name: body.name,
			email: body.email,
		},
	});

	return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
	//fetch with the given id
	const user = await prisma.user.findUnique({
		where: { id: parseInt(id) },
	});
	if (!user) {
		return NextResponse.json({ error: "user not found" }, { status: 404 });
	}

	//update in db and return updated user
	await prisma.user.delete({
		where: { id: user.id },
	});

	return NextResponse.json({});
}
