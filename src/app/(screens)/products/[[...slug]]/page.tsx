import React from "react";

type ProductProps = {
	params: { slug: string[] };
	searchParams: { sortOrder: string };
};
const Products = ({
	params: { slug },
	searchParams: { sortOrder },
}: ProductProps) => {
	return (
		<div>
			{slug}
			{sortOrder}
		</div>
	);
};

export default Products;
