"use client";

import "../styles/about.css";
import dynamic from "next/dynamic";
import Image from "next/image";
const DynamicNavController = dynamic(
	() => import("../components/NavController"),
	{
		ssr: false,
	}
);

export default function About() {
	return (
		<>
			<DynamicNavController filterValue={"filterValue"} filterFunc={() => ""} />

			<h1 className="about-title">About.</h1>
			<h2 className="about-text">
				ur tru image represents individual identity within sound, media and
				community - connecting an international nexus of artists, collectives
				and friends.
				<br></br>
				<br></br>
				We engage in fellow-feeling collaboration, developing our initiatives to
				shape the ever-evolving scene.
				<br></br>
				<br></br>A space for sincere expression, providing an ecosystem that our
				community can explore and enjoy.
				<br></br>
				<br></br>—<br></br>
				<br></br>
				TT Label, All Centre and Clout Farm
				<br></br>
				<br></br>
				<a href="mailto:sophia@urtruimage.com">sophia@urtruimage.com</a>
				<br></br>
				<br></br>
				<a href="mailto:rob@urtruimage.com">rob@urtruimage.com</a>
				<br></br>
				<br></br>
			</h2>
			{/* <nav className="socials-links">
				<a href="#">
					<Image
						height={80}
						width={80}
						src="/images/icons8-bandcamp-100.png"
						alt="bandcamp link"
					/>
				</a>
				<a href="#">
					<Image
						height={60}
						width={60}
						src="/images/icons8-instagram-100.png"
						alt="instagram link"
					/>
				</a>
				<a href="#">
					<Image
						height={60}
						width={60}
						src="/images/icons8-email-100.png"
						alt="email link"
					/>
				</a>
			</nav> */}
		</>
	);
}
