import Image from "next/image";
import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

type TableProps = {
	sortOrder: string;
};

type User = {
	id: number;
	name: string;
	email: string;
};
const UsersTable = async ({ sortOrder }: TableProps) => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users", {
		cache: "no-store",
	});
	const users: User[] = await res.json();

	const sortedUsers = sort(users).asc(
		sortOrder === "email" ? (user) => user.email : (user) => user.name
	);

	sort(users);
	return (
		<div className='overflow-x-auto'>
		 
			<table className='table'>
				{/* head */}
				<thead>
					<tr>
						<th>
							<Link href='/users?sortOrder=name'>Name</Link>
						</th>
						<th>
							<Link href='/users?sortOrder=email'>Email</Link>
						</th>
					</tr>
				</thead>
				<tbody>
					{sortedUsers?.map((user) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.email}</td>
						</tr>
					))}
				</tbody>
				{/* foot */}
			</table>
		</div>
	);
};

export default UsersTable;

 