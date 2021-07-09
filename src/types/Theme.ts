export interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface Devices {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface IColors {
  primary: string;
  secondary: string;
  light: string;
  dark: string;
}

export interface IMode {
  [key: string]: {
    primary: string;
    secondary: string;
    light: string;
    lightShade: string;
    dark: string;
    darkShade: string;
    bg: string;
    shadow: string;
    text: string;
  };
}

export interface ITheme {
  mode: string;
  colors: IMode;
  space: number[];
  breakpoints: Devices;
}
