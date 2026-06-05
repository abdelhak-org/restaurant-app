import type enDictionary from "@/locales/en.json";

import type { SUPPORTED_LOCALES } from "@/constants/locales";

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export type Dictionary = typeof enDictionary;
