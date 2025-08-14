export enum FieldType {
	Name = "Name",
	Email = "Email",

	Phone = "Phone",
	Numeric = "Numeric",

	Default = "Default (Text)",

	Url = "Url",
	File = "File",

	Country = "Country",
}

export type Field = {
	question: string;
	type: FieldType;
	required: boolean;
	options?: string[];
};
