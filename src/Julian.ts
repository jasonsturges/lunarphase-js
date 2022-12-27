import { EPOCH } from "./constants/Time";

/**
 * Julian day from Gregorian date.
 * @param date Gregorian date to convert to Julian day.
 * @returns Julian Day
 */
export const fromDate = (date = new Date()): number => {
  const time = date.getTime();
  return time / 86400000 - date.getTimezoneOffset() / 1440 + EPOCH;
};

/**
 * Gregorian date from Julian day
 * @param julian Julian dat to convert to Gregorian date
 * @returns Gregorian date
 */
export const toDate = (julian: number): Date => {
  const date = new Date();
  date.setTime((julian - EPOCH + date.getTimezoneOffset() / 1440) * 86400000);

  return date;
};
