import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function OnlineOrderForRestaurantsLogo({
  className,
  variant = "regular",
  shorterName = false,
}: {
  className?: string;
  variant?: "regular";
  shorterName?: boolean;
}) {
  const regularLogo = "/dinevate-logos/online-order-for-restaurants-logo.png";

  const regularTextColor = "text-black";

  return (
    <div className={`flex gap-2 items-center ${className && className}`}>
      <Image
        src={variant === "regular" ? regularLogo : regularLogo}
        height={30}
        width={30}
        className=""
        alt="Online Order System For Restaurants logo"
      />
      <span
        className={`${variant === "regular" ? regularTextColor : regularLogo} ${
          font.className
        } uppercase text-lg tracking-[2px]`}
      >
        {shorterName ? "OOFr" : "Online Order System For Restaurants"}
      </span>
    </div>
  );
}
