import Image, { StaticImageData } from "next/image";
import React from "react";

import dinevate1 from "@/public/dinevate-site/gallery/dinevate-1.png";
import dinevate2 from "@/public/dinevate-site/gallery/dinevate-2.png";
import dinevate3 from "@/public/dinevate-site/gallery/dinevate-3.png";
import dinevate4 from "@/public/dinevate-site/gallery/dinevate-4.png";
import dinevate5 from "@/public/dinevate-site/gallery/dinevate-5.png";

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-3 mt-10">
      {/* Loop 5 times to create the gallery */}
      {[...Array(5)].map((_, index) => {
        const images: StaticImageData[] = [
          dinevate1,
          dinevate2,
          dinevate5,
          dinevate4,
          dinevate3,
        ];
        const isLastPicture = index === 4; // Check if it's the last picture
        return (
          <div key={index} className={isLastPicture ? "col-span-2" : ""}>
            <Image
              src={images[index]}
              alt="Dinevate Kitchen"
              className={`rounded-lg shadow-md `}
              placeholder="blur" // Optional blur-up while loading
            />
          </div>
        );
      })}
    </div>
  );
}
