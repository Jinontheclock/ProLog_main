import { Image } from 'expo-image';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import workData from '@/data/work-data.json';

import { Button } from '@/components/shared/Buttons';
import { CompetencyCompletion } from '@/components/shared/CompetencyCompletion';
import { CompletedLines } from '@/components/shared/CompletedLines';
import { ContentDataFormats } from '@/components/shared/ContentDataFormats';
import { ExpenseCard } from '@/components/shared/ExpenseCard';
import { HourDiscrepancy } from '@/components/shared/HourDiscrepancy';
import MaterialIcon from '@/components/shared/MaterialIcon';
import { PageSwitch } from '@/components/shared/PageSwitch';
import { SectionHeading } from '@/components/shared/SectionHeading';
import dimensions from '@/lib/dimensions';

export default function WorkScreen() {
  const insets = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState('hours');
  const [expandedExpenseCard, setExpandedExpenseCard] = useState<number | null>(1);
  const [demoState, setDemoState] = useState<'before' | 'after'>('before');
  const [isLoading, setIsLoading] = useState(false);

  // Helper function to get current data based on demo state
  const getCurrentData = (dataPath: any) => {
    if (typeof dataPath === 'object' && dataPath !== null && !Array.isArray(dataPath)) {
      if (dataPath.before !== undefined && dataPath.after !== undefined) {
        return dataPath[demoState];
      }
    }
    return dataPath;
  };

  // Toggle demo state function with loading animation
  const toggleDemoState = () => {
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      setDemoState(current => current === 'before' ? 'after' : 'before');
      
      // End loading after state change
      setTimeout(() => {
        setIsLoading(false);
      }, 800); // Additional time for progress bar animation
    }, 300);
  };

  // Get work page data
  const workPageData = workData['level 2'].Work_page;

  // Skeleton loading component for text
  const SkeletonText = ({ width = 100, height = 16 }: { width?: number; height?: number }) => (
    <View 
      style={[
        styles.skeletonText, 
        { width, height }
      ]} 
    />
  );

  // Helper to render text or skeleton based on loading state
  const renderTextOrSkeleton = (text: string | number, skeletonWidth = 60) => {
    if (isLoading) {
      return <SkeletonText width={skeletonWidth} />;
    }
    return typeof text === 'string' ? text : text.toString();
  };

  return (
    <View style={[styles.container, { backgroundColor: '#F5F5F5' }]}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={{ paddingBottom: 70 + insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Card */}
        <SectionHeading 
          level={workPageData.sectionHeading.level}
          icon_action="cached"
          title={workPageData.sectionHeading.title}
          currentHours={getCurrentData(workPageData.sectionHeading.currentHours)}
          totalHours={workPageData.sectionHeading.totalHours}
          percentage={getCurrentData(workPageData.sectionHeading.percentage)}
          onIconPress={toggleDemoState}
          isLoading={isLoading}
        />

        {/* Tab Navigation */}
        <PageSwitch
          tabs={[
            {
              id: 'hours',
              label: 'Hours',
              iconName: 'schedule',
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

        {selectedTab === 'hours' && (
          <>
            {/* Apprenticeship Details */}
            <Text style={styles.sectionTitle}>Apprenticeship Details</Text>
            <ContentDataFormats
              mainItems={[
                { label: 'Sponsor', value: workPageData.apprenticeshipDetails.sponsor },
                { label: 'Countdown (Est.)', value: getCurrentData(workPageData.apprenticeshipDetails.estimatedDaysToGo) },
              ]}
              dateItems={[
                { label: 'Start Date', value: workPageData.apprenticeshipDetails.startDate },
                { label: 'Est. End Date', value: getCurrentData(workPageData.apprenticeshipDetails.estimatedEndDate) },
              ]}
              isLoading={isLoading}
            />

            {/* Discrepancy Tracking */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitleNoMargin}>Discrepancy Tracking</Text>
              <MaterialIcon name="info" size={20} color="#999" />
            </View>

            <HourDiscrepancy
              items={[
                { 
                  title: 'Paystub', 
                  hours: getCurrentData(workPageData.discrepancyTracking.paystubHours), 
                  unit: 'hrs', 
                  lastUpdated: getCurrentData(workPageData.discrepancyTracking.paystubDate) 
                },
                { 
                  title: 'SkilledTradedBC', 
                  hours: getCurrentData(workPageData.discrepancyTracking.skilledTradeBCHours), 
                  unit: 'hrs', 
                  lastUpdated: getCurrentData(workPageData.discrepancyTracking.skilledTradeBCDate) 
                },
              ]}
              discrepancy={getCurrentData(workPageData.discrepancyTracking.discrepancy)}
              onReportError={() => {
                console.log("Button pressed - showing alert");
                alert("Your employer and mentor have been contacted regarding the error. Please give it a few days before checking in with them regarding this issue.");
              }}
              isLoading={isLoading}
            />

            {/* Paystub Records */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitleNoMargin}>Paystub Records</Text>
              <View style={styles.iconButton}>
                <MaterialIcon name="document_scanner" size={20} color="#999" />
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
                <View style={styles.averageValueContainer}>
                  {isLoading ? (
                    <SkeletonText width={80} height={38} />
                  ) : (
                    <Text style={styles.averageValue}>{getCurrentData(workPageData.paystubRecord.workingHoursAvg)}</Text>
                  )}
                </View>
                <Text style={styles.averageUnit}>hrs</Text>
              </View>
              <Image 
                source={require('@/assets/images/Frame 794.png')}
                style={styles.chartGraphImage}
                contentFit="contain"
              />
              <View style={styles.chartPeriod}>
                <View style={styles.periodTextContainer}>
                  {isLoading ? (
                    <SkeletonText width={60} height={14} />
                  ) : (
                    <Text style={styles.periodText}>{getCurrentData(workPageData.paystubRecord.paystubDateStart)}</Text>
                  )}
                </View>
                <View style={styles.periodTextContainer}>
                  {isLoading ? (
                    <SkeletonText width={60} height={14} />
                  ) : (
                    <Text style={styles.periodText}>{getCurrentData(workPageData.paystubRecord.paystubDateEnd)}</Text>
                  )}
                </View>
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
                <View style={styles.averageValueContainer}>
                  {isLoading ? (
                    <SkeletonText width={100} height={38} />
                  ) : (
                    <Text style={styles.averageValue}>{getCurrentData(workPageData.paystubRecord.incomeAvg)}</Text>
                  )}
                </View>
              </View>
              <Image 
                source={require('@/assets/images/Frame 793.png')}
                style={styles.chartGraphImage}
                contentFit="contain"
              />
              <View style={styles.chartPeriod}>
                <View style={styles.periodTextContainer}>
                  {isLoading ? (
                    <SkeletonText width={60} height={14} />
                  ) : (
                    <Text style={styles.periodText}>{getCurrentData(workPageData.paystubRecord.paystubDateStart)}</Text>
                  )}
                </View>
                <View style={styles.periodTextContainer}>
                  {isLoading ? (
                    <SkeletonText width={60} height={14} />
                  ) : (
                    <Text style={styles.periodText}>{getCurrentData(workPageData.paystubRecord.paystubDateEnd)}</Text>
                  )}
                </View>
              </View>
            </View>

            {/* View All Paystubs Button */}
            <Button
              text="View All Paystubs"
              iconComponent={<MaterialIcon name="icon-arrow-forward" size={20} color="#2C2C2C" />}
              variant="light"
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
              iconComponent={<MaterialIcon name="icon-arrow-forward" size={20} color="#2C2C2C" />}
              variant="light"
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
              <MaterialIcon name="info" size={20} color="#999" />
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
  averageValueContainer: {
    minHeight: 38,
    justifyContent: 'center',
  },
  periodTextContainer: {
    minHeight: 14,
    justifyContent: 'center',
  },
  skeletonText: {
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    opacity: 0.6,
  },
});
