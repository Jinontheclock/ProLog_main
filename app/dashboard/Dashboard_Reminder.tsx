import { AddReminderDialogueBox } from '@/components/shared/AddReminderDialogueBox';
import { DeleteReminderDialogue } from '@/components/shared/DeleteReminderDialogue';
import { ReminderFullView } from '@/components/shared/ReminderFullView';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/design-tokens';
import { CommonStyles } from '@/lib/common-styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DEFAULT_REMINDERS = [
  { title: 'First Day Back School', date: 'Dec 2, 2025', day: 'Tuesday' },
  { title: 'Canada Apprenticeship Loan Deadline', date: 'Dec 2, 2025', day: 'Tuesday' },
  { title: 'Purchase Textbooks', date: 'Dec 2, 2025', day: 'Tuesday' },
];

export default function DashboardReminderScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [pendingDeleteIndex, setPendingDeleteIndex] = useState<number | null>(null);
  const [reminderList, setReminderList] = useState(DEFAULT_REMINDERS);

  // Helper: merge user reminders with defaults, removing deleted defaults
  function mergeReminders(userReminders) {
    // If user deleted a default, don't show it
    const userTitles = userReminders.map(r => r.title);
    // Keep defaults not deleted, and add new user reminders
    const merged = [
      ...DEFAULT_REMINDERS.filter(def => userTitles.includes(def.title)),
      ...userReminders.filter(r => !DEFAULT_REMINDERS.some(def => def.title === r.title))
    ];
    return merged;
  }

  // Load reminders from AsyncStorage on mount
  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem('reminders');
        let userReminders = [];
        if (stored) {
          userReminders = JSON.parse(stored).filter(r => !r.deleted);
        }
        // Always show defaults + user-added events (deleted defaults are restored)
        const merged = [
          ...DEFAULT_REMINDERS,
          ...userReminders.filter(r => !DEFAULT_REMINDERS.some(def => def.title === r.title))
        ];
        setReminderList(merged);
      } catch (e) {
        setReminderList(DEFAULT_REMINDERS);
      }
    })();
  }, []);

  // Save reminders to AsyncStorage whenever they change
  useEffect(() => {
    // Only store user-added reminders (not defaults)
    const userReminders = reminderList.filter(r => !DEFAULT_REMINDERS.some(def => def.title === r.title));
    AsyncStorage.setItem('reminders', JSON.stringify(userReminders));
  }, [reminderList]);

  const handleAddReminder = (title: string, date: string) => {
    // Calculate day of week from date string
    let parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      parsedDate = new Date();
    }
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][parsedDate.getDay()];
    const formattedDate = parsedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const newReminder = {
      title,
      date: formattedDate,
      day,
    };
    setReminderList([...reminderList, newReminder]);
  };

  const handleDeleteReminder = (index: number) => {
    setPendingDeleteIndex(index);
    setIsDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    if (pendingDeleteIndex !== null) {
      setReminderList(reminderList.filter((_, i) => i !== pendingDeleteIndex));
      setPendingDeleteIndex(null);
    }
    setIsDeleteModalVisible(false);
  };

  return (
    <SafeAreaView style={CommonStyles.container}>
      <Image 
        source={require('@/assets/images/background-grid 1.svg')}
        style={[CommonStyles.backgroundImage, { opacity: 0.15 }]}
        resizeMode="cover"
      />
      <ScrollView style={CommonStyles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Status Bar Spacer */}
        <View style={{ height: 47 }} />
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.push('/(tabs)/Dashboard')}>
            <MaterialCommunityIcons name="arrow-left" size={24} color={Colors.grey[700]} />
          </TouchableOpacity>
          <View style={styles.titleWrapper}>
            <Text style={styles.pageTitle}>Event Calendar</Text>
          </View>
          <View style={{ width: 40 }} />
        </View>

        {/* Calendar and Reminders */}
        <ReminderFullView 
          reminders={reminderList.filter(r => !r.deleted)} 
          onAddReminder={() => setIsModalVisible(true)}
          onDeleteReminder={handleDeleteReminder}
        />

        <View style={{ height: 100 }} />
      </ScrollView>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsModalVisible(false)}
        >
          <TouchableOpacity activeOpacity={1} onPress={(e) => e.stopPropagation()}>
            <AddReminderDialogueBox
              visible={isModalVisible}
              onClose={() => setIsModalVisible(false)}
              onAdd={handleAddReminder}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

      <Modal
        visible={isDeleteModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => {
          setIsDeleteModalVisible(false);
          setPendingDeleteIndex(null);
        }}
      >
        <DeleteReminderDialogue
          visible={isDeleteModalVisible}
          onClose={() => {
            setIsDeleteModalVisible(false);
            setPendingDeleteIndex(null);
          }}
          onDelete={confirmDelete}
        />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    titleWrapper: {
      position: 'absolute',
      left: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      pointerEvents: 'none',
    },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  backButton: {
     width: 40,
     height: 40,
     borderRadius: 20,
     backgroundColor: Colors.white,
     justifyContent: 'center',
     alignItems: 'center',
     shadowColor: Colors.grey[900],
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.1,
     shadowRadius: 4,
     elevation: 2,
     marginLeft: 24,
  },
  pageTitle: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 24,
    lineHeight: 28,
    color: Colors.grey[700],
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
