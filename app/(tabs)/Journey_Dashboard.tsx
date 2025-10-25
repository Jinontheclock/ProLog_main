import { IconSymbol } from '@/components/ui/icon-symbol';
import {
  APPRENTICESHIP,
  BorderRadius,
  Colors,
  IconSize,
  Spacing,
  Typography
} from '@/constants';
import { CommonStyles } from '@/lib/common-styles';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();
  const trainingHours = 1500;
  const trainingGoal = APPRENTICESHIP.TRAINING_HOURS_PER_LEVEL;
  const totalHours = 1500;
  const totalGoal = APPRENTICESHIP.TOTAL_HOURS_REQUIRED;
  const competencies = 30;
  const totalCompetencies = APPRENTICESHIP.TOTAL_COMPETENCIES;

  return (
    <SafeAreaView style={CommonStyles.container}>
      <ScrollView 
        style={CommonStyles.scrollView} 
        contentContainerStyle={CommonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Dashboard Title */}
        <View style={styles.dashboardHeader}>
          <Text style={CommonStyles.mainTitle}>Dashboard</Text>
        </View>

        {/* Level 1 Section */}
        <View style={styles.levelSection}>
          <View style={styles.levelMainContent}>
            {/* Left Column */}
            <View style={styles.levelLeftColumn}>
              <Text style={styles.levelTitle}>{APPRENTICESHIP.LEVELS.LEVEL_1}</Text>
              <Text style={styles.lastUpdated}>Last updated 2:45PM</Text>
              <Text style={styles.sectionLabel}>Training Hours</Text>

              {/* Circular Progress */}
              <View style={styles.circularProgressContainer}>
                <Image 
                  source={require('@/assets/images/chart-circular-progress.png')} 
                  style={styles.circularProgressImage}
                  resizeMode="contain"
                />
              </View>

              {/* Total Hours */}
              <View style={styles.totalHoursContainer}>
                <Text style={styles.totalHoursLabel}>Total Hours</Text>
                <Text style={styles.totalHoursText}>{totalHours.toLocaleString()}/{totalGoal.toLocaleString()}</Text>
                <View style={styles.totalHoursBar}>
                  <Image 
                    source={require('@/assets/images/chart-progress-bar-bg.png')} 
                    style={styles.progressBarBackground}
                    resizeMode="stretch"
                  />
                  <Image 
                    source={require('@/assets/images/chart-progress-bar-fill.png')} 
                    style={[styles.progressBarFilled, { width: `${(totalHours / totalGoal) * 100}%` }]}
                    resizeMode="stretch"
                  />
                </View>
              </View>
            </View>

            {/* Right Column - White Card */}
            <View style={[styles.levelRightCard, CommonStyles.neoDoubleOuter]}>
              <View style={[CommonStyles.neoDoubleInner, { padding: Spacing.lg, justifyContent: 'space-between', flex: 1, alignItems: 'center' }]}>
                <TouchableOpacity 
                  style={styles.reminderButton}
                  onPress={() => router.push('/dashboard/Dashboard_Reminder')}
                >
                  <Image 
                    source={require('@/assets/images/icon-bell.png')} 
                    style={styles.reminderIcon}
                  />
                  <Text style={styles.reminderButtonText}>Reminder</Text>
                </TouchableOpacity>

                <View style={styles.reminderInfo}>
                  <Text style={styles.reminderLabel}>WHIMS</Text>
                  <Text style={styles.reminderLabel}>Expiration</Text>
                  <Text style={styles.reminderDate}>Nov 10, 2025</Text>
                </View>

                <View style={styles.reminderDivider} />

                <View style={styles.reminderInfo}>
                  <Text style={styles.reminderLabel}>Level 2 Exam</Text>
                  <Text style={styles.reminderDate}>Nov 13, 2025</Text>
                </View>

                <View style={[CommonStyles.neoDoubleOuter, { width: '100%', borderRadius: 12 }]}>
                  <TouchableOpacity style={[styles.addCircleButton, CommonStyles.neoDoubleInner, { borderRadius: 12 }]}>
                    <Image 
                      source={require('@/assets/images/icon-add.png')} 
                      style={styles.addIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Competencies Section */}
        <View style={[styles.competenciesSection, CommonStyles.neoDoubleOuter]}>
          <View style={[CommonStyles.neoDoubleInner, { padding: Spacing.base }]}>
            <View style={styles.competenciesContent}>
              <View style={styles.competenciesLeft}>
                <Text style={styles.competenciesTitle}>Competencies</Text>
                <Text style={styles.competenciesCount}>{competencies}/{totalCompetencies}</Text>
                <View style={styles.competenciesBar}>
                  <Image 
                    source={require('@/assets/images/chart-progress-bar-bg.png')} 
                    style={styles.progressBarBackground}
                    resizeMode="stretch"
                  />
                  <Image 
                    source={require('@/assets/images/chart-progress-bar-fill.png')} 
                    style={[styles.progressBarFilled, { width: `${(competencies / totalCompetencies) * 100}%` }]}
                    resizeMode="stretch"
                  />
                </View>
              </View>
              <View style={CommonStyles.neoDoubleOuter}>
                <TouchableOpacity style={[styles.checklistButton, CommonStyles.neoDoubleInner, { backgroundColor: '#323232' }]}>
                  <IconSymbol name="chevron.right" size={20} color="white" />
                  <Text style={styles.checklistButtonText}>View</Text>
                  <Text style={styles.checklistButtonText}>Checklist</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Suggested Section */}
        <View style={styles.suggestedSection}>
          <Text style={styles.suggestedTitle}>Suggested</Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.suggestedCardsContainer}>
            {/* Canada Apprentice Loan Card */}
            <View style={CommonStyles.neoDoubleOuter}>
              <TouchableOpacity style={[styles.suggestedCard, CommonStyles.neoDoubleInner]}>
                <Text style={styles.cardTag}>Loan</Text>
                <Text style={styles.cardTitle}>Canada</Text>
                <Text style={styles.cardTitle}>Apprentice</Text>
                <Text style={styles.cardTitle}>Loan</Text>
                <Text style={styles.cardDescription}>Interest-free loans for each period of technical training</Text>
                <Image 
                  source={require('@/assets/images/icon-arrow-right.png')}
                  style={styles.cardArrowImage}
                />
              </TouchableOpacity>
            </View>

            {/* Tips Card */}
            <View style={CommonStyles.neoDoubleOuter}>
              <TouchableOpacity style={[styles.suggestedCard, CommonStyles.neoDoubleInner]}>
                <Text style={styles.cardTag}>Tips</Text>
                <Text style={styles.cardTitle}>Strategies</Text>
                <Text style={styles.cardTitle}>to Increase</Text>
                <Text style={styles.cardTitle}>Savings</Text>
                <Text style={styles.cardDescription}>Learn more about saving strategies</Text>
                <Image 
                  source={require('@/assets/images/icon-arrow-right.png')}
                  style={styles.cardArrowImage}
                />
              </TouchableOpacity>
            </View>

            {/* Financial Support Card */}
            <View style={CommonStyles.neoDoubleOuter}>
              <TouchableOpacity style={[styles.suggestedCard, CommonStyles.neoDoubleInner]}>
                <Text style={styles.cardTag}>Financial Sup</Text>
                <Text style={styles.cardTitle}>Employment</Text>
                <Text style={styles.cardTitle}>Insurance</Text>
                <Text style={styles.cardTitle}>(EI)</Text>
                <Text style={styles.cardDescription}>EI benefits that you may be able to apply</Text>
                <Image 
                  source={require('@/assets/images/icon-arrow-right.png')}
                  style={styles.cardArrowImage}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dashboardHeader: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.base,
  },
  levelSection: {
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  levelMainContent: {
    flexDirection: 'row',
    gap: Spacing.base,
  },
  levelLeftColumn: {
    width: '60%',
    backgroundColor: Colors.grey[50],
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
  },
  levelRightCard: {
    flex: 1,
    // backgroundColor, borderRadius, shadow, padding, justifyContent handled by CommonStyles.neoDoubleOuter/Inner
  },
  levelTitle: {
    ...Typography.pageTitleRegular,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  reminderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing['2xl'],
    paddingVertical: Spacing.xl,
    borderRadius: BorderRadius.base,
    gap: Spacing.sm,
    marginBottom: Spacing.lg,
    width: 120,
    height: 60,
  },
  reminderIcon: {
    width: IconSize.xs,
    height: IconSize.xs,
  },
  reminderButtonText: {
    ...Typography.tag,
    color: Colors.white,
  },
  lastUpdated: {
    ...Typography.tag,
    color: Colors.text.disabled,
    marginBottom: Spacing.lg,
  },
  sectionLabel: {
    ...Typography.bodyBase,
    color: Colors.text.primary,
    marginBottom: Spacing.base,
  },
  circularProgressContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  circularProgressImage: {
    width: 180,
    height: 180,
  },
  progressTextContainer: {
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressNumbers: {
    ...Typography.pageTitle,
    color: Colors.text.primary,
  },
  progressDivider: {
    ...Typography.pageTitleRegular,
    color: Colors.text.disabled,
    marginHorizontal: Spacing.xs,
  },
  progressGoal: {
    ...Typography.pageTitleRegular,
    color: Colors.text.disabled,
  },
  reminderInfo: {
    marginBottom: Spacing.lg,
    alignItems: 'center',
  },
  reminderDivider: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.grey[300],
    marginVertical: Spacing.base,
  },
  reminderLabel: {
    ...Typography.bodyBase,
    color: Colors.text.primary,
    textAlign: 'center',
  },
  reminderDate: {
    ...Typography.tag,
    color: Colors.text.disabled,
    marginTop: Spacing.xs,
    textAlign: 'center',
  },
  totalHoursContainer: {
    marginBottom: 0,
  },
  totalHoursLabel: {
    ...Typography.bodyBase,
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
  },
  totalHoursText: {
    ...Typography.sectionTitle,
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
  },
  totalHoursBar: {
    height: IconSize.xs,
    position: 'relative',
    overflow: 'hidden',
  },
  progressBarBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  progressBarFilled: {
    height: '100%',
    position: 'absolute',
  },
  addCircleButton: {
    width: '100%',
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor, shadow handled by CommonStyles.neoDoubleOuter/Inner
  },
  addIcon: {
    width: IconSize.base,
    height: IconSize.base,
  },
  competenciesSection: {
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
    // backgroundColor, borderRadius, shadow handled by CommonStyles.neoDoubleOuter
    // padding handled by CommonStyles.neoDoubleInner
  },
  competenciesContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.lg,
  },
  competenciesLeft: {
    flex: 1,
  },
  competenciesTitle: {
    ...Typography.bodyLarge,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  competenciesCount: {
    ...Typography.bodyLarge,
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
  },
  competenciesBar: {
    height: IconSize.xs,
    position: 'relative',
    overflow: 'hidden',
  },
  checklistButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#323232',
    paddingVertical: Spacing.base,
    paddingHorizontal: Spacing.xl,
    gap: Spacing.xs,
    minWidth: 130,
    borderRadius: 20,
    // shadow handled by CommonStyles.neoDoubleOuter/Inner
  },
  checklistButtonText: {
    ...Typography.bodyBase,
    color: Colors.white,
    textAlign: 'center',
  },
  suggestedSection: {
    marginBottom: 100, 
  },
  suggestedTitle: {
    ...Typography.sectionTitleGray,
    fontWeight: '400',
    color: Colors.grey[500],
    marginBottom: Spacing.base,
    paddingHorizontal: Spacing.lg,
  },
  suggestedCardsContainer: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
  },
  suggestedCard: {
    width: 160,
    height: 200,
    marginRight: Spacing.md,
    position: 'relative',
    padding: Spacing.base,
    borderRadius: 20,
    // backgroundColor, shadow handled by CommonStyles.neoDoubleOuter/Inner
  },
  cardTag: {
    ...Typography.tag,
    color: Colors.text.disabled,
    marginBottom: Spacing.md,
  },
  cardTitle: {
    ...Typography.bodyLarge,
    fontWeight: '700',
    color: Colors.text.primary,
    fontFamily: 'Roboto-Bold',
  },
  cardDescription: {
    ...Typography.tag,
    color: Colors.grey[600],
    marginTop: Spacing.md,
    marginBottom: Spacing['2xl'],
  },
  cardArrowImage: {
    position: 'absolute',
    right: Spacing.md,
    bottom: Spacing.md,
    width: IconSize.sm,
    height: IconSize.sm,
    tintColor: Colors.text.primary,
  },
});
