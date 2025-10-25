import {
  BorderRadius,
  CALENDAR,
  Colors,
  IconSize,
  Spacing,
  Typography
} from '@/constants';
import { CommonStyles } from '@/lib/common-styles';
import { dimensions } from '@/lib/dimensions';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Modal, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ReminderScreen() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(10);
  const [currentMonth] = useState('November');
  const [currentMonthNumber] = useState(11); // November = 11
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [eventName, setEventName] = useState('');
  const [selectedMonth, setSelectedMonth] = useState(11);
  const [selectedDay, setSelectedDay] = useState(22);
  const [selectedYear, setSelectedYear] = useState(2025);
  const [reminders, setReminders] = useState([
    { date: 'Nov\n10', title: 'WHIMS Expiration', day: 10, month: 11, year: 2025 },
    { date: 'Nov\n13', title: 'Level 2 Exam', day: 13, month: 11, year: 2025 },
  ]);

  const handleSaveEvent = () => {
    if (eventName.trim()) {
      const newReminder = {
        date: `${CALENDAR.MONTH_ABBREVIATIONS[selectedMonth - 1]}\n${selectedDay}`,
        title: eventName,
        day: selectedDay,
        month: selectedMonth,
        year: selectedYear,
      };
      setReminders([...reminders, newReminder]);
      setEventName('');
      setIsAddModalVisible(false);
    }
  };

  const handleDeleteReminder = (index: number) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
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
            const hasReminder = reminders.some(
              reminder => reminder.day === day && reminder.month === currentMonthNumber
            );
            
            return (
              <TouchableOpacity
                key={day}
                style={styles.dateCell}
                onPress={() => setSelectedDate(day)}
              >
                <View style={[
                  styles.dateCircle,
                  (isSelected || hasReminder) && styles.dateCircleSelected
                ]}>
                  <Text style={[
                    styles.dateText,
                    (isSelected || hasReminder) && styles.dateTextSelected
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
          <View style={[CommonStyles.neoDoubleOuter, { borderRadius: BorderRadius.xl }]}>
            <TouchableOpacity 
              style={[styles.addButton, CommonStyles.neoDoubleInner, { borderRadius: BorderRadius.xl, backgroundColor: Colors.white }]}
              onPress={() => setIsAddModalVisible(true)}
            >
              <Image 
                    source={require('@/assets/images/icon-add.png')}
                style={styles.addIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Reminders List */}
        <View style={[CommonStyles.neoInsetOuter, { borderRadius: BorderRadius.lg, marginHorizontal: Spacing.lg, marginBottom: 40 }]}>
          <View style={[styles.remindersListContainer, CommonStyles.neoInsetInner, { borderRadius: BorderRadius.lg }]}>
            {reminders.map((reminder, index) => (
              <View key={index} style={styles.reminderCard}>
                <View style={styles.reminderDateBox}>
                  <Text style={styles.reminderDateText}>{reminder.date}</Text>
                </View>
                <View style={styles.verticalDivider} />
                <Text style={styles.reminderTitle}>{reminder.title}</Text>
                <View style={[CommonStyles.neoDoubleOuter, { borderRadius: BorderRadius.sm }]}>
                  <TouchableOpacity 
                    style={[styles.deleteButton, CommonStyles.neoDoubleInner, { borderRadius: BorderRadius.sm, backgroundColor: Colors.grey[50] }]}
                    onPress={() => handleDeleteReminder(index)}
                  >
                    <Image 
                      source={require('@/assets/images/icon-delete.png')} 
                      style={styles.deleteIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
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
            <View style={[CommonStyles.neoDoubleOuter, { borderRadius: BorderRadius.md, marginBottom: Spacing.lg }]}>
              <TextInput
                style={[styles.input, CommonStyles.neoDoubleInner, { borderRadius: BorderRadius.md, backgroundColor: Colors.white, marginBottom: 0 }]}
                value={eventName}
                onChangeText={setEventName}
                placeholder="Canada Apprenticeship Loan Applica.."
                placeholderTextColor={Colors.text.disabled}
              />
            </View>

            <Text style={styles.inputLabel}>Date</Text>
            <View style={styles.datePickerRow}>
              <View style={[CommonStyles.neoDoubleOuter, { flex: 1, borderRadius: BorderRadius.md }]}>
                <View style={[styles.datePickerItem, CommonStyles.neoDoubleInner, { borderRadius: BorderRadius.md, backgroundColor: Colors.white }]}>
                  <Picker
                    selectedValue={selectedMonth}
                    onValueChange={(itemValue: number) => setSelectedMonth(itemValue)}
                    style={styles.picker}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                      <Picker.Item key={month} label={month.toString()} value={month} />
                    ))}
                  </Picker>
                </View>
              </View>
              <View style={[CommonStyles.neoDoubleOuter, { flex: 1, borderRadius: BorderRadius.md }]}>
                <View style={[styles.datePickerItem, CommonStyles.neoDoubleInner, { borderRadius: BorderRadius.md, backgroundColor: Colors.white }]}>
                  <Picker
                    selectedValue={selectedDay}
                    onValueChange={(itemValue: number) => setSelectedDay(itemValue)}
                    style={styles.picker}
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <Picker.Item key={day} label={day.toString()} value={day} />
                    ))}
                  </Picker>
                </View>
              </View>
              <View style={[CommonStyles.neoDoubleOuter, { flex: 1, borderRadius: BorderRadius.md }]}>
                <View style={[styles.datePickerItem, CommonStyles.neoDoubleInner, { borderRadius: BorderRadius.md, backgroundColor: Colors.white }]}>
                  <Picker
                    selectedValue={selectedYear}
                    onValueChange={(itemValue: number) => setSelectedYear(itemValue)}
                    style={styles.picker}
                  >
                    {Array.from({ length: 10 }, (_, i) => 2024 + i).map((year) => (
                      <Picker.Item key={year} label={year.toString()} value={year} />
                    ))}
                  </Picker>
                </View>
              </View>
            </View>

            <View style={[CommonStyles.neoDoubleOuter, { borderRadius: BorderRadius.xl }]}>
              <TouchableOpacity 
                style={[styles.saveButton, CommonStyles.neoDoubleInner, { borderRadius: BorderRadius.xl, backgroundColor: Colors.white }]}
                onPress={handleSaveEvent}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
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
    width: 40,
    textAlign: 'center',
  },
  datesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  dateCell: {
    width: '14.28%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  dateCircle: {
    width: 36, 
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateCircleSelected: {
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
    minWidth: 120,
  },
  addIcon: {
    width: 28, 
    height: 28,
  },
  remindersListContainer: {
    backgroundColor: Colors.grey[50],
    padding: Spacing.xs,
  },
  reminderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.base,
  },
  reminderDateBox: {
    alignItems: 'center',
    paddingRight: Spacing.base,
  },
  verticalDivider: {
    width: 1,
    height: 40, 
    backgroundColor: Colors.border.default,
    marginRight: Spacing.base,
  },
  reminderDateText: {
    ...Typography.bodyLarge,
    color: Colors.text.primary,
    textAlign: 'center',
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
    paddingBottom: 40,
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
  },
  datePickerRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing['3xl'],
  },
  datePickerItem: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  picker: {
    backgroundColor: Colors.white,
    color: Colors.text.primary,
    ...Typography.bodyLarge,
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
    paddingVertical: Spacing.md,
    alignItems: 'center',
    width: '100%',
  },
  saveButtonText: {
    ...Typography.bodyLarge,
    color: Colors.black,
  },
});

