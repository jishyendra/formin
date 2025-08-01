export enum FieldType {
	Name = "Name",
	Email = "Email",
	Phone = "Phone",

	Numeric = "Numeric",
	Default = "Default (Text)",

	Country = "Country",
	Url = "Url",
	File = "File",
}

export type Field = {
	question: string;
	type: FieldType;
	required: boolean;
};
