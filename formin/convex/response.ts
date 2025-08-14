import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createResponse = mutation({
	args: {
		form_id: v.id("form"),
		response: v.string(),
	},
	handler: async (ctx, args) => {
		const response_id = await ctx.db.insert("responses", args);
		return response_id;
	},
});
