"use client";
import { useState } from "react";
import { Save, View, Plus, Notebook, FormInput, Share } from "lucide-react";
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
			icon: FormInput,
			content: <FormDescription />,
		},
		{
			id: 2,
			label: "Add Fields",
			icon: Plus,
			content: <FormEntries />,
		},
		{
			id: 3,
			label: "Preview",
			icon: View,
			content: <FormPreview handleCreateForm={handleCreateForm} />,
		},
	];
	const activeTabData = tabs.find((tab) => tab.id === activeTab);
	return (
		<div className='sm:flex h-screen bg-gray-50'>
			<SidebarProvider>
				<Sidebar>
					<SidebarHeader>
						<div className='p-3 relative  border-b'>
							<SidebarTrigger className='absolute right-4' />
							<h1 className='text-xl font-bold mb-4'>formin</h1>
							<h2 className='text-md font-semibold'>New Form</h2>
						</div>
					</SidebarHeader>
					<SidebarContent className='ml-2'>
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
					<div className='p-2'>
						{activeTabData?.content}
						{activeTab < tabs.length && (
							<Button
								className='w-full p-4 max-w-xl mx-auto bg-blue-500 text-white hover:bg-blue-700 transition-colors mt-1'
								onClick={(e) =>
									setActiveTab((prev) => (prev < tabs.length ? prev + 1 : prev))
								}
							>
								Next
							</Button>
						)}
					</div>
				</SidebarInset>
			</SidebarProvider>
		</div>
	);
}
