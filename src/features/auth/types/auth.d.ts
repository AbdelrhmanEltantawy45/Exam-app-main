import { createPassword } from "../api/auth.client";
import { ConfirmEmailVerificationScheme } from "../schemas/confirm-email-verification.schema";
import { CreateAccountScheme } from "../schemas/create-account.schemes";
import { CreatePasswordScheme } from "../schemas/create-password.schemes";
import { ForgotPasswordScheme } from "../schemas/forgot-password.schemes";
import { LoginScheme } from "../schemas/login.schemes";
import { RegisterScheme } from "../schemas/register.schemes";
import { VerifyEmailScheme } from "../schemas/verify-email.schemes";
import { IUser } from "./user";
import { z } from "zod";


export type LoginFields = z.infer<typeof LoginScheme>
export type RegisterFields = z.infer<typeof RegisterScheme>
export type ForgotPasswordFields = z.infer<typeof ForgotPasswordScheme>
export type CreatePasswordFields = z.infer<typeof CreatePasswordScheme> & { token: string }
export type CreateAccountFields = z.infer<typeof CreateAccountScheme>
export type VerifyEmailFields = z.infer<typeof VerifyEmailScheme>
export type ConfirmEmailVerificationFields = z.infer<typeof ConfirmEmailVerificationScheme>


export interface ILoginResponse {
  token: string;
  user: IUser;
}



export interface IForgotPasswordResponse {
  message: string;
}

export interface ICreatePasswordResponse {
  message: string;
}



// export interface IUpdateProfileFields {
//   firstName: string;
//   lastName: string;
// }

// export type IUpdateProfileResponse = IUser

