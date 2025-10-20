"use client";
import { Button } from "@/components/ui/button";
import { useFormFields, useFormDescription } from "@/lib/stores/formstore";
import { cn } from "@/lib/utils";
import { RenderField } from "./RenderField";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";

export default function FormPreview({
	className,
	handleCreateForm,
}: {
	className?: string;
	handleCreateForm: () => void;
}) {
	const fields = useFormFields((state) => state.fields);
	const { title, description } = useFormDescription((state) => state);
	const { register } = useForm();
	return (
		<div className={cn(className,"p-2")}>
			<span className="italic mb-2 bg-accent">Form Preview</span>
			<h2 className='text-xl font-bold mb-4'>{title}</h2>
			<span>{description}</span>
			<form
				onSubmit={function () {
					return;
				}}
				className='max-w-2xl p-3 grid gap-3 border-2 rounded-sm mx-auto'
			>
				{fields.map((field) => {
					return (
						<div key={crypto.randomUUID()}>
							<Label>{field.question}</Label>
							{RenderField(field, register)}
						</div>
					);
				})}
			</form>
			<div className='text-center mt-5'>
				<Button
					onClick={handleCreateForm}
					className='bg-blue-600 text-white hover:bg-blue-700 transition-colors'
					size='lg'
					disabled={false}
				>
					Submit
				</Button>
			</div>
		</div>
	);
}
