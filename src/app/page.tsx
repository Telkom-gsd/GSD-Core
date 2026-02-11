import { WebsiteGrid } from "@/components/website-grid";
import { websites } from "@/config/websites";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Header Section */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            GSD Core
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Portal pusat untuk mengakses seluruh aplikasi dan layanan GSD. 
            Pilih aplikasi yang ingin Anda kunjungi dari daftar di bawah ini.
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
