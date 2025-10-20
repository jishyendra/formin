export type Field = {
	question: string;
	type: FieldType;
	required: boolean;
	options?: string[];
};

export enum FieldType {
	Name = "name",
	Email = "email",

	Phone = "phone",
	Numeric = "number",

	Default = "text)",

	Url = "url",
	File = "file",

	Country = "Country",
}
