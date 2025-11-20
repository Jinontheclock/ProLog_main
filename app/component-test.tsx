import { AudioPlayer } from '@/components/shared/AudioPlayer';
import { Button } from '@/components/shared/Buttons';
import { CompetencyCompletion } from '@/components/shared/CompetencyCompletion';
import { CompletedLines } from '@/components/shared/CompletedLines';
import { ContentDataFormats } from '@/components/shared/ContentDataFormats';
import { DetailsHeading } from '@/components/shared/DetailsHeading';
import { ExamResults } from '@/components/shared/ExamResults';
import { ExpenseCard } from '@/components/shared/ExpenseCard';
import { HourDiscrepancy } from '@/components/shared/HourDiscrepancy';
import { IconButton } from '@/components/shared/IconButton';
import { MaterialIcon } from '@/components/shared/MaterialIcon';
import { PageSwitch } from '@/components/shared/PageSwitch';
import { PaystubCard } from '@/components/shared/PaystubCard';
import { SchoolSlots } from '@/components/shared/SchoolSlots';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { SmallDataCard } from '@/components/shared/SmallDataCard';
import { Tags } from '@/components/shared/Tags';
import dimensions from '@/lib/dimensions';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ComponentTest() {
  const [selectedTab, setSelectedTab] = useState('program');
  const [expandedExpense, setExpandedExpense] = useState<number | null>(1);

  const tabs = [
    {
      id: 'program',
      label: 'Program',
      iconName: 'dashboard',
      iconActive: require('@/assets/images/house_siding_off.png'),
      iconInactive: require('@/assets/images/house_siding_on.png'),
    },
    {
      id: 'skills',
      label: 'Skills',
      iconName: 'bolt',
      iconActive: require('@/assets/images/electric_bolt_off.png'),
      iconInactive: require('@/assets/images/electric_bolt_on.png'),
    },
    {
      id: 'finance',
      label: 'Finance',
      iconName: 'paid',
      iconActive: require('@/assets/images/paid_off.png'),
      iconInactive: require('@/assets/images/paid_on.png'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Component Test Page</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Section Heading</Text>
        <SectionHeading 
          level="Level 2"
          title="Working Hours"
          currentHours={1545}
          totalHours={1800}
          percentage={72}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Page Switch</Text>
        <PageSwitch
          tabs={tabs}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Expense Card</Text>
        <ExpenseCard
          id={1}
          amount="$1,900"
          title="Tools"
          detailTitle="BCIT Industrial Electrician"
          details={[
            { label: 'Tuition', value: '$1,450.30' },
            { label: 'BCITSA', value: '$155.50' },
            { label: 'Ancillary', value: '$25.30' }
          ]}
          isExpanded={expandedExpense === 1}
          onToggle={() => setExpandedExpense(expandedExpense === 1 ? null : 1)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Exam Results</Text>
        <ExamResults
          alerts={[
            {
              type: 'warning',
              text: 'You have not achieved the minimum requirement to pass (75%). Next Available Application Starts -',
              date: '20 Apr 2026',
              actionText: 'Review Competencies',
            },
            {
              type: 'success',
              text: 'You have passed all requirements to proceed to the next level! Congratulations',
              actionText: 'Complete Level',
            },
          ]}
          examTitle="Standard Certification"
          examDate="Mar 12, 2025"
          score={55.5}
          badge="Result Declared"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Status Buttons</Text>
        <Tags label="Registered" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Icon Buttons</Text>
        <View style={styles.buttonRow}>
          <IconButton
            iconComponent={<MaterialIcon name="icon-arrow-outward" size={24} color="#fff" />}
            variant="primary"
            onPress={() => console.log('Primary button pressed')}
          />
          <IconButton
            iconComponent={<MaterialIcon name="icon-arrow-outward" size={24} color="#fff" />}
            variant="dark"
            onPress={() => console.log('Dark button pressed')}
          />
          <IconButton
            iconComponent={<MaterialIcon name="icon-arrow-outward" size={24} color="#2C2C2C" />}
            variant="light"
            onPress={() => console.log('Light button pressed')}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Text Buttons</Text>
        <View style={styles.buttonColumn}>
          <Button
            text="Button Text"
            iconComponent={<MaterialIcon name="icon-arrow-outward" size={20} color="#fff" />}
            variant="primary"
            onPress={() => console.log('Primary text button pressed')}
          />
          <Button
            text="Button Text"
            iconComponent={<MaterialIcon name="icon-arrow-outward" size={20} color="#fff" />}
            variant="dark"
            onPress={() => console.log('Dark text button pressed')}
          />
          <Button
            text="Button Text"
            iconComponent={<MaterialIcon name="icon-arrow-outward" size={20} color="#2C2C2C" />}
            variant="light"
            onPress={() => console.log('Light text button pressed')}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Completed Lines</Text>
        <CompletedLines 
          title="Line Completion"
          lines={[ // Sample test data
            { name: 'Line A', current: 6, total: 10, isCompleted: false },
            { name: 'Line B', current: 3, total: 3, isCompleted: true },
            { name: 'Line C', current: 2, total: 2, isCompleted: true },
          ]}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>School Slots</Text>
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
              ],
              onPress: () => console.log('North Delta Secondary pressed'),
            },
          ]}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Paystub Card</Text>
        <PaystubCard
          month="January"
          company="Burqus Inc."
          receivedDate="02 Feb 2025"
          workHours={210}
          income="$4,250"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Competency Completion</Text>
        <CompetencyCompletion
          title="Completion Details"
          showInfoIcon={true}
          checkboxLabel="Theoretical Competencies"
          current={25}
          total={50}
          lastUpdated="Mar 12, 2025"
          progressImage={require('@/assets/images/Group 46.png')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Small Data Card</Text>
        <SmallDataCard
          iconComponent={<MaterialIcon name="schedule" size={24} color="#E06D34" />}
          label="Hours"
          value="1,790"
          unit="days"
          lastUpdated="Mar 12, 2025"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hour Discrepancy</Text>
        <HourDiscrepancy
          items={[
            { title: 'Paystub', hours: '1,790', unit: 'hrs', lastUpdated: 'Mar 12, 2025' },
            { title: 'SkilledTradedBC', hours: '1,545', unit: 'hrs', lastUpdated: 'Mar 12, 2025' },
          ]}
          discrepancy="-230"
          onReportError={() => console.log('Report error pressed')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Content Data Formats</Text>
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
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Audio Player</Text>
        {/* AudioPlayer play/pause test: toggles icon on press */}
        {(() => {
          const [isPlaying, setIsPlaying] = useState(false);
          return (
            <AudioPlayer
              duration="5:20"
              currentTime="1:12"
              isPlaying={isPlaying}
              onPlayPause={() => setIsPlaying(!isPlaying)}
              onVolume={() => {}}
              onMenu={() => {}}
              progress={0.25}
            />
          );
        })()}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Details Heading</Text>
        <DetailsHeading
          lineLabel="Line A: Install and Maintain Consumer/Supply Services and Metering Equipment"
          title="Describe the principles of Alternating Current"
          tag="Theoretical"
          onBack={() => {}}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 0,
    width: dimensions.constrainedWidth,
    alignSelf: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 24,
    marginTop: 40,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666666',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  buttonColumn: {
    gap: 12,
  },
});
