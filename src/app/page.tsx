import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Home() {
	const session = await getServerSession(authOptions);
	return (
		<main>
			<h1>hello {session && <span>{session.user!.name}</span>}</h1>
			<Link href='/users'>Users</Link>
		</main>
	);
}
