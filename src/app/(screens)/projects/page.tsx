import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";
import prisma from "../../../../prisma/client";

const ProjectsPage = async () => {
	const session = await getServerSession(authOptions);

	return {
		// session? <> <> : <div>No projects</div>
	};
};

export default ProjectsPage;
