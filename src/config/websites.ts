export interface WebsiteConfig {
  id: string;
  name: string;
  description: string;
  url: string;
  domain: string;
}

export const websites: WebsiteConfig[] = [
  {
    id: "japati-space",
    name: "Japati Space",
    description: "Japati Space Application",
    url: "https://japati-space.vercel.app",
    domain: "japati-space.vercel.app",
  },
  {
    id: "dashboard-bapp",
    name: "Dashboard BAPP",
    description: "BAPP Dashboard Application",
    url: "https://dashboard-bapp.vercel.app",
    domain: "dashboard-bapp.vercel.app",
  },
  {
    id: "mo-kelistrikan",
    name: "MO Kelistrikan",
    description: "MO Kelistrikan Application",
    url: "https://mo-kelistrikan.vercel.app",
    domain: "mo-kelistrikan.vercel.app",
  },
  {
    id: "gsd-tools",
    name: "Digislam-PDF Maker",
    description: "PDF Maker untuk laporan Digislam",
    url: "https://script.google.com/macros/s/AKfycbwmjc3e1DNsOgwuwAHYQEf130jsOiZClXw5AQqIUt8uPNtd18oP7pSUkSzJz2R3voPz/exec",
    domain: "script.google.com",
  },
];
