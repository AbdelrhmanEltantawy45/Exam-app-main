import CreatePasswordForm from '@/features/auth/components/create-password/create-password-form'
import Link from 'next/link'
import React from 'react'

export default function ConfirmPassword() {
  return (
      <main className="h-full flex flex-col justify-center items-center ">

    <div className='w-full max-w-113 flex flex-col gap-10 '>

    {/* title */}
   <div>
     <h1 className="font-inter text-3xl font-bold text-gray-800 ">Create a New Password</h1>
    <p className="text-sm text-gray-500 mt-2.5 font-mono">Create a new strong password for your account.</p>
   </div>

    {/* form */}
    <CreatePasswordForm/>
  

    {/* Support text */}
    <p className="text-sm text-center text-gray-500 font-medium mt-4 font-mono">Dont have an account? <Link href="/register" className="text-blue-600 hover:underline"> Create yours </Link></p>
    </div>
    

   </main>
  )
}
