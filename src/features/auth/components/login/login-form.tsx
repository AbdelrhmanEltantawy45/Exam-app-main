"use client";

import { LoginFields } from "@/features/auth/types/auth";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { LoginScheme } from "../../schemas/login.schemes";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import Link from "next/link";
// import LoginButton from "./login-button";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginButton from "./login-button";
import { Eye, EyeOff } from "lucide-react";
import usePasswordToggle from "../../hooks/login/use-password-toggle";
import { Button } from "@/shared/components/ui/button";
import useLogin from "@/features/auth/hooks/login/use-login";

export default function LoginForm() {

  const { inputType, toggle, showPassword } = usePasswordToggle();

    // Mutation
  const { mutate: login, error , isPending } = useLogin();

  // form
  const form = useForm<LoginFields>({
    resolver: zodResolver(LoginScheme),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Functions
  const onSubmit: SubmitHandler<LoginFields> = (values) => {
    login(values);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* User Name */}
        <FieldGroup className="relative">  
          <Controller
            name="username"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                {/* Label */}
                <FieldLabel htmlFor="username" className="font-mono">
                  Username
                </FieldLabel>

                {/* Filed */}
                <Input
                  {...field}
                  id="username"
                  aria-invalid={fieldState.invalid}
                  placeholder="user123"
                  autoComplete="username"
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

        {/* Password */}
        <FieldGroup className="mt-4">
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                {/* Label */}
                <FieldLabel htmlFor="password" className="font-mono">
                  password
                </FieldLabel>

                {/* Filed */}
                <div className="relative">
                  <Input
                    {...field}
                    type={inputType}
                    id="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="*******"
                    autoComplete="current-password"
                    className={`${fieldState.invalid ? "border border-red-600" : ""} font-mono  `}
                  />
                  <button
                    type="button"
                    aria-label="Show password"
                    className="absolute top-2.5 right-3.5 text-gray-400"
                    onClick={toggle}
                  >
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>

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

        {/* Forget password */}
        <Link
          href="/forgot-password"
          className="mt-2.5 flex justify-end text-sm text-blue-600  hover:underline font-medium"
        >
          Forget your password?
        </Link>

        {/* Submit feedback */}

        {error?.message && (
          <div className="w-full mt-10 p-3 text-sm text-red-600 border border-red-600 text-center bg-red-50 font-mono font-medium">
            {error.message}
          </div>
        )}

        {/* Submit */}
        <Button
        type="submit"
        disabled={
          isPending || !form.formState.isValid
        }
        className={"w-full bg-blue-600 hover:bg-blue-700 text-white mt-9 "}
      >
        Login
      </Button>
      </form>
    </FormProvider>
  );
}
