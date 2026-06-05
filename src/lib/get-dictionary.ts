import "server-only";

import type { Locale, Dictionary } from "@/types/i18n";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/locales/en.json").then((module) => module.default),
  de: () => import("@/locales/de.json").then((module) => module.default),
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
