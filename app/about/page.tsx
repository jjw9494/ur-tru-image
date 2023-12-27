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
				ur tru image. is a multidisciplinary collective overseeing three
				cultural initiatives: TT, All Centre and Clout Farm. Each platform
				serves their individual identity through sound, media and community -
				connecting an international nexus of artists + hangalongs, with a
				warm-style approach to the redefinition of experimental sound and
				emerging space. We develop our platforms to adapt to the ever-evolving
				scene; featuring artists that originate themselves in sonic expression
				and reflect tru to their vision. ur tru image. provides outlets for
				fellow- feeling conversations amongst our cultivated community,
				exploring the environment we find ourselves in and what’s next to come.
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
