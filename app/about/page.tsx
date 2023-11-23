"use client";

import { useCallback, useState } from "react";
import NavController from "../components/NavController";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import "../styles/about.css";

export default function Home() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams()!;

	const createQueryString = useCallback(
		(value: string) => {
			const params = new URLSearchParams(searchParams);
			params.set("q", value);

			return params.toString();
		},
		[searchParams]
	);

	const searchValue = searchParams.get("q") || "";

	const [filterValue, setFilterValue] = useState("");

	// Value of Filter input to be passed to Feed
	const filterValueInput = (value: string): void => {
		setFilterValue(value);
	};

	return (
		<>
			<NavController
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
			<div className="placeholder-container">
				<div className="placeholder-photo">
					<p>placeholder photo</p>
				</div>
			</div>
			<h1 className="about-title">About.</h1>
			<h2 className="about-text">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
				laborum provident ipsum sint sit quasi unde enim harum eum cum suscipit
				fugit veritatis, esse commodi facilis mollitia officiis accusantium,
				alias quo vero nobis. Ut vitae veniam sit temporibus! Atque eveniet
				quas, in voluptas nam facilis rerum temporibus inventore velit? Adipisci
				magnam illo expedita nobis error, similique dolorum consectetur nisi
				totam ut voluptates? Illum, quae! Temporibus, deserunt tenetur. Odit
				debitis illo accusantium ipsum! Aut veniam distinctio nesciunt dolor
				unde doloremque, officiis quae eaque quasi cum aliquam ab libero quidem
				temporibus dicta repellat voluptatem explicabo! Nobis sed quisquam ipsam
				quas animi molestiae eum aliquam totam soluta, itaque hic at quidem
				voluptatum cumque ad ducimus natus saepe fugiat rerum quae tempora
				praesentium. Facere atque iure doloribus ut veniam, odio, ipsam aut
				vitae, magni at reprehenderit explicabo tenetur? Minima, vero neque
				distinctio possimus eos atque odit rem asperiores in sapiente eum beatae
				repellendus delectus. Vitae at, possimus deleniti officia necessitatibus
				iure dolorem rem! Odio possimus ipsam, mollitia suscipit cum impedit,
				veritatis a expedita reiciendis animi illo pariatur? Error sequi
				accusantium, voluptatibus odio suscipit iure itaque obcaecati! Possimus
				cupiditate officia est omnis voluptatibus blanditiis, error obcaecati
				libero ipsam velit repellendus porro beatae. Dolor, itaque explicabo.
			</h2>
		</>
	);
}