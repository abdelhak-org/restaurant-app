import type {
  PARTY_SIZE_VALUES,
  SEATING_PREFERENCE_VALUES,
  TIME_SLOT_VALUES,
} from "@/constants/reservation";

export type PartySize = (typeof PARTY_SIZE_VALUES)[number];

export type ReservationTime = (typeof TIME_SLOT_VALUES)[number];

export type SeatingPreference = (typeof SEATING_PREFERENCE_VALUES)[number];

export interface ReservationFormValues {
  name: string;
  email: string;
  phone: string;
  partySize: PartySize;
  date: string;
  time: ReservationTime;
  seatingPreference: SeatingPreference;
  notes: string;
}
