import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  subsets: ["latin"],
});

export default function DinevateLogo({
  className,
  variant = "regular",
}: {
  className?: string;
  variant?: "regular" | "elegant";
}) {
  const regularLogo = "/dinevate-logos/dinevate_logo.svg";
  const elegantLogo = "/dinevate-site/dinevate-brown-logo.svg";

  const regularTextColor = "text-black";
  const elegantTextColor = "text-stone-300";

  return (
    <div className={`flex gap-2 items-center  ${className && className}`}>
      <Image
        src={variant === "regular" ? regularLogo : elegantLogo}
        height={30}
        width={30}
        alt="Dinevate logo"
      />
      <span
        className={`${
          variant === "regular" ? regularTextColor : elegantTextColor
        } ${font.className} uppercase text-lg tracking-[2px]`}
      >
        Dinevate
      </span>
    </div>
  );
}
