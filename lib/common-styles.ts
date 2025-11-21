import { Colors } from '@/constants/colors';
import { BorderRadius, IconSize, Shadow, Spacing } from '@/constants/design-tokens';
import { Typography } from '@/constants/typography';
import { StyleSheet } from 'react-native';
import dimensions from './dimensions';

export const CommonStyles = StyleSheet.create({
  // Base container styles
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    width: dimensions.constrainedWidth,
    alignSelf: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    width: dimensions.constrainedWidth,
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
    width: dimensions.constrainedWidth,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  
  // Header styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.lg,
    width: dimensions.constrainedWidth,
    backgroundColor: '#F0F0F0',
  },
  headerCompact: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingTop: 10,
    paddingBottom: Spacing.base,
  },
  headerSimple: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.base,
  },
  
  // Back button styles
  backButton: {
    marginRight: Spacing.md,
    padding: Spacing.sm,
  },
  backButtonWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    padding: Spacing.sm,
  },
  backIcon: {
    width: IconSize.base,
    height: IconSize.base,
  },
  backText: {
    ...Typography.bodyLarge,
    color: Colors.text.primary,
  },
  
  // Title styles
  mainTitle: {
    ...Typography.mainTitle,
    color: Colors.text.primary,
  },
  pageTitle: {
    ...Typography.pageTitle,
    color: Colors.text.primary,
  },
  pageTitleRegular: {
    ...Typography.pageTitleRegular,
    color: Colors.text.primary,
  },
  sectionTitle: {
    ...Typography.sectionTitle,
    color: Colors.text.primary,
    marginBottom: Spacing.base,
  },
  sectionTitleGray: {
    ...Typography.sectionTitleGray,
    color: Colors.text.secondary,
    marginBottom: Spacing.base,
  },
  subTitle: {
    ...Typography.subTitle,
    color: Colors.text.primary,
  },
  
  // Card styles
  card: {
    backgroundColor: Colors.background.card,
    borderRadius: BorderRadius.md,
    padding: Spacing.lg,
    ...Shadow.sm,
  },
  whiteCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    padding: Spacing.lg,
    ...Shadow.base,
  },
  cardCompact: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    padding: Spacing.base,
    ...Shadow.base,
  },
  cardTitle: {
    ...Typography.cardTitle,
    color: Colors.text.primary,
    marginBottom: Spacing.md,
  },
  cardDescription: {
    ...Typography.cardDescription,
    color: Colors.text.secondary,
  },
  cardDescriptionDark: {
    ...Typography.cardDescriptionBase,
    color: Colors.grey[600],
  },
  
  // Button styles
  primaryButton: {
    backgroundColor: Colors.dark,
    borderRadius: BorderRadius.base,
    paddingVertical: Spacing.base,
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadow.sm,
  },
  primaryButtonText: {
    ...Typography.button,
    color: Colors.white,
  },
  whiteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingVertical: Spacing.base,
    paddingHorizontal: Spacing.xl,
    borderRadius: BorderRadius.xl,
    gap: Spacing.sm,
    ...Shadow.base,
    flexWrap: 'nowrap',
  },
  whiteButtonText: {
    ...Typography.button,
    color: Colors.text.primary,
    flexShrink: 0,
  },
  
  // Icon styles
  icon24: {
    width: IconSize.base,
    height: IconSize.base,
  },
  icon20: {
    width: IconSize.sm,
    height: IconSize.sm,
  },
  icon16: {
    width: IconSize.xs,
    height: IconSize.xs,
  },
  iconGray: {
    tintColor: Colors.text.secondary,
  },
  iconBlack: {
    tintColor: Colors.text.primary,
  },
  iconWhite: {
    tintColor: Colors.white,
  },

  // Search/Input styles
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.base,
    paddingHorizontal: Spacing.md,
    paddingVertical: 10,
    borderRadius: BorderRadius.base,
  },
  searchInput: {
    ...Typography.bodyLarge,
    flex: 1,
    color: Colors.text.primary,
  },
  
  // Filter/Tag styles
  filterTab: {
    paddingHorizontal: Spacing.base,
    paddingVertical: 10,
    borderRadius: BorderRadius.sm,
    backgroundColor: Colors.grey[100],
  },
  filterTabActive: {
    backgroundColor: Colors.primary,
  },
  filterTabText: {
    ...Typography.bodyBase,
    color: Colors.text.primary,
  },
  filterTabTextActive: {
    color: Colors.white,
  },
  tag: {
    backgroundColor: Colors.dark,
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
    borderRadius: BorderRadius.md,
  },
  tagText: {
    ...Typography.tag,
    color: Colors.white,
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: Colors.background.overlay,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: BorderRadius.lg,
    borderTopRightRadius: BorderRadius.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing['3xl'],
    width: dimensions.constrainedWidth,
    alignSelf: 'center',
  },
  modalHandle: {
    width: 40,
    height: 4,
    backgroundColor: Colors.border.default,
    borderRadius: BorderRadius.xs,
    alignSelf: 'center',
    marginBottom: Spacing.lg,
  },
  
  // Section styles
  section: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  contentContainer: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: 100,
  },
  
  // Content area
  contentPadding: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
  },
  
  // Common text styles
  placeholderText: {
    ...Typography.bodyLarge,
    color: Colors.text.disabled,
    textAlign: 'center',
  },
  bodyText: {
    ...Typography.body,
    color: Colors.black,
  },
  grayText: {
    ...Typography.bodyBase,
    color: Colors.text.secondary,
  },

  // Neomorphism styles - CSS reference from style guide
  // Note: React Native doesn't support inset shadows, so these are adapted
  neoProjected: {
    shadowColor: 'rgba(255, 255, 255, 0.30)',
    shadowOffset: { width: 0.31, height: 0.31 },
    shadowOpacity: 1,
    shadowRadius: 0.62,
    elevation: 3,
  },
  neoSubmerged: {
    shadowColor: 'rgba(208, 208, 208, 0.20)',
    shadowOffset: { width: -4.63, height: 4.63 },
    shadowOpacity: 1,
    shadowRadius: 9.27,
    elevation: 5,
  },
  tinyProjected: {
    shadowColor: 'rgba(255, 255, 255, 0.30)',
    shadowOffset: { width: 0.207, height: 0.207 },
    shadowOpacity: 1,
    shadowRadius: 0.413,
    elevation: 2,
  },
  barSubmerged: {
    shadowColor: 'rgba(208, 208, 208, 0.20)',
    shadowOffset: { width: -2.701, height: 2.701 },
    shadowOpacity: 1,
    shadowRadius: 5.408,
    elevation: 4,
  },
  smallerProjected: {
    shadowColor: 'rgba(255, 255, 255, 0.30)',
    shadowOffset: { width: 0.31, height: 0.31 },
    shadowOpacity: 1,
    shadowRadius: 0.62,
    elevation: 3,
  },
  dropShadow: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 8,
  },

  // Double shadow neomorphism (requires two nested Views)
  // Use neoDoubleOuter on parent View and neoDoubleInner on child View
  neoDoubleOuter: {
    backgroundColor: Colors.grey[50],
    borderRadius: 20,
    // Light shadow (top-left)
    shadowColor: 'rgba(255, 255, 255, 0.9)',
    shadowOffset: { width: -6.18, height: -6.18 },
    shadowOpacity: 1,
    shadowRadius: 8.36,
    elevation: 6,
    // Web support
    boxShadow: '-6px -6px 16px rgba(255, 255, 255, 0.9)',
  },
  neoDoubleInner: {
    borderRadius: 20,
    backgroundColor: Colors.grey[50],
    // Dark shadow (bottom-right)
    shadowColor: 'rgba(199, 199, 199, 0.8)',
    shadowOffset: { width: 4.18, height: 4.18 },
    shadowOpacity: 1,
    shadowRadius: 4.45,
    // Web support
    boxShadow: '6px 6px 16px rgba(199, 199, 199, 0.8)',
  },

  // Inset/Submerged neomorphism (눌려 들어간 스타일)
  // Use neoInsetOuter on parent View and neoInsetInner on child View
  neoInsetOuter: {
    backgroundColor: Colors.grey[50],
    borderRadius: 20,
    // Dark shadow (top-left) - creates inset effect
    shadowColor: 'rgba(208, 208, 208, 0.9)',
    shadowOffset: { width: -3.63, height: -3.63 },
    shadowOpacity: 1,
    shadowRadius: 4.74,
    elevation: 4,
    // Web support
    boxShadow: '-4px -4px 9px rgba(208, 208, 208, 0.9)',
  },
  neoInsetInner: {
    borderRadius: 20,
    backgroundColor: Colors.grey[50],
    // Light shadow (bottom-right) - creates depth
    shadowColor: 'rgba(255, 255, 255, 0.9)',
    shadowOffset: { width: 5.63, height: 5.63 },
    shadowOpacity: 1,
    shadowRadius: 5.27,
    // Web support
    boxShadow: '6px 6px 11px rgba(255, 255, 255, 0.9)',
  },
});
