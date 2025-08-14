import { defineTable, defineSchema } from "convex/server";
import { v } from "convex/values";

export const formArgs = {
	title: v.string(),
	isPublic: v.boolean(),
	description: v.optional(v.string()),
	fields: v.array(
		v.object({
			type: v.string(), // (string,number,email,url)
			question: v.string(),
			required: v.boolean(),
			options: v.optional(v.array(v.string())),
		})
	),
};

export default defineSchema({
	form: defineTable({
		...formArgs,
	}),

	responses: defineTable({
		form_id: v.id("form"),
		response: v.array(v.string()),
	}),
});
