# Design System

## 개요
ProLog 앱의 중앙화된 디자인 시스템입니다. 모든 UI 컴포넌트는 이 시스템을 기반으로 구축됩니다.

## 구성 요소

### 1. Colors (`constants/colors.ts`)
앱 전체의 색상 팔레트

**주요 색상:**
- **Primary**: `#E06D34` (Orange-400)
- **Success**: `#1A963E`
- **Error**: `#D80100`

**Grey Palette:**
- grey[50] ~ grey[900] (8단계)

**Semantic Colors:**
- `Colors.text.primary` / `secondary` / `light` / `disabled`
- `Colors.background.primary` / `card` / `elevated` / `overlay`
- `Colors.border.default` / `light` / `dark`

### 2. Typography (`constants/typography.ts`)
폰트 및 텍스트 스타일

**Font Family:**
```typescript
FontFamily.regular   // Roboto
FontFamily.medium    // Roboto-Medium
FontFamily.bold      // Roboto-Bold
```

**Font Size:**
- xs(12), sm(13), base(14), md(15), lg(16)
- xl(18), 2xl(20), 3xl(24), 4xl(50)

**Pre-composed Styles:**
- `Typography.mainTitle` - 메인 타이틀
- `Typography.pageTitle` - 페이지 타이틀
- `Typography.body` - 본문 텍스트
- `Typography.button` - 버튼 텍스트
- 등등...

### 3. Design Tokens (`constants/design-tokens.ts`)
Spacing, Border Radius, Shadow 등의 디자인 토큰

#### Spacing (4px 그리드 시스템)
```typescript
Spacing.xs      // 4px
Spacing.sm      // 8px
Spacing.md      // 12px
Spacing.base    // 16px
Spacing.lg      // 20px
Spacing.xl      // 24px
Spacing['2xl']  // 32px
Spacing['3xl']  // 40px
Spacing['4xl']  // 60px
```

#### Border Radius
```typescript
BorderRadius.none   // 0
BorderRadius.xs     // 2px - 핸들, 구분선
BorderRadius.sm     // 8px - 필터 탭
BorderRadius.base   // 12px - 버튼, 입력
BorderRadius.md     // 16px - 카드, 모달
BorderRadius.lg     // 20px - 모달 상단
BorderRadius.xl     // 24px - 큰 버튼
BorderRadius['2xl'] // 26px - 네비 바 아이템
BorderRadius.full   // 60px - 네비 바
```

#### Shadow (Elevation)
```typescript
Shadow.none   // 그림자 없음
Shadow.sm     // 작은 그림자
Shadow.base   // 기본 그림자
Shadow.md     // 중간 그림자
Shadow.lg     // 큰 그림자
Shadow.xl     // 매우 큰 그림자
```

#### Icon Size
```typescript
IconSize.xs    // 16px
IconSize.sm    // 20px
IconSize.base  // 24px
IconSize.lg    // 28px
IconSize.xl    // 32px
```

### 4. Common Styles (`lib/common-styles.ts`)
재사용 가능한 공통 스타일 컴포넌트

**Categories:**
- Container styles: `container`, `whiteContainer`, `scrollView`
- Header styles: `header`, `headerCompact`, `backButton`
- Title styles: `mainTitle`, `pageTitle`, `sectionTitle`
- Card styles: `card`, `whiteCard`, `cardCompact`
- Button styles: `primaryButton`, `whiteButton`
- Icon styles: `icon24`, `icon20`, `icon16`
- Input styles: `searchContainer`, `searchInput`
- Modal styles: `modalOverlay`, `modalContainer`
- Text styles: `bodyText`, `grayText`

## 사용 방법

### 기본 패턴

#### 1. Colors 사용
```typescript
import { Colors } from '@/constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey[50],
    borderColor: Colors.border.default,
  },
  text: {
    color: Colors.text.primary,
  },
});
```

#### 2. Typography 사용
```typescript
import { Typography } from '@/constants/typography';

const styles = StyleSheet.create({
  title: {
    ...Typography.pageTitle,
    color: Colors.text.primary,
  },
});
```

#### 3. Design Tokens 사용
```typescript
import { Spacing, BorderRadius, Shadow, IconSize } from '@/constants/design-tokens';

const styles = StyleSheet.create({
  card: {
    padding: Spacing.base,
    margin: Spacing.lg,
    borderRadius: BorderRadius.md,
    ...Shadow.base,
  },
  icon: {
    width: IconSize.base,
    height: IconSize.base,
  },
});
```

#### 4. CommonStyles 사용 (권장)
```typescript
import { CommonStyles } from '@/lib/common-styles';

// 직접 사용
<View style={CommonStyles.container}>
  <Text style={CommonStyles.mainTitle}>Title</Text>
  <View style={CommonStyles.card}>
    <Text style={CommonStyles.bodyText}>Content</Text>
  </View>
</View>

// 확장하여 사용
const styles = StyleSheet.create({
  customCard: {
    ...CommonStyles.card,
    marginTop: Spacing.xl,
  },
});
```

## 원칙

### 1. 하드코딩 금지
❌ **Bad:**
```typescript
const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    padding: 20,
    borderRadius: 12,
  },
});
```

✅ **Good:**
```typescript
const styles = StyleSheet.create({
  text: {
    ...Typography.button,
    color: Colors.text.primary,
    padding: Spacing.lg,
    borderRadius: BorderRadius.base,
  },
});
```

### 2. CommonStyles 우선 사용
기존에 정의된 스타일이 있다면 재사용:

❌ **Bad:**
```typescript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    width: 390,
    alignSelf: 'center',
  },
});
```

✅ **Good:**
```typescript
<SafeAreaView style={CommonStyles.container}>
```

### 3. 일관성 유지
- 같은 용도에는 같은 값 사용
- 임의의 값 추가 금지
- 새로운 값이 필요하면 design-tokens에 추가

### 4. 의미있는 값 사용
숫자보다 의미있는 이름 사용:
- ❌ `padding: 20`
- ✅ `padding: Spacing.lg`

## 새로운 스타일 추가하기

### 1. 새로운 Color가 필요한 경우
`constants/colors.ts`에 추가:
```typescript
export const Colors = {
  // ... existing colors
  newColor: '#HEXCODE',
};
```

### 2. 새로운 Font Style이 필요한 경우
`constants/typography.ts`에 추가:
```typescript
export const Typography = {
  // ... existing styles
  newStyle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.medium,
    fontFamily: FontFamily.medium,
  },
};
```

### 3. 새로운 Spacing/Radius가 필요한 경우
`constants/design-tokens.ts`에 추가:
```typescript
export const Spacing = {
  // ... existing values
  '5xl': 80,
};
```

### 4. 새로운 공통 스타일이 필요한 경우
`lib/common-styles.ts`에 추가:
```typescript
export const CommonStyles = StyleSheet.create({
  // ... existing styles
  newComponent: {
    ...Typography.body,
    padding: Spacing.base,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
  },
});
```

## 마이그레이션 가이드

기존 코드를 디자인 시스템으로 마이그레이션:

### Before:
```typescript
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F2F2F2',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2C2C2C',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#E06D34',
    padding: 16,
    borderRadius: 12,
  },
});
```

### After:
```typescript
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { Spacing, BorderRadius } from '@/constants/design-tokens';

const styles = StyleSheet.create({
  container: {
    padding: Spacing.lg,
    backgroundColor: Colors.grey[50],
  },
  title: {
    ...Typography.pageTitle,
    color: Colors.text.primary,
    marginBottom: Spacing.base,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: Spacing.base,
    borderRadius: BorderRadius.base,
  },
});
```

## 장점

1. **일관성**: 전체 앱에서 동일한 디자인 언어 사용
2. **유지보수성**: 한 곳에서 수정하면 전체 반영
3. **확장성**: 새로운 컴포넌트 추가가 쉬움
4. **가독성**: 의미있는 이름으로 코드 이해도 향상
5. **타입 안전성**: TypeScript 자동완성 및 타입 체크
6. **협업**: 팀 간 일관된 코드 스타일

## 참고 문서

- [Color Guide](./COLOR_GUIDE.md)
- [Typography Guide](./TYPOGRAPHY_GUIDE.md)

