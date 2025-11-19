/**
 * Design Tokens
 * Centralized design values for consistent UI styling
 */

/**
 * Spacing System
 * Based on 4px grid system
 */
export const Spacing = {
  xs: 4,      // Extra small spacing
  sm: 8,      // Small spacing - gaps, small padding
  md: 12,     // Medium spacing - input padding
  base: 16,   // Base spacing - standard padding/margin
  lg: 20,     // Large spacing - section padding
  xl: 24,     // Extra large spacing
  '2xl': 32,  // 2X large spacing
  '3xl': 40,  // 3X large spacing
  '4xl': 60,  // 4X large spacing
} as const;

/**
 * Border Radius System
 */
export const BorderRadius = {
  none: 0,
  xs: 2,      // Extra small - handles, dividers
  sm: 8,      // Small - filter tabs
  base: 12,   // Base - buttons, inputs
  md: 16,     // Medium - cards, modals
  lg: 20,     // Large - modal tops
  xl: 24,     // Extra large - large buttons
  '2xl': 26,  // 2X large - nav bar items
  '3xl': 30,  // 3X large
  full: 60,   // Full round - nav bar
} as const;

/**
 * Shadow System
 * Consistent elevation levels
 */
export const Shadow = {
  none: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  base: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 12,
  },
} as const;

/**
 * Icon Sizes
 */
export const IconSize = {
  xs: 16,
  sm: 20,
  base: 24,
  lg: 28,
  xl: 32,
} as const;

/**
 * Common UI Dimensions
 */
export const Dimensions = {
  buttonHeight: {
    sm: 36,
    base: 44,
    lg: 52,
  },
  inputHeight: {
    base: 44,
    lg: 52,
  },
  navBarHeight: 52,
  tabBarHeight: 52,
} as const;

/**
 * Z-Index Layers
 */
export const ZIndex = {
  base: 1,
  dropdown: 10,
  overlay: 100,
  modal: 1000,
  popover: 1100,
  toast: 1200,
} as const;

// Type exports
export type SpacingKey = keyof typeof Spacing;
export type BorderRadiusKey = keyof typeof BorderRadius;
export type ShadowKey = keyof typeof Shadow;
export type IconSizeKey = keyof typeof IconSize;

