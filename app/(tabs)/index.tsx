import { IconSymbol } from '@/components/ui/icon-symbol';
import {
    APPRENTICESHIP,
    BorderRadius,
    Colors,
    IconSize,
    Shadow,
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
      <ScrollView style={CommonStyles.scrollView} showsVerticalScrollIndicator={false}>
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
            <View style={styles.levelRightCard}>
              <TouchableOpacity 
                style={styles.reminderButton}
                onPress={() => router.push('/dashboard/reminder')}
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

              <TouchableOpacity style={styles.addCircleButton}>
                <Image 
                  source={require('@/assets/images/icon-add.png')} 
                  style={styles.addIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Competencies Section */}
        <View style={styles.competenciesSection}>
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
            <TouchableOpacity style={styles.checklistButton}>
              <IconSymbol name="chevron.right" size={20} color="white" />
              <Text style={styles.checklistButtonText}>View</Text>
              <Text style={styles.checklistButtonText}>Checklist</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Suggested Section */}
        <View style={styles.suggestedSection}>
          <Text style={styles.suggestedTitle}>Suggested</Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.suggestedCardsContainer}>
            {/* Canada Apprentice Loan Card */}
            <TouchableOpacity style={styles.suggestedCard}>
              <Text style={styles.cardTag}>Loan</Text>
              <Text style={styles.cardTitle}>Canada</Text>
              <Text style={styles.cardTitle}>Apprentice</Text>
              <Text style={styles.cardTitle}>Loan</Text>
              <Text style={styles.cardDescription}>Interest-free loans for each period of technical training</Text>
              <View style={styles.cardArrow}>
                <IconSymbol name="arrow.right" size={20} color="#333" />
              </View>
            </TouchableOpacity>

            {/* Tips Card */}
            <TouchableOpacity style={styles.suggestedCard}>
              <Text style={styles.cardTag}>Tips</Text>
              <Text style={styles.cardTitle}>Strategies</Text>
              <Text style={styles.cardTitle}>to Increase</Text>
              <Text style={styles.cardTitle}>Savings</Text>
              <Text style={styles.cardDescription}>Learn more about saving strategies</Text>
              <View style={styles.cardArrow}>
                <IconSymbol name="arrow.right" size={20} color="#333" />
              </View>
            </TouchableOpacity>

            {/* Financial Support Card */}
            <TouchableOpacity style={styles.suggestedCard}>
              <Text style={styles.cardTag}>Financial Sup</Text>
              <Text style={styles.cardTitle}>Employment</Text>
              <Text style={styles.cardTitle}>Insurance</Text>
              <Text style={styles.cardTitle}>(EI)</Text>
              <Text style={styles.cardDescription}>EI benefits that you may be able to apply</Text>
              <View style={styles.cardArrow}>
                <IconSymbol name="arrow.right" size={20} color="#333" />
              </View>
            </TouchableOpacity>
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
    backgroundColor: Colors.grey[50],
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
    ...Shadow.xl,
    justifyContent: 'space-between',
  },
  levelTitle: {
    ...Typography.pageTitle,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  reminderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
    borderRadius: BorderRadius.base,
    gap: Spacing.xs,
    marginBottom: Spacing.lg,
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
    width: 180, // Custom size for circular progress chart
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
    marginHorizontal: Spacing.xxs,
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
    backgroundColor: Colors.grey[100],
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
    height: IconSize['2xl'],
    borderRadius: BorderRadius.base,
    backgroundColor: Colors.grey[50],
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    ...Shadow.md,
  },
  addIcon: {
    width: IconSize.base,
    height: IconSize.base,
  },
  competenciesSection: {
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
    backgroundColor: Colors.grey[50],
    borderRadius: BorderRadius.lg,
    padding: Spacing.base,
    ...Shadow.xl,
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
    ...Typography.pageTitle,
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
    backgroundColor: Colors.dark,
    paddingVertical: Spacing.base,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.md,
    gap: Spacing.xs,
    ...Shadow.md,
    minWidth: 110, // Fixed width for button layout
  },
  checklistButtonText: {
    ...Typography.bodyBase,
    color: Colors.white,
    textAlign: 'center',
  },
  suggestedSection: {
    marginBottom: 100, // Extra space for bottom tab bar
  },
  suggestedTitle: {
    ...Typography.sectionTitle,
    color: Colors.grey[500],
    marginBottom: Spacing.base,
    paddingHorizontal: Spacing.lg,
  },
  suggestedCardsContainer: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
  },
  suggestedCard: {
    width: 160, // Fixed card width for horizontal scroll
    backgroundColor: Colors.grey[50],
    borderRadius: BorderRadius.md,
    padding: Spacing.base,
    ...Shadow.xl,
    marginRight: Spacing.md,
    position: 'relative',
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
  cardArrow: {
    position: 'absolute',
    right: Spacing.md,
    bottom: Spacing.md,
  },
});
