import useLogin from '@/features/auth/hooks/use-login';
import { LoginFields } from '@/features/auth/types/auth';
import { Button } from '@/shared/components/ui/button'
import { useFormContext } from 'react-hook-form'

export default function LoginButton() {

  const form = useFormContext<LoginFields>();
  const { isPending } = useLogin(); 

  return (
    <Button
        type="submit"
        disabled={
          isPending || (form.formState.isSubmitted && !form.formState.isValid)
        }
        className={"w-full  text-white mt-9 "}
      >
        Login
      </Button>
  )
}
