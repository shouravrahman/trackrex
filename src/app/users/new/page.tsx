'use client'

import { useRouter } from "next/navigation";

const NewUsersPage = () => {

const router = useRouter()


	return <button className="btn btn-secondary" onClick={() => { router.push('/')}}>create</button>;
};

export default NewUsersPage;
