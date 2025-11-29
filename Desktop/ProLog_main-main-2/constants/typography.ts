export const FontFamily = {
    // Roboto
    roboto: {
        thin: 'Roboto-Thin',
        light: 'Roboto-Light',
        regular: 'Roboto-Regular',
        medium: 'Roboto-Medium',
        bold: 'Roboto-Bold',
        black: 'Roboto-Black',
    },

    // Space Grotesk
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
    sm: 14,
    base: 16,
    md: 18,
    lg: 20,
    xl: 24,
    '2xl': 28,
    '3xl': 32,
    '4xl': 36,
} as const;

export const LineHeight = {
    '0%': 0,
    '5%': 1.05,
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
} as const;

export const Typography = {
    // Caption styles
    captionLight: {
        fontFamily: FontFamily.spaceGrotesk.regular,
        fontSize: 10,
        lineHeight: 14 * 1.05,
    },
    captionBold: {
        fontFamily: FontFamily.spaceGrotesk.bold,
        fontSize: 10,
        lineHeight: 14 * 1.05,
    },

    // Small body
    smBody: {
        fontFamily: FontFamily.roboto.regular,
        fontSize: 12,
        lineHeight: 16 * 1.05,
    },
    body: {
        fontFamily: FontFamily.roboto.regular,
        fontSize: FontSize.base,
        lineHeight: 20,
    },
    bodyBase: {
        fontFamily: FontFamily.roboto.regular,
        fontSize: FontSize.sm,
        lineHeight: 18,
    },
    tag: {
        fontFamily: FontFamily.roboto.medium,
        fontSize: FontSize.sm,
        lineHeight: 18,
    },
    button: {
        fontFamily: FontFamily.roboto.medium,
        fontSize: FontSize.base,
        lineHeight: 20,
    },

    // Content styles
    contentSubtitle: {
        fontFamily: FontFamily.roboto.light,
        fontSize: 14,
        lineHeight: 18 * 1.05,
    },
    contentSuffix: {
        fontFamily: FontFamily.spaceGrotesk.light,
        fontSize: 16,
        lineHeight: 20 * 1.05,
    },
    contentMedium: {
        fontFamily: FontFamily.roboto.medium,
        fontSize: 16,
        lineHeight: 24 * 1.05,
    },
    contentRegular: {
        fontFamily: FontFamily.spaceGrotesk.regular,
        fontSize: 24,
        lineHeight: 28 * 1.05,
    },
    contentBold: {
        fontFamily: FontFamily.spaceGrotesk.bold,
        fontSize: 24,
        lineHeight: 28 * 1.05,
    },

    // Button text
    buttonText: {
        fontFamily: FontFamily.roboto.medium,
        fontSize: 14,
        lineHeight: 18 * 1.05,
    },

    // Background body
    bgBody: {
        fontFamily: FontFamily.roboto.regular,
        fontSize: 16,
        lineHeight: 16 * 1.05,
    },

    // Title styles
    contentTitle: {
        fontFamily: FontFamily.roboto.medium,
        fontSize: 16,
        lineHeight: 20 * 1.05,
    },
    mainTitle: {
        fontFamily: FontFamily.spaceGrotesk.bold,
        fontSize: FontSize['4xl'],
        lineHeight: 40,
    },
    pageTitle: {
        fontFamily: FontFamily.spaceGrotesk.medium,
        fontSize: FontSize['2xl'],
        lineHeight: 32,
    },
    pageTitleRegular: {
        fontFamily: FontFamily.spaceGrotesk.regular,
        fontSize: FontSize['2xl'],
        lineHeight: 32,
    },
    sectionTitle: {
        fontFamily: FontFamily.spaceGrotesk.medium,
        fontSize: FontSize.xl,
        lineHeight: 28,
    },
    sectionTitleGray: {
        fontFamily: FontFamily.spaceGrotesk.medium,
        fontSize: FontSize.xl,
        lineHeight: 28,
    },
    subTitle: {
        fontFamily: FontFamily.roboto.medium,
        fontSize: FontSize.lg,
        lineHeight: 24,
    },
    cardTitle: {
        fontFamily: FontFamily.roboto.medium,
        fontSize: FontSize.lg,
        lineHeight: 24,
    },
    lineCompletion: {
        fontFamily: FontFamily.roboto.medium,
        fontSize: 16,
        lineHeight: 16 * 1.05,
    },
    sectionHeader: {
        fontFamily: FontFamily.spaceGrotesk.regular,
        fontSize: 20,
        lineHeight: 24 * 1.05,
    },
    discrepancyTracking: {
        fontFamily: FontFamily.spaceGrotesk.regular,
        fontSize: 20,
        lineHeight: 20 * 1.05,
    },
    title: {
        fontFamily: FontFamily.spaceGrotesk.medium,
        fontSize: 32,
        lineHeight: 36 * 1.05,
    },
    workingHours: {
        fontFamily: FontFamily.spaceGrotesk.medium,
        fontSize: 36,
        lineHeight: 36 * 1.05,
    },

    bigBody: {
        fontFamily: FontFamily.roboto.regular,
        fontSize: 16,
        lineHeight: 20 * 1.05,
    },
        bodyLarge: {
        fontFamily: FontFamily.roboto.regular,
        fontSize: FontSize.md,
        lineHeight: 22,
    },
    competencyTitle: {
        fontFamily: FontFamily.roboto.medium,
        fontSize: 28,
        lineHeight: 32 * 1.05,
    },
    cardDescription: {
        fontFamily: FontFamily.roboto.regular,
        fontSize: FontSize.base,
        lineHeight: 20,
    },
    cardDescriptionBase: {
        fontFamily: FontFamily.roboto.regular,
        fontSize: FontSize.base,
        lineHeight: 20,
    },
} as const;

export type FontFamilyKey = keyof typeof FontFamily;
export type FontSizeKey = keyof typeof FontSize;
export type LineHeightKey = keyof typeof LineHeight;
export type TypographyKey = keyof typeof Typography;
