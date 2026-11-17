"use client";
import CreatAccountform from "@/features/auth/components/register/create-account/create-account-form";
import InputOtp from "@/features/auth/components/register/create-account/input-otp";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Register() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const step = searchParams.get("step") || "create-account";

  return (
    <main className="h-full flex flex-col justify-center items-center ">
      <div className="w-full max-w-113 flex flex-col gap-10 ">
        {/* title */}
        <h1 className="font-inter text-3xl font-bold text-gray-800">
          Create Account
        </h1>

        {/* form */}
        {step === "create-account" && <CreatAccountform />}

        {step === "verify-email" && (
          <div>
            <p className="font-inter text-xl font-bold text-blue-600 ">
              Verify OTP
            </p>
            <p className="text-gray-500 font-mono py-2.5 text-sm">
              Please enter the 6-digits code we have sent to:
              <Link href={`${"mailto:" + email}`} className="font-bold ">
                {email}
                <Link
                  href="/register?step=create-account"
                  className="text-blue-600 hover:underline mx-2"
                >
                  Edit
                </Link>
              </Link>
            </p>

            <InputOtp />
          </div>
        )}
      </div>
    </main>
  );
}
