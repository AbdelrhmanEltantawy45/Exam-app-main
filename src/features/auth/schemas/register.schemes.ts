import { email, z } from "zod";


export const RegisterScheme = z.object({
    username: z.string('invalid username').nonempty('Your username is required'),
    email: z.string('invalid email').nonempty('Your email is required'),
    password: z.string('invalid password').nonempty('Your password is required'),
    confirmPassword: z.string('invalid confirm password').nonempty('Please confirm your password'),
    firstName: z.string('invalid first name').nonempty('Your first name is required'),
    lastName: z.string('invalid last name').nonempty('Your last name is required'),
    phone: z.string('invalid phone').nonempty('Your phone number is required'),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
},
).strict();