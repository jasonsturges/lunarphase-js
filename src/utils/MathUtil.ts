/**
 * Normalization utility for percentage calculations.
 */
export const normalize = (value: number): number => {
  value -= Math.floor(value);
  if (value < 0) value += 1;

  return value;
};
