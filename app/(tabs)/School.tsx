import { Image } from 'expo-image';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/shared/Buttons';
import { CompetencyCompletion } from '@/components/shared/CompetencyCompletion';
import { CompletedLines } from '@/components/shared/CompletedLines';
import { ContentDataFormats } from '@/components/shared/ContentDataFormats';
import { ExamStatus } from '@/components/shared/ExamStatus';
import { ExpenseCard } from '@/components/shared/ExpenseCard';
import { PageSwitch } from '@/components/shared/PageSwitch';
import { SchoolSlots } from '@/components/shared/SchoolSlots';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function SchoolScreen() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState('program');
  const [expandedExpense, setExpandedExpense] = useState<number | null>(3);

  return (
    <View style={[styles.container, { backgroundColor: '#F5F5F5' }]}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={{ paddingBottom: 70 + insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Card */}
        <SectionHeading 
          level="Level 2"
          title="Technical Training"
          currentHours={9}
          totalHours={10}
          percentage={72}
        />

        {/* Tab Navigation */}
        <PageSwitch
          tabs={[
            {
              id: 'program',
              label: 'Program',
              iconActive: require('@/assets/images/house_siding_off.png'),
              iconInactive: require('@/assets/images/house_siding_on.png'),
            },
            {
              id: 'skills',
              label: 'Skills',
              iconActive: require('@/assets/images/electric_bolt_off.png'),
              iconInactive: require('@/assets/images/electric_bolt_on.png'),
            },
            {
              id: 'finance',
              label: 'Finance',
              iconActive: require('@/assets/images/paid_off.png'),
              iconInactive: require('@/assets/images/paid_on.png'),
            },
          ]}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />

        {selectedTab === 'program' && (
          <>
            {/* Program Details */}
            <Text style={styles.sectionTitle}>Program Details</Text>
            <ContentDataFormats
              mainItems={[
                { label: 'Sponsor', value: 'Industrial Electrician, APPR.' },
                { label: 'Institute', value: 'British Columbia Institute of Technology' },
              ]}
              dateItems={[
                { label: 'Start Date', value: 'Sep 4, 2025' },
                { label: 'Est. End Date', value: 'Nov 14, 2025' },
              ]}
            />

            {/* Standard Exam */}
            <Text style={styles.sectionTitle}>Standard Exam</Text>
            <View style={styles.examCard}>
              <View style={styles.examLeft}>
                <Text style={styles.examTitle}>Attempt 1</Text>
                <Text style={styles.examDate}>Mar 12, 2025</Text>
                <ExamStatus
                  buttons={[
                    { label: 'Registered', status: 'registered' },
                  ]}
                />
              </View>
              <View style={styles.examRight}>
                <Text style={styles.examScore}>-</Text>
              </View>
            </View>

            {/* Discrepancy Tracking */}
            <View style={styles.discrepancyHeader}>
              <Text style={styles.sectionTitle}>Discrepancy Tracking</Text>
              <Image 
                source={require('@/assets/images/info.png')}
                style={styles.infoIcon}
              />
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
              icon={require('@/assets/images/arrow_forward.png')}
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
              <Image 
                source={require('@/assets/images/info.png')}
                style={styles.infoIcon}
              />
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
});
