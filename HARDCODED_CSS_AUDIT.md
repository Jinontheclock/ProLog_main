# CSS 하드코딩 감사 보고서

## 요약
- **총 파일 수**: 13개
- **하드코딩 발견**: 515개 항목
- **상태**: ⚠️ 대규모 리팩토링 필요

## 파일별 하드코딩 현황

### 1. app/(tabs)/index.tsx - Dashboard
**문제**: 87개 하드코딩 발견
**주요 문제점**:
- fontSize: 12, 14, 16, 18, 20, 24
- fontWeight: '400', '500', '600'
- padding: 8, 12, 16, 20
- margin: 4, 8, 16, 20
- borderRadius: 12, 16, 20
- gap: 4, 6, 8, 12, 16, 20
- 색상 하드코딩: '#2C2C2C', '#999999', '#E07843', '#E5E5E5'

**권장 조치**:
```typescript
// Before
fontSize: 24
fontWeight: '400'
padding: 20
borderRadius: 20

// After
...Typography.pageTitle
padding: Spacing.lg
borderRadius: BorderRadius.lg
```

### 2. app/(tabs)/skills.tsx
**문제**: 68개 하드코딩 발견
**주요 문제점**:
- fontSize 하드코딩
- padding/margin 하드코딩
- borderRadius 하드코딩
- shadow 속성 하드코딩

### 3. app/(tabs)/finances.tsx
**문제**: 67개 하드코딩 발견
**주요 문제점**:
- Typography 하드코딩
- Spacing 하드코딩
- BorderRadius 하드코딩

### 4. app/dashboard/reminder.tsx
**문제**: 56개 하드코딩 발견

### 5. app/finances/eligibility-quiz.tsx
**문제**: 27개 하드코딩 발견

### 6. app/finances/resources.tsx
**문제**: 31개 하드코딩 발견

### 7. app/finances/canada-apprentice-loan.tsx
**문제**: 46개 하드코딩 발견

### 8. app/finances/eligibility-quiz-saved.tsx
**문제**: 9개 하드코딩 발견

### 9. app/skills/circuit-concepts.tsx
**문제**: 60개 하드코딩 발견

### 10. app/skills/quiz.tsx
**문제**: 15개 하드코딩 발견

### 11. app/skills/quiz-result.tsx
**문제**: 9개 하드코딩 발견

### 12. app/(tabs)/settings.tsx
**문제**: 27개 하드코딩 발견

### 13. app/(tabs)/_layout.tsx
**문제**: 13개 하드코딩 발견 (Nav Bar)

## 하드코딩 패턴 분석

### Typography (가장 많은 하드코딩)
```typescript
// 발견된 패턴들
fontSize: 12, 13, 14, 15, 16, 18, 20, 24, 28, 50
fontWeight: '400', '500', '600', '700'
fontFamily: 'Roboto', 'Roboto-Medium', 'Roboto-Bold'
lineHeight: 18, 20, 22, 24
```

### Spacing
```typescript
// 발견된 패턴들
padding: 4, 8, 10, 12, 16, 20, 24
margin: 4, 8, 12, 16, 20, 24
gap: 4, 6, 8, 12, 16, 20
```

### Border Radius
```typescript
// 발견된 패턴들
borderRadius: 8, 10, 12, 16, 20, 24, 26, 30, 60
```

### Shadow
```typescript
// 발견된 패턴들
shadowColor: '#000', '#c8c8c8'
shadowOffset: { width: 0-8, height: 0-8 }
shadowOpacity: 0.08, 0.1, 0.15, 0.2, 1
shadowRadius: 4, 8, 12, 16
elevation: 2, 3, 5, 8, 12
```

### Colors (여전히 하드코딩됨)
```typescript
'#2C2C2C', '#999999', '#E07843', '#E5E5E5', '#F2F2F2',
'#FFFFFF', '#D9D9D9', '#8E8E93', '#000000', etc.
```

## 리팩토링 우선순위

### 🔴 우선순위 높음
1. **app/(tabs)/index.tsx** (87개) - Dashboard, 가장 많이 사용되는 페이지
2. **app/(tabs)/skills.tsx** (68개)
3. **app/(tabs)/finances.tsx** (67개)
4. **app/skills/circuit-concepts.tsx** (60개)

### 🟡 우선순위 중간
5. **app/dashboard/reminder.tsx** (56개)
6. **app/finances/canada-apprentice-loan.tsx** (46개)
7. **app/finances/resources.tsx** (31개)
8. **app/finances/eligibility-quiz.tsx** (27개)
9. **app/(tabs)/settings.tsx** (27개)

### 🟢 우선순위 낮음
10. **app/skills/quiz.tsx** (15개)
11. **app/(tabs)/_layout.tsx** (13개)
12. **app/skills/quiz-result.tsx** (9개)
13. **app/finances/eligibility-quiz-saved.tsx** (9개)

## 리팩토링 전략

### 단계별 접근

#### Phase 1: Import 추가
모든 파일에 design system import 추가:
```typescript
import { Typography, Spacing, BorderRadius, Shadow, IconSize } from '@/constants';
import { Colors } from '@/constants/colors';
```

#### Phase 2: Typography 교체
모든 fontSize, fontWeight, fontFamily 하드코딩 교체:
```typescript
// Before
fontSize: 24,
fontWeight: '700',
fontFamily: 'Roboto-Bold',

// After
...Typography.pageTitle,
```

#### Phase 3: Spacing 교체
모든 padding, margin, gap 하드코딩 교체:
```typescript
// Before
padding: 20,
margin: 16,
gap: 8,

// After
padding: Spacing.lg,
margin: Spacing.base,
gap: Spacing.sm,
```

#### Phase 4: BorderRadius 교체
```typescript
// Before
borderRadius: 16,

// After
borderRadius: BorderRadius.md,
```

#### Phase 5: Shadow 교체
```typescript
// Before
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.08,
shadowRadius: 8,
elevation: 3,

// After
...Shadow.base,
```

#### Phase 6: Colors 교체
```typescript
// Before
color: '#2C2C2C',
backgroundColor: '#F2F2F2',

// After
color: Colors.text.primary,
backgroundColor: Colors.grey[50],
```

## 예상 효과

### 리팩토링 후
- ✅ 일관성 100%
- ✅ 유지보수성 향상
- ✅ 코드 가독성 향상
- ✅ 디자인 변경 용이
- ✅ 타입 안전성

### Before (현재)
```typescript
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2C2C2C',
    fontFamily: 'Roboto-Bold',
    marginBottom: 16,
    padding: 20,
    borderRadius: 16,
  },
});
```

### After (리팩토링 후)
```typescript
import { Typography, Spacing, BorderRadius } from '@/constants';
import { Colors } from '@/constants/colors';

const styles = StyleSheet.create({
  title: {
    ...Typography.pageTitle,
    color: Colors.text.primary,
    marginBottom: Spacing.base,
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
  },
});
```

## 다음 단계

1. ✅ **완료**: Design System 구축
   - colors.ts
   - typography.ts
   - design-tokens.ts
   - common-styles.ts

2. 🔄 **진행 중**: 하드코딩 감사 및 문서화

3. ⏳ **대기 중**: 개별 파일 리팩토링
   - 515개 하드코딩 항목 교체
   - 13개 파일 업데이트

## 추정 작업량

- **파일당 평균 시간**: 20-30분
- **총 예상 시간**: 4-6시간
- **라인 변경**: 약 1000+ 라인

## 권장사항

⚠️ **중요**: 한 번에 모든 파일을 리팩토링하면 위험할 수 있습니다.

**권장 접근법**:
1. 한 파일씩 리팩토링
2. 각 파일 리팩토링 후 테스트
3. 문제 발생 시 즉시 롤백 가능
4. 우선순위 높은 파일부터 시작

**질문**:
- 모든 파일을 자동으로 리팩토링할까요?
- 아니면 우선순위가 높은 몇 개 파일만 먼저 할까요?
- 특정 파일을 지정하시겠습니까?

