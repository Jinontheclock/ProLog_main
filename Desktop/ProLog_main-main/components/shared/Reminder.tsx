import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconButton } from './IconButton';

interface ReminderItem {
  title: string;
  date: string;
  day: string;
}

interface ReminderProps {
  reminders?: ReminderItem[];
  onViewMore?: () => void;
  onHeaderPress?: () => void;
}

export const Reminder: React.FC<ReminderProps> = ({
  reminders = [
    { title: 'First Day Back School', date: 'Dec 2, 2025', day: 'Tuesday' },
    { title: 'Canada Apprenticeship Loan Deadline', date: 'Dec 2, 2025', day: 'Tuesday' },
  ],
  onViewMore,
  onHeaderPress,
}) => {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = [
    { date: 31, hasEvent: false },
    { date: 1, hasEvent: false },
    { date: 2, hasEvent: true },
    { date: 3, hasEvent: false },
    { date: 4, hasEvent: false },
    { date: 5, hasEvent: true },
    { date: 6, hasEvent: false },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.header} onPress={onHeaderPress}>
          <MaterialCommunityIcons name="bell-outline" size={20} color={Colors.grey[700]} />
          <Text style={styles.headerText}>Reminder</Text>
          <IconButton
            iconComponent={<MaterialCommunityIcons name="chevron-right" size={20} color={Colors.grey[900]} />}
            variant="light"
            onPress={onHeaderPress}
          />
        </TouchableOpacity>

        <View style={styles.calendarRow}>
          {dates.map((item, index) => (
            <View key={index} style={styles.dateContainer}>
              <View style={[styles.dateBox, item.hasEvent && styles.dateBoxWithEvent]}>
                <Text style={[styles.dateText, item.hasEvent && styles.dateTextActive]}>
                  {item.date}
                </Text>
                {item.hasEvent && <View style={styles.eventDot} />}
              </View>
              <Text style={[styles.dayText, index === 0 && styles.sundayText]}>
                {daysOfWeek[index]}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.reminderList}>
          {reminders.map((reminder, index) => (
            <View key={index} style={styles.reminderItem}>
              <Text style={styles.reminderTitle}>{reminder.title}</Text>
              <Text style={styles.reminderDate}>
                {reminder.date} | {reminder.day}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.dividerLine} />

        <TouchableOpacity style={styles.viewMoreButton} onPress={onViewMore}>
          <Text style={styles.viewMoreText}>View +1 more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 353,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    width: 353,
    height: 382,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  headerText: {
    ...Typography.sectionHeader,
    color: Colors.grey[700],
    flex: 1,
  },
  chevron: {
    padding: 4,
  },
  calendarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  dateContainer: {
    alignItems: 'center',
    gap: 8,
  },
  dateBox: {
    width: 42.4,
    height: 50,
    borderRadius: 8,
    backgroundColor: Colors.grey[50],
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  dateBoxWithEvent: {
    backgroundColor: Colors.grey[50],
  },
  dateText: {
    ...Typography.buttonText,
    color: Colors.grey[700],
  },
  dateTextActive: {
    color: Colors.grey[700],
  },
  eventDot: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.orange[400],
  },
  dayText: {
    ...Typography.smBody,
    color: Colors.grey[500],
  },
  sundayText: {
    color: Colors.error,
  },
  reminderList: {
    gap: 16,
    marginBottom: 16,
  },
  reminderItem: {
    gap: 4,
  },
  reminderTitle: {
    ...Typography.buttonText,
    color: Colors.grey[900],
  },
  reminderDate: {
    ...Typography.smBody,
    color: Colors.grey[500],
  },
  dividerLine: {
    width: 321,
    height: 1,
    backgroundColor: Colors.grey[50],
    alignSelf: 'center',
    marginBottom: 16,
  },
  viewMoreButton: {
    backgroundColor: Colors.grey[50],
    borderRadius: 20,
    width: 321,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewMoreText: {
    ...Typography.smBody,
    color: Colors.grey[500],
  },
});

export default Reminder;
