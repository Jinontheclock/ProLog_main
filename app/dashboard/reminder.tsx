import {
    BorderRadius,
    CALENDAR,
    Colors,
    IconSize,
    Shadow,
    Spacing,
    Typography
} from '@/constants';
import { CommonStyles } from '@/lib/common-styles';
import { dimensions } from '@/lib/dimensions';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Modal, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ReminderScreen() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(10);
  const [currentMonth] = useState('November');
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [eventName, setEventName] = useState('');
  const [selectedMonth, setSelectedMonth] = useState(11);
  const [selectedDay, setSelectedDay] = useState(22);
  const [selectedYear, setSelectedYear] = useState(2025);
  const [reminders, setReminders] = useState([
    { date: 'Nov\n10', title: 'WHIMS Expiration' },
    { date: 'Nov\n13', title: 'Level 2 Exam' },
  ]);

  const handleSaveEvent = () => {
    if (eventName.trim()) {
      const newReminder = {
        date: `${CALENDAR.MONTH_ABBREVIATIONS[selectedMonth - 1]}\n${selectedDay}`,
        title: eventName,
      };
      setReminders([...reminders, newReminder]);
      setEventName('');
      setIsAddModalVisible(false);
    }
  };

  const getDaysInMonth = () => {
    return Array.from({ length: CALENDAR.DAYS_IN_MONTH }, (_, i) => i + 1);
  };

  const getFirstDayOfMonth = () => {
    return 2; // Tuesday (0 = Sunday, 1 = Monday, etc.)
  };

  const renderCalendar = () => {
    const days = getDaysInMonth();
    const firstDay = getFirstDayOfMonth();
    const weekDays = CALENDAR.WEEK_DAYS;
    const emptyDays = Array(firstDay).fill(null);

    return (
      <View style={styles.calendarContainer}>
        <Text style={styles.monthTitle}>{currentMonth}</Text>
        
        {/* Week days */}
        <View style={styles.weekDaysRow}>
          {weekDays.map((day, index) => (
            <Text key={index} style={styles.weekDay}>{day}</Text>
          ))}
        </View>

        {/* Calendar dates */}
        <View style={styles.datesContainer}>
          {emptyDays.map((_, index) => (
            <View key={`empty-${index}`} style={styles.dateCell} />
          ))}
          {days.map((day) => {
            const isSelected = day === selectedDate;
            const hasReminder = day === 10 || day === 13;
            
            return (
              <TouchableOpacity
                key={day}
                style={styles.dateCell}
                onPress={() => setSelectedDate(day)}
              >
                <View style={[
                  styles.dateCircle,
                  isSelected && styles.dateCircleSelected,
                  hasReminder && !isSelected && styles.dateCircleWithReminder
                ]}>
                  <Text style={[
                    styles.dateText,
                    isSelected && styles.dateTextSelected
                  ]}>
                    {day}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <View style={CommonStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.grey[50]} />
      <ScrollView style={CommonStyles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Image 
              source={require('@/assets/images/icon-back-button.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Reminder</Text>
        </View>

        {/* Calendar */}
        {renderCalendar()}

        {/* Add Button */}
        <View style={styles.addButtonContainer}>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => setIsAddModalVisible(true)}
          >
            <Image 
                  source={require('@/assets/images/icon-add.png')}
              style={styles.addIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Reminders List */}
        <View style={styles.remindersListContainer}>
          {reminders.map((reminder, index) => (
            <View key={index} style={styles.reminderCard}>
              <View style={styles.reminderDateBox}>
                <Text style={styles.reminderDateText}>{reminder.date}</Text>
              </View>
              <View style={styles.verticalDivider} />
              <Text style={styles.reminderTitle}>{reminder.title}</Text>
              <TouchableOpacity style={styles.deleteButton}>
                <Image 
                  source={require('@/assets/images/icon-delete.png')} 
                  style={styles.deleteIcon}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Add Event Modal */}
      <Modal
        visible={isAddModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsAddModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity 
            style={styles.modalBackground}
            activeOpacity={1}
            onPress={() => setIsAddModalVisible(false)}
          />
          <View style={styles.modalContainer}>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setIsAddModalVisible(false)}
            >
              <Image 
                source={require('@/assets/images/icon-close.png')} 
                style={styles.closeIcon}
              />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Add Event</Text>

            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.input}
              value={eventName}
              onChangeText={setEventName}
              placeholder="Canada Apprenticeship Loan Applica.."
              placeholderTextColor={Colors.text.disabled}
            />

            <Text style={styles.inputLabel}>Date</Text>
            <View style={styles.datePickerRow}>
              <View style={styles.datePickerItem}>
                <Text style={styles.datePickerValue}>{selectedMonth}</Text>
                <Image 
                  source={require('@/assets/images/icon-chevron-down.png')} 
                  style={styles.dropdownIcon}
                />
              </View>
              <View style={styles.datePickerItem}>
                <Text style={styles.datePickerValue}>{selectedDay}</Text>
                <Image 
                  source={require('@/assets/images/icon-chevron-down.png')} 
                  style={styles.dropdownIcon}
                />
              </View>
              <View style={styles.datePickerItem}>
                <Text style={styles.datePickerValue}>{selectedYear}</Text>
                <Image 
                  source={require('@/assets/images/icon-chevron-down.png')} 
                  style={styles.dropdownIcon}
                />
              </View>
            </View>

            <TouchableOpacity 
              style={styles.saveButton}
              onPress={handleSaveEvent}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.base,
  },
  backButton: {
    padding: Spacing.sm,
    marginLeft: -Spacing.sm,
  },
  backIcon: {
    width: IconSize.base,
    height: IconSize.base,
    tintColor: Colors.text.primary,
  },
  headerTitle: {
    ...Typography.pageTitleRegular,
    color: Colors.text.primary,
    marginLeft: Spacing.sm,
  },
  calendarContainer: {
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    padding: Spacing.lg,
  },
  monthTitle: {
    ...Typography.pageTitle,
    color: Colors.black,
    textAlign: 'center',
    marginBottom: Spacing.xl,
  },
  weekDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: Spacing.base,
  },
  weekDay: {
    ...Typography.bodyBase,
    color: Colors.text.secondary,
    width: 40, // Fixed width for calendar grid
    textAlign: 'center',
  },
  datesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  dateCell: {
    width: '14.28%', // 7 days in a week
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  dateCircle: {
    width: 36, // Calendar date circle size
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateCircleSelected: {
    backgroundColor: Colors.primary,
  },
  dateCircleWithReminder: {
    backgroundColor: Colors.primary,
  },
  dateText: {
    ...Typography.bodyLarge,
    color: Colors.text.primary,
  },
  dateTextSelected: {
    ...Typography.bodyLarge,
    color: Colors.black,
    fontWeight: '600',
  },
  addButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.base,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.xl,
    ...Shadow.md,
    minWidth: 120, // Min button width
  },
  addIcon: {
    width: 28, // Custom icon size for add button
    height: 28,
  },
  remindersListContainer: {
    marginHorizontal: Spacing.lg,
    marginBottom: 40, // Extra space for scrolling
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.base,
    padding: Spacing.xs,
    ...Shadow.sm,
  },
  reminderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.base,
    borderRadius: BorderRadius.md,
  },
  reminderDateBox: {
    alignItems: 'center',
    paddingRight: Spacing.base,
  },
  verticalDivider: {
    width: 1,
    height: 40, // Divider height
    backgroundColor: Colors.border.default,
    marginRight: Spacing.base,
  },
  reminderDateText: {
    ...Typography.bodyLarge,
    fontWeight: '700',
    color: Colors.text.primary,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  reminderTitle: {
    flex: 1,
    ...Typography.bodyLarge,
    color: Colors.text.primary,
  },
  deleteButton: {
    backgroundColor: Colors.grey[50],
    padding: Spacing.sm,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    borderColor: Colors.border.default,
  },
  deleteIcon: {
    width: IconSize.sm,
    height: IconSize.sm,
    tintColor: Colors.text.secondary,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.background.overlay,
  },
  modalContainer: {
    backgroundColor: Colors.grey[50],
    borderTopLeftRadius: BorderRadius.lg,
    borderTopRightRadius: BorderRadius.lg,
    padding: Spacing.xl,
    paddingBottom: 40, // Extra space for modal bottom
    width: dimensions.constrainedWidth,
    alignSelf: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: Spacing.base,
    right: Spacing.base,
    padding: Spacing.sm,
    zIndex: 1,
  },
  closeIcon: {
    width: IconSize.base,
    height: IconSize.base,
    tintColor: Colors.text.primary,
  },
  modalTitle: {
    ...Typography.pageTitleRegular,
    color: Colors.black,
    marginBottom: Spacing.xl,
  },
  inputLabel: {
    ...Typography.bodyBase,
    color: Colors.black,
    marginBottom: Spacing.sm,
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.md,
    ...Typography.bodyLarge,
    color: Colors.text.primary,
    marginBottom: Spacing.lg,
  },
  datePickerRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing['3xl'],
  },
  datePickerItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.md,
  },
  datePickerValue: {
    ...Typography.bodyLarge,
    color: Colors.text.primary,
  },
  dropdownIcon: {
    width: IconSize.sm,
    height: IconSize.sm,
    tintColor: Colors.text.secondary,
  },
  saveButton: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.xl,
    paddingVertical: Spacing.base,
    alignItems: 'center',
  },
  saveButtonText: {
    ...Typography.bodyLarge,
    color: Colors.black,
  },
});

