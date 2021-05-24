export module Time {
  /**
   * Lunation 1 as the first new moon of 1923 at approximately
   * 02:41 UTC, January 17, 1923 per Ernest William Brown's lunar theory.
   */
  export const lunationBaseJulianDay = 2423436.6115277777;

  /**
   * Length of one synodic month, or days for the phases to complete a cycle.
   * Time between two identical syzygies, equivalent of 29.53059 Earth days.
   *
   * Based on Mean Synodic Month, 2000 AD mean solar days.
   */
  export const synodicMonthlength: number = 29.53058770576;

  export const phaseLength: number = 3.69132346322;
}
