/**
 * Typography System
 * Centralized font definitions for consistent text styling
 */

export const FontFamily = {
  regular: 'Roboto',
  medium: 'Roboto-Medium',
  bold: 'Roboto-Bold',
} as const;

export const FontSize = {
  xs: 12,    // Extra small - tags, labels
  sm: 13,    // Small - card descriptions
  base: 14,  // Base - body text, secondary text
  md: 15,    // Medium - body text
  lg: 16,    // Large - buttons, inputs, titles
  xl: 18,    // Extra large - section titles
  '2xl': 20, // 2X large - page titles
  '3xl': 24, // 3X large - major titles
  '4xl': 50, // 4X large - main dashboard title
} as const;

export const FontWeight = {
  regular: '400',
  medium: '600',
  bold: '700',
} as const;

export const LineHeight = {
  tight: 18,   // For small text
  normal: 20,  // For base text
  relaxed: 22, // For comfortable reading
} as const;

/**
 * Pre-composed Typography Styles
 * Common text style combinations for consistency
 */
export const Typography = {
  // Heading styles
  mainTitle: {
    fontSize: FontSize['4xl'],
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
  pageTitle: {
    fontSize: FontSize['3xl'],
    fontWeight: FontWeight.bold,
    fontFamily: FontFamily.bold,
  },
  pageTitleRegular: {
    fontSize: FontSize['2xl'],
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
  sectionTitle: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    fontFamily: FontFamily.bold,
  },
  sectionTitleGray: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
  subTitle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.medium,
    fontFamily: FontFamily.medium,
  },
  
  // Body text styles
  body: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
    lineHeight: LineHeight.relaxed,
  },
  bodyLarge: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
  bodyBase: {
    fontSize: FontSize.base,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
  
  // Button & interactive styles
  button: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.medium,
    fontFamily: FontFamily.medium,
  },
  buttonLarge: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.medium,
    fontFamily: FontFamily.medium,
  },
  
  // Card styles
  cardTitle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.medium,
    fontFamily: FontFamily.medium,
    lineHeight: LineHeight.relaxed,
  },
  cardDescription: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
    lineHeight: LineHeight.tight,
  },
  cardDescriptionBase: {
    fontSize: FontSize.base,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
    lineHeight: LineHeight.normal,
  },
  
  // Small text styles
  label: {
    fontSize: FontSize.base,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
  tag: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
  caption: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
} as const;

// Type exports
export type FontFamilyKey = keyof typeof FontFamily;
export type FontSizeKey = keyof typeof FontSize;
export type FontWeightKey = keyof typeof FontWeight;
export type LineHeightKey = keyof typeof LineHeight;
export type TypographyKey = keyof typeof Typography;

