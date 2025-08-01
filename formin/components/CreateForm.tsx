"use client";
import { useRef, useState } from "react";
import { FieldType, Field } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormFields } from "@/lib/stores/formstore";
import { Button } from "@/components/ui/button";

export default function CreateForm() {
	const [question, setQuestion] = useState("");

	const [fieldType, setFieldType] = useState<FieldType>(FieldType.Default);
	const checkboxRef = useRef<HTMLInputElement>(null);

	const [fieldAdded, setFieldAdded] = useState(false);

	const { addField } = useFormFields((state) => state);

	function handleTypeSelect(value: FieldType) {
		setFieldType(value);
	}

	return (
		<div id='addfields' className='max-w-xl w-full'>
			<h1 className='text-xl font-bold mb-4'>Add Fields</h1>
			<div className='grid'>
				<div>
					<Label>Ask Question / Set Title</Label>
					<Input
						type='text'
						required
						value={question}
						placeholder='Ask question or set title for the field'
						onChange={(e) => setQuestion(e.target.value)}
					/>
				</div>
				<div>
					<Label>Answer Type</Label>
					<select
						value={fieldType}
						className='p-1 border-2 border-gray-200 rounded-sm w-full'
						onChange={(e) => handleTypeSelect(e.target.value as FieldType)}
					>
						{Object.values(FieldType).map((f, idx) => {
							return (
								<option key={crypto.randomUUID()} value={f.toLocaleString()}>
									{f.toLocaleString()}
								</option>
							);
						})}
					</select>
				</div>
				<div>
					<Label className='py-2'>
						Required
						<input
							ref={checkboxRef}
							type='checkbox'
							className='w-4 aspect-square align-middle'
						/>
					</Label>
				</div>
				<Button
					type='button'
					onClick={() => {
						addField({
							question: question,
							type: fieldType,
							required: checkboxRef.current?.checked || false,
						});

						setQuestion("");
						setFieldType(FieldType.Default);
						setFieldAdded(true);
						checkboxRef.current!.checked = false;
						setTimeout(() => {
							setFieldAdded(false);
						}, 700);
					}}
				>
					Add Field
				</Button>
			</div>
			{fieldAdded && <span className='w-full bg-green-300'>Added</span>}
		</div>
	);
}
