"use client";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { ForgotPasswordScheme } from "@/features/auth/schemas/forgot-password.schemes";
import { ForgotPasswordFields } from "@/features/auth/types/auth";

import { Button } from "@/shared/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import UseForgotPassword from "@/features/auth/hooks/forgot-password/use-forgot-password";
import ForgotPasswordButton from "./forgot-password-button";

export default function ForgotPasswordForm() {
  // Mutation
  const { mutate: forgotPassword, error } = UseForgotPassword();

  // form
  const form = useForm<ForgotPasswordFields>({
    resolver: zodResolver(ForgotPasswordScheme),
    defaultValues: {
      email: "",
    },
  });

  // Functions
  const onSubmit: SubmitHandler<ForgotPasswordFields> = (values) => {
    forgotPassword(values);
  };


  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Email */}

        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                {/* Label */}
                <FieldLabel htmlFor="email" className="font-mono">
                  Email
                </FieldLabel>

                {/* Fieled */}
                <Input
                  {...field}
                  id="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="user@example.com"
                  autoComplete="email"
                  className={`${fieldState.invalid ? "border border-red-600 focus:border-red-600" : ""}  `}
                />

                {/* Error */}
                {fieldState.invalid && (
                  <FieldError
                    errors={[fieldState.error]}
                    className="text-red-600"
                  />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        {/* Submit feedback */}
        {error?.message && (
          <div className="w-full mt-10 p-3 text-sm text-red-600 border border-red-600 text-center bg-red-50 font-mono font-medium">
            {error.message}
          </div>
         
        )}
        

        {/* Submit */}
        <ForgotPasswordButton />
      </form>
    </FormProvider>
  );
}
