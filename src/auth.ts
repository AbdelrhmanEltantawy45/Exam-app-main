import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ILoginResponse } from "./features/auth/types/auth";
import { login } from "./features/auth/api/auth.server";
import { LoginScheme } from "./features/auth/schemas/login.schemes";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
    error: '/login',
    
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {

        const result = LoginScheme.safeParse({username: credentials?.username, password: credentials?.password});

        if (!result.success) {
          throw new Error("Invalid username or password");
        }
      
        const data = await login(result.data);

        if(!data.status) throw new Error(data.message)

        const loginData = data.payload!;

          return {
        id : loginData.user.id,
        user : loginData.user,
        token : loginData.token
        }
      }
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.user = user.user;
        token.token = user.token;
      }
      

      return token;
    },
    session: ({ session, token }) => {

      session.user = token.user;

      return session;
    },
  },
  // secret: process.env.NEXTAUTH_SECRET
}


// export const authOptionsforgot: NextAuthOptions = {
//   pages: {
//     signIn: '/forgot-password',
//     error: '/forgot-password',
    
//   },
//   providers: [
//     Credentials({
//       name: 'Credentials',
//       credentials: {
//         email: {},
//       },
//       authorize: async (credentials) => {

//         const result = ForgotPasswordScheme.safeParse({email: credentials?.email,});

//         if (!result.success) {
//           throw new Error("Invalid email");
//         }
      
//         const data = await forgetPassword(result.data);

//         if(!data?.status) throw new Error(data?.message)

//         const forgotPasswordData = data.payload!;

//           return {
//         id : forgotPasswordData.user.id,
//         user : forgotPasswordData.user,
//         token : forgotPasswordData.token
//         }
//       }
//     })
//   ],
//   callbacks: {
//     jwt: ({ token, user }) => {
//       if (user) {
//         token.user = user.user;
//         token.token = user.token;
//       }
      

//       return token;
//     },
//     session: ({ session, token }) => {
//       session.user = token.user;

//       return session;
//     },
//   },
//   // secret: process.env.NEXTAUTH_SECRET
// }