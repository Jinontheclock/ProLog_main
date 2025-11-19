/**
 * Typography System
 * Centralized font definitions for consistent text styling
 */

export const FontFamily = {
  roboto: {
    thin: 'Roboto-Thin',
    light: 'Roboto-Light',
    regular: 'Roboto',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
    black: 'Roboto-Black',
  },
  spaceGrotesk: {
    light: 'SpaceGrotesk-Light',
    regular: 'SpaceGrotesk-Regular',
    medium: 'SpaceGrotesk-Medium',
    semiBold: 'SpaceGrotesk-SemiBold',
    bold: 'SpaceGrotesk-Bold',
  },
} as const;

export const FontSize = {
  xs: 12,
  sm: 13,
  base: 14,
  md: 15,
  lg: 16,
  xl: 18,
  '2xl': 20,
  '3xl': 24,
  '4xl': 36,
} as const;

export const LineHeight = {
  zero: 0,
  five: 0.05,
  tight: 1.15,
  normal: 1.5,
  relaxed: 1.75,
} as const;

/**
 * Pre-composed Typography Styles
 * Common text style combinations for consistency
 */
export const Typography = {
  captionLight: {
    fontFamily: FontFamily.roboto.light,
    fontSize: FontSize.sm,
    lineHeight: FontSize.sm * 1.05,
  },
  captionBold: {
    fontFamily: FontFamily.roboto.bold,
    fontSize: FontSize.sm,
    lineHeight: FontSize.sm * 1.05,
  },
  smBody: {
    fontFamily: FontFamily.roboto.regular,
    fontSize: FontSize.sm,
    lineHeight: FontSize.sm * 1.05,
  },
  contentSubtitle: {
    fontFamily: FontFamily.roboto.medium,
    fontSize: FontSize.base,
    lineHeight: FontSize.base * 1.05,
  },
  contentSuffix: {
    fontFamily: FontFamily.roboto.light,
    fontSize: FontSize.base,
    lineHeight: FontSize.base * 1.05,
  },
  contentMedium: {
    fontFamily: FontFamily.roboto.medium,
    fontSize: FontSize.md,
    lineHeight: FontSize.md * 1.05,
  },
  contentRegular: {
    fontFamily: FontFamily.roboto.regular,
    fontSize: FontSize.md,
    lineHeight: FontSize.md * 1.05,
  },
  contentBold: {
    fontFamily: FontFamily.roboto.bold,
    fontSize: FontSize.md,
    lineHeight: FontSize.md * 1.05,
  },
  buttonText: {
    fontFamily: FontFamily.roboto.medium,
    fontSize: FontSize.lg,
    lineHeight: FontSize.lg * 1.05,
  },
  bgBody: {
    fontFamily: FontFamily.roboto.regular,
    fontSize: FontSize.lg,
    lineHeight: FontSize.lg * 1.05,
  },
  contentTitle: {
    fontFamily: FontFamily.roboto.bold,
    fontSize: FontSize.xl,
    lineHeight: FontSize.xl * 1.05,
  },
  lineCompletion: {
    fontFamily: FontFamily.spaceGrotesk.light,
    fontSize: FontSize['2xl'],
    lineHeight: FontSize['2xl'] * 1.05,
  },
  sectionHeader: {
    fontFamily: FontFamily.roboto.medium,
    fontSize: FontSize['2xl'],
    lineHeight: FontSize['2xl'] * 1.05,
  },
  discrepancyTracking: {
    fontFamily: FontFamily.spaceGrotesk.regular,
    fontSize: FontSize['3xl'],
    lineHeight: FontSize['3xl'] * 1.05,
  },
  title: {
    fontFamily: FontFamily.spaceGrotesk.bold,
    fontSize: FontSize['3xl'],
    lineHeight: FontSize['3xl'] * 1.05,
  },
  workingHours: {
    fontFamily: FontFamily.spaceGrotesk.bold,
    fontSize: FontSize['4xl'],
    lineHeight: FontSize['4xl'] * 1.05,
  },
} as const;

// Type exports
export type FontFamilyKey = keyof typeof FontFamily;
export type FontSizeKey = keyof typeof FontSize;
export type LineHeightKey = keyof typeof LineHeight;
export type TypographyKey = keyof typeof Typography;

