"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WebsitePreview } from "@/components/website-preview";
import type { WebsiteConfig } from "@/config/websites";

interface WebsiteCardProps {
  website: WebsiteConfig;
}

type StatusType = "checking" | "online" | "offline";

export function WebsiteCard({ website }: WebsiteCardProps) {
  const [status, setStatus] = useState<StatusType>("checking");

  useEffect(() => {
    const checkStatus = async () => {
      try {
        // Using a simple fetch with no-cors mode to check if the site is reachable
        // We use the img trick as a fallback for CORS-restricted sites
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        await fetch(website.url, {
          mode: "no-cors",
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        // no-cors mode always returns opaque response, so we assume online if no error
        setStatus("online");
      } catch {
        setStatus("offline");
      }
    };

    checkStatus();
  }, [website.url]);

  const statusConfig = {
    checking: {
      variant: "secondary" as const,
      label: "Checking...",
      dot: "bg-yellow-500",
    },
    online: {
      variant: "default" as const,
      label: "Ready",
      dot: "bg-green-500",
    },
    offline: {
      variant: "destructive" as const,
      label: "Offline",
      dot: "bg-red-500",
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <Card className="overflow-hidden p-0 transition-shadow hover:shadow-lg">
      <WebsitePreview url={website.url} alt={`Preview of ${website.name}`} />

      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-lg truncate">{website.name}</h3>
            <p className="text-sm text-muted-foreground truncate">
              {website.domain}
            </p>
          </div>
          <Badge
            variant={currentStatus.variant}
            className="shrink-0 flex items-center gap-1.5"
          >
            <span
              className={`w-2 h-2 rounded-full ${currentStatus.dot} animate-pulse`}
            />
            {currentStatus.label}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {website.description}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <a
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            Kunjungi Website
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
