import React from "react";
import styles from "./styles/page.module.css";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
	return (
		<div className={cn(styles.page, "flex gap-4 *:hover:bg-red-100 *:p-2")}>
			<Link href='/forms'>Dasbboard</Link>
			<Link href='forms/create'>Create New Form</Link>
			<Link href='forms/analytics'>View Analytics</Link>
		</div>
	);
}
