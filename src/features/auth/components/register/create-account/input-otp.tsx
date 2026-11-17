"use client";

import { ConfirmEmailVerificationScheme } from "@/features/auth/schemas/confirm-email-verification.schema";
import UseVerifyEmail from "@/features/auth/hooks/register/use-confirm-email";
import {
  ConfirmEmailVerificationFields,
  VerifyEmailFields,
} from "@/features/auth/types/auth";
import { Button } from "@/shared/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/shared/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { RefreshCwIcon } from "lucide-react";
import React from "react";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

export default function InputOtp() {
  // Mutation
  const { mutate: confirmverifyEmail, error, isPending } = UseVerifyEmail();

  // form
  const form = useForm<ConfirmEmailVerificationFields>({
    resolver: zodResolver(ConfirmEmailVerificationScheme),
    defaultValues: {
      email: "",
      code: "",
    },
  });

  // Functions
  const onSubmit: SubmitHandler<ConfirmEmailVerificationFields> = (values) => {
    confirmverifyEmail(values);
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* User Name */}

        <Controller
          name="code"
          control={form.control}
          render={({ field }) => (
            <InputOTP
              maxLength={6}
              value={field.value}
              onChange={field.onChange}
              aria-invalid={form.formState.errors.code ? "true" : "false"}
            >
              <InputOTPGroup className="gap-4">
                {Array.from({ length: 6 }, (_, index) => (
                  <InputOTPSlot key={index} index={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          )}
        />

          {form.formState.errors.code && (
            <p className="text-sm text-destructive font-geist-mono">
              {form.formState.errors.code.message}
            </p>
          )}

        <Field>
          <FieldDescription>
            I no longer have access to this email address.
          </FieldDescription>
        </Field>

        <Field>
          {/* Submit */}
          <Button
            type="submit"
            disabled={isPending}
            className={"w-full bg-blue-600 hover:bg-blue-700 text-white mt-9 "}
          >
            Verify
          </Button>
        </Field>
      </form>
    </FormProvider>
  );
}
