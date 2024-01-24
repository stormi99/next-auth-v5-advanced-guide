"use client";

import { logout } from "@/actions/auth/logout";
import { CardWrapper } from "@/components/auth/card-wrapper";
// import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { BeatLoader } from "react-spinners";

export default function LogoutPage() {
  // const router = useRouter();

  useEffect(() => {
    // const logout = async () => {
    //   await fetch("/api/auth/deleteSession", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   // Redirect after successful logout
    //   router.push("/auth/login");

    // };

    logout();
  }, []);

  return (
    <CardWrapper
      headerLabel="Logging out..."
      backButtonHref="/auth/login"
      backButtonLabel=""
      showSocial={false}
    >
      <div className="flex gap-4 items-center w-full justify-center">
        <BeatLoader />
      </div>
    </CardWrapper>
  );
}
