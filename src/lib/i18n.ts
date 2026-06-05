import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/constants/locales";
import type { Locale } from "@/types/i18n";

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function getLocaleHref(locale: Locale) {
  return `/${locale}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === DEFAULT_LOCALE ? "de" : DEFAULT_LOCALE;
}
