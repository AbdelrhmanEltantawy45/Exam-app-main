"use client";

import React, { useId, useState } from "react";
import useLogin from "../_hooks/use-login";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState("abdulrahman38");
  const [password, setPassword] = useState("Abdulrahman@123");
  const { isPending, login } = useLogin();
  const id = useId();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // login({ username, password });
    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (!res?.ok) {
      setError(res?.error || "An error occurred");
      return;
    }

    const callbackUrl =
      new URLSearchParams(location.search).get("callbackUrl") || "/";

    location.href = callbackUrl;
  }

  // console.log('login form DATABASE PASSWORD', process.env.DATABASE_PASSWORD);
  // console.log('login form API URL', process.env.NEXT_PUBLIC_API_URL);

  // useEffect(() => {
  //   startTransition(() => {
  //     setError(null);
  //   });
  // }, []);

  // if (show) {
  //   return <div>
  //     <p>Login Form</p>
  //   </div>
  // }

  return (
    <>
      {/* <UpdateProfile /> */}
      <form onSubmit={handleSubmit} className="space-y-5" id={id}>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium  mb-1.5"
          >
            Username
          </label>
          <input
            id="username"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="user123"
            autoComplete="username"
            className="w-full  border border-gray-200   px-2 py-3  placeholder:text-zinc-500 outline-none  transition focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* <LoginFormSSR /> */}
        {/* {children} */}

        <div>
          <div className=" mb-1.5">
            <label htmlFor="password" className="block text-sm font-medium ">
              Password
            </label>
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            autoComplete="current-password"
            className="w-full   border border-gray-200   px-2 py-3  placeholder:text-zinc-500 outline-none  transition focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
          />
          <a
            href="#"
            className="text-md flex justify-end mb-10  text-blue-600 hover:text-blue-400 transition "
          >
            Forgot your password?
          </a>
        </div>


        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-amber-500 py-3 px-4 font-medium text-zinc-900 shadow-lg shadow-amber-500/25 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <span className="inline-flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Signing in…
            </span>
          ) : (
            "Sign in"
          )}
        </button>
      </form>
    </>
  );
}
