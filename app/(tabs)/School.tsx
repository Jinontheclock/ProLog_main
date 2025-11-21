import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/shared/Buttons';
import { CompetencyCompletion } from '@/components/shared/CompetencyCompletion';
import { CompletedLines } from '@/components/shared/CompletedLines';
import { ExpenseCard } from '@/components/shared/ExpenseCard';
import MaterialIcon from '@/components/shared/MaterialIcon';
import { PageSwitch } from '@/components/shared/PageSwitch';
import { SchoolSlots } from '@/components/shared/SchoolSlots';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { useColorScheme } from '@/hooks/use-color-scheme';
import dimensions from '@/lib/dimensions';

export default function SchoolScreen() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState('hour');
  const [expandedExpense, setExpandedExpense] = useState<number | null>(3);

  return (
    <View style={[styles.container, { backgroundColor: '#F0F0F0' }]}>
      <Image 
        source={require('@/assets/images/background-grid 1.svg')}
        style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.5 }}
        resizeMode="cover"
      />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={{ paddingBottom: 70 + insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Card */}
        <SectionHeading 
          level="Level 2"
          title="Technical Training"
          currentHours={0}
          totalHours={10}
          percentage={0}
          iconName="icon-refresh"
        />

        {/* Tab Navigation */}
        <PageSwitch
          tabs={[
            {
              id: 'hour',
              label: 'Program',
              iconName: 'house',
            },
            {
              id: 'skills',
              label: 'Skills',
              iconName: 'electric_bolt',
            },
            {
              id: 'finance',
              label: 'Finance',
              iconName: 'paid',
            },
          ]}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />

        {selectedTab === 'hour' && (
          <>
            {/* Enrollment Status Card */}
            <View style={styles.enrollmentPrompt}>
              <View style={styles.iconTitleWrapper}>
                <MaterialIcon name="help_outline" size={24} color="#616161" />
                <Text style={styles.promptTitle}>Have you enrolled yet?</Text>
              </View>
              <Text style={styles.promptDescription}>
                Technical training is required to proceed to the next level. Check out the available enrollments below.
              </Text>
            </View>

            <TouchableOpacity style={styles.addEnrollmentCard}>
              <View style={styles.addEnrollmentContent}>
                <Text style={styles.addEnrollmentTitle}>Add{'\n'}Enrollment Status</Text>
                <Text style={styles.addEnrollmentDescription}>
                  Add your enrolment status to start tracking your progress in technical training
                </Text>
              </View>
              <View style={styles.addIconCircle}>
                <MaterialIcon name="icon-add" size={32} color="#FFFFFF" />
              </View>
            </TouchableOpacity>

            {/* Discrepancy Tracking */}
            <View style={styles.discrepancyHeader}>
              <Text style={styles.sectionTitle}>Discrepancy Tracking</Text>
              <MaterialIcon name="info" size={20} color="#999" />
            </View>

            <SchoolSlots
              campuses={[
                {
                  name: 'BCIT Burnaby Campus',
                  location: 'Burnaby',
                  slots: [
                    { startDate: 'Jan 5', startYear: '2026', endDate: 'Mar 13', endYear: '2026', slot: '02' },
                    { startDate: 'Jan 5,', startYear: '2026', endDate: 'Mar 13,', endYear: '2026', slot: '12' },
                    { startDate: 'Jan 5,', startYear: '2026', endDate: 'Mar 13,', endYear: '2026', slot: '05' },
                  ],
                  onPress: () => console.log('BCIT Burnaby Campus pressed'),
                },
                {
                  name: 'North Delta Secondary',
                  location: 'Delta',
                  slots: [
                    { startDate: 'Jan 5', startYear: '2026', endDate: 'Mar 13', endYear: '2026', slot: '02' },
                    { startDate: 'Jan 5,', startYear: '2026', endDate: 'Mar 13,', endYear: '2026', slot: '12' },
                    { startDate: 'Jan 5,', startYear: '2026', endDate: 'Mar 13,', endYear: '2026', slot: '05' },
                  ],
                  onPress: () => console.log('North Delta Secondary pressed'),
                },
              ]}
            />
          </>
        )}

        {selectedTab === 'skills' && (
          <>
            {/* Completion Details */}
            <CompetencyCompletion
              title="Completion Details"
              showInfoIcon={true}
              checkboxLabel="Theoretical Competencies"
              current={25}
              total={50}
              lastUpdated="Mar 12, 2025"
              progressImage={require('@/assets/images/Group 46.png')}
            />

            {/* Line Completion */}
            <CompletedLines
              title="Line Completion"
              lines={[
                { name: 'Line A', current: 6, total: 10, isCompleted: false },
                { name: 'Line B', current: 3, total: 3, isCompleted: true },
                { name: 'Line C', current: 2, total: 2, isCompleted: true },
                { name: 'Line D', current: 3, total: 6, isCompleted: false },
              ]}
            />

            {/* View Checklist Button */}
            <Button
              text="View Checklist"
              iconComponent={<MaterialIcon name="icon-arrow-forward" size={20} color="#fff" />}
              variant="dark"
              centered={true}
              onPress={() => console.log('View Checklist pressed')}
            />
          </>
        )}

        {selectedTab === 'finance' && (
          <>
            {/* Potential Expenses */}
            <View style={styles.sectionHeader}>
              <View>
                <Text style={styles.sectionTitle}>Potential Expenses</Text>
                <Text style={styles.sectionSubtitle}>Upcoming potential expenses to consider for financial planning</Text>
              </View>
              <MaterialIcon name="info" size={20} color="#999" />
            </View>

            {/* Expense Cards */}
            <ExpenseCard
              id={1}
              amount="$200"
              title="Tools"
              detailTitle="Tool Kit"
              details={[
                { label: 'Basic Tools', value: '$200.00' }
              ]}
              isExpanded={expandedExpense === 1}
              onToggle={() => setExpandedExpense(expandedExpense === 1 ? null : 1)}
            />

            <ExpenseCard
              id={2}
              amount="$85"
              title="Books"
              detailTitle="Course Materials"
              details={[
                { label: 'Textbooks', value: '$85.00' }
              ]}
              isExpanded={expandedExpense === 2}
              onToggle={() => setExpandedExpense(expandedExpense === 2 ? null : 2)}
            />

            <ExpenseCard
              id={3}
              amount="$1,900"
              title="Tools"
              detailTitle="BCIT Industrial Electrician"
              details={[
                { label: 'Tuition', value: '$1,450.30' },
                { label: 'BCITSA', value: '$155.50' },
                { label: 'Ancillary', value: '$25.30' }
              ]}
              isExpanded={expandedExpense === 3}
              onToggle={() => setExpandedExpense(expandedExpense === 3 ? null : 3)}
            />
          </>
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: dimensions.constrainedWidth,
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 16,
    marginTop: 8,
    marginHorizontal: 20,
  },
  detailsCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    marginHorizontal: 20,
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  detailLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    color: '#2C2C2C',
    fontWeight: '500',
  },
  dateRow: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 16,
  },
  dateBox: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
  },
  dateLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  dateValue: {
    fontSize: 14,
    color: '#2C2C2C',
    fontWeight: '500',
  },
  examCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  examLeft: {
    flex: 1,
  },
  examTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  examDate: {
    fontSize: 12,
    color: '#999',
    marginBottom: 12,
  },
  examRight: {
    width: 100,
    height: 100,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  examScore: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  discrepancyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginHorizontal: 20,
  },
  infoIcon: {
    width: 20,
    height: 20,
    tintColor: '#999',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 20,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  enrollmentPrompt: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    paddingTop: 12,
    marginTop: 20,
    marginBottom: 16,
    marginHorizontal: 20,
    width: 354,
    height: 122,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  iconTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  promptTitle: {
    ...Typography.contentTitle,
    color: Colors.grey[900],
    marginLeft: 12,
  },
  promptDescription: {
    ...Typography.buttonText,
    color: Colors.grey[400],
    lineHeight: 20,
  },
  addEnrollmentCard: {
    backgroundColor: '#E67E50',
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  addEnrollmentContent: {
    flex: 1,
  },
  addEnrollmentTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
    lineHeight: 40,
  },
  addEnrollmentDescription: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
  },
  addIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
});
