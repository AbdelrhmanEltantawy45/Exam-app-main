import useLogin from '@/features/auth/hooks/use-login';
import { LoginFields } from '@/features/auth/types/auth';
import { Button } from '@/shared/components/ui/button'
import { ChevronRight } from 'lucide-react';
import { useFormContext } from 'react-hook-form'

export default function CreateAccountButton() {

  const form = useFormContext<LoginFields>();
  const { isPending } = useLogin(); 

  return (
    <Button
        type="submit"
        disabled={
          isPending || (form.formState.isSubmitted && !form.formState.isValid)
        }
        className={"w-full bg-blue-600 hover:bg-blue-700 text-white mt-9 "}
      >
        Next <ChevronRight />
      </Button>
  )
}
