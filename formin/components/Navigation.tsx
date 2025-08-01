"use client";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className='flex font-bold p-2 gap-4 w-full'>
			<Link href='/forms'>Forms</Link>
		</nav>
	);
}
