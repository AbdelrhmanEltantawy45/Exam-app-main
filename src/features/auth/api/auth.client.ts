import { HEADERS } from "@/shared/constants/api.constants";
import { ConfirmEmailVerificationFields, CreateAccountFields, CreatePasswordFields, ForgotPasswordFields, VerifyEmailFields } from "../types/auth";


export const forgotPassword = async (
  forgotPasswordFields: ForgotPasswordFields
) => {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/auth/forgot-password`,
    {
      method: "POST",

      headers: {
         ...HEADERS.jsonBody
      },

      body: JSON.stringify({
        ...forgotPasswordFields,

        redirectUrl:
          `${process.env.NEXT_PUBLIC_APP_URL}/forgot-password/create-password`
      }),
    }
  );

  const payload = await response.json();

  return payload;
};




export const createPassword = async (fields : CreatePasswordFields & {token : string | null}) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/auth/reset-password`,
        {
          method: "POST",
          headers: {
            ...HEADERS.jsonBody
          },
          body: JSON.stringify({ ...fields }),
        }

    )
    const payload = await response.json();
    return payload;
}


export const sendEmailVerification = async (fields: CreateAccountFields) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/auth/send-email-verification`,
        {
          method: "POST",
          headers: {
            ...HEADERS.jsonBody
          },
          body: JSON.stringify({ ...fields }),
        }

    )
    const payload = await response.json();
    return payload;
}

export const ConfirmEmailVerification = async (fields: ConfirmEmailVerificationFields) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/auth/confirm-email-verification`,
        {
          method: "POST",
          headers: {
            ...HEADERS.jsonBody
          },
          body: JSON.stringify({ ...fields }),
        }

    )
    const payload = await response.json();
    return payload;
}