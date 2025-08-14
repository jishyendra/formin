import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { formArgs } from "./schema";

export const createForm = mutation({
	args: formArgs,
	handler: async (ctx, args) => {
		const form_id = await ctx.db.insert("form", args);
		return form_id;
	},
});

export const updateForm = mutation({
	args: { id: v.id("form"), formAgs: v.object(formArgs) },
	handler: async (ctx, args) => {
		await ctx.db.patch(args.id, args.formAgs);
	},
});

export const getForm = query({
	args: { id: v.string() },
	handler: async (ctx, args) => {
		const form = await ctx.db
			.query("form")
			.filter((q) => q.eq(q.field("_id"), args.id))
			.collect();
		return form[0];
	},
});
