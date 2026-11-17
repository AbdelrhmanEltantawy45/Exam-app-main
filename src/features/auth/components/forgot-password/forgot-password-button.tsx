import UseForgotPassword from '@/features/auth/hooks/forgot-password/use-forgot-password';
import { ForgotPasswordFields } from '@/features/auth/types/auth';
import { Button } from '@/shared/components/ui/button'
import { ChevronRight } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

export default function ForgotPasswordButton() {

  const form = useFormContext<ForgotPasswordFields>();
    const { isPending } = UseForgotPassword();

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
