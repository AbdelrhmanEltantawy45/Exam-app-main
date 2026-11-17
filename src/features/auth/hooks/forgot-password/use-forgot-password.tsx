import { useMutation } from "@tanstack/react-query";
import React, { use } from "react";
import { ForgotPasswordFields } from "../../types/auth";
import { signIn } from "next-auth/react";
import { forgotPassword } from "../../api/auth.client";
import { useRouter } from "next/navigation";

export default function UseForgotPassword() {
  const router = useRouter();
  return useMutation({
    mutationFn: async (fields: ForgotPasswordFields) => {
      const response = await forgotPassword(fields);
    

      if (!response.status)
        throw new Error(response?.message || "Something went wrong");
      return response;
    },


    onSuccess: (_,variables) => {
      const callbackUrl =
        new URLSearchParams(location.search).get("callbackUrl") ||
        `/forgot-password/verify-otp?email=${variables.email}`;

      router.push(callbackUrl);
    },
  });
}
