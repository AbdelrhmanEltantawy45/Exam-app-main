"use client";

import Link from "next/link";
import { notFound, useSearchParams } from "next/navigation";

import CreatAccountform from "@/features/auth/components/register/create-account-form";
import InputOtp from "@/features/auth/components/register/input-otp";
import ProgressIndicator from "@/shared/components/global/progress-indicator";
import UserInfoForm from "@/features/auth/components/register/user-info";

const STEPS = [
  "create-account",
  "verify-otp",
  "user-info",
  "password",
] as const;
type Step = (typeof STEPS)[number];

const isValidStep = (value: string): value is Step =>
  (STEPS as readonly string[]).includes(value);

export default function page() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const step = searchParams.get("step") ?? "create-account";


  if (!isValidStep(step)) notFound();


  if (step === "verify-otp" && !email) notFound();
  

  const currentStepNumber = STEPS.indexOf(step) + 1;

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="flex w-full max-w-113 flex-col gap-10">
        {step !== "create-account" && (
          <ProgressIndicator
            steps={[...STEPS]}
            currentStep={currentStepNumber}
          />
        )}

        {/* title */}
        <h1 className="font-inter text-3xl font-bold text-gray-800">
          Create Account
        </h1>

        {/* forms */}
        {step === "create-account" && <CreatAccountform />}

        {step === "verify-otp" && (
          <div>
            <p className="font-inter text-xl font-bold text-blue-600">
              Verify OTP
            </p>
            <div className="py-2.5 font-mono text-sm text-gray-500">
              Please enter the 6-digits code we have sent to:
              <p className="font-bold">
                {email}
                <Link
                  href="/register?step=create-account"
                  className="mx-2 text-blue-600 hover:underline"
                >
                  Edit
                </Link>
              </p>
            </div>

            <InputOtp />
          </div>
        )}

        {step === "user-info" && <UserInfoForm />}
      </div>
    </main>
  );
}
