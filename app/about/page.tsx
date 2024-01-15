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
				ur tru image is a multidisciplinary collective overseeing three cultural
				initiatives: TT, All Centre and Clout Farm.
				<br></br>
				<br></br>
				Each platform serves their individual identity through sound, media and
				community - connecting an international nexus of artists and friends,
				with a easy approach to the sound and space.
				<br></br>
				<br></br>
				We develop our output to adapt to the ever-evolving scene; featuring
				artists whos sincere approach to sonic expression provides an ecosystem
				that our community can explore.
				<br></br>
				<br></br>
				<a href="mailto:sophia@urtruimage.com">sophia@urtruimage.com</a>
				<br></br>
				<br></br>
				<a href="mailto:rob@urtruimage.com">rob@urtruimage.com</a>
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
