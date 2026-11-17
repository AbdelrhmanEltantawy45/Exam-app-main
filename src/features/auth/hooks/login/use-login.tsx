import { useMutation } from "@tanstack/react-query";
import { LoginFields } from "../types/auth";
import { signIn } from "next-auth/react";

export default function useLogin() {
  return useMutation({
    mutationFn: async (fields: LoginFields) => {
      const response = await signIn("credentials", {
        username: fields.username,
        password: fields.password,
        redirect: false,
      });

      if (!response?.ok)
        throw new Error(response?.error || "something went wrong");

      return response;
    },

    onSuccess: () => {
            
const raw = new URLSearchParams(location.search).get("callbackUrl");
const callbackUrl = raw && raw.startsWith("/") && !raw.startsWith("//") ? raw : "/";

      location.href = callbackUrl;
    },
  });
}
