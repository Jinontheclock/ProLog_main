import { AudioPlayer } from '@/components/shared/AudioPlayer';
import { ButtonButtonBar } from '@/components/shared/ButtonButtonBar';
import { Button } from '@/components/shared/Buttons';
import { CompetencyCompletion } from '@/components/shared/CompetencyCompletion';
import { CompetencyListItem } from '@/components/shared/CompetencyListItem';
import { CompletedLines } from '@/components/shared/CompletedLines';
import { ContentDataFormats } from '@/components/shared/ContentDataFormats';
import { DetailsHeading } from '@/components/shared/DetailsHeading';
import { DetailsSectionContent } from '@/components/shared/DetailsSectionContent';
import { ExamResults } from '@/components/shared/ExamResults';
import { ExpenseCard } from '@/components/shared/ExpenseCard';
import { HourDiscrepancy } from '@/components/shared/HourDiscrepancy';
import { IconButton } from '@/components/shared/IconButton';
import { InformationalMessage } from '@/components/shared/InformationalMessage';
import { LineCarousel } from '@/components/shared/LineCarousel';
import { LineDescription } from '@/components/shared/LineDescription';
import { MaterialIcon } from '@/components/shared/MaterialIcon';
import { PageSwitch } from '@/components/shared/PageSwitch';
import { PaystubCard } from '@/components/shared/PaystubCard';
import { PromptMessage } from '@/components/shared/PromptMessage';
import { Recents } from '@/components/shared/Recents';
import { SchoolSlots } from '@/components/shared/SchoolSlots';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { SmallDataCard } from '@/components/shared/SmallDataCard';
import { Tags } from '@/components/shared/Tags';
import dimensions from '@/lib/dimensions';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AddReminderDialogueBox } from '../components/shared/AddReminderDialogueBox';
import { DashboardData } from '../components/shared/DashboardData';
import { DialogueBox } from '../components/shared/DialogueBox';
import ExamPrep from '../components/shared/ExamPrep';
import { FilterDropdown } from '../components/shared/FilterDropdown';
import { LoadingQuiz } from '../components/shared/LoadingQuiz';
import { Ranking } from '../components/shared/Ranking';
import { RecentsList } from '../components/shared/RecentsList';
import { Reminder } from '../components/shared/Reminder';
import { ReminderFullView } from '../components/shared/ReminderFullView';
import { Search } from '../components/shared/Search';
import { SearchingPagesBox } from '../components/shared/SearchingPagesBox';
import { Colors } from '../constants/colors';
import { Typography } from '../constants/typography';

export default function ComponentTest() {
      // ...existing code...
    const [dialogueVisible, setDialogueVisible] = useState(true);
  const [addReminderVisible, setAddReminderVisible] = useState(true);
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

  // Example usage for visual test
  const [filter, setFilter] = useState('All');
  const [searchValue, setSearchValue] = useState('');
  const [searchState, setSearchState] = useState<'idle' | 'typing' | 'done'>('idle');
  const [lineFilter, setLineFilter] = useState('Line');
  const [typeFilter, setTypeFilter] = useState('Theoretical/Practical');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Line Carousel</Text>
        <LineCarousel onLineSelect={(line) => console.log('Selected line:', line)} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Prompt Message</Text>
        <PromptMessage
          title="Level 3 Unlocked"
          description="Congratulations – you have achieved all the requirements for Level 2. Press the button below to continue your trades journey."
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reminder Full View</Text>
        <ReminderFullView
          onPrevMonth={() => console.log('Previous month')}
          onNextMonth={() => console.log('Next month')}
          onAddReminder={() => console.log('Add reminder')}
          onDeleteReminder={(index) => console.log('Delete reminder', index)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dashboard Data</Text>
        <DashboardData />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reminder</Text>
        <Reminder onViewMore={() => console.log('View more pressed')} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Add Reminder Dialogue Box</Text>
        <AddReminderDialogueBox
          visible={addReminderVisible}
          onClose={() => setAddReminderVisible(false)}
          onAdd={(name, date) => {
            console.log('Add reminder:', name, date);
            setAddReminderVisible(false);
          }}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ranking</Text>
        <Ranking />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Exam Prep</Text>
        <ExamPrep />
      </View>
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
        {/* For demo, always show paused */}
        <AudioPlayer
          duration="5:20"
          currentTime="1:12"
          isPlaying={false}
          onPlayPause={() => {}}
          onVolume={() => {}}
          onMenu={() => {}}
          progress={0.25}
        />
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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Details Section Content</Text>
        <DetailsSectionContent
          title="Summary"
          content={
            `AC is electricity that changes direction repeatedly, unlike DC which flows in only one direction. Each full reversal is a cycle, and the number of cycles per second is the frequency (Hz). In North America, standard frequency is 60 Hz.`
          }
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Button Button Bar</Text>
        <ButtonButtonBar
          onComplete={() => {}}
          onChallenge={() => {}}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Competency List Item</Text>
        <CompetencyListItem text="Describe the principles of alternating current" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recents</Text>
        <Recents />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informational Message</Text>
        <InformationalMessage message="Informational Message, which pops open as an overlay to show additional info to the user." />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Prompt Message</Text>
        <PromptMessage
          title="Have you enrolled yet?"
          description="Technical training is required to proceed to the next level. Check out the available enrollments below."
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Line Description</Text>
        <LineDescription
          title="Line A"
          description="Description"
          content="Apply the principles of alternating current."
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Filter Dropdown</Text>
        <FilterDropdown
          options={["All", "Complete", "Incomplete"]}
          selected={filter}
          onSelect={setFilter}
          placeholder="All"
        />
      </View>

      <View style={[styles.section, { alignItems: 'flex-end' }]}> 
        <Text style={styles.sectionTitle}>Search</Text>
        <View style={{ width: 353, alignItems: 'flex-end' }}>
          <Search
            value={searchValue}
            onChange={text => {
              setSearchValue(text);
              setSearchState(text.length === 0 ? 'idle' : 'typing');
            }}
            onClear={() => {
              setSearchValue('');
              setSearchState('idle');
            }}
            onBack={() => {/* handle back */}}
            placeholder="Search by keyword"
            state={searchState}
            onSubmitEditing={() => setSearchState('done')}
          />
          {searchState === 'idle' && (
            <RecentsList
              items={["circuit", "alternating current", "hazards"]}
              onSelect={item => setSearchValue(item)}
            />
          )}
          {searchState === 'typing' && (
            <SearchingPagesBox />
          )}
          {searchState === 'done' && (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24, width: 353 }}>
              <Text style={{ ...Typography.sectionHeader, color: Colors.grey[700], marginRight: 'auto' }}>Results</Text>
              <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
                <FilterDropdown
                  options={["Line", "Other"]}
                  selected={lineFilter}
                  onSelect={setLineFilter}
                  placeholder="Line"
                  style={{ width: 70, height: 30, marginRight: 8 }}
                />
                <FilterDropdown
                  options={["Theoretical/Practical", "Other"]}
                  selected={typeFilter}
                  onSelect={setTypeFilter}
                  placeholder="Theoretical/Practical"
                  style={{ width: 164, height: 30 }}
                />
              </View>
            </View>
          )}
        </View>
      </View>

      <View style={{ marginTop: 32 }}>
        {/* LoadingQuiz test block */}
        <Text style={styles.sectionTitle}>Loading Quiz</Text>
        <LoadingQuiz />
      </View>

      <View style={{ marginTop: 32 }}>
        <Text style={styles.sectionTitle}>Dialogue Box</Text>
        <DialogueBox
          visible={dialogueVisible}
          onClose={() => setDialogueVisible(false)}
          onExit={() => setDialogueVisible(false)}
        />
        <Button text="Show Dialogue" variant="primary" onPress={() => setDialogueVisible(true)} />
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
