import { EPOCH } from "./constants/Time";

/**
 * Julian day from Gregorian date.
 * @param {Date} date Gregorian date to convert to Julian day.
 * @returns {number} Julian Day
 */
export const fromDate = (date = new Date()) => {
  const time = date.getTime();
  return time / 86400000 - date.getTimezoneOffset() / 1440 + EPOCH;
};

/**
 * Gregorian date from Julian day
 * @param {number} julian Julian dat to convert to Gregorian date
 * @returns {Date} Gregorian date
 */
export const toDate = (julian) => {
  let date = new Date();
  date.setTime((julian - EPOCH + date.getTimezoneOffset() / 1440) * 86400000);
  return date;
};
