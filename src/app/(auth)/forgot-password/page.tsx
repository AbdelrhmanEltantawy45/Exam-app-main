import ForgotPasswordForm from '@/features/auth/components/forgot-password/forgot-password-form'
import Link from 'next/link'

export default function page() {
  return (
  <main className="h-full flex flex-col justify-center items-center ">
  
      <div className='w-full max-w-113 flex flex-col gap-10 '>
  
      {/* title */}
      <div>
        <h1 className="font-inter text-3xl font-bold text-gray-800 ">Forgot Password</h1>
      <p className="text-gray-500 font-mono py-2.5">Don’t worry, we will help you recover your account.</p>
      </div>
  
      {/* form */}
      <ForgotPasswordForm />
    
  
      {/* Support text */}
      <p className="text-sm text-center text-gray-500 font-medium mt-4 font-mono">Dont have an account? <Link href="/register" className="text-blue-600 hover:underline"> Create yours </Link></p>
      </div>
      
  
     </main>
  )
}
