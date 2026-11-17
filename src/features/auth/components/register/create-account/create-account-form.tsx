"use client"
import { CreateAccountScheme } from '@/features/auth/schemas/create-account.schemes';
import UseCreateAccount from '@/features/auth/hooks/use-create-account';
import { CreateAccountFields } from '@/features/auth/types/auth';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/shared/components/ui/field'
import { Input } from '@/shared/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import CreateAccountButton from './create-account-button';

export default function CreatAccountform() {

    // Mutation
    const { mutate: createAccount, error } = UseCreateAccount();
  
    // form
    const form = useForm<CreateAccountFields>({
      resolver: zodResolver(CreateAccountScheme),
      defaultValues: {
        email: "",
      },
    });
  
    // Functions
    const onSubmit: SubmitHandler<CreateAccountFields> = (values) => {
      createAccount(values);
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
        <CreateAccountButton />
      </form>
    </FormProvider>
  )
}
