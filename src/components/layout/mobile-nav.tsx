"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAVIGATION_SECTIONS, PRIMARY_CTA_HREF } from "@/constants/navigation";
import type { Dictionary, Locale } from "@/types/i18n";

interface MobileNavProps {
  dictionary: Dictionary;
  locale: Locale;
}

export function MobileNav({ dictionary, locale }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden" aria-label={dictionary.navigation.menuToggle}>
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <p className="eyebrow">{dictionary.navigation.mobileEyebrow}</p>
          <SheetTitle>Saffron Table</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-3 text-base">
          {NAVIGATION_SECTIONS.map((item) => (
            <SheetClose asChild key={item.key}>
              <Link
                href={`/${locale}${item.href}`}
                className="rounded-2xl border border-border/60 px-4 py-3 text-foreground transition hover:border-primary/50 hover:text-primary"
              >
                {dictionary.navigation.items[item.key]}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="flex items-center justify-between rounded-2xl border border-border/60 px-4 py-3 text-sm text-foreground">
          <span>{dictionary.navigation.themeToggle}</span>
          <ThemeToggle label={dictionary.navigation.themeToggle} />
        </div>
        <SheetClose asChild>
          <Link href={`/${locale}${PRIMARY_CTA_HREF}`}>
            <Button className="w-full">{dictionary.navigation.bookTable}</Button>
          </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
