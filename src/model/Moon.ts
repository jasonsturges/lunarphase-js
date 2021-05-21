import { LunarPhase } from "../constants/LunarPhase";
import { LunarPhaseEmoji } from "../constants/LunarPhaseEmoji";
import { JulianDay } from "./JulianDay";

export module Moon {
  /**
   * Time between two identical syzygies, equivalent of 29.53059 Earth days.
   */
  const LUNAR_MONTH: number = 29.530588853;

  /**
   * Moon's age, or days since the last new moon
   * normalized within a 29.53059 Earth days calendar.
   *
   * @param date - Date used for calculation.
   * @returns Age of the moon, normalized within a 29.53059 Earth days calendar.
   */
  export const lunarAge = (date: Date = new Date()): number => {
    const percent: number = lunarAgePercent(date);
    return percent * LUNAR_MONTH;
  };

  /**
   * Percentage through the lunar synodic month.
   *
   * @param date - Date used for calculation.
   * @returns Percentage through the lunar month.
   */
  export const lunarAgePercent = (date: Date = new Date()): number => {
    return normalize((JulianDay.fromDate(date) - 2451550.1) / LUNAR_MONTH);
  };

  /**
   * Name of the lunar phase per date submitted.
   *
   * @param date - Date used to calculate lunar phase.
   * @returns Name as string of the current lunar phase.
   */
  export const lunarPhase = (date: Date = new Date()): LunarPhase => {
    const age = lunarAge(date);

    if (age < 1.84566) return LunarPhase.New;
    else if (age < 5.53699) return LunarPhase.WaxingCrescent;
    else if (age < 9.22831) return LunarPhase.FirstQuarter;
    else if (age < 12.91963) return LunarPhase.WaxingGibbous;
    else if (age < 16.61096) return LunarPhase.Full;
    else if (age < 20.30228) return LunarPhase.WaningGibbous;
    else if (age < 23.99361) return LunarPhase.LastQuarter;
    else if (age < 27.68493) return LunarPhase.WaningCrescent;

    return LunarPhase.New;
  };

  /**
   * Emoji of the lunar phase per date submitted.
   *
   * @param date - Date used to calculate lunar phase.
   * @returns Emoji of the current lunar phase.
   */
  export const lunarPhaseEmoji = (date: Date = new Date()): LunarPhaseEmoji => {
    const phase: LunarPhase = lunarPhase(date);

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
      case LunarPhase.WaningCrescent:
        return LunarPhaseEmoji.WaningCrescent;
      case LunarPhase.LastQuarter:
        return LunarPhaseEmoji.LastQuarter;
      case LunarPhase.WaningGibbous:
        return LunarPhaseEmoji.WaningGibbous;
      case LunarPhase.Full:
        return LunarPhaseEmoji.Full;
      case LunarPhase.WaxingGibbous:
        return LunarPhaseEmoji.WaxingGibbous;
      case LunarPhase.FirstQuarter:
        return LunarPhaseEmoji.FirstQuarter;
      case LunarPhase.WaxingCrescent:
        return LunarPhaseEmoji.WaxingCrescent;

      default:
      case LunarPhase.New:
        return LunarPhaseEmoji.New;
    }
  };

  /**
   * Whether the moon is currently waxing (growing).
   *
   * @param date - Date used for calculation.
   * @returns True if moon is waxing.
   */
  export const isWaxing = (date: Date = new Date()): boolean => {
    const age: number = lunarAge(date);
    return age <= 14.765;
  };

  /**
   * Whether the moon is currently waning (shrinking).
   *
   * @param date - Date used for calculation.
   * @returns True if moon is waning.
   */
  export const isWaning = (date: Date = new Date()): boolean => {
    const age: number = lunarAge(date);
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
