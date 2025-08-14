import { create } from "zustand";
import type { Field } from "@/lib/types";

type FormStore = {
	title: string;
	description?: string;
};

type FormDescActions = {
	setTitle: (title: FormStore["title"]) => void;
	setDescription: (description: string) => void;
};

export const useFormDescription = create<FormStore & FormDescActions>(
	(set) => ({
		title: "",
		description: "",
		setTitle: (title) =>
			set(() => ({
				title,
			})),
		setDescription: (description: string) => {
			set(() => ({
				description,
			}));
		},
	})
);

type FormFields = {
	fields: Field[];
};
type FormFieldsActions = {
	addField: (field: Field) => void;
	removeField: (idx: number) => void;
};
export const useFormFields = create<FormFields & FormFieldsActions>((set) => ({
	fields: [],
	addField: (field: Field) =>
		set((state) => ({
			fields: state.fields.concat(field),
		})),
	removeField: (idx: number) =>
		set((state) => ({
			fields: state.fields.filter((_, index) => index !== idx),
		})),
}));

export const clearFormStore = () => {};
