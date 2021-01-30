/**
 * In lunar calendars, a lunar month is the time between two identical syzygies.
 * This is the equivalent of 29.53059 Earth days.
 */
const LUNAR_MONTH = 29.530588853;

/**
 * Enumeration of lunar phases
 */
export const LUNAR_PHASE = {
  NEW: "New",
  WANING_CRESCENT: "Waning Crescent",
  LAST_QUARTER: "Last Quarter",
  WANING_GIBBOUS: "Waning Gibbous",
  FULL: "Full",
  WAXING_GIBBOUS: "Waxing Gibbous",
  FIRST_QUARTER: "First Quarter",
  WAXING_CRESCENT: "Waxing Crescent"
}

/**
 * Julian time from date.
 *
 * @param {Date} date - Date used for calculation.
 * @return {number} Julian date.
 */
export const getJulianDate = (date = new Date()) => {
  const time = date.getTime();
  return (time / 86400000) - (date.getTimezoneOffset() / 1440) + 2440587.5;
}

/**
 * Lunar age, normalized within a 29.53059 Earth days calendar.
 *
 * @param {Date} date - Date used for calculation.
 * @return {number} Age of the moon, normalized within a 29.53059 Earth days calendar.
 */
export const getLunarAge = (date = new Date()) => {
  const percent = getLunarAgePercent(date);
  const age = percent * LUNAR_MONTH;

  return age;
}

/**
 * Percentage through the lunar month.
 *
 * @param {Date} date - Date used for calculation.
 * @return {number} Percentage through the lunar month.
 */
export const getLunarAgePercent = (date = new Date()) => {
  return normalize((getJulianDate(date) - 2451550.1) / LUNAR_MONTH);
}

/**
 * Name of the lunar phase per date submitted.
 *
 * @param {Date} date - Date used to calculate lunar phase.
 * @return {string} Name as string of the current lunar phase.
 */
export const getLunarPhase = (date = new Date()) => {
  const age = getLunarAge(date);

  if (age < 1.84566)
    return LUNAR_PHASE.NEW;
  else if (age < 5.53699)
    return LUNAR_PHASE.WAXING_CRESCENT;
  else if (age < 9.22831)
    return LUNAR_PHASE.FIRST_QUARTER;
  else if (age < 12.91963)
    return LUNAR_PHASE.WAXING_GIBBOUS;
  else if (age < 16.61096)
    return LUNAR_PHASE.FULL;
  else if (age < 20.30228)
    return LUNAR_PHASE.WANING_GIBBOUS;
  else if (age < 23.99361)
    return LUNAR_PHASE.LAST_QUARTER;
  else if (age < 27.68493)
    return LUNAR_PHASE.WANING_CRESCENT;

  return LUNAR_PHASE.NEW;
}

/**
 * Whether the moon is currently waxing (growing).
 *
 * @param {Date} date - Date used for calculation.
 * @return {boolean} True if moon is waxing.
 */
export const isWaxing = (date = new Date()) => {
  const age = getLunarAge(date);
  return age <= 14.765;
}

/**
 * Whether the moon is currently waning (shrinking).
 *
 * @param {Date} date - Date used for calculation.
 * @return {boolean} True if moon is waning.
 */
export const isWaning = (date = new Date()) => {
  const age = getLunarAge(date);
  return age > 14.765;
}

/**
 * Normalization utility for percentage calculations.
 *
 * @param {number} value - Percent value.
 */
const normalize = value => {
  value = value - Math.floor(value);
  if (value < 0)
    value = value + 1

  return value;
}
