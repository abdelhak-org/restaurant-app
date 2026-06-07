import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MenuSection } from "@/components/sections/menu-section";
import { ReservationSection } from "@/components/sections/reservation-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { SectionDivider } from "@/components/ui/section-divider";
import { SITE_CONFIG } from "@/constants/site";
import { getDictionary } from "@/lib/get-dictionary";
import { isLocale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--color-primary)_18%,transparent),transparent_48%)]" />
      <div className="pointer-events-none absolute top-48 right-[-10rem] h-72 w-72 rounded-full bg-secondary/12 blur-3xl" />
      <div className="pointer-events-none absolute top-[42rem] left-[-8rem] h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <SiteHeader dictionary={dictionary} locale={lang} />

      <main className="relative z-10 pb-16">
        <HeroSection dictionary={dictionary} />
        <SectionDivider />
        <MenuSection dictionary={dictionary} />
        <SectionDivider />
        <AboutSection dictionary={dictionary} />
        <SectionDivider />
        <GallerySection dictionary={dictionary} />
        <SectionDivider />
        <TestimonialsSection dictionary={dictionary} />
        <SectionDivider />
        <ReservationSection dictionary={dictionary} />
      </main>

      <footer className="border-t border-border/70 py-8 text-sm text-muted-foreground">
        <div className="section-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium text-foreground">{SITE_CONFIG.name}</p>
            <p>{dictionary.footer.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {SITE_CONFIG.socialLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-primary"
              >
                {dictionary.footer.socials[link.key]}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
