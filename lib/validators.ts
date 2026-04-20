import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, { message: "Required" }).max(120),
  email: z.string().email({ message: "Invalid email" }).max(240),
  projectType: z.enum(["fullstack", "ai", "consulting", "other"]),
  budget: z.enum(["under10k", "10k_30k", "30k_100k", "over100k"]),
  message: z.string().min(10, { message: "Too short" }).max(4000),
});

export type ContactInput = z.infer<typeof contactSchema>;
