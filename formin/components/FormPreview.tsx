"use client";
import { Field, FieldType } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useFormFields } from "@/lib/stores/formstore";
import { cn } from "@/lib/utils";

export default function FormPreview({ className }: { className?: string }) {
	const fields = useFormFields((state) => state.fields);
	return (
		<div className={cn(className)}>
			<h2 className='text-xl font-bold mb-4'>Form Preview</h2>
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
							{renderField(field)}
						</div>
					);
				})}{" "}
				<Button
					type='button'
					variant={"secondary"}
					onClick={function () {
						return;
					}}
				>
					Submit
				</Button>
			</form>
		</div>
	);
}

export const renderField = (field: Field) => {
	switch (field.type) {
		case FieldType.Email:
			return (
				<Input
					type='email'
					placeholder={field.question}
					required={field.required}
				/>
			);
		case FieldType.Numeric:
			return (
				<Input
					type='number'
					placeholder={field.question}
					required={field.required}
				/>
			);
		case FieldType.Phone:
			return (
				<Input
					type='tel'
					placeholder='Phone Number'
					required={field.required}
				/>
			);
		case FieldType.File:
			return (
				<Input
					type='file'
					placeholder='Upload File'
					required={field.required}
				/>
			);
		default:
			return (
				<Input
					type='text'
					placeholder={field.question}
					required={field.required}
				/>
			);
	}
};
