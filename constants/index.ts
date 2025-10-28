/**
 * Design System Index
 * Central export for all design system constants
 */

export { Colors } from './colors';
export type { ColorKey } from './colors';

export {
    FontFamily,
    FontSize,
    FontWeight,
    LineHeight, Typography
} from './typography';
export type {
    FontFamilyKey,
    FontSizeKey,
    FontWeightKey,
    LineHeightKey, TypographyKey
} from './typography';

export {
    BorderRadius, Dimensions, IconSize, Shadow, Spacing, ZIndex
} from './design-tokens';
export type {
    BorderRadiusKey, IconSizeKey, ShadowKey, SpacingKey
} from './design-tokens';

export * from './app-config';
