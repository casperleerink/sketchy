import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getProjects = query({
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect();
  },
});
export const getProject = query({
  args: { id: v.id("projects") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("id"), args.id))
      .first();
  },
});

export const createProject = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const newProjectId = await ctx.db.insert("projects", { name: args.name });
    return newProjectId;
  },
});
