"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Loading from "./loading.js";

const DynamicNavController = dynamic(
	() => import("../app/components/NavController"),
	{
		ssr: false,
	}
);

const DynamicFeed = dynamic(() => import("./components/Feed"), {
	ssr: false,
});

export default function Home() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams()!;

	const createQueryString = React.useCallback(
		(value: string) => {
			const params = new URLSearchParams(searchParams);
			params.set("q", value);

			return params.toString();
		},
		[searchParams]
	);

	const searchValue = searchParams.get("q") || "";

	const [filterValue, setFilterValue] = React.useState("");

	// Value of Filter input to be passed to Feed
	const filterValueInput = (value: string): void => {
		setFilterValue(value);
	};

	return (
		<>
			<DynamicNavController
				searchValue={searchValue}
				handleSearchInputValue={(input) => {
					const queryString = createQueryString(input);
					return router.replace(pathname + "?" + queryString, {
						scroll: false,
						shallow: false,
					});
				}}
				filterValue={filterValue}
				filterFunc={filterValueInput}
			/>
			<Suspense fallback={<Loading />}>
				<DynamicFeed filterValue={filterValue} searchValue={searchValue} />
			</Suspense>
		</>
	);
}
