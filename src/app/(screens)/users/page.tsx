import Link from "next/link";
import UsersTable from "./UsersTable";
import { Suspense } from "react";

type UserProps = {
	searchParams: { sortOrder: string };
};
const UsersPage = async ({ searchParams: { sortOrder } }: UserProps) => {
	return (
		<>
			<h1>users</h1>
			<Link className='btn btn-primary' href='/users/new'>
				New User
			</Link>

			{/* <Suspense fallback={<>loading...</>}> */}
			<UsersTable sortOrder={sortOrder} />
			{/* </Suspense> */}
		</>
	);
};

export default UsersPage;
