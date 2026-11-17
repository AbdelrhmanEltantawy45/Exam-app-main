import { z } from "zod";

export const CreateAccountScheme = z.object({
  email: z
    .string()
    .nonempty("email is required")
    .email("invalid email"),
}).strict();