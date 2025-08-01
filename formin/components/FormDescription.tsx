"use client";
import { Label } from "./ui/label";
import { useFormDescription } from "@/lib/stores/formstore";
import { Button } from "./ui/button";

export function FormDescription() {
	const { title, setTitle } = useFormDescription((state) => state);
	return (
		<>
			<div id='description' className='grid gap-2 mt-2 w-full max-w-xl'>
				<h2 className='text-xl font-bold mb-4'>Describe form</h2>
				<div className='grid gap-2'>
					<Label className='block'>
						Form title
						<input
							className='p-1 border border-gray-300 rounded-sm w-full'
							type='text'
							placeholder='Enter the form title'
							onChange={(e) => setTitle(e.target.value)}
							value={title}
						></input>
					</Label>
					<Label className='block'>
						Add Logo <i>(Optional)</i>
						<Button variant={"outline"}>
							<input
								type='file'
								className='w-full h-full'
								accept='image/*'
								placeholder='Add logo'
							></input>
						</Button>
					</Label>
				</div>
				<Button type='button'>Save</Button>
			</div>
		</>
	);
}
