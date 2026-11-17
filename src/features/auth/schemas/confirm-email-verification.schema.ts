

import { z } from "zod";

export const ConfirmEmailVerificationScheme = z.object({
  email: z
    .string()
    .nonempty("email is required")
    .email("invalid email"),
  code: z
    .string()
    .nonempty("otp is required"),
}).strict();