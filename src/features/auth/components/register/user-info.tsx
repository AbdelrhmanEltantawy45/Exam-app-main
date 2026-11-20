import UserInfoForm from "@/shared/components/global/user-info-form";
import { Button } from "@/shared/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { userInfoSchema } from "../../schemas/user-info-schema";
import { UserInfoFields } from "../../types/auth";



export default function UserInfo() {
  const form = useForm<UserInfoFields>({
    resolver: zodResolver(userInfoSchema),
    defaultValues: {
      firstName: "",
      lastName:"",
      username: "",
      email: "",
      phone: "",
    },
  });

  const handleSubmit = (data: UserInfoFields) => {
    (data);
    console.log("data" , data)
  };

  return (
    <>
      <div className="text-2xl text-primary font-inter font-bold">
        Tell us more about you
      </div>

      {/* User Info Form */}
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col font-geist-mono mt-4 py-4 gap-4"
      >
        {/* Form */}
        <UserInfoForm form={form} place="register" />

        {/* Next Button */}
        <Button
          type="submit"
          variant="secondary"
          className="mt-8"
          disabled={form.formState.isSubmitting}
        >
          Next <ChevronRight />
        </Button>
      </form>
    </>
  );
}
