"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import FormPreview from "@/components/FormPreview";
import { RenderField } from "@/components/RenderField";

interface Field {
	name: string;
	type: string;
	prompt: string;
	required: boolean;
}

interface Form {
	name: string;
	description: string;
	fields_json: Field[];
}

export default function CreatePage() {
	const [query, setQuery] = useState("");
	const [form, setForm] = useState<Form>();

	async function handleQuerySubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		await fetch("/api/form/create", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ query }),
		})
			.then(async (res) => {
				const form = await res.json();
				setForm(form);
			})
			.catch((err) => {
				console.log("Error fetching form:", err);
			});
	}

	return (
		<>
			<form onSubmit={handleQuerySubmit}>
				<div>Create New AI</div>
				<Textarea
					onChange={(e) => setQuery(e.target.value)}
					value={query}
					placeholder='Ask AI to generate form...'
					className='mb-4'
				/>
				<Button type='submit'>Generate</Button>
			</form>
		</>
	);
}
