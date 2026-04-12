"use client";

import { useState } from "react";
import Image from "next/image";

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  preload?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: 50 | 60 | 75;
};

export default function SafeImage({
  src,
  alt,
  className,
  preload = false,
  priority = false,
  sizes,
  quality,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 animate-pulse" />
      )}
      <Image
        src={failed ? "/fallback-car.svg" : src}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        className={`${className ?? ""} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        preload={preload || priority}
        loading={preload || priority ? "eager" : "lazy"}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
      />
    </>
  );
}
