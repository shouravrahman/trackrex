import React, { ReactNode } from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex'>
			<aside className='bg-slate-300 p-5 mr-5'>Admin sidebar</aside>
			<div>{children}</div>
		</div>
	);
};

export default AdminLayout;
