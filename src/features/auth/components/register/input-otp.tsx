"use client";

import { useSearchParams } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS } from "input-otp";

import { ConfirmEmailVerificationScheme } from "@/features/auth/schemas/confirm-email-verification.schema";
import { ConfirmEmailVerificationFields } from "@/features/auth/types/auth";
import UseVerifyEmail from "@/features/auth/hooks/register/use-confirm-email";
import useResendCode from "@/features/auth/hooks/register/use-resend-code";

import { Button } from "@/shared/components/ui/button";
import { Field, FieldError } from "@/shared/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/shared/components/ui/input-otp";
import useResendTimer from "@/features/auth/hooks/register/use-reset-timer";
import { Loader2 } from "lucide-react";

export default function InputOtp() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";

  // Verify mutation
  const { mutate: confirmVerifyEmail, error, isPending } = UseVerifyEmail();

  // Resend mutation
  const {
    mutate: resend,
    isPending: isResending,
    error: resendError,
  } = useResendCode();

  // Resend timer
  const { secondsLeft, canResend, start, reset } = useResendTimer(
    `resend-timer:${email}`,
  );

  // Form
  const form = useForm<ConfirmEmailVerificationFields>({
    resolver: zodResolver(ConfirmEmailVerificationScheme),
    defaultValues: {
      email,
      code: "",
    },
  });

  const code = form.watch("code");

  // Functions
  const onSubmit: SubmitHandler<ConfirmEmailVerificationFields> = (values) => {
    confirmVerifyEmail(values, {
      onSuccess: () => reset(), // امسح التايمر بعد التأكيد
    });
  };

  const handleResend = () => {
    resend(email, {
      onSuccess: () => {
        form.reset({ email, code: "" }); // فضّي الكود القديم
        start(); // ابدأ التايمر من جديد
      },
    });
  };

  return (
    <div className="mx-auto flex w-full  my-5 flex-col items-center px-4 sm:px-0">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center gap-4 sm:gap-5"
      >
        {/* OTP */}
        <Controller
          name="code"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              className="flex w-full flex-col items-center gap-2"
            >
              <InputOTP
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS}
                autoComplete="one-time-code"
                value={field.value}
                onChange={field.onChange}
                aria-invalid={fieldState.invalid}
                containerClassName="justify-center"
              >
                <InputOTPGroup className="gap-2 sm:gap-3">
                  {Array.from({ length: 6 }, (_, index) => (
                    <InputOTPSlot
                      key={index}
                      index={index}
                      className="size-10 rounded-md border text-primary text-base sm:size-12 sm:text-lg"
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>

              {/* Field error */}
              {fieldState.invalid && (
                <FieldError
                  errors={[fieldState.error]}
                  className="text-center text-sm text-red-600"
                />
              )}
            </Field>
          )}
        />

        {/* Resend */}
        <div className="text-center text-xs text-muted-foreground sm:text-sm">
          {canResend ? (
            <button
              type="button"
              onClick={handleResend}
              disabled={isResending}
              className="font-medium text-blue-600 hover:underline disabled:opacity-50"
            >
              {isResending ? "Sending..." : "Resend code"}
            </button>
          ) : (
            <span>
              You can request another code in:{" "}
              <span className="font-mono tabular-nums">{secondsLeft}s</span>
            </span>
          )}
        </div>

        {/* Resend error */}
        {resendError?.message && (
          <p className="w-full text-center text-sm font-medium text-red-600">
            {resendError.message}
          </p>
        )}

        {/* Verify error */}
        {error?.message && (
          <p className="w-full text-center text-sm font-medium text-red-600">
            {error.message}
          </p>
        )}

        {/* Submit */}
        <Button
          type="submit"
          disabled={isPending || code.length < 6}
          className="mt-2 w-full text-white sm:mt-4"
        >
          {isPending ? <Loader2 /> : "Verify"}
        </Button>
      </form>
    </div>
  );
}