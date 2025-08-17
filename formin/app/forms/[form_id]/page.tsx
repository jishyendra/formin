"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Error } from "@/components/ui/errors";
import { useParams } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { RenderField } from "@/components/RenderField";
import type { Field } from "@/lib/types";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { useQuery, useMutation } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";

export default function Form() {
	const { form_id } = useParams();
	if (!form_id) {
		return <div>No form found id</div>;
	}

	const {
		register,
		formState: { errors },
	} = useForm({ mode: "onSubmit" });

	const createResponse = useMutation(api.response.createResponse);
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
		console.log("response created: ", res);
	}
	return (
		<div className='max-w-2xl w-full flex items-center justify-around mx-auto p-4 rounded-lg shadow-xl *:w-full'>
			<div>
				<h2 className='text-xl font-semibold'>{form.title}</h2>
				<span className='italic ml-1'>{form.description}</span>
				<Separator className='my-1'></Separator>
				<form className='pl-2 mt-2' onSubmit={(e) => handleSubmit(e)}>
					<span className='italic'>Fill the following</span>
					{form.fields.map((field) => {
						return (
							<div key={crypto.randomUUID()}>
								<Label>
									{`${field.question}`}{" "}
									{field.required ? (
										<span className='text-red-800 align-top italic px-1'>
											*
										</span>
									) : (
										<span className='italic text-sm'>(Optional)</span>
									)}
								</Label>
								{RenderField(field as Field, register)}
								{errors[field.question] && (
									<Error error={errors[field.question]?.message || " "} />
								)}
							</div>
						);
					})}
					<Button type='submit'>Submit</Button>
				</form>
			</div>
		</div>
	);
}
