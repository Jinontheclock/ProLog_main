# Neomorphism Style Guide

This guide contains the neomorphism (soft UI) shadow styles used in ProLog.

## CSS Styles (for web)

### Neo Projected
Used for elements that appear to be raised from the surface.

```css
.neo-projected {
  box-shadow: 
    0.31px 0.31px 0.62px 0 rgba(255, 255, 255, 0.30) inset,
    -0.31px -0.31px 0.62px 0 rgba(199, 199, 199, 0.50) inset,
    -6.18px -6.18px 8.36px 0 rgba(255, 255, 255, 0.90),
    4.18px 4.18px 4.45px 0 rgba(199, 199, 199, 0.80);
}
```

### Neo Submerged
Used for elements that appear to be pressed into the surface.

```css
.neo-submerged {
  box-shadow:
    -4.63px 4.63px 9.27px 0 rgba(208, 208, 208, 0.20) inset,
    4.63px -4.633px 9.27px 0 rgba(208, 208, 208, 0.20) inset,
    -5.63px -5.63px 5.27px 0 rgba(255, 255, 255, 0.90) inset,
    3.63px 3.63px 4.74px 0 rgba(208, 208, 208, 0.90) inset;
}
```

### Tiny Projected
Smaller version of neo-projected for compact elements.

```css
.tiny-projected {
  box-shadow: 
    0.207px 0.207px 0.413px 0 rgba(255, 255, 255, 0.30) inset,
    -0.207px -0.207px 0.413px 0 rgba(199, 199, 199, 0.50) inset,
    -4.12px -4.12px 5.573px 0 rgba(255, 255, 255, 0.90),
    2.787px 2.787px 2.967px 0 rgba(199, 199, 199, 0.80);
}
```

### Bar Submerged
Used for navigation bars or horizontal elements with submerged effect.

```css
.bar-submerged {
  box-shadow:
    -2.701px 2.701px 5.408px 0 rgba(208, 208, 208, 0.20) inset,
    2.701px -2.703px 5.408px 0 rgba(208, 208, 208, 0.20) inset,
    -3.284px -3.284px 3.074px 0 rgba(255, 255, 255, 0.90) inset,
    1.167px 1.167px 1.75px 0 rgba(208, 208, 208, 0.90) inset;
}
```

### Smaller Projected
Another variant of projected style for different element sizes.

```css
.smaller-projected {
  box-shadow:
    0.31px 0.31px 0.62px 0 rgba(255, 255, 255, 0.30) inset,
    -0.31px -0.31px 0.62px 0 rgba(199, 199, 199, 0.50) inset,
    -5px -5px 6px 0 rgba(255, 255, 255, 0.90),
    3px 3px 3px 0 rgba(199, 199, 199, 0.80);
}
```

### Drop Shadow
Standard drop shadow for elevated elements.

```css
.drop-shadow {
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.25);
}
```

## React Native Usage

In React Native, use the adapted styles from `CommonStyles`:

```typescript
import { CommonStyles } from '@/lib/common-styles';

// Single shadow examples:
<View style={[styles.button, CommonStyles.neoProjected]}>
  {/* Button content */}
</View>

<View style={[styles.card, CommonStyles.dropShadow]}>
  {/* Card content */}
</View>

// Double shadow example (requires nested Views):
<View style={[styles.container, CommonStyles.neoDoubleOuter]}>
  <View style={[CommonStyles.neoDoubleInner, { padding: 16 }]}>
    {/* Content here */}
  </View>
</View>

// Inset shadow example (눌려 들어간 스타일):
<View style={[styles.container, CommonStyles.neoInsetOuter]}>
  <View style={[CommonStyles.neoInsetInner, { padding: 16 }]}>
    {/* Content here */}
  </View>
</View>
```

## Available Styles in CommonStyles

- `CommonStyles.neoProjected` - Raised/projected effect
- `CommonStyles.neoSubmerged` - Pressed/submerged effect  
- `CommonStyles.tinyProjected` - Small raised effect
- `CommonStyles.barSubmerged` - Navigation bar submerged effect
- `CommonStyles.smallerProjected` - Alternative projected effect
- `CommonStyles.dropShadow` - Standard drop shadow
- `CommonStyles.neoDoubleOuter` - Double shadow effect (outer layer with light shadow)
- `CommonStyles.neoDoubleInner` - Double shadow effect (inner layer with dark shadow)
- `CommonStyles.neoInsetOuter` - Inset shadow effect (outer layer with dark shadow) - 눌려 들어간 스타일
- `CommonStyles.neoInsetInner` - Inset shadow effect (inner layer with light shadow) - 눌려 들어간 스타일

## Notes

- **Inset Shadows**: React Native doesn't support inset shadows natively. The styles in `CommonStyles` are adapted to work within React Native's limitations.
- **Web vs Native**: For web-specific implementations, use the CSS classes above. For React Native, use the CommonStyles variants.
- **Background Colors**: Neomorphism works best with light gray backgrounds (#F2F2F2 or similar).
- **Consistency**: Use these predefined styles to maintain consistent depth and lighting across the app.

## Design Principles

1. **Light Source**: All shadows assume a light source from the top-left
2. **Subtlety**: Neomorphism is about subtle depth, not dramatic shadows
3. **Background**: Always use on light gray backgrounds (#F2F2F2) for best effect
4. **Contrast**: Maintain sufficient contrast for accessibility
5. **Double Shadow (Raised)**: For stronger raised neomorphism effects, use nested Views with `neoDoubleOuter` and `neoDoubleInner`
   - Outer View: Light shadow from top-left (simulates raised surface catching light)
   - Inner View: Dark shadow from bottom-right (simulates cast shadow)
6. **Inset Shadow (Pressed)**: For pressed/sunken effects, use nested Views with `neoInsetOuter` and `neoInsetInner`
   - Outer View: Dark shadow from top-left (simulates recessed surface)
   - Inner View: Light shadow from bottom-right (simulates depth and ambient light)

