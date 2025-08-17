"use client";
import React, { useEffect, useRef, useState } from "react";
import { useFormFields } from "@/lib/stores/formstore";
import { X, PlusIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { Field } from "@/lib/types";
import { Button } from "./ui/button";
import CreateForm from "./CreateForm";

export default function FormEntries() {
	const { fields } = useFormFields((state) => state);
	const [isOpen, setIsOpen] = useState(false);
	const dialogRef = useRef<HTMLDialogElement>(null);

	function handleDialogOpen() {
		setIsOpen(true);
	}

	function handleDialogClose() {
		setIsOpen(false);
	}

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (isOpen) {
			dialog.showModal();
		} else {
			dialog.close();
		}
	}, [isOpen]);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		const handleClose = () => {
			setIsOpen(false);
		};

		const handleCancel = (e: Event) => {
			e.preventDefault();
			setIsOpen(false);
		};

		dialog.addEventListener("close", handleClose);
		dialog.addEventListener("cancel", handleCancel);

		return () => {
			dialog.removeEventListener("close", handleClose);
			dialog.removeEventListener("cancel", handleCancel);
		};
	}, []);

	return (
		<>
			<div className='flex justify-between items-center pb-1 mb-4'>
				<span>Add fields here</span>
				<div className='grid mt-2'>
					<Button className='ml-auto px-2' onClick={handleDialogOpen}>
						<PlusIcon />
						New
					</Button>
				</div>
			</div>
			{/* <Separator className='h-2 mb-2'></Separator> */}
			<dialog
				className='m-auto w-full max-w-md aspect-square rounded-lg overflow-hidden'
				ref={dialogRef}
			>
				<div className='relative w-full h-full p-4'>
					<button
						onClick={handleDialogClose}
						className='absolute right-4 top-4'
					>
						<X />
					</button>
					<CreateForm />
				</div>
			</dialog>
			<div>
				{fields.length > 0 ? (
					fields.map((field, idx) => (
						<FieldEntry key={crypto.randomUUID()} idx={idx} field={field} />
					))
				) : (
					<div className='h-48 flex justify-center items-center'>
						No fields added
						{/* Add some form questions... */}
					</div>
				)}
			</div>
		</>
	);
}

export function FieldEntry({ field, idx }: { field: Field; idx: number }) {
	const removeField = useFormFields((state) => state.removeField);
	return (
		<div className='border border-gray-300 rounded-md p-2 mb-2 flex justify-between items-center'>
			<div>
				<h3 className='text-lg font-semibold'>{field.question}</h3>
				<p className='text-sm text-gray-600'>Type: {field.type}</p>
				<p className='text-sm text-gray-600'>
					Required: {field.required ? "Yes" : "No"}
				</p>
			</div>
			<Button onClick={() => removeField(idx)} variant={"outline"}>
				Remove
			</Button>
		</div>
	);
}
