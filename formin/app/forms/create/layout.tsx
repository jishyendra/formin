"use client";
import React from "react";
import FormPreview from "@/components/FormPreview";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex w-full h-full bg-gray-50'>
			<div className='overflow-hidden flex-3'>{children}</div>
			<div className='flex-2'>
				<FormPreview
					handleCreateForm={() => console.log("Side preview form submit")}
				/>
			</div>
		</div>
	);
}
