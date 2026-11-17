"server only"
import { ILoginResponse, LoginFields } from "../types/auth";
import { HEADERS } from "@/shared/constants/api.constants";
import { redirect } from 'next/dist/server/api-utils';


export const login = async (LoginFields: LoginFields) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/login` , {
    method: "POST",
    body: JSON.stringify(LoginFields),
    headers: {
      ...HEADERS.jsonBody
    }
  })
  const payload : IApiResponse<ILoginResponse> = await response.json();
  
  return payload;
  } 
  
  
