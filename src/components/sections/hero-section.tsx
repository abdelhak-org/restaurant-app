import Image from "next/image";

import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants/site";
import type { Dictionary } from "@/types/i18n";

interface HeroSectionProps {
  dictionary: Dictionary;
}

export function HeroSection({ dictionary }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="section-shell grid min-h-[calc(100svh-86px)] items-start justify-between gap-10 py-10 md:grid-cols-[1.05fr_0.95fr] md:py-18"
    >
      <div className="space-y-8  flex flex-col items-start justify-between  h-full">
        <div className="space-y-4">
          <p className="eyebrow">{dictionary.hero.eyebrow}</p>
          <h1 className="balanced-text max-w-3xl font-serif text-5xl leading-none font-semibold text-foreground sm:text-6xl lg:text-7xl">
            {dictionary.hero.title}
          </h1>
          <p className="balanced-text max-w-xl text-lg leading-8 text-fade sm:text-xl">
            {dictionary.hero.description}
          </p>
        </div>
        <div className="flex flex-col gap-6 flex-start">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href="#reservation">
              <Button size="lg">{dictionary.hero.primaryCta}</Button>
            </a>
            <a href="#menu">
              <Button variant="secondary" size="lg">
                {dictionary.hero.secondaryCta}
              </Button>
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {dictionary.hero.highlights.map((item) => (
              <div
                key={item.value}
                className="section-card surface-glow rounded-[2rem] p-5"
              >
                <p className="text-3xl font-semibold text-foreground">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="section-card surface-glow relative overflow-hidden rounded-[2.3rem] p-4">
          <div className="absolute top-6 right-6 rounded-full bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.18em] text-secondary-foreground uppercase shadow-lg">
            {dictionary.hero.badge}
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] border border-border/50">
            <Image
              src="/images/hero-dish.jpeg"
              alt={dictionary.hero.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>
        </div>

        <div className="section-card grid gap-5 rounded-4xl p-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div className="space-y-3">
            <p className="eyebrow">{dictionary.hero.bookingCard.eyebrow}</p>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              {dictionary.hero.bookingCard.title}
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              {dictionary.hero.bookingCard.description}
            </p>
          </div>
          <div className="space-y-3 rounded-[1.6rem] bg-muted/70 p-5 sm:min-w-56 dark:bg-muted/90">
            <p className="text-sm font-medium text-foreground">
              {dictionary.hero.bookingCard.hoursLabel}
            </p>
            <p className="text-sm leading-6 text-muted-foreground">
              {dictionary.hero.bookingCard.hoursValue}
            </p>
            <p className="text-sm font-medium text-foreground">
              {dictionary.hero.bookingCard.contactLabel}
            </p>
            <a
              href={SITE_CONFIG.phoneHref}
              className="text-sm leading-6 text-primary transition hover:text-accent"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
