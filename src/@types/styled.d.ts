import "styled-components/native";
import { defaultTheme } from "../styles/theme/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType {}
}
