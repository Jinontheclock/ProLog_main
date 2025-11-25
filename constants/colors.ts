/**
 * Color System
 * Based on design system color guide
 */

export const Colors = {
  orange: {
    50: '#FBEDE6',
    100: '#F3C7B0',
    200: '#EDAB8A',
    300: '#E58555',
    400: '#E06D34',
    500: '#D84901',
    600: '#C54201',
    700: '#993401',
    800: '#772801',
    900: '#5B1F00',
  },
  
  green: {
    50: '#EAF1F3',
    100: '#BDD4DA',
    200: '#9DBFC8',
    300: '#71A1AF',
    400: '#558FA0',
    500: '#2B7388',
    600: '#27697C',
    700: '#1F5261',
    800: '#183F4B',
    900: '#123039',
  },
  
  grey: {
    50: '#F2F2F2',
    100: '#D5D5D5',
    200: '#C1C1C1',
    300: '#A5A5A5',
    400: '#939393',
    500: '#787878',
    600: '#6D6D6D',
    700: '#555555',
    800: '#424242',
    900: '#323232',
  },
  
  white: '#FFFFFF',
  black: '#000000',
  
  success: '#1A963E',
  error: '#D80100',
  warning: '#F0A402',
  
  backgroundGrey: 'rgb(240, 240, 240)',
  borderGrey: 'rgb(229, 229, 229)',
  
  // Semantic colors
  text: {
    primary: '#000000',
    secondary: '#787878',
    disabled: '#A5A5A5',
  },
  
  background: {
    default: '#F2F2F2',
    card: '#FFFFFF',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  
  border: {
    default: '#D5D5D5',
    light: '#E5E5E5',
  },
  
  primary: '#D84901',
  secondary: '#2B7388',
  dark: '#323232',
  
  gradients: {
    orange: 'linear-gradient(180deg, rgba(216, 73, 1, 0.50) -23.81%, rgba(216, 73, 1, 0.00) 100%)',
    green: 'linear-gradient(180deg, rgba(85, 143, 160, 0.50) -23.81%, rgba(85, 143, 160, 0.00) 100%)',
  },
} as const;

export type ColorKey = keyof typeof Colors;
export type OrangeShade = keyof typeof Colors.orange;
export type GreenShade = keyof typeof Colors.green;
export type GreyShade = keyof typeof Colors.grey;