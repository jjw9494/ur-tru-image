import type { Metadata } from "next";
import "./globals.css";
import "./styles/search.css";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const myFont = localFont({
	src: "./fonts/NimbusSanL-Reg.woff",
	display: "swap",
});

export const metadata: Metadata = {
	title: "TT",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={myFont.className}>{children}</body>
		</html>
	);
}
 