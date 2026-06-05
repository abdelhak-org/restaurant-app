"use client";

import { useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PARTY_SIZE_VALUES, SEATING_PREFERENCE_VALUES, TIME_SLOT_VALUES } from "@/constants/reservation";
import { createReservationSchema } from "@/lib/validations/reservation";
import type { Dictionary } from "@/types/i18n";

interface ReservationFormProps {
  dictionary: Dictionary;
}

export function ReservationForm({ dictionary }: ReservationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const schema = useMemo(
    () => createReservationSchema(dictionary.reservation.form.validation),
    [dictionary.reservation.form.validation]
  );

  type ReservationFormState = z.input<typeof schema>;

  const form = useForm<ReservationFormState>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      partySize: "2",
      date: "",
      time: "19:30",
      seatingPreference: "dining-room",
      notes: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = handleSubmit(() => {
    setSubmitted(true);
  });

  const fields = dictionary.reservation.form.fields;

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{fields.name.label}</Label>
          <Input id="name" placeholder={fields.name.placeholder} aria-invalid={Boolean(errors.name)} {...register("name")} />
          {errors.name ? <p className="text-sm text-accent">{errors.name.message}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{fields.email.label}</Label>
          <Input id="email" type="email" placeholder={fields.email.placeholder} aria-invalid={Boolean(errors.email)} {...register("email")} />
          {errors.email ? <p className="text-sm text-accent">{errors.email.message}</p> : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2 lg:col-span-1">
          <Label htmlFor="phone">{fields.phone.label}</Label>
          <Input id="phone" placeholder={fields.phone.placeholder} aria-invalid={Boolean(errors.phone)} {...register("phone")} />
          {errors.phone ? <p className="text-sm text-accent">{errors.phone.message}</p> : null}
        </div>
        <div className="space-y-2 lg:col-span-1">
          <Label htmlFor="partySize">{fields.partySize.label}</Label>
          <Select id="partySize" aria-invalid={Boolean(errors.partySize)} {...register("partySize")}>
            {PARTY_SIZE_VALUES.map((value) => (
              <option key={value} value={value}>
                {dictionary.reservation.form.options.partySize[value]}
              </option>
            ))}
          </Select>
          {errors.partySize ? <p className="text-sm text-accent">{errors.partySize.message}</p> : null}
        </div>
        <div className="space-y-2 lg:col-span-1">
          <Label htmlFor="date">{fields.date.label}</Label>
          <Input id="date" type="date" aria-invalid={Boolean(errors.date)} {...register("date")} />
          {errors.date ? <p className="text-sm text-accent">{errors.date.message}</p> : null}
        </div>
        <div className="space-y-2 lg:col-span-1">
          <Label htmlFor="time">{fields.time.label}</Label>
          <Select id="time" aria-invalid={Boolean(errors.time)} {...register("time")}>
            {TIME_SLOT_VALUES.map((value) => (
              <option key={value} value={value}>
                {dictionary.reservation.form.options.time[value]}
              </option>
            ))}
          </Select>
          {errors.time ? <p className="text-sm text-accent">{errors.time.message}</p> : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-2">
          <Label htmlFor="seatingPreference">{fields.seatingPreference.label}</Label>
          <Select
            id="seatingPreference"
            aria-invalid={Boolean(errors.seatingPreference)}
            {...register("seatingPreference")}
          >
            {SEATING_PREFERENCE_VALUES.map((value) => (
              <option key={value} value={value}>
                {dictionary.reservation.form.options.seatingPreference[value]}
              </option>
            ))}
          </Select>
          {errors.seatingPreference ? (
            <p className="text-sm text-accent">{errors.seatingPreference.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="notes">{fields.notes.label}</Label>
          <Textarea id="notes" placeholder={fields.notes.placeholder} aria-invalid={Boolean(errors.notes)} {...register("notes")} />
          {errors.notes ? <p className="text-sm text-accent">{errors.notes.message}</p> : null}
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-border/70 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1 text-sm text-muted-foreground">
          <p>{dictionary.reservation.form.helper}</p>
          {submitted ? <p className="font-medium text-secondary">{dictionary.reservation.form.success}</p> : null}
        </div>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {dictionary.reservation.form.submit}
        </Button>
      </div>
    </form>
  );
}
