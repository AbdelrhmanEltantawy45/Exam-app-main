// features/auth/hooks/register/use-resend-code.ts
import { useMutation } from "@tanstack/react-query";
import { sendEmailVerification } from "@/features/auth/api/auth.client"; // عدّل المسار

export default function useResendCode() {
  return useMutation({
    mutationFn: (email: string) => sendEmailVerification({ email }),
  });
}