"use client";
import { useState } from "react";
import { User, FileText, BarChart3, Mail } from "lucide-react";
import { FormDescription } from "@/components/FormDescription";
import {
	Sidebar,
	SidebarContent,
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
	SidebarRail,
	SidebarHeader,
} from "@/components/ui/sidebar";
import FormEntries from "@/components/FormEntries";
import FormPreview from "@/components/FormPreview";

export default function FormEditor() {
	const [activeTab, setActiveTab] = useState("tab1");
	const [preview, setPreview] = useState(false);
	const tabs = [
		{
			id: "tab1",
			label: "Form Description",
			icon: BarChart3,
			content: <FormDescription />,
		},
		{
			id: "tab2",
			label: "Add Fields",
			icon: User,
			content: <FormEntries />,
		},
		{
			id: "tab3",
			label: "Preview",
			icon: FileText,
			content: <FormPreview />,
		},
		{
			id: "tab4",
			label: "Share",
			icon: Mail,
			content: (
				<div className='flex items-center justify-center h-full'>
					<div className='text-center'>
						<h1 className='text-6xl font-bold text-gray-900 mb-4'>5</h1>
						Share Tab
					</div>
				</div>
			),
		},
	];
	const activeTabData = tabs.find((tab) => tab.id === activeTab);
	return (
		<div className='sm:flex h-screen bg-gray-50'>
			<SidebarProvider>
				<Sidebar>
					<SidebarHeader>
						<div className='flex items-center justify-between p-3 border-b'>
							<h2 className='text-lg font-semibold'>Form Editor</h2>
							<SidebarTrigger />
						</div>
					</SidebarHeader>
					<SidebarContent>
						{tabs.map((tab) => {
							const Icon = tab.icon;
							return (
								<button
									key={tab.id}
									onClick={() => setActiveTab(tab.id)}
									className={`w-full flex items-center px-3 py-2 text-left transition-colors ${
										activeTab === tab.id
											? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
											: "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
									}`}
								>
									<Icon
										className={`w-5 h-5 mr-3 ${
											activeTab === tab.id ? "text-blue-700" : "text-gray-400"
										}`}
									/>
									<span className='font-medium'>{tab.label}</span>
								</button>
							);
						})}
					</SidebarContent>
					<SidebarRail />
				</Sidebar>

				<SidebarInset>
					<header className='flex shrink-0 items-center gap-2 border-b'>
						<div className='flex items-center gap-2'>
							<SidebarTrigger />
						</div>
					</header>
					<div className='p-2'>{activeTabData?.content}</div>
				</SidebarInset>
			</SidebarProvider>
		</div>
	);
}
