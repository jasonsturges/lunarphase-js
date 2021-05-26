/**
 * Normalization utility for percentage calculations.
 *
 * @param {number} value Percent value.
 * @returns {number} Normalized value
 */
export const normalize = (value) => {
  value -= Math.floor(value);
  if (value < 0) {
    value += 1;
  }

  return value;
};
