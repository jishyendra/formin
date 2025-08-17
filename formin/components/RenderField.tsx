import { Field, FieldType } from "@/lib/types";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { z } from "zod";

import type { FieldValues, UseFormRegister } from "react-hook-form";
type RegisterProp = UseFormRegister<FieldValues>;

export const RenderField = (field: Field, register: RegisterProp) => {
	switch (field.type) {
		case FieldType.Email:
			return (
				<Input
					type='email'
					{...register(field.question, {
						// required: "Email is required",
						validate: (value) => {
							const res = z.email().safeParse(value);
							return res.success || res.error.message;
						},
					})}
					name={field.question}
					placeholder='Enter valid email'
					required={field.required}
				/>
			);
		case FieldType.Numeric:
			return (
				<Input
					type='number'
					{...register(field.question, {
						required: "This is required",
						validate: (value) => {
							const res = z.number().safeParse(value);
							return res.success || res.error.message;
						},
					})}
					name={field.question}
					placeholder={field.question}
					required={field.required}
				/>
			);
		case FieldType.Url:
			return (
				<Input
					type='url'
					{...register(field.question, {
						required: field.required,
						validate: (value) => {
							const res = z.url().safeParse(value);
							return res.success || res.error.message;
						},
					})}
					name={field.question}
					placeholder='Enter URL'
					required={field.required}
				/>
			);
		case FieldType.Phone:
			return (
				<Input
					type='tel'
					{...register(field.question, {
						required: field.required,
						validate: (value) => {
							const res = z.number().safeParse(value);
							return res.success || res.error.message;
						},
					})}
					name={field.question}
					placeholder='Phone Number'
					required={field.required}
				/>
			);
		case FieldType.File:
			return (
				<Input
					type='file'
					{...register(field.question, { required: field.required })}
					name={field.question}
					placeholder='Upload File'
					required={field.required}
				/>
			);
		default:
			return (
				<Input
					type='text'
					{...register(field.question, {
						required: field.required,
						validate: (value) => {
							const res = z.string().safeParse(value);
							return res.success || res.error.message;
						},
					})}
					name={field.question}
					placeholder={field.question}
					required={field.required}
				/>
			);
	}
};
