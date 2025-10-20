"use client";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useFormDescription } from "@/lib/stores/formstore";
import { Button } from "./ui/button";

export function FormDescription() {
	const { title, description, setTitle, setDescription } = useFormDescription(
		(state) => state
	);

	return (
		<>
			<div id='description' className='grid gap-2 mt-2 w-full max-w-xl'>
				<h2 className='text-xl font-bold mb-4'>Describe form</h2>
				<form>
					<div className='grid gap-2'>
						<Label className='block'>
							Form title
							<span className='text-red-800 align-top italic px-1'>*</span>
							<Input
								className='p-1 border rounded-sm w-full'
								type='text'
								required
								placeholder='Enter title'
								onChange={(e) => setTitle(e.target.value)}
								value={title}
							></Input>
						</Label>
						<Label className='block'>
							Form Description
							<Textarea
								className='p-1 border border-gray-300 rounded-sm w-full'
								placeholder='Add description'
								onChange={(e) => setDescription(e.target.value)}
								value={description}
							></Textarea>
						</Label>
						<Label className='block'>
							Add Logo <i>(Optional)</i>
							<Button variant={"outline"}>
								<Input
									type='file'
									className=''
									accept='image/*'
									placeholder='Add logo'
								></Input>
							</Button>
						</Label>
					</div>
				</form>
			</div>
		</>
	);
}
