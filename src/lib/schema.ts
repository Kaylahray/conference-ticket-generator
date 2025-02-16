import { z } from "zod";

export const schema = z.object({
  fullName: z.string().regex(/^[a-zA-Z\s]+$/, "Name should only contain alphabetic characters and spaces"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  avatarUrl: z.string(),
  request: z.string().optional(),
});
