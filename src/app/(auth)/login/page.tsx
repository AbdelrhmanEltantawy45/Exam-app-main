import LoginForm from '@/features/auth/components/login/login-form';
import Link from 'next/link';

export default function LoginPage() {


  return (
   <main className="h-full flex flex-col justify-center items-center ">

    <div className='w-full max-w-113 flex flex-col gap-10 '>

    {/* title */}
    <h1 className="font-inter text-3xl font-bold text-gray-800">Login</h1>

    {/* form */}
    <LoginForm />
  

    {/* Support text */}
    <p className="text-sm text-center text-gray-500 font-medium mt-4 font-mono">Dont have an account? <Link href="/register?step=create-account" className="text-blue-600 hover:underline"> Create yours </Link></p>
    </div>
    

   </main>
  )
}
