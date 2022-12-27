import { EPOCH } from "./constants/Time";

/**
 * Julian day from Gregorian date.
 */
export const fromDate = (date = new Date()): number => {
  const time = date.getTime();
  return time / 86400000 - date.getTimezoneOffset() / 1440 + EPOCH;
};

/**
 * Gregorian date from Julian day
 */
export const toDate = (julian: number): Date => {
  const date = new Date();
  date.setTime((julian - EPOCH + date.getTimezoneOffset() / 1440) * 86400000);

  return date;
};
