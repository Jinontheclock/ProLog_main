import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ReminderItem {
  title: string;
  date: string;
  day: string;
}

interface ReminderFullViewProps {
  reminders?: ReminderItem[];
  month?: string;
  year?: string;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
  onAddReminder?: () => void;
  onDeleteReminder?: (index: number) => void;
}

export const ReminderFullView: React.FC<ReminderFullViewProps> = ({
  reminders = [
    { title: 'First Day Back School', date: 'Dec 2, 2025', day: 'Tuesday' },
    { title: 'Canada Apprenticeship Loan Deadline', date: 'Dec 2, 2025', day: 'Tuesday' },
    { title: 'Purchase Textbooks', date: 'Dec 2, 2025', day: 'Tuesday' },
  ],
  month = 'December',
  year = '2025',
  onPrevMonth,
  onNextMonth,
  onAddReminder,
  onDeleteReminder,
}) => {
  const [selectedDate, setSelectedDate] = useState(2);
  
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  // Generate calendar grid for the month
  const generateCalendar = () => {
    const weeks = [];
    let currentWeek = [
      { date: null },
      { date: 1 },
      { date: 2, hasEvent: true },
      { date: 3 },
      { date: 4 },
      { date: 5, hasEvent: true },
      { date: 6 },
    ];
    weeks.push(currentWeek);
    
    for (let weekStart = 7; weekStart <= 28; weekStart += 7) {
      const week = [];
      for (let day = 0; day < 7; day++) {
        const date = weekStart + day;
        if (date > 31) {
          week.push({ date: null, hasEvent: false });
        } else {
          const hasEvent = date === 12 || date === 15 || date === 27;
          week.push({ date, hasEvent });
        }
      }
      weeks.push(week);
    }
    
    return weeks;
  };

  const calendar = generateCalendar();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.chevronButton} onPress={onPrevMonth}>
            <MaterialCommunityIcons name="chevron-left" size={30} color={Colors.grey[300]} />
          </TouchableOpacity>
          <Text style={styles.monthText}>{month} {year}</Text>
          <TouchableOpacity style={styles.chevronButton} onPress={onNextMonth}>
            <MaterialCommunityIcons name="chevron-right" size={30} color={Colors.grey[300]} />
          </TouchableOpacity>
        </View>

        <View style={styles.calendarContainer}>
          <View style={styles.weekDaysRow}>
            {daysOfWeek.map((day, index) => (
              <View key={index} style={styles.weekDayContainer}>
                <Text style={[styles.weekDayText, index === 0 && styles.sundayText]}>
                  {day}
                </Text>
              </View>
            ))}
          </View>

          {calendar.map((week, weekIndex) => (
            <View key={weekIndex} style={styles.calendarRow}>
              {week.map((item, dayIndex) => (
                <View key={dayIndex} style={styles.dateContainer}>
                  {item.date ? (
                    <TouchableOpacity 
                      style={[
                        styles.dateBox,
                        item.date === 5 && styles.selectedDateBox,
                        item.date === selectedDate && styles.borderedDateBox,
                      ]}
                      onPress={() => item.hasEvent && setSelectedDate(item.date!)}
                    >
                      <Text style={[
                        styles.dateText,
                        item.date === selectedDate && styles.selectedDateText,
                      ]}>
                        {item.date}
                      </Text>
                      {item.hasEvent && <View style={styles.eventDot} />}
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.emptyDateBox} />
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.remindersSectionHeader}>
        <Text style={styles.remindersTitle}>Reminders</Text>
        <TouchableOpacity style={styles.addButton} onPress={onAddReminder}>
          <MaterialCommunityIcons name="plus" size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.remindersCard}>
        <View style={styles.reminderList}>
          {reminders.map((reminder, index) => (
            <View key={index}>
              <View style={styles.reminderItem}>
                <View style={styles.reminderContent}>
                  <View style={styles.reminderTitleRow}>
                    <Text style={styles.reminderTitle}>{reminder.title}</Text>
                    <TouchableOpacity onPress={() => onDeleteReminder?.(index)}>
                      <MaterialCommunityIcons name="close" size={16} color={Colors.grey[300]} />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.reminderDate}>
                    {reminder.date} | {reminder.day}
                  </Text>
                </View>
              </View>
              {index < reminders.length - 1 && <View style={styles.reminderDivider} />}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 353,
    gap: 8,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    width: 354,
    height: 408,
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
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  chevronButton: {
    width: 40,
    height: 40,
    backgroundColor: Colors.grey[50],
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthText: {
    ...Typography.contentMedium,
    color: Colors.grey[700],
  },
  calendarContainer: {
    marginBottom: 24,
  },
  weekDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  weekDayContainer: {
    width: 41,
    alignItems: 'center',
  },
  weekDayText: {
    ...Typography.smBody,
    color: Colors.grey[500],
  },
  sundayText: {
    color: Colors.grey[500],
  },
  calendarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dateContainer: {
    alignItems: 'center',
  },
  dateBox: {
    width: 41,
    height: 50,
    borderRadius: 8,
    backgroundColor: Colors.grey[50],
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  emptyDateBox: {
    width: 41,
    height: 50,
  },
  selectedDateBox: {
    backgroundColor: Colors.grey[100],
  },
  borderedDateBox: {
    borderWidth: 1,
    borderColor: Colors.grey[700],
  },
  dateText: {
    ...Typography.buttonText,
    color: Colors.grey[700],
  },
  selectedDateText: {
    color: Colors.grey[900],
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
  remindersCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    width: 353,
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
  remindersSection: {
    marginTop: 24,
  },
  remindersSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 8,
  },
  remindersTitle: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 20,
    lineHeight: 20 * 1.05,
    color: Colors.grey[700],
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.orange[400],
    justifyContent: 'center',
    alignItems: 'center',
  },
  reminderList: {
    gap: 16,
  },
  reminderItem: {
    gap: 4,
  },
  reminderContent: {
    flex: 1,
    gap: 4,
  },
  reminderTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reminderTitle: {
    ...Typography.buttonText,
    color: Colors.grey[900],
    flex: 1,
  },
  reminderDate: {
    ...Typography.smBody,
    color: Colors.grey[500],
  },
  reminderDivider: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.grey[50],
    marginTop: 16,
  },
});

export default ReminderFullView;
