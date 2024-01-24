import React, { useState } from "react";
import Image from "next/image";

export const NavLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverImage = "/dinevate-logos/dinevate_black_logo.png";
  const defaultImage = "/dinevate-logos/dinevate_logo.svg";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-[55px] col-start-2 justify-self-center shadow-md cursor-pointer transition-opacity duration-500 ease-in-out"
    >
      <Image
        src={isHovered ? hoverImage : defaultImage}
        width={55}
        height={55}
        alt="Dinevate Logo"
      />
    </div>
  );
};
