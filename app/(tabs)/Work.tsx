import { Image } from 'expo-image';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/shared/Buttons';
import { CompetencyCompletion } from '@/components/shared/CompetencyCompletion';
import { CompletedLines } from '@/components/shared/CompletedLines';
import { ContentDataFormats } from '@/components/shared/ContentDataFormats';
import { ExpenseCard } from '@/components/shared/ExpenseCard';
import { HourDiscrepancy } from '@/components/shared/HourDiscrepancy';
import { PageSwitch } from '@/components/shared/PageSwitch';
import { SectionHeading } from '@/components/shared/SectionHeading';

export default function WorkScreen() {
  const insets = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState('hours');
  const [expandedExpenseCard, setExpandedExpenseCard] = useState<number | null>(1);

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
          title="Working Hours"
          currentHours={1545}
          totalHours={1800}
          percentage={72}
        />

        {/* Tab Navigation */}
        <PageSwitch
          tabs={[
            {
              id: 'hours',
              label: 'Hours',
              iconActive: require('@/assets/images/construction_off.png'),
              iconInactive: require('@/assets/images/construction_on.png'),
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

        {selectedTab === 'hours' && (
          <>
            {/* Apprenticeship Details */}
            <Text style={styles.sectionTitle}>Apprenticeship Details</Text>
            <ContentDataFormats
              mainItems={[
                { label: 'Sponsor', value: 'Burquos Mills Incorporated' },
                { label: 'Countdown (Est.)', value: '18 days' },
              ]}
              dateItems={[
                { label: 'Start Date', value: 'May 14, 2024' },
                { label: 'Est. End Date', value: 'Sep 20, 2026' },
              ]}
            />

            {/* Discrepancy Tracking */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Discrepancy Tracking</Text>
              <Image 
                source={require('@/assets/images/info.png')}
                style={styles.infoIcon}
              />
            </View>

            <HourDiscrepancy
              items={[
                { title: 'Paystub', hours: '1,790', unit: 'hrs', lastUpdated: 'Mar 12, 2025' },
                { title: 'SkilledTradedBC', hours: '1,545', unit: 'hrs', lastUpdated: 'Mar 12, 2025' },
              ]}
              discrepancy="-230"
              onReportError={() => console.log('Report error pressed')}
            />

            {/* Paystub Records */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Paystub Records</Text>
              <View style={styles.iconButton}>
                <Image 
                  source={require('@/assets/images/document_scanner.png')}
                  style={styles.infoIcon}
                />
              </View>
            </View>

            {/* Working Hours Chart */}
            <View style={styles.chartCard}>
              <View style={styles.chartHeader}>
                <Text style={styles.chartLabel}>Working Hours</Text>
                <Text style={styles.chartValue}>Hrs</Text>
              </View>
              <View style={styles.chartAverage}>
                <Text style={styles.averageLabel}>Avg.</Text>
                <Text style={styles.averageValue}>187</Text>
                <Text style={styles.averageUnit}>hrs</Text>
              </View>
              <Image 
                source={require('@/assets/images/Frame 794.png')}
                style={styles.chartGraphImage}
                contentFit="contain"
              />
              <View style={styles.chartPeriod}>
                <Text style={styles.periodText}>Jan 2025</Text>
                <Text style={styles.periodText}>Jun 2025</Text>
              </View>
            </View>

            {/* Income Chart */}
            <View style={styles.chartCard}>
              <View style={styles.chartHeader}>
                <Text style={styles.chartLabel}>Income</Text>
                <Text style={styles.chartValue}>CAD $</Text>
              </View>
              <View style={styles.chartAverage}>
                <Text style={styles.averageLabel}>Avg.</Text>
                <Text style={styles.averageValue}>$3,567</Text>
              </View>
              <Image 
                source={require('@/assets/images/Frame 793.png')}
                style={styles.chartGraphImage}
                contentFit="contain"
              />
              <View style={styles.chartPeriod}>
                <Text style={styles.periodText}>Jan 2025</Text>
                <Text style={styles.periodText}>Jun 2025</Text>
              </View>
            </View>

            {/* View All Paystubs Button */}
            <Button
              text="View All Paystubs"
              icon={require('@/assets/images/arrow_forward.png')}
              variant="light"
              iconBlack={require('@/assets/images/arrow_outward_black.png')}
              centered={true}
              onPress={() => router.push('/paystubs/PaystubList')}
            />
          </>
        )}

        {selectedTab === 'skills' && (
          <>
            {/* Completion Details */}
            <CompetencyCompletion
              title="Completion Details"
              showInfoIcon={true}
              checkboxLabel="Practical Competencies"
              current={6}
              total={12}
              lastUpdated="On: Mar 12, 2025"
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
              variant="light"
              iconBlack={require('@/assets/images/arrow_outward_black.png')}
              centered={true}
              onPress={() => console.log('View Checklist pressed')}
            />
          </>
        )}

        {selectedTab === 'finance' && (
          <>
            {/* Potential Expenses Section */}
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTextContainer}>
                <Text style={styles.sectionTitleNoMargin}>Potential Expenses</Text>
                <Text style={styles.sectionSubtitleNoMargin}>
                  Upcoming potential expenses to consider for financial planning
                </Text>
              </View>
              <Image 
                source={require('@/assets/images/info.png')}
                style={styles.infoIcon}
              />
            </View>

            {/* Required Tools Card */}
            <ExpenseCard
              id={1}
              amount="$1,900"
              title="Tools"
              detailTitle="Required Tools"
              details={[
                { label: 'Tool Belt', value: '$845' },
                { label: 'Drill', value: '$155' },
                { label: 'Amps Meter', value: '$60' },
              ]}
              isExpanded={expandedExpenseCard === 1}
              onToggle={() => setExpandedExpenseCard(expandedExpenseCard === 1 ? null : 1)}
            />

            {/* Certifications Card */}
            <ExpenseCard
              id={2}
              amount="$300"
              title="Certifications"
              detailTitle="Certification Fees"
              details={[
                { label: 'Red Seal Exam', value: '$300' },
              ]}
              isExpanded={expandedExpenseCard === 2}
              onToggle={() => setExpandedExpenseCard(expandedExpenseCard === 2 ? null : 2)}
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
  sectionSubtitle: {
    fontSize: 12,
    color: '#999',
    marginHorizontal: 20,
    marginTop: -12,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 20,
  },
  sectionTextContainer: {
    flex: 1,
    marginRight: 12,
  },
  sectionTitleNoMargin: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  sectionSubtitleNoMargin: {
    fontSize: 12,
    color: '#999',
  },
  infoIcon: {
    width: 20,
    height: 20,
    tintColor: '#999',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  chartCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  chartLabel: {
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
  },
  chartValue: {
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
  },
  chartAverage: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 20,
    gap: 6,
  },
  averageLabel: {
    fontSize: 14,
    color: '#2C2C2C',
    fontWeight: '500',
  },
  averageValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  averageUnit: {
    fontSize: 16,
    color: '#2C2C2C',
    fontWeight: '500',
  },
  chartGraphImage: {
    width: '100%',
    height: 120,
    marginBottom: 12,
  },
  chartPeriod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  periodText: {
    fontSize: 12,
    color: '#999',
  },
  chartImageContainer: {
    marginBottom: 24,
    marginHorizontal: 20,
  },
  chartImage: {
    width: '100%',
    height: 280,
  },
  comingSoon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  comingSoonText: {
    fontSize: 16,
    color: '#999',
  },
});
