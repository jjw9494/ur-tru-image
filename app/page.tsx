"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import Loading from "./loading";

const DynamicNavController = dynamic(
	() => import("./components/NavController"),
	{
		ssr: false,
	}
);

const DynamicFeed = dynamic(() => import("./components/Feed"), {
	ssr: false,
});

export default function Home() {
	const [filterValue, setFilterValue] = React.useState("");

	// Value of Filter input to be passed to Feed
	const filterValueInput = (value: string): void => {
		setFilterValue(value);
	};

	return (
		<>
			<DynamicNavController
				filterValue={filterValue}
				filterFunc={filterValueInput}
			/>
			<Suspense fallback={<Loading />}>
				<DynamicFeed filterValue={filterValue} />
			</Suspense>
		</>
	);
}
