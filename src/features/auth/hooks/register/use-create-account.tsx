import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { CreateAccountFields } from "../../types/auth";
import { sendEmailVerification } from "../../api/auth.client";

export default function UseCreateAccount() {
  const router = useRouter();
  return useMutation({
    mutationFn: async (fields: CreateAccountFields) => {
      const response = await sendEmailVerification(fields);
      if (!response.status)
        throw new Error(response?.message || "Something went wrong");
      return response;
    },

    onSuccess: (_, variables) => {
      if (variables) {
        const raw = new URLSearchParams(location.search).get("callbackUrl");
        const callbackUrl =
          raw && raw.startsWith("/") && !raw.startsWith("//")
            ? raw
            : `/register?step=verify-otp&email=${variables.email}`;

        router.push(callbackUrl);
      }
    },
  });
}
