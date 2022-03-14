import { ANOMALISTIC_MONTH, LUNATION_BASE_JULIAN_DAY, SYNODIC_MONTH } from "./constants/Time";
import { Hemisphere } from "./enum/Hemisphere";
import { LunarEmoji } from "./enum/LunarEmoji";
import { LunarPhase } from "./enum/LunarPhase";
import { normalize } from "./utils/MathUtil";
import * as JulianDay from "./JulianDay";

/**
 * Moon's age, or Earth days since the last new moon.
 *
 * @param {Date} date Date used for calculation.
 * @returns {number} Age of the moon, normalized within a 29.53059 Earth days calendar.
 */
export const lunarAge = (date = new Date()) => {
  const percent = lunarAgePercent(date);
  return percent * SYNODIC_MONTH;
};

/**
 * Percentage through the lunar synodic month.
 *
 * @param {Date} date Date used for calculation.
 * @returns {number} Percentage through the lunar month.
 */
export const lunarAgePercent = (date = new Date()) => {
  return normalize((JulianDay.fromDate(date) - 2451550.1) / SYNODIC_MONTH);
};

/**
 * Brown Lunation Number (BLN), per Ernest William Brown's lunar theory,
 * defining Lunation 1 as the first new moon of 1923 at
 * approximately 02:41 UTC, January 17, 1923.
 *
 * @param {Date} date Date used for calculation.
 * @returns {number} Lunation Number
 */
export const lunationNumber = (date = new Date()) => {
  return Math.round((JulianDay.fromDate(date) - LUNATION_BASE_JULIAN_DAY) / SYNODIC_MONTH) + 1;
};

/**
 * Distance to the moon measured in units of Earth radii, with
 * perigee at 56 and apogee at 63.8.
 *
 * @param {Date} date Date used for calculation
 * @returns {number} Distance to the moon in Earth radii
 */
export const lunarDistance = (date = new Date()) => {
  const julian = JulianDay.fromDate(date);
  const agePercent = lunarAgePercent(date);
  const radians = agePercent * 2 * Math.PI;
  const percent = 2 * Math.PI * normalize((julian - 2451562.2) / ANOMALISTIC_MONTH);

  return 60.4 - 3.3 * Math.cos(percent) - 0.6 * Math.cos(2 * radians - percent) - 0.5 * Math.cos(2 * radians);
};

/**
 * Name of the lunar phase per date submitted.
 *
 * @param {Date} date Date used to calculate lunar phase.
 * @returns {string} Name as string of the current lunar phase.
 */
export const lunarPhase = (date = new Date()) => {
  const age = lunarAge(date);

  if (age < 1.84566173161) return LunarPhase.NEW;
  else if (age < 5.53698519483) return LunarPhase.WAXING_CRESCENT;
  else if (age < 9.22830865805) return LunarPhase.FIRST_QUARTER;
  else if (age < 12.91963212127) return LunarPhase.WAXING_GIBBOUS;
  else if (age < 16.61095558449) return LunarPhase.FULL;
  else if (age < 20.30227904771) return LunarPhase.WANING_GIBBOUS;
  else if (age < 23.99360251093) return LunarPhase.LAST_QUARTER;
  else if (age < 27.68492597415) return LunarPhase.WANING_CRESCENT;

  return LunarPhase.NEW;
};

/**
 * Emoji of the lunar phase per date submitted.
 *
 * @param {Date} date Date used to calculate lunar phase.
 * @param {Hemisphere} hemisphere Northern or Southern Hemisphere.
 * @returns Emoji of the current lunar phase.
 */
export const lunarPhaseEmoji = (date = new Date(), hemisphere = Hemisphere.NORTHERN) => {
  const phase = lunarPhase(date);

  return emojiForLunarPhase(phase, hemisphere);
};

/**
 * Emoji for specified lunar phase.
 *
 * @param {LunarPhase} phase Lunar phase, per the LunarPhase enum
 * @param {Hemisphere} hemisphere Northern or Southern Hemisphere.
 * @returns {string} Emoji of the current lunar phase.
 */
export const emojiForLunarPhase = (phase, hemisphere = Hemisphere.NORTHERN) => {
  let emoji;

  if (hemisphere === Hemisphere.SOUTHERN) {
    emoji = LunarEmoji.SouthernHemisphere;
  } else {
    emoji = LunarEmoji.NorthernHemisphere;
  }

  switch (phase) {
    case LunarPhase.WANING_CRESCENT:
      return emoji["WANING_CRESCENT"];
    case LunarPhase.LAST_QUARTER:
      return emoji["LAST_QUARTER"];
    case LunarPhase.WANING_GIBBOUS:
      return emoji["WANING_GIBBOUS"];
    case LunarPhase.FULL:
      return emoji["FULL"];
    case LunarPhase.WAXING_GIBBOUS:
      return emoji["WAXING_GIBBOUS"];
    case LunarPhase.FIRST_QUARTER:
      return emoji["FIRST_QUARTER"];
    case LunarPhase.WAXING_CRESCENT:
      return emoji["WAXING_CRESCENT"];

    default:
    case LunarPhase.NEW:
      return emoji["NEW"];
  }
};

/**
 * Whether the moon is currently waxing (growing).
 *
 * @param {Date} date Date used for calculation.
 * @returns {boolean} True if moon is waxing.
 */
export const isWaxing = (date = new Date()) => {
  const age = lunarAge(date);
  return age <= 14.765;
};

/**
 * Whether the moon is currently waning (shrinking).
 *
 * @param {Date} date Date used for calculation.
 * @returns {boolean} True if moon is waning.
 */
export const isWaning = (date = new Date()) => {
  const age = lunarAge(date);
  return age > 14.765;
};
