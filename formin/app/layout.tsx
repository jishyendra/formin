import type { Metadata } from "next";
import "./styles/globals.css";
import Navbar from "@/components/Navigation";
import { Fira_Sans } from "next/font/google";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

const firaSans = Fira_Sans({
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
	fallback: ["mono", "sans-serif"],
	adjustFontFallback: true,
});

export const metadata: Metadata = {
	title: "formin",
	description: "Create futuristic forms",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${firaSans}`}>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
