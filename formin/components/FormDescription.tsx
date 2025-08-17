"use client";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useFormDescription } from "@/lib/stores/formstore";
import { Button } from "./ui/button";
import { z } from "zod";

export function FormDescription() {

	const { title, description, setTitle, setDescription } = useFormDescription(
		(state) => state
	);

	return (
		<>
			<div id='description' className='grid gap-2 mt-2 w-full max-w-xl'>
				<h2 className='text-xl font-bold mb-4'>Describe form</h2>
				<div className='grid gap-2'>
					<Label className='block'>
						Form title
						<Input
							className='p-1 border border-gray-300 rounded-sm w-full'
							type='text'
							placeholder='Enter title'
							onChange={(e) => setTitle(e.target.value)}
							value={title}
						></Input>
					</Label>
					<Label className='block'>
						Form Description
						<Input
							className='p-1 border border-gray-300 rounded-sm w-full'
							type='text'
							placeholder='Add description'
							onChange={(e) => setDescription(e.target.value)}
							value={description}
						></Input>
					</Label>
					<Label className='block'>
						Add Logo <i>(Optional)</i>
						<Button variant={"outline"}>
							<Input
								type='file'
								className='p-1 border border-gray-300 rounded-sm w-full'
								accept='image/*'
								placeholder='Add logo'
							></Input>
						</Button>
					</Label>
				</div>
			</div>
		</>
	);
}
