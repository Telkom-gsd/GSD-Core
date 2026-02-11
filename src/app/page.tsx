import Image from "next/image";
import { WebsiteGrid } from "@/components/website-grid";
import { websites } from "@/config/websites";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Header Section */}
        <header className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Image
              src="/telkom-logo.svg"
              alt="Telkom Logo"
              width={64}
              height={64}
              className="w-12 h-12 md:w-16 md:h-16"
              priority
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              GSD Core
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Portal pusat untuk mengakses seluruh aplikasi dan layanan GSD. Pilih
            aplikasi yang ingin Anda kunjungi dari daftar di bawah ini.
          </p>
        </header>

        {/* Website Grid */}
        <section>
          <WebsiteGrid websites={websites} />
        </section>

        {/* Footer */}
        <footer className="mt-16 md:mt-24 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GSD Core. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
