import React from "react";
import Link from "next/link";

export default function Forms() {
	return (
		<>
			<h1>Manage Forms</h1>
			<div className='flex justify-center gap-4 *:bg-secondary *:p-3 *:rounded-sm'>
				<Link href='/forms/new'>Create new</Link>
				<Link href='/forms/'>View All Forms</Link>
				<Link href='/forms/analytics'>Analytics</Link>
			</div>
		</>
	);
}
