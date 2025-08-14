"use client";
import React from "react";
import Link from "next/link";
import {
	Sidebar,
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Forms() {
	return (
		<div>
			<SidebarProvider>
				<Sidebar className='p-4 px-2'>
					<h1 className='text-xl font-semibold'>formin</h1>
					<div className='grid h-full gap-4 items-stretch content-between'>
						<Link href='/forms/create'>Create new</Link>
						<div className='grid gap-4'>
							<Link href='/forms/'>View All Forms</Link>
							<Link href='/forms/analytics'>Analytics</Link>
						</div>
					</div>
				</Sidebar>
				<SidebarInset className='flex flex-col'>
					<SidebarTrigger className='fixed left-4'></SidebarTrigger>
					<h1 className='text-xl font-semibold'>Manage Forms</h1>
					<div className=''>Your top forms</div>
				</SidebarInset>
			</SidebarProvider>
		</div>
	);
}
