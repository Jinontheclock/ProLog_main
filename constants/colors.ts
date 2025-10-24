/**
 * Color System
 * Based on design system color guide
 */

export const Colors = {
  // State Colors
  success: '#1A963E',        // rgb(26, 150, 62)
  error: '#D80100',          // rgb(216, 1, 0)
  
  // Orange Palette
  orange: {
    50: '#FBEDE6',           // rgb(251, 237, 230)
    100: '#F6D7C0',          // rgb(243, 199, 176)
    200: '#EDAB5A',          // rgb(237, 171, 138)
    300: '#E88555',          // rgb(229, 133, 85)
    400: '#E06D34',          // rgb(224, 109, 52)
    500: '#D84901',          // rgb(216, 73, 1)
    600: '#C54201',          // rgb(197, 66, 1)
    700: '#993401',          // rgb(153, 52, 1)
    800: '#772801',          // rgb(119, 40, 1)
    900: '#5B1F00',          // rgb(91, 31, 0)
  },
  
  // Grey Palette
  grey: {
    50: '#F2F2F2',           // rgb(242, 242, 242)
    100: '#D5D5D5',          // rgb(213, 213, 213)
    200: '#C1C1C1',          // rgb(193, 193, 193)
    300: '#A5A5A5',          // rgb(165, 165, 165)
    400: '#939393',          // rgb(147, 147, 147)
    500: '#787878',          // rgb(120, 120, 120)
    600: '#6D6D6D',          // rgb(109, 109, 109)
    700: '#555555',          // rgb(85, 85, 85)
    800: '#424242',          // rgb(66, 66, 66)
    900: '#323232',          // rgb(50, 50, 50)
  },
  
  // Base Colors
  white: '#FFFFFF',
  black: '#000000',
  
  // Common UI Colors (mapped from existing code)
  text: {
    primary: '#2C2C2C',      // Main text color
    secondary: '#8E8E93',    // Secondary/gray text
    light: '#E0E0E0',        // Light text on dark backgrounds
    disabled: '#999999',     // Disabled state text
  },
  
  background: {
    primary: '#F2F2F2',      // Main background (grey-50)
    card: '#F8F8F8',         // Card backgrounds
    elevated: '#FFFFFF',     // Elevated elements
    overlay: 'rgba(0, 0, 0, 0.5)', // Modal overlays
  },
  
  border: {
    default: '#E5E5EA',      // Default borders
    light: '#E0E0E0',        // Light borders
    dark: '#D5D5D5',         // Darker borders (grey-100)
  },
  
  // Semantic Colors
  primary: '#E06D34',        // Primary brand color (orange-400)
  dark: '#2C2C2C',           // Dark elements
} as const;

// Type export for TypeScript
export type ColorKey = keyof typeof Colors;

