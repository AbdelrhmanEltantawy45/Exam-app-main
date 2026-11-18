import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { CreateAccountFields } from "../../types/auth";
import { createAccount } from "../../api/auth.client";

export default function UseCreateAccount() {
  const router = useRouter();
  return useMutation({
    mutationFn: async (fields: CreateAccountFields) => {
      const response = await createAccount(fields);
      if (!response.status)
        throw new Error(response?.message || "Something went wrong");
      return response;
    },

    onSuccess: (_, variables) => {
      if (variables) {
        const callbackUrl =
          new URLSearchParams(location.search).get("callbackUrl") ||
          `/register?step=verify-email&email=${variables.email}`;

        router.push(callbackUrl);
      }
    },
  });
}
