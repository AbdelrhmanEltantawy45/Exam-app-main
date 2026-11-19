import React from 'react'
import { ConfirmEmailVerificationFields, VerifyEmailFields } from '../../types/auth';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { ConfirmEmailVerification } from '../../api/auth.client';

export default function UseVerifyEmail() {
  const router = useRouter();
  return useMutation({
    mutationFn: async (fields: ConfirmEmailVerificationFields) => {
      const response = await ConfirmEmailVerification(fields);
      if (!response.status)
        throw new Error(response?.message || "Something went wrong");
      return response;
    },

    onSuccess: (_,fields) => {
       if(fields){
        const raw = new URLSearchParams(location.search).get("callbackUrl");
const callbackUrl = raw && raw.startsWith("/") && !raw.startsWith("//") ? raw : "/register?step=user-info";

      router.push(callbackUrl);

      }
    
    },


  
  });
}