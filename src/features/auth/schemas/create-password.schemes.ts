import { z } from "zod";


export const CreatePasswordScheme = z.object({
   newPassword: z.string('invalid password').nonempty('Your new password is required'),
   confirmPassword: z.string('invalid password').nonempty('Please confirm your new password'),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
   

}).strict();