import { UserInfoFields } from '@/features/auth/types/auth'
import React from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'
import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { PhoneInput } from '../ui/phone-input'


interface UserInfoFormProps {
    form: UseFormReturn<UserInfoFields>
    place: "register" | "user-account"
}
export default function UserInfoForm( { form, place }: UserInfoFormProps ) {
  return (
     <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
        {/* First Name */}
        <FieldGroup>
          <Controller
            name="firstName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="firstName">
                  First Name{" "}
                  {place === "register" && (
                    <span className="text-destructive">*</span>
                  )}
                </FieldLabel>
                <Input
                  {...field}
                  id="firstName"
                  aria-invalid={fieldState.invalid}
                  type="text"
                  autoComplete="firstName"
                  placeholder="Ahmed"
                  className={fieldState.invalid ? "border-destructive" : ""}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        {/* Last Name */}
        <FieldGroup>
          <Controller
            name="lastName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="lastName">
                  Last Name{" "}
                  {place === "register" && (
                    <span className="text-destructive">*</span>
                  )}
                </FieldLabel>
                <Input
                  {...field}
                  id="lastName"
                  aria-invalid={fieldState.invalid}
                  type="text"
                  autoComplete="lastName"
                  placeholder="Abdullah"
                  className={fieldState.invalid ? "border-destructive" : ""}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      </div>

      {/* User Name */}
      <FieldGroup>
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="username">
                Username{" "}
                {place === "register" && (
                  <span className="text-destructive">*</span>
                )}
              </FieldLabel>
              <Input
                {...field}
                id="username"
                aria-invalid={fieldState.invalid}
                type="text"
                autoComplete="username"
                placeholder="user123"
                className={fieldState.invalid ? "border-destructive" : ""}
                disabled={place === "user-account"}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>



      {/* Phone */}
      <FieldGroup>
        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <PhoneInput
                {...field}
                id="phone"
                aria-invalid={fieldState.invalid}
                type="text"
                autoComplete="phone"
                placeholder="1012345678"
                defaultCountry="EG"
                className={fieldState.invalid ? "border-destructive" : ""}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </>
  )
}
