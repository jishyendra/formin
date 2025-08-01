"use client";
import * as React from "react";
import Link from "next/link";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";

const data = {
	navMain: [
		{
			title: "Form Description",
			url: "/forms/new#description",
		},
		{
			title: "Manage Fields",
			url: "/forms/new#addfields",
		},
		{
			title: "Preview",
			url: "/forms/preview",
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size='lg' asChild>
							<Link href='/forms'>
								<div className='pl-4 text-xl bold flex flex-col gap-0.5 leading-none'>
									<span className='font-medium'>Forms</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						{data.navMain.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild>
									<a href={item.url} className='font-medium'>
										{item.title}
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}
