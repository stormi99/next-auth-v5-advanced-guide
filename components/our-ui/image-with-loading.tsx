"use client";

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  skeleton?: boolean;
  height?: string;
  width?: string;
}

export function ImageWithLoading({
  src,
  alt,
  skeleton = true,
  height = "100%",
  width = "100%",
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // Render nothing if there is an error

    return <Skeleton className={`h-10 w-10`} />;
  }

  return (
    <div className={`aspect-square relative`}>
      {/* {isLoading && <Skeleton />} */}
      <Image
        src={src}
        alt={alt}
        className={`object-cover `}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        fill={true}
      />
    </div>
  );
}
