import { z } from "zod";

export const VerifyEmailScheme = z.object({
  email: z
    .string()
    .nonempty("email is required")
    .email("invalid email"),
}).strict();