/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface WebsitePreviewProps {
  url: string;
  alt: string;
}

export function WebsitePreview({ url, alt }: WebsitePreviewProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Use microlink.io screenshot API for live website preview
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(
    url,
  )}&screenshot=true&meta=false&embed=screenshot.url`;

  return (
    <div className="relative w-full aspect-video bg-muted rounded-t-xl overflow-hidden">
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-none" />
      )}
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="text-center text-muted-foreground">
            <svg
              className="mx-auto h-12 w-12 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <p className="text-sm">Preview unavailable</p>
          </div>
        </div>
      ) : (
        <img
          src={screenshotUrl}
          alt={alt}
          className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      )}
    </div>
  );
}
