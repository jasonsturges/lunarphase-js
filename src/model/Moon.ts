import { LunarPhase } from "../constants/LunarPhase";
import { LunarPhaseEmoji } from "../constants/LunarPhaseEmoji";
import { JulianDate } from "./JulianDate";

export module Moon {
  /**
   * Time between two identical syzygies, equivalent of 29.53059 Earth days.
   */
  const LUNAR_MONTH: number = 29.530588853;

  /**
   * Lunar age, normalized within a 29.53059 Earth days calendar.
   *
   * @param date - Date used for calculation.
   * @returns Age of the moon, normalized within a 29.53059 Earth days calendar.
   */
  export const getLunarAge = (date: Date = new Date()): number => {
    const percent: number = getLunarAgePercent(date);
    return percent * LUNAR_MONTH;
  };

  /**
   * Percentage through the lunar month.
   *
   * @param date - Date used for calculation.
   * @returns Percentage through the lunar month.
   */
  export const getLunarAgePercent = (date: Date = new Date()): number => {
    return normalize((JulianDate.fromDate(date) - 2451550.1) / LUNAR_MONTH);
  };

  /**
   * Name of the lunar phase per date submitted.
   *
   * @param date - Date used to calculate lunar phase.
   * @returns Name as string of the current lunar phase.
   */
  export const getLunarPhase = (date: Date = new Date()): LunarPhase => {
    const age = getLunarAge(date);

    if (age < 1.84566) return LunarPhase.NEW;
    else if (age < 5.53699) return LunarPhase.WAXING_CRESCENT;
    else if (age < 9.22831) return LunarPhase.FIRST_QUARTER;
    else if (age < 12.91963) return LunarPhase.WAXING_GIBBOUS;
    else if (age < 16.61096) return LunarPhase.FULL;
    else if (age < 20.30228) return LunarPhase.WANING_GIBBOUS;
    else if (age < 23.99361) return LunarPhase.LAST_QUARTER;
    else if (age < 27.68493) return LunarPhase.WANING_CRESCENT;

    return LunarPhase.NEW;
  };

  /**
   * Emoji of the lunar phase per date submitted.
   *
   * @param date - Date used to calculate lunar phase.
   * @returns Emoji of the current lunar phase.
   */
  export const getLunarPhaseEmoji = (
    date: Date = new Date()
  ): LunarPhaseEmoji => {
    const phase: LunarPhase = getLunarPhase(date);

    return emojiForLunarPhase(phase);
  };

  /**
   * Emoji for specified lunar phase
   *
   * @param phase - Lunar phase, per the LunarPhase enum
   * @returns Emoji of the current lunar phase.
   */
  export const emojiForLunarPhase = (phase: LunarPhase): LunarPhaseEmoji => {
    switch (phase) {
      case LunarPhase.WANING_CRESCENT:
        return LunarPhaseEmoji.WANING_CRESCENT;
      case LunarPhase.LAST_QUARTER:
        return LunarPhaseEmoji.LAST_QUARTER;
      case LunarPhase.WANING_GIBBOUS:
        return LunarPhaseEmoji.WANING_GIBBOUS;
      case LunarPhase.FULL:
        return LunarPhaseEmoji.FULL;
      case LunarPhase.WAXING_GIBBOUS:
        return LunarPhaseEmoji.WAXING_GIBBOUS;
      case LunarPhase.FIRST_QUARTER:
        return LunarPhaseEmoji.FIRST_QUARTER;
      case LunarPhase.WAXING_CRESCENT:
        return LunarPhaseEmoji.WAXING_CRESCENT;

      default:
      case LunarPhase.NEW:
        return LunarPhaseEmoji.NEW;
    }
  };

  /**
   * Whether the moon is currently waxing (growing).
   *
   * @param date - Date used for calculation.
   * @returns True if moon is waxing.
   */
  export const isWaxing = (date: Date = new Date()): boolean => {
    const age: number = getLunarAge(date);
    return age <= 14.765;
  };

  /**
   * Whether the moon is currently waning (shrinking).
   *
   * @param date - Date used for calculation.
   * @returns True if moon is waning.
   */
  export const isWaning = (date: Date = new Date()): boolean => {
    const age: number = getLunarAge(date);
    return age > 14.765;
  };

  /**
   * Normalization utility for percentage calculations.
   *
   * @param value - Percent value.
   */
  export const normalize = (value: number): number => {
    value = value - Math.floor(value);
    if (value < 0) value = value + 1;

    return value;
  };
}
