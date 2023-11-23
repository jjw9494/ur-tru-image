"use client";

import dynamic from "next/dynamic";

const DynamicNavController = dynamic(
	() => import("../components/NavController"),
	{
		ssr: false,
	}
);

const DynamicArtistsFeed = dynamic(() => import("../components/ArtistsFeed"), {
	ssr: false,
});

export default function Artists() {
	return (
		<>
			<DynamicNavController
				searchValue={""}
				handleSearchInputValue={() => ""}
				filterValue={""}
				filterFunc={() => ""}
			/>
			<DynamicArtistsFeed />
		</>
	);
}
