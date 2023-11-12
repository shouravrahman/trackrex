import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
	return NextResponse.json([
		{
			id: 1,
			name: "milk",
			price: 205,
		},
		{
			id: 2,
			name: "silk",
			price: 5,
		},
	]);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	//validate
	const validation = schema.safeParse(body);
	if (!validation.success)
		return NextResponse.json(validation.error.errors, { status: 400 });
	//dont spread the all the body in response because there might be other things a malicious user can send
	return NextResponse.json(
		{ id: 10, name: body.name, price: body.price },
		{ status: 201 }
	);
}
