import { z } from "zod";


export const LoginScheme = z.object({
    username: z.string('invalid username').min(1, 'Your username is required'),
    password: z.string('invalid password').min(4, 'Your password is required'),
}).strict();