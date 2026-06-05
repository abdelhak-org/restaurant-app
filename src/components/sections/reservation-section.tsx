import { MapPin, PhoneCall } from "lucide-react";

import { ReservationForm } from "@/components/forms/reservation-form";
import { OPENING_HOURS, SITE_CONFIG } from "@/constants/site";
import type { Dictionary } from "@/types/i18n";

interface ReservationSectionProps {
  dictionary: Dictionary;
}

export function ReservationSection({ dictionary }: ReservationSectionProps) {
  return (
    <section
      id="reservation"
      className="section-shell scroll-mt-28 py-18 md:py-24"
    >
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="section-card rounded-[2.2rem] p-8 sm:p-10">
          <p className="eyebrow">{dictionary.reservation.eyebrow}</p>
          <h2 className="mt-4 balanced-text font-serif text-5xl text-foreground sm:text-6xl lg:text-7xl">
            {dictionary.reservation.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            {dictionary.reservation.description}
          </p>

          <div className="mt-8 space-y-4 rounded-[1.9rem] bg-muted/70 p-6 dark:bg-muted/95">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 size-5 text-primary" />
              <div className="space-y-1 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">
                  {dictionary.reservation.visitLabel}
                </p>
                <p>{SITE_CONFIG.addressLineOne}</p>
                <p>{SITE_CONFIG.addressLineTwo}</p>
                <p>{SITE_CONFIG.city}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PhoneCall className="mt-1 size-5 text-primary" />
              <div className="space-y-1 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">
                  {dictionary.reservation.callLabel}
                </p>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="transition hover:text-primary"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-[1.9rem] border border-border/65 p-6">
            <p className="font-serif text-2xl text-foreground">
              {dictionary.reservation.hoursTitle}
            </p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              {OPENING_HOURS.map((item) => (
                <div
                  key={item.key}
                  className="flex items-center justify-between gap-4 border-b border-border/50 pb-3 last:border-b-0 last:pb-0"
                >
                  <span>{dictionary.reservation.hours[item.key]}</span>
                  <span className="font-medium text-foreground">
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-card rounded-[2.2rem] p-8 sm:p-10">
          <div className="mb-6 space-y-3">
            <p className="eyebrow">{dictionary.reservation.form.eyebrow}</p>
            <h3 className="font-serif text-2xl sm:text-3xl text-foreground">
              {dictionary.reservation.form.title}
            </h3>
            <p className="text-base leading-7 text-muted-foreground">
              {dictionary.reservation.form.description}
            </p>
          </div>
          <ReservationForm dictionary={dictionary} />
        </div>
      </div>
    </section>
  );
}
