// app/not-found.tsx
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="font-mono text-sm font-medium text-blue-600">Error 404</p>

      <h1 className="font-inter text-4xl font-bold text-gray-800 sm:text-6xl">
        Page not found
      </h1>

      <p className="max-w-md text-sm text-gray-500 sm:text-base">
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </p>

      <div className="flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
        <Button  className="bg-blue-600 text-white hover:bg-blue-700">
          <Link href="/">Go to home</Link>
        </Button>

        <Button variant="outline">
          <Link href="/login">Back to login</Link>
        </Button>
      </div>
    </main>
  );
}