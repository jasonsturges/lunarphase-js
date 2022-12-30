import { EPOCH } from "./constants/Time";

/**
 * Julian calendar, chronological days since noon Universal Time on January 1, 4713 BC
 */
export class Julian {
  /**
   * Julian day from Gregorian date.
   */
  static fromDate(date = new Date()): number {
    const time = date.getTime();
    return time / 86400000 - date.getTimezoneOffset() / 1440 + EPOCH;
  }

  /**
   * Gregorian date from Julian day
   */
  static toDate(julian: number): Date {
    const date = new Date();
    date.setTime((julian - EPOCH + date.getTimezoneOffset() / 1440) * 86400000);

    return date;
  }
}
