# Typography System Guide

## Overview
이 프로젝트는 중앙화된 Typography 시스템을 사용하여 일관된 텍스트 스타일링을 제공합니다.

## 구조

### 1. Font Family
```typescript
FontFamily.regular   // 'Roboto'
FontFamily.medium    // 'Roboto-Medium'
FontFamily.bold      // 'Roboto-Bold'
```

### 2. Font Size
```typescript
FontSize.xs          // 12 - 태그, 라벨
FontSize.sm          // 13 - 카드 설명
FontSize.base        // 14 - 본문 텍스트
FontSize.md          // 15 - 본문 텍스트
FontSize.lg          // 16 - 버튼, 입력, 타이틀
FontSize.xl          // 18 - 섹션 타이틀
FontSize['2xl']      // 20 - 페이지 타이틀
FontSize['3xl']      // 24 - 주요 타이틀
FontSize['4xl']      // 50 - 메인 대시보드 타이틀
```

### 3. Font Weight
```typescript
FontWeight.regular   // '400'
FontWeight.medium    // '600'
FontWeight.bold      // '700'
```

### 4. Line Height
```typescript
LineHeight.tight     // 18 - 작은 텍스트용
LineHeight.normal    // 20 - 기본 텍스트용
LineHeight.relaxed   // 22 - 편안한 읽기용
```

## Pre-composed Typography Styles

### Heading Styles
```typescript
Typography.mainTitle           // 메인 대시보드 타이틀 (50px)
Typography.pageTitle           // 페이지 타이틀 Bold (24px)
Typography.pageTitleRegular    // 페이지 타이틀 Regular (20px)
Typography.sectionTitle        // 섹션 타이틀 Bold (18px)
Typography.sectionTitleGray    // 섹션 타이틀 Gray (16px)
Typography.subTitle            // 서브 타이틀 Medium (16px)
```

### Body Text Styles
```typescript
Typography.body                // 본문 텍스트 (15px, line-height: 22)
Typography.bodyLarge           // 큰 본문 텍스트 (16px)
Typography.bodyBase            // 기본 본문 텍스트 (14px)
```

### Button & Interactive Styles
```typescript
Typography.button              // 버튼 텍스트 (16px, medium)
Typography.buttonLarge         // 큰 버튼 텍스트 (16px, medium)
```

### Card Styles
```typescript
Typography.cardTitle           // 카드 타이틀 (16px, line-height: 22)
Typography.cardDescription     // 카드 설명 (13px, line-height: 18)
Typography.cardDescriptionBase // 카드 설명 기본 (14px, line-height: 20)
```

### Small Text Styles
```typescript
Typography.label               // 라벨 (14px)
Typography.tag                 // 태그 (12px)
Typography.caption             // 캡션 (13px)
```

## 사용 방법

### 1. 기본 사용 (CommonStyles와 함께)
```typescript
import { CommonStyles } from '@/lib/common-styles';

<Text style={CommonStyles.mainTitle}>Dashboard</Text>
<Text style={CommonStyles.bodyText}>Some content</Text>
```

### 2. Typography 직접 사용
```typescript
import { Typography } from '@/constants/typography';

const styles = StyleSheet.create({
  customTitle: {
    ...Typography.pageTitle,
    color: '#custom-color',
    marginBottom: 20,
  },
});
```

### 3. 개별 값 사용
```typescript
import { FontSize, FontWeight, FontFamily } from '@/constants/typography';

const styles = StyleSheet.create({
  customText: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.medium,
    fontFamily: FontFamily.medium,
  },
});
```

## 장점

1. **일관성**: 모든 텍스트 스타일이 중앙에서 관리됨
2. **유지보수성**: 한 곳에서 변경하면 전체에 적용
3. **타입 안전성**: TypeScript로 자동완성 및 타입 체크
4. **가독성**: 하드코딩된 숫자 대신 의미있는 이름 사용
5. **확장성**: 새로운 스타일을 쉽게 추가 가능

## 예제

### Before (하드코딩)
```typescript
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Roboto-Bold',
  },
});
```

### After (Typography 시스템)
```typescript
const styles = StyleSheet.create({
  title: {
    ...Typography.pageTitle,
  },
});
```

## 주의사항

- 새로운 텍스트 스타일이 필요할 때는 먼저 Typography 시스템에 정의된 것이 있는지 확인
- 하드코딩된 font 값 사용 금지
- 새로운 font size나 weight가 필요하면 constants/typography.ts에 추가

