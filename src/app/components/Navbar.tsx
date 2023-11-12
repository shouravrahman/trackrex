"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	const { status, data: session } = useSession();

	return (
		<div className='flex p-5 bg-slate-700 space-x-3'>
			<Link href='/' className='mr-4'>
				LOGO
			</Link>

			{status === "loading" && <div>...loading</div>}
			{status === "authenticated" ? (
				<>
					<div>{session.user!.name}</div>
					<Link href='/api/auth/signout'>Sign Out</Link>
				</>
			) : (
				<Link href='/api/auth/signin'>Login</Link>
			)}
		</div>
	);
};

export default Navbar;
