import { IconSymbol } from '@/components/ui/icon-symbol';
import { CommonStyles } from '@/lib/common-styles';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const trainingHours = 1500;
  const trainingGoal = 1800;
  const totalHours = 1500;
  const totalGoal = 6000;
  const competencies = 30;
  const totalCompetencies = 60;

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
              <Text style={styles.levelTitle}>Level 1</Text>
              <Text style={styles.lastUpdated}>Last updated 2:45PM</Text>
              <Text style={styles.sectionLabel}>Training Hours</Text>

              {/* Circular Progress */}
              <View style={styles.circularProgressContainer}>
                <Image 
                  source={require('@/assets/images/Frame 376.png')} 
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
                    source={require('@/assets/images/Frame 101-1.png')} 
                    style={styles.progressBarBackground}
                    resizeMode="stretch"
                  />
                  <Image 
                    source={require('@/assets/images/Frame 101.png')} 
                    style={[styles.progressBarFilled, { width: `${(totalHours / totalGoal) * 100}%` }]}
                    resizeMode="stretch"
                  />
                </View>
              </View>
            </View>

            {/* Right Column - White Card */}
            <View style={styles.levelRightCard}>
              <TouchableOpacity style={styles.reminderButton}>
                <Image 
                  source={require('@/assets/images/bell.png')} 
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
                  source={require('@/assets/images/add_2.png')} 
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
                  source={require('@/assets/images/Frame 101-1.png')} 
                  style={styles.progressBarBackground}
                  resizeMode="stretch"
                />
                <Image 
                  source={require('@/assets/images/Frame 101.png')} 
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
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  levelSection: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  levelMainContent: {
    flexDirection: 'row',
    gap: 16,
  },
  levelLeftColumn: {
    width: '60%',
    backgroundColor: '#F2F2F2',
    padding: 20,
    borderRadius: 20,
  },
  levelRightCard: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 12,
    justifyContent: 'space-between',
  },
  levelTitle: {
    fontSize: 24,
    fontWeight: '400',
    color: '#2C2C2C',
    fontFamily: 'Roboto',
    marginBottom: 4,
  },
  reminderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E07843',
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderRadius: 12,
    gap: 6,
    marginBottom: 20,
  },
  reminderIcon: {
    width: 12,
    height: 12,
  },
  reminderButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  lastUpdated: {
    fontSize: 12,
    color: '#999999',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  sectionLabel: {
    fontSize: 14,
    color: '#2C2C2C',
    marginBottom: 16,
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  circularProgressContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
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
    fontSize: 24,
    fontWeight: '400',
    color: '#2C2C2C',
    fontFamily: 'Roboto',
  },
  progressDivider: {
    fontSize: 20,
    fontWeight: '400',
    color: '#999999',
    marginHorizontal: 2,
    fontFamily: 'Roboto',
  },
  progressGoal: {
    fontSize: 20,
    fontWeight: '400',
    color: '#999999',
    fontFamily: 'Roboto',
  },
  reminderInfo: {
    marginBottom: 20,
    alignItems: 'center',
  },
  reminderDivider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 16,
  },
  reminderLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#2C2C2C',
    lineHeight: 20,
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  reminderDate: {
    fontSize: 12,
    color: '#999999',
    marginTop: 4,
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  totalHoursContainer: {
    marginBottom: 0,
  },
  totalHoursLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#2C2C2C',
    marginBottom: 8,
    fontFamily: 'Roboto',
  },
  totalHoursText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#2C2C2C',
    marginBottom: 8,
    fontFamily: 'Roboto',
  },
  totalHoursBar: {
    height: 16,
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
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  addIcon: {
    width: 24,
    height: 24,
  },
  competenciesSection: {
    marginHorizontal: 20,
    marginBottom: 24,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 12,
  },
  competenciesContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  competenciesLeft: {
    flex: 1,
  },
  competenciesTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#2C2C2C',
    fontFamily: 'Roboto',
    marginBottom: 4,
  },
  competenciesCount: {
    fontSize: 24,
    fontWeight: '400',
    color: '#2C2C2C',
    fontFamily: 'Roboto',
    marginBottom: 8,
  },
  competenciesBar: {
    height: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  checklistButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2C2C2C',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    gap: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    minWidth: 110,
  },
  checklistButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  suggestedSection: {
    marginBottom: 100,
  },
  suggestedTitle: {
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  suggestedCardsContainer: {
    paddingHorizontal: 20,
    gap: 12,
  },
  suggestedCard: {
    width: 160,
    backgroundColor: '#F2F2F2',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 12,
    marginRight: 12,
    position: 'relative',
  },
  cardTag: {
    fontSize: 11,
    color: '#999999',
    marginBottom: 12,
    fontWeight: '500',
    fontFamily: 'Roboto-Medium',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C2C2C',
    lineHeight: 22,
    fontFamily: 'Roboto-Bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#666666',
    lineHeight: 18,
    marginTop: 12,
    marginBottom: 32,
    fontFamily: 'Roboto',
  },
  cardArrow: {
    position: 'absolute',
    right: 12,
    bottom: 12,
  },
});
