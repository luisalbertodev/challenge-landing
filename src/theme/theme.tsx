import { ReactFragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { rgba } from 'polished';
import { IColors, IMode, ITheme } from 'types/Theme';

import { breakpoints } from './breakpoints';

const colorsLight: IColors = {
  primary: '#013957',
  secondary: '#35b9b6',
  light: '#fafafa',
  dark: '#000'
};

const colorsDark: IColors = {
  primary: '#013957',
  secondary: '#35b9b6',
  light: '#fafafa',
  dark: '#000'
};

const modes: IMode = {
  light: {
    primary: colorsLight.primary,
    secondary: colorsLight.secondary,
    light: colorsLight.light,
    lightShade: rgba(colorsLight.light, 0.7),
    dark: colorsLight.dark,
    darkShade: rgba(colorsLight.dark, 0.7),
    bg: colorsLight.light,
    shadow: rgba(colorsLight.dark, 0.45),
    text: rgba(colorsLight.dark, 0.7)
  },
  dark: {
    primary: colorsDark.primary,
    secondary: colorsDark.secondary,
    light: colorsDark.light,
    lightShade: rgba(colorsDark.light, 0.7),
    dark: colorsDark.dark,
    darkShade: rgba(colorsDark.dark, 0.7),
    bg: colorsDark.light,
    shadow: rgba(colorsDark.dark, 0.45),
    text: rgba(colorsDark.light, 0.7)
  }
};

export const theme: Partial<ITheme> = {
  mode: 'dark',
  colors: modes,
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 52, 56, 60, 64],
  breakpoints: {
    sm: `@media only screen (min-width:${breakpoints.sm}px)`,
    md: `@media only screen (min-width:${breakpoints.md}px)`,
    lg: `@media only screen (min-width:${breakpoints.lg}px)`,
    xl: `@media only screen (min-width:${breakpoints.xl}px)`
  }
};

interface PropsWithChildren {
  children: ReactFragment;
}

const Provider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
