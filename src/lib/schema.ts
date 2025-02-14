import { z } from "zod";

export const schema = z.object({
  fullName: z.string(),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  avatarUrl: z.string(),
  request: z.string().optional(),
});
