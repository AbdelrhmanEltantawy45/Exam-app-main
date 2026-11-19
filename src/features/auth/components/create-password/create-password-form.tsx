"use client"
import { CreatePasswordFields } from "@/features/auth/types/auth"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Controller, FormProvider, SubmitHandler, useForm } from "react-hook-form"
import usePasswordToggle from "../../hooks/login/use-password-toggle";
import UseCreatePassword from "@/features/auth/hooks/forgot-password/use-create-password";
import CreatePasswordButton from "./create-password-button";
import { useSearchParams } from "next/navigation";
import useConfirmPasswordToggle from "../../hooks/register/use-password-toggle";


export default function CreatePasswordForm() {

  const searchparams = useSearchParams();

    const { inputType, toggle, showPassword } = usePasswordToggle();
    const { confirmInputType, confirmToggle, showCofirmPassword } = useConfirmPasswordToggle();

     // Mutation
      const { mutate: createPassword, error } = UseCreatePassword();


  // form
  const form = useForm<CreatePasswordFields>({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
      
    },
  })

  // function
  const onSubmit: SubmitHandler<CreatePasswordFields> =(values) => {
    createPassword(values);
      const token = searchparams.get("token") || "";
      createPassword({ ...values, token });
  };

   
    

  return (
   <FormProvider {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* password */}
      <FieldGroup className="mt-4">
        <Controller
        name="newPassword"
        control={form.control}
        render={({field, fieldState}) => (
          <Field data-invalid={fieldState.invalid}>
            {/* Label */}
            <FieldLabel htmlFor="newPassword" className="font-mono" >
              New password
            </FieldLabel>

            {/* Filed */}
            <div className="relative">
              <Input
              {...field}
              type={inputType}
              aria-invalid={fieldState.invalid}
              placeholder="*********"
              autoComplete="current-password"
              className={`${fieldState.invalid ? "border border-red-600" :'' } font-mono`}
              />
              <i
              className="absolute top-2.5 right-3.5 text-gray-400"
              onClick={toggle}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                
              </i>
            </div>

            {/* Error */}
            {fieldState.invalid && (
              <FieldError
              errors={[fieldState.error]  }
              className="text-red-600"
              />
            )}
          </Field>
        )}
        />
      </FieldGroup>

       {/* confirmPassword */}
      <FieldGroup className="mt-4">
        <Controller
        name="confirmPassword"
        control={form.control}
        render={({field, fieldState}) => (
          <Field data-invalid={fieldState.invalid}>
            {/* Label */}
            <FieldLabel htmlFor="confirmPassword" className="font-mono" >
              Confirm New Password
            </FieldLabel>

            {/* Filed */}
            <div className="relative">
              <Input
              {...field}
              type={confirmInputType}
              aria-invalid={fieldState.invalid}
              placeholder="*********"
              autoComplete="current-password"
              className={`${fieldState.invalid ? "border border-red-600" :'' } font-mono`}
              />
              <i
              className="absolute top-2.5 right-3.5 text-gray-400"
              onClick={confirmToggle}
              >
                {showCofirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                
              </i>
            </div>

            {/* Error */}
            {fieldState.invalid && (
              <FieldError
              errors={[fieldState.error]  }
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
         <CreatePasswordButton/>
    </form>

   </FormProvider>
 
  )
}
