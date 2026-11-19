"use client"
import { useMutation } from "@tanstack/react-query";
import { createPassword } from "../../api/auth.client";
import { CreatePasswordFields } from "../../types/auth";
import { useRouter } from "next/navigation";

export default function UseCreatePassword() {
    const router = useRouter();
  return useMutation({
    mutationFn: async (fields: CreatePasswordFields) => {
      const response = await createPassword(fields);
      if (!response.status)
        throw new Error(response?.message || "Something went wrong");
      return response;
    },

    onSuccess: () => {
      const raw = new URLSearchParams(location.search).get("callbackUrl");
const callbackUrl = raw && raw.startsWith("/") && !raw.startsWith("//") ? raw : "/login";

      router.push(callbackUrl);
  }});
}
