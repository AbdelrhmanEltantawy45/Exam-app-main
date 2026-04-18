import LoginForm from './_components/login-form';

export default function LoginPage() {
  console.log('login page DATABASE PASSWORD', process.env.DATABASE_PASSWORD);
  console.log('login page API URL', process.env.NEXT_PUBLIC_API_URL);

  return (
    <main className="min-h-screen  flex items-center w-1/2 justify-center p-4 font-(family-name:--font-geist-sans)">
      <div className="absolute " />
      <div className="relative w-full max-w-[28rem]">
        <div className="  ">
          <div className="mb-12">
            <h1 className="text-3xl font-bold tracking-tight">
              Login
            </h1>
            
          </div>

          {/* <Suspense> */}
          <LoginForm />
          {/* </Suspense> */}
          {/* <LoginFormSSR /> */}
          {/* <LoginForm>
            <LoginFormSSR />
          </LoginForm> */}

          <p className="mt-6 text-center text-sm text-zinc-500">
            Don&apos;t have an account?{' '}
            <a
              href="#"
              className="font-medium text-amber-400/90 hover:text-amber-400 transition"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
