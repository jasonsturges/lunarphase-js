import { Hemisphere } from "../constants/Hemisphere";
import { MoonOptions } from "../MoonOptions";

/** Default moon options factory */
export const defaultOptions: Partial<MoonOptions> = {
  hemisphere: Hemisphere.NORTHERN,
};
