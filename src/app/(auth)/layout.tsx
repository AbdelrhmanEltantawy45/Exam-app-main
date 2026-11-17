import AuthSideSection from "@/features/auth/components/auth-side-section";
import React from "react";

interface LoginLayoutProps {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <>
      <div className="grid grid-cols-2 ">
        {/* side section */}

        <AuthSideSection />

        {children}
      </div>
    </>
  );
}
