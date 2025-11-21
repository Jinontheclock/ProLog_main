import { AddReminderDialogueBox } from '@/components/shared/AddReminderDialogueBox';
import { DeleteReminderDialogue } from '@/components/shared/DeleteReminderDialogue';
import { ReminderFullView } from '@/components/shared/ReminderFullView';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/design-tokens';
import { CommonStyles } from '@/lib/common-styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const reminders = [
  { title: 'First Day Back School', date: 'Dec 2, 2025', day: 'Tuesday' },
  { title: 'Canada Apprenticeship Loan Deadline', date: 'Dec 2, 2025', day: 'Tuesday' },
  { title: 'Purchase Textbooks', date: 'Dec 2, 2025', day: 'Tuesday' },
];

export default function DashboardReminderScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [pendingDeleteIndex, setPendingDeleteIndex] = useState<number | null>(null);
  const [reminderList, setReminderList] = useState(reminders);

  const handleAddReminder = (title: string, date: string) => {
    const newReminder = {
      title,
      date,
      day: 'Tuesday', // You can calculate this based on the date
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
        style={CommonStyles.backgroundImage}
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
          <Text style={styles.pageTitle}>Event Calendar</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Calendar and Reminders */}
        <ReminderFullView 
          reminders={reminderList} 
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
