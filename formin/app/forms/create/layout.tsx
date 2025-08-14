import React from "react";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex flex-col h-full bg-gray-50'>
			<div className='flex-1 overflow-hidden'>{children}</div>
		</div>
	);
}
