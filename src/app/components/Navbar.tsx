"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import logo from "../../../public/cover.png";
import Image from "next/image";
const Navbar = () => {
	const { status, data: session } = useSession();

	const links = [
		{ label: "Projects", href: "/projects" },
		{ label: "Issues", href: "/issues" },
		{ label: "Dashboard", href: "/dashboard" },
	];

	return (
		<div className='navbar bg-base-100'>
			<div className='flex-1'>
				<Link href='/' className='mr-4'>
					<Image width={200} height={200} src={logo} alt='logo' />
				</Link>
				<nav>
					{links.map((link) => (
						<Link
							className='mr-3 font-sans font-semibold hover:text-accent'
							key={link.href}
							href={link.href}
						>
							{link.label}
						</Link>
					))}
				</nav>
			</div>

			<div className='flex-none'>
				<div className='dropdown dropdown-end'>
					<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
						<div className='w-10 rounded-full'>
							<Image
								alt='Tailwind CSS Navbar component'
								src='/images/stock/photo-1534528741775-53994a69daeb.jpg'
								width={50}
								height={50}
							/>
						</div>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
					>
						<li>
							<a className='justify-between'>
								Profile
								<span className='badge'>New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		// <div className='flex p-5  space-x-3'>
		// 	<Link href='/' className='mr-4'>
		// 		<Image width={100} height={100} src={logo} alt='logo' />
		// 	</Link>

		// 	{status === "loading" && <div>...loading</div>}
		// 	{status === "authenticated" ? (
		// 		<>
		// 			<div>{session.user!.name}</div>
		// 			<Link href='/api/auth/signout'>Sign Out</Link>
		// 		</>
		// 	) : (
		// 		<Link href='/api/auth/signin'>Login</Link>
		// 	)}
		// </div>
	);
};

export default Navbar;
