// import { VerifyEmailScheme } from '@/features/auth/api/schemas/verify-email.schemes';
// import UseVerifyEmail from '@/features/auth/hooks/use-confirm-email';
// import { VerifyEmailFields } from '@/features/auth/types/auth';
// import { Field, FieldError, FieldGroup, FieldLabel } from '@/shared/components/ui/field'
// import { Input } from '@/shared/components/ui/input'
// import { zodResolver } from '@hookform/resolvers/zod';
// import React from 'react'
// import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form'

// export default function VerifyEmailForm() {

//      // Mutation
//         const { mutate: verifyEmail, error } = UseVerifyEmail();
      
//         // form
//         const form = useForm<VerifyEmailFields>({
//           resolver: zodResolver(VerifyEmailScheme),
//           defaultValues: {
//             email: "",
//           },
//         });
      
//         // Functions
//         const onSubmit: SubmitHandler<VerifyEmailFields> = (values) => {
//           verifyEmail(values);
//         };


//   return (
//      <FormProvider {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)}>
//         {/* Email */}

//         <FieldGroup>
//           <Controller
//             name="email"
//             control={form.control}
//             render={({ field, fieldState }) => (
//               <Field data-invalid={fieldState.invalid}>
//                 {/* Label */}
//                 <FieldLabel htmlFor="email" className="font-mono">
//                   Email dfjdofjdojfdojf
//                 </FieldLabel>

//                 {/* Fieled */}
//                 <Input
//                   {...field}
//                   id="email"
//                   aria-invalid={fieldState.invalid}
//                   placeholder="user@example.com"
//                   autoComplete="email"
//                   className={`${fieldState.invalid ? "border border-red-600 focus:border-red-600" : ""}  `}
//                 />

//                 {/* Error */}
//                 {fieldState.invalid && (
//                   <FieldError
//                     errors={[fieldState.error]}
//                     className="text-red-600"
//                   />
//                 )}
//               </Field>
//             )}
//           />
//         </FieldGroup>

//         {/* Submit feedback */}
//         {error?.message && (
//           <div className="w-full mt-10 p-3 text-sm text-red-600 border border-red-600 text-center bg-red-50 font-mono font-medium">
//             {error.message}
//           </div>
         
//         )}
        

//         {/* Submit */}
//       </form>
//     </FormProvider>
//   )
// }
