import { z } from "zod";

import {
  PARTY_SIZE_VALUES,
  SEATING_PREFERENCE_VALUES,
  TIME_SLOT_VALUES,
} from "@/constants/reservation";
import type { Dictionary } from "@/types/i18n";
import type {
  PartySize,
  ReservationTime,
  SeatingPreference,
} from "@/types/reservation";

type ReservationValidationMessages = Dictionary["reservation"]["form"]["validation"];

export function createReservationSchema(messages: ReservationValidationMessages) {
  return z.object({
    name: z.string().trim().min(2, messages.name),
    email: z.string().trim().email(messages.email),
    phone: z.string().trim().min(7, messages.phone),
    partySize: z.string().refine(
      (value): value is PartySize => PARTY_SIZE_VALUES.includes(value as PartySize),
      { message: messages.partySize }
    ),
    date: z.string().trim().min(1, messages.date),
    time: z.string().refine(
      (value): value is ReservationTime => TIME_SLOT_VALUES.includes(value as ReservationTime),
      { message: messages.time }
    ),
    seatingPreference: z.string().refine(
      (value): value is SeatingPreference =>
        SEATING_PREFERENCE_VALUES.includes(value as SeatingPreference),
      { message: messages.seatingPreference }
    ),
    notes: z.string().trim().max(400, messages.notesTooLong).optional().catch(""),
  });
}
