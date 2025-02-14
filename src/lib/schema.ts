import { z } from "zod";

export const schema = z.object({
  fullName: z.string().min(10, "Full name is required"),
  email: z.string().email("Invalid email address"),
  avatarUrl: z.string(),
  request: z.string().optional(),
});
