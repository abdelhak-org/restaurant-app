import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { THEME_COOKIE_KEY } from "@/components/providers/theme-provider";
import { SUPPORTED_LOCALES } from "@/constants/locales";
import { getDictionary } from "@/lib/get-dictionary";
import { isLocale } from "@/lib/i18n";

import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const metadataBase = new URL(
  siteUrl.startsWith("http://") || siteUrl.startsWith("https://")
    ? siteUrl
    : `https://${siteUrl}`,
);

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const dictionary = await getDictionary(lang);

  return {
    metadataBase,
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        de: "/de",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const cookieStore = await cookies();
  const isDark = cookieStore.get(THEME_COOKIE_KEY)?.value === "dark";

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${cormorant.variable} h-full scroll-smooth antialiased${isDark ? " dark" : ""}`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <ThemeProvider initialTheme={isDark ? "dark" : "light"}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
