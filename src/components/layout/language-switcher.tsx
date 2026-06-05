import Link from "next/link";

import { LOCALE_LABELS, SUPPORTED_LOCALES } from "@/constants/locales";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/i18n";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center rounded-full border border-border/70 bg-background/85 p-1 text-xs font-medium shadow-sm dark:bg-card/70">
      {SUPPORTED_LOCALES.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={`/${locale}`}
            className={cn(
              "rounded-full px-3 py-1.5 transition",
              isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {LOCALE_LABELS[locale]}
          </Link>
        );
      })}
    </div>
  );
}
