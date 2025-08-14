"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useParams } from "next/navigation";

import { useQuery, useMutation } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { Separator } from "@/components/ui/separator";
import { Field } from "@/lib/types";
import { renderField } from "@/components/FormPreview";

export default function Form() {
	const { form_id } = useParams();
	const createResponse = useMutation(api.response.createResponse);
	if (!form_id) {
		return <div>No form found id</div>;
	}
	const form = useQuery(api.form.getForm, { id: form_id as Id<"form"> });
	console.log(form);

	if (!form) {
		return <div>No form found</div>;
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const res = await createResponse({
			form_id: form_id as Id<"form">,
			response: Array.from(formData.values()) as string[],
		});
	}

	return (
		<div className='max-w-2xl w-full flex items-center justify-around mx-auto p-4 rounded-lg shadow-xl *:w-full'>
			<div>
				{/* <h2 className='text-xl font-semibold'>Submit Response</h2> */}
				<h2 className='text-xl font-semibold'>{form.title}</h2>
				<Label>Form id: {form_id}</Label>
				<p className=''>{form.description}</p>
				<Separator></Separator>
				<form className='pl-2' onSubmit={(e) => handleSubmit(e)}>
					{form.fields.map((field) => {
						return (
							<div key={crypto.randomUUID()}>
								<Label>{field.question}</Label>
								{renderField(field as Field)}
							</div>
						);
					})}
					<Button type='submit'>Submit</Button>
				</form>
			</div>
		</div>
	);
}
