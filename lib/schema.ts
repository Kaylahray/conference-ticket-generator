import { z } from 'zod'

export const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  avatarUrl: z.string().url("Invalid URL"),
});