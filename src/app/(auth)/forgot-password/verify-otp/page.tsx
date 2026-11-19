"use client";
import InputOtp from "@/features/auth/components/register/input-otp";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { use } from "react";

export default function verifyOtp() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <main className="h-full flex flex-col justify-center items-center ">
      <div className="w-full max-w-113 flex flex-col gap-10 ">
        {/* button */}
        <Link
          href="/forgot-password"
          className={
            "w-10 h-10 p-2.5   border border-gray-300 hover:bg-gray-100 mb-3.5"
          }
        >
          <MoveLeft size={20} />
        </Link>

        {/* title */}
        <div>
          <h1 className="font-inter text-3xl font-bold mb-3.5 ">
            Password Reset Sent
          </h1>
          <div className="font-mono text-sm">
            <p className="text-gray-800 ">
              We have sent a password reset link to:
            </p>
            <Link href={`${"mailto:" + email}`} className="text-blue-600 ">
              {email}
            </Link>
            <p className="mt-3.5 text-gray-800">
              Please check your inbox and follow the instructions to reset your
              password.
            </p>
            <p className="mt-3.5 text-gray-500">
              If you don’t see the email within a few minutes, check your spam
              or junk folder.
            </p>
          </div>
        </div>
        

        {/* Support text */}
        <p className="text-sm text-center text-gray-500 font-medium mt-4 font-mono">
          Dont have an account?
          <Link href="/register" className="text-blue-600 hover:underline">
            Create yours
          </Link>
        </p>
      </div>
    </main>
  );
}
