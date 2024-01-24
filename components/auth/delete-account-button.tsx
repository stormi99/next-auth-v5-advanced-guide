"use client";

import { deleteAccount } from "@/actions/auth/delete-account";
import { useSession } from "next-auth/react";
import { useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { DEFAULT_LOGIN_ROUTE } from "@/routes";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export default function DeleteAccountButton({ children }: LogoutButtonProps) {
  const { update } = useSession();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      deleteAccount()
        .then((data) => {
          if (data.error) {
            toast.error(data.error);
          }

          if (data.success) {
            toast.success(data.success);
            router.push(DEFAULT_LOGIN_ROUTE);
            update();
          }
        })
        .catch(() => toast.error("Something went wrong!"));
    });
  };
  return (
    <span
      onClick={onClick}
      className={`flex justify-center items-center ${
        isPending ? "cursor-progress" : "cursor-pointer"
      }`}
    >
      {children}
    </span>
  );
}
