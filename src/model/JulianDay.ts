import { Time } from "../constants/Time";

export module JulianDay {
  /**
   * Julian day from Gregorian date.
   * @param date - Gregorian date to convert to Julian day.
   */
  export const fromDate = (date: Date = new Date()): number => {
    const time = date.getTime();
    return time / 86400000 - date.getTimezoneOffset() / 1440 + Time.epoch;
  };

  /**
   * Gregorian date from Julian day
   * @param julian - Julian dat to convert to Gregorian date
   */
  export const toDate = (julian: number): Date => {
    let date = new Date();
    date.setTime((julian - Time.epoch + date.getTimezoneOffset() / 1440) * 86400000);
    return date;
  };
}
