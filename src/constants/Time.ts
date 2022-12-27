/**
 * Timestamp epoch, January 1, 1970, in Julian Days.
 * @type {number}
 */
export const EPOCH = 2440587.5;

/**
 * Lunation 1 as the first new moon of 1923 at approximately
 * 02:41 UTC, January 17, 1923 per Ernest William Brown's lunar theory.
 */
export const LUNATION_BASE_JULIAN_DAY = 2423436.6115277777;

/**
 * Length of one phase (1/8 of a synodic month) in Earth days.
 */
export const PHASE_LENGTH = 3.69132346322;

/**
 * Orbital period of the Moon from perigee to apogee and back to perigee
 */
export const ANOMALISTIC_MONTH = 27.55454988;

/**
 * Length of one synodic month - lunation, or days for the phases to complete a cycle.
 * Time between two identical syzygies, equivalent of 29.53059 Earth days.
 *
 * Based on Mean Synodic Month, 2000 AD mean solar days.
 */
export const SYNODIC_MONTH = 29.53058770576;
