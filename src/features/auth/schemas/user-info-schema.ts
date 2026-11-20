import { z } from "zod";


export const userInfoSchema = z
  .object({
    username: z.string("Invalid username").nonempty("Username is required"),
    email: z.string().email("Invalid email format"),
    firstName: z
      .string("Invalid first name")
      .nonempty("First name is required"),
    lastName: z.string("Invalid last name").nonempty("Last name is required"),
    phone: z.string("Invalid phone number").optional(),
    profilePhoto: z.string("Invalid profile Phote").optional(),
  })
  .strict();