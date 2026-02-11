import { WebsiteCard } from "@/components/website-card";
import type { WebsiteConfig } from "@/config/websites";

interface WebsiteGridProps {
  websites: WebsiteConfig[];
}

export function WebsiteGrid({ websites }: WebsiteGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {websites.map((website) => (
        <WebsiteCard key={website.id} website={website} />
      ))}
    </div>
  );
}
