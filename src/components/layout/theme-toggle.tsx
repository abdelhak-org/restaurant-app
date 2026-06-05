"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";

import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  label: string;
}

export function ThemeToggle({ label }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      className="shrink-0 border-primary/35 bg-card/90 shadow-sm hover:border-primary/60 hover:bg-card dark:bg-card/80"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <SunMedium className="size-4.5" />
      ) : (
        <Moon className="size-4.5" />
      )}
    </Button>
  );
}
