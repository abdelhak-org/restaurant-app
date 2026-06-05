import Link from "next/link";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { NAVIGATION_SECTIONS, PRIMARY_CTA_HREF } from "@/constants/navigation";
import type { Dictionary, Locale } from "@/types/i18n";

interface SiteHeaderProps {
  dictionary: Dictionary;
  locale: Locale;
}

export function SiteHeader({ dictionary, locale }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl dark:bg-background/76">
      <div className="section-shell flex items-center justify-between gap-3 py-4">
        <Link href={`/${locale}`} className="font-serif text-2xl tracking-[0.18em] text-foreground sm:text-3xl">
          Saffron Table
        </Link>

        <nav className="hidden items-center gap-4 text-sm text-muted-foreground md:flex">
          {NAVIGATION_SECTIONS.map((item) => (
            <a key={item.key} href={item.href} className="transition hover:text-primary">
              {dictionary.navigation.items[item.key]}
            </a>
          ))}
          <ThemeToggle label={dictionary.navigation.themeToggle} />
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:block">
            <LanguageSwitcher currentLocale={locale} />
          </div>
          <Link href={`/${locale}${PRIMARY_CTA_HREF}`} className="hidden sm:block">
            <Button>{dictionary.navigation.bookTable}</Button>
          </Link>
          <MobileNav dictionary={dictionary} locale={locale} />
        </div>
      </div>
      <div className="section-shell pb-3 md:hidden">
        <LanguageSwitcher currentLocale={locale} />
      </div>
    </header>
  );
}
