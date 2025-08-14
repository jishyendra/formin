"use client";
import { useState } from "react";
import { User, FileText, BarChart3, Mail } from "lucide-react";
import { FormDescription } from "@/components/FormDescription";
import { Button } from "@/components/ui/button";
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
import { useFormDescription, useFormFields } from "@/lib/stores/formstore";

import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function FormEditor() {
	const { title, description } = useFormDescription();
	const { fields } = useFormFields();
	const [activeTab, setActiveTab] = useState(1);
	const createForm = useMutation(api.form.createForm);

	async function handleCreateForm() {
		const formArgs = { title, isPublic: true, description, fields };
		const form_id = await createForm(formArgs);
		if (!form_id) {
			console.error("Failed to create form");
			return;
		}
		console.log("Form created with ID:", form_id);
	}

	const tabs = [
		{
			id: 1,
			label: "Form Description",
			icon: BarChart3,
			content: <FormDescription />,
		},
		{
			id: 2,
			label: "Add Fields",
			icon: User,
			content: <FormEntries />,
		},
		{
			id: 3,
			label: "Preview",
			icon: FileText,
			content: <FormPreview />,
		},
		{
			id: 4,
			label: "Share",
			icon: Mail,
			content: (
				<div className='flex items-center justify-center h-full'>
					<div className='text-center'>
						<h1 className='text-6xl font-bold text-gray-900 mb-4'>5</h1>
						<Button
							onClick={handleCreateForm}
							className='bg-blue-600 text-white hover:bg-blue-700 transition-colors'
							size='lg'
							disabled={false}
						>
							Publish
						</Button>
					</div>
				</div>
			),
		},
	];
	const activeTabData = tabs.find((tab) => tab.id === activeTab);
	return (
		<div className='sm:flex h-screen bg-gray-50'>
			<SidebarProvider>
				<SidebarTrigger className='absolute' />
				<Sidebar>
					<SidebarHeader>
						<div className='flex items-center justify-between p-3 border-b'>
							<h2 className='text-lg font-semibold'>Form Editor</h2>
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
					<SidebarTrigger />
					{/* <header className='flex shrink-0 items-center gap-2 border-b'>
						<div className='flex items-center gap-2'></div>
					</header> */}
					<div className='p-2'>
						{activeTabData?.content}
						<Button
							className='w-full p-4 max-w-xl mx-auto bg-blue-500 text-white hover:bg-blue-700 transition-colors mt-1'
							onClick={(e) =>
								setActiveTab((prev) => (prev < tabs.length ? prev + 1 : prev))
							}
						>
							Next
						</Button>
					</div>
				</SidebarInset>
			</SidebarProvider>
		</div>
	);
}
