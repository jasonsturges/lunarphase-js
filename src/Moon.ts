import { Julian } from "./Julian";
import { ANOMALISTIC_MONTH, LUNATION_BASE_JULIAN_DAY, SYNODIC_MONTH } from "./constants/Time";
import { Hemisphere } from "./constants/Hemisphere";
import { LunarPhase } from "./constants/LunarPhase";
import { MoonOptions } from "./MoonOptions";
import { NorthernHemisphereLunarEmoji, SouthernHemisphereLunarEmoji } from "./constants/LunarEmoji";
import { defaultOptions } from "./factory/defaultOptions";
import { normalize } from "./utils/MathUtil";

/**
 * Calculations relating to Earth's moon.
 */
export class Moon {
  /**
   * Moon's age, or Earth days since the last new moon,
   * normalized within a 29.53059 Earth days calendar.
   */
  static lunarAge(date = new Date()) {
    const percent = Moon.lunarAgePercent(date);
    return percent * SYNODIC_MONTH;
  }

  /**
   * Percentage through the lunar synodic month.
   */
  static lunarAgePercent(date = new Date()) {
    return normalize((Julian.fromDate(date) - 2451550.1) / SYNODIC_MONTH);
  }

  /**
   * Brown Lunation Number (BLN), per Ernest William Brown's lunar theory,
   * defining Lunation 1 as the first new moon of 1923 at
   * approximately 02:41 UTC, January 17, 1923.
   */
  static lunationNumber(date = new Date()) {
    return Math.round((Julian.fromDate(date) - LUNATION_BASE_JULIAN_DAY) / SYNODIC_MONTH) + 1;
  }

  /**
   * Distance to the moon measured in units of Earth radii, with
   * perigee at 56 and apogee at 63.8.
   */
  static lunarDistance(date = new Date()) {
    const julian = Julian.fromDate(date);
    const agePercent = Moon.lunarAgePercent(date);
    const radians = agePercent * 2 * Math.PI;
    const percent = 2 * Math.PI * normalize((julian - 2451562.2) / ANOMALISTIC_MONTH);

    return 60.4 - 3.3 * Math.cos(percent) - 0.6 * Math.cos(2 * radians - percent) - 0.5 * Math.cos(2 * radians);
  }

  /**
   * Name of the lunar phase per date submitted.
   */
  static lunarPhase(date = new Date(), options?: Partial<MoonOptions>) {
    options = {
      ...defaultOptions,
      ...options,
    };

    const age = Moon.lunarAge(date);

    if (age < 1.84566173161) return LunarPhase.NEW;
    else if (age < 5.53698519483) return LunarPhase.WAXING_CRESCENT;
    else if (age < 9.22830865805) return LunarPhase.FIRST_QUARTER;
    else if (age < 12.91963212127) return LunarPhase.WAXING_GIBBOUS;
    else if (age < 16.61095558449) return LunarPhase.FULL;
    else if (age < 20.30227904771) return LunarPhase.WANING_GIBBOUS;
    else if (age < 23.99360251093) return LunarPhase.LAST_QUARTER;
    else if (age < 27.68492597415) return LunarPhase.WANING_CRESCENT;

    return LunarPhase.NEW;
  }

  /**
   * Emoji of the lunar phase per date submitted.
   */
  static lunarPhaseEmoji(date = new Date(), options?: Partial<MoonOptions>) {
    options = {
      ...defaultOptions,
      ...options,
    };

    const phase = Moon.lunarPhase(date);

    return Moon.emojiForLunarPhase(phase, options);
  }

  /**
   * Emoji for specified lunar phase.
   */
  static emojiForLunarPhase(phase: LunarPhase, options?: Partial<MoonOptions>) {
    const { hemisphere } = {
      ...defaultOptions,
      ...options,
    };

    let emoji;

    if (hemisphere === Hemisphere.SOUTHERN) {
      emoji = SouthernHemisphereLunarEmoji;
    } else {
      emoji = NorthernHemisphereLunarEmoji;
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
  }

  /**
   * Whether the moon is currently waxing (growing).
   */
  static isWaxing(date = new Date()) {
    const age = Moon.lunarAge(date);
    return age <= 14.765;
  }

  /**
   * Whether the moon is currently waning (shrinking).
   */
  static isWaning(date = new Date()) {
    const age = Moon.lunarAge(date);
    return age > 14.765;
  }
}
