# Color System Guide

## 📋 Overview

이 프로젝트는 통일된 컬러 시스템을 사용합니다. 모든 색상은 `constants/colors.ts`에 정의되어 있으며, 절대 하드코딩된 색상 값을 사용하지 마세요.

## 🎨 Color Palette

### State Colors
```typescript
Colors.success  // #1A963E - Success states
Colors.error    // #D80100 - Error states
```

### Orange Palette
```typescript
Colors.orange[50]   // #FBEDE6 - Lightest
Colors.orange[100]  // #F6D7C0
Colors.orange[200]  // #EDAB5A
Colors.orange[300]  // #E88555
Colors.orange[400]  // #E06D34 - Primary brand color
Colors.orange[500]  // #D84901
Colors.orange[600]  // #C54201
Colors.orange[700]  // #993401
Colors.orange[800]  // #772801
Colors.orange[900]  // #5B1F00 - Darkest
```

### Grey Palette
```typescript
Colors.grey[50]   // #F2F2F2 - Background color
Colors.grey[100]  // #D5D5D5 - Light borders
Colors.grey[200]  // #C1C1C1
Colors.grey[300]  // #A5A5A5
Colors.grey[400]  // #939393
Colors.grey[500]  // #787878
Colors.grey[600]  // #6D6D6D
Colors.grey[700]  // #555555
Colors.grey[800]  // #424242
Colors.grey[900]  // #323232 - Darkest
```

### Base Colors
```typescript
Colors.white  // #FFFFFF
Colors.black  // #000000
```

## 🎯 Semantic Colors

### Text Colors
```typescript
Colors.text.primary    // #2C2C2C - Main text
Colors.text.secondary  // #8E8E93 - Secondary/gray text
Colors.text.light      // #E0E0E0 - Light text on dark backgrounds
Colors.text.disabled   // #999999 - Disabled state text
```

### Background Colors
```typescript
Colors.background.primary   // #F2F2F7 - Main background
Colors.background.card      // #F8F8F8 - Card backgrounds
Colors.background.elevated  // #FFFFFF - Elevated elements
Colors.background.overlay   // rgba(0, 0, 0, 0.5) - Modal overlays
```

### Border Colors
```typescript
Colors.border.default  // #E5E5EA - Default borders
Colors.border.light    // #E0E0E0 - Light borders
Colors.border.dark     // #D5D5D5 - Darker borders
```

### UI Colors
```typescript
Colors.primary  // #E06D34 - Primary brand color (orange-400)
Colors.dark     // #2C2C2C - Dark elements
```

## 📖 Usage Examples

### ✅ Good - Using Colors constant
```typescript
import { Colors } from '@/constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey[50],
  },
  title: {
    color: Colors.text.primary,
  },
  button: {
    backgroundColor: Colors.primary,
  },
  error: {
    color: Colors.error,
  },
});
```

### ❌ Bad - Hard-coded colors
```typescript
// DON'T DO THIS!
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',  // ❌ Hard-coded
  },
  title: {
    color: '#2C2C2C',  // ❌ Hard-coded
  },
});
```

## 🔍 Finding the Right Color

### For Text
- **Main content**: `Colors.text.primary`
- **Secondary/Helper text**: `Colors.text.secondary`
- **Disabled text**: `Colors.text.disabled`
- **Text on dark backgrounds**: `Colors.text.light`

### For Backgrounds
- **Page background**: `Colors.grey[50]` or `Colors.background.primary`
- **Card/Panel**: `Colors.background.card` or `Colors.white`
- **Elevated elements**: `Colors.white`
- **Modal overlay**: `Colors.background.overlay`

### For Borders
- **Default borders**: `Colors.border.default`
- **Light separators**: `Colors.border.light`
- **Darker borders**: `Colors.grey[100]` or `Colors.border.dark`

### For Interactive Elements
- **Primary buttons**: `Colors.primary`
- **Dark buttons**: `Colors.dark`
- **Success states**: `Colors.success`
- **Error states**: `Colors.error`

## 🚀 Common Patterns

### Button Colors
```typescript
// Primary button
backgroundColor: Colors.primary,
color: Colors.white

// Secondary button
backgroundColor: Colors.white,
color: Colors.text.primary

// Dark button
backgroundColor: Colors.dark,
color: Colors.white
```

### Card Styling
```typescript
backgroundColor: Colors.white,
shadowColor: Colors.black,
borderColor: Colors.border.light
```

### Text Hierarchy
```typescript
// H1/Title
color: Colors.text.primary,
fontSize: 24

// Body text
color: Colors.text.primary,
fontSize: 16

// Caption/Helper
color: Colors.text.secondary,
fontSize: 14
```

## 📝 Notes

- **Never** use hard-coded hex colors in component files
- **Always** import from `@/constants/colors`
- Use semantic colors (e.g., `Colors.text.primary`) over specific values when possible
- Grey palette is for neutral UI elements
- Orange palette is for brand and accent colors
- Keep accessibility in mind - ensure sufficient contrast ratios

## 🔄 Migration

If you find hard-coded colors in the codebase:

1. Import Colors: `import { Colors } from '@/constants/colors';`
2. Replace hex value with appropriate color constant
3. Test visually to ensure no changes in appearance
4. Update related styles to use the same pattern

---

For any questions about color usage, refer to this guide or check existing implementations in `lib/common-styles.ts`.

