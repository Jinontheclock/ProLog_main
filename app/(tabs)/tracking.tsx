import { IconSymbol } from '@/components/ui/icon-symbol';
import { CommonStyles } from '@/lib/common-styles';
import React, { useState } from 'react';
import { Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TrackingScreen() {
  const [activeTab, setActiveTab] = useState<'hour' | 'competency' | 'event'>('hour');
  const [currentMonth, setCurrentMonth] = useState('November');
  const [showAddEventModal, setShowAddEventModal] = useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const changeMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prevMonth => {
      const currentIndex = months.indexOf(prevMonth);
      let newIndex;
      
      if (direction === 'prev') {
        newIndex = currentIndex === 0 ? months.length - 1 : currentIndex - 1;
      } else {
        newIndex = currentIndex === months.length - 1 ? 0 : currentIndex + 1;
      }
      
      return months[newIndex];
    });
  };

  return (
    <SafeAreaView style={CommonStyles.container}>
      <ScrollView style={CommonStyles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={CommonStyles.mainTitle}>Tracking</Text>
          
          {/* Toggle Buttons */}
          <View style={styles.toggleContainer}>
            <TouchableOpacity 
              style={[styles.toggleButton, activeTab === 'hour' && styles.activeToggle]}
              onPress={() => setActiveTab('hour')}
            >
              <Text style={[styles.toggleText, activeTab === 'hour' && styles.activeToggleText]}>
                Hour
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.toggleButton, activeTab === 'competency' && styles.activeToggle]}
              onPress={() => setActiveTab('competency')}
            >
              <Text style={[styles.toggleText, activeTab === 'competency' && styles.activeToggleText]}>
                Competency
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.toggleButton, activeTab === 'event' && styles.activeToggle]}
              onPress={() => setActiveTab('event')}
            >
              <Text style={[styles.toggleText, activeTab === 'event' && styles.activeToggleText]}>
                Event
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Content based on active tab */}
        {activeTab === 'hour' ? (
          <View style={styles.hourView}>
            {/* Total Training Hours Card */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <IconSymbol name="clock" size={20} color="#666" />
                <Text style={styles.cardTitle}>Total Training Hours</Text>
              </View>
              <Text style={styles.lastUpdated}>Last updated 2:45PM</Text>
              
              {/* Circular Progress */}
              <View style={styles.progressContainer}>
                <View style={styles.circularProgress}>
                  <Text style={styles.progressText}>20%</Text>
                </View>
                <Text style={styles.progressLabel}>1,500/6,000 hrs</Text>
              </View>
            </View>

            {/* Level 1 Card */}
            <View style={styles.card}>
              <View style={styles.levelHeader}>
                <View style={styles.levelTitleRow}>
                  <TouchableOpacity>
                    <IconSymbol name="chevron.left" size={16} color="#666" />
                  </TouchableOpacity>
                  <Text style={styles.levelTitle}>Level 1</Text>
                  <View style={styles.greenDot} />
                  <TouchableOpacity>
                    <IconSymbol name="chevron.right" size={16} color="#666" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Hours Section */}
              <View style={styles.section}>
                <Text style={styles.sectionLabel}>Hours</Text>
                <View style={styles.progressBarContainer}>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: '90%' }]} />
                  </View>
                  <Text style={styles.progressValue}>1,500/1,600</Text>
                </View>
              </View>

              {/* Exam Section */}
              <View style={styles.section}>
                <Text style={styles.sectionLabel}>Exam</Text>
                <Text style={styles.examStatus}>Level 1 Exam Not Achieved</Text>
              </View>
            </View>
          </View>
        ) : activeTab === 'competency' ? (
          <View style={styles.competencyView}>
            {/* Level 1 Section */}
            <View style={styles.card}>
              <View style={styles.levelHeader}>
                <View style={styles.levelTitleRow}>
                  <TouchableOpacity>
                    <IconSymbol name="chevron.left" size={16} color="#666" />
                  </TouchableOpacity>
                  <Text style={styles.levelTitle}>Level 1</Text>
                  <View style={styles.greenDot} />
                  <TouchableOpacity>
                    <IconSymbol name="chevron.right" size={16} color="#666" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Competency List */}
              <View style={styles.competencyList}>
                <TouchableOpacity style={[styles.competencyItem, styles.competencyItemDark]}>
                  <Text style={styles.competencyTextDark}>Line A: Apply Circuit Concepts – Theory</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.competencyItem}>
                  <Text style={styles.competencyText}>Line A: Apply Circuit Concepts – Practical</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.competencyItem, styles.competencyItemDark]}>
                  <Text style={styles.competencyTextDark}>Line A: Apply Circuit Concepts – Theory</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.competencyItem}>
                  <Text style={styles.competencyText}>Line A: Apply Circuit Concepts – Practical</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.competencyItem, styles.competencyItemDark]}>
                  <Text style={styles.competencyTextDark}>Line A: Apply Circuit Concepts – Theory</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.competencyItem}>
                  <Text style={styles.competencyText}>Line A: Apply Circuit Concepts – Practical</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.competencyItem, styles.competencyItemDark]}>
                  <Text style={styles.competencyTextDark}>Line A: Apply Circuit Concepts – Theory</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.competencyItem}>
                  <Text style={styles.competencyText}>Line A: Apply Circuit Concepts – Practical</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.eventView}>
            {/* Month Navigation */}
            <View style={styles.monthNavigation}>
              <TouchableOpacity 
                style={styles.arrowButton}
                onPress={() => changeMonth('prev')}
              >
                <IconSymbol 
                  name="chevron.right" 
                  size={20} 
                  color="#2C2C2C" 
                  style={{ transform: [{ scaleX: -1 }] }}
                />
              </TouchableOpacity>
              <Text style={styles.monthTitle}>{currentMonth}</Text>
              <TouchableOpacity 
                style={styles.arrowButton}
                onPress={() => changeMonth('next')}
              >
                <IconSymbol name="chevron.right" size={20} color="#2C2C2C" />
              </TouchableOpacity>
            </View>

            {/* Event List */}
            <View style={styles.eventCard}>
              <View style={styles.eventItem}>
                <Text style={styles.eventDate}>Nov. 10</Text>
                <Text style={styles.eventTitle}>First Aid Certification Expiration</Text>
              </View>
              <View style={styles.eventItem}>
                <Text style={styles.eventDate}>Nov. 13</Text>
                <Text style={styles.eventTitle}>Level 2 Exam</Text>
              </View>
              <View style={styles.eventItem}>
                <Text style={styles.eventDate}>Nov. 22</Text>
                <Text style={styles.eventTitle}>Canada Apprenticeship Loan Application Deadline</Text>
              </View>
            </View>

            {/* Floating Action Button */}
            <TouchableOpacity 
              style={styles.fab}
              onPress={() => setShowAddEventModal(true)}
            >
              <Image 
                source={require('@/assets/images/addIcon.png')}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      {/* Add Event Modal */}
      <Modal
        visible={showAddEventModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowAddEventModal(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowAddEventModal(false)}
        >
          <TouchableOpacity 
            style={styles.modalContainer}
            activeOpacity={1}
            onPress={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add Event</Text>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={() => setShowAddEventModal(false)}
              >
                <IconSymbol name="xmark" size={20} color="#2C2C2C" />
              </TouchableOpacity>
            </View>

            {/* Modal Content */}
            <View style={styles.modalContent}>
              {/* Name Field */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Event name"
                  placeholderTextColor="#999"
                />
              </View>

              {/* Date Field */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Date</Text>
                <View style={styles.dateRow}>
                  <View style={styles.dateInput}>
                    <Text style={styles.datePlaceholder}>Month</Text>
                    <IconSymbol name="chevron.down" size={16} color="#666" />
                  </View>
                  <View style={styles.dateInput}>
                    <Text style={styles.datePlaceholder}>Date</Text>
                    <IconSymbol name="chevron.down" size={16} color="#666" />
                  </View>
                  <View style={styles.dateInput}>
                    <Text style={styles.datePlaceholder}>Year</Text>
                    <IconSymbol name="chevron.down" size={16} color="#666" />
                  </View>
                </View>
              </View>
            </View>

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: 393,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    borderRadius: 25,
    padding: 4,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
    minWidth: 100,
  },
  activeToggle: {
    backgroundColor: '#2C2C2C',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666666',
  },
  activeToggleText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  hourView: {
    paddingHorizontal: 20,
    gap: 20,
  },
  competencyView: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  lastUpdated: {
    fontSize: 12,
    color: '#666',
    marginBottom: 20,
  },
  progressContainer: {
    alignItems: 'center',
    gap: 10,
  },
  circularProgress: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 8,
    borderColor: '#424242',
  },
  progressText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  progressLabel: {
    fontSize: 16,
    color: '#666',
  },
  levelHeader: {
    marginBottom: 20,
  },
  levelTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  levelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  greenDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#424242',
  },
  section: {
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 8,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#424242',
    borderRadius: 4,
  },
  progressValue: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '500',
  },
  examTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  examStatus: {
    fontSize: 14,
    color: '#424242',
    fontWeight: '500',
  },
  competencyList: {
    gap: 8,
  },
  competencyItem: {
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  competencyItemDark: {
    backgroundColor: '#2C2C2C',
    borderColor: '#2C2C2C',
  },
  competencyText: {
    fontSize: 14,
    color: '#2C2C2C',
    fontWeight: '500',
  },
  competencyTextDark: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  eventView: {
    paddingHorizontal: 20,
    position: 'relative',
  },
  monthNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 16,
  },
  arrowButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  closeButton: {
    padding: 4,
  },
  modalContent: {
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#2C2C2C',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  dateRow: {
    flexDirection: 'row',
    gap: 12,
  },
  dateInput: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  datePlaceholder: {
    fontSize: 16,
    color: '#999',
  },
  saveButton: {
    backgroundColor: '#2C2C2C',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  eventCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    gap: 16,
  },
  eventItem: {
    paddingBottom: 8,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 4,
  },
  eventDate: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  fab: {
    position: 'absolute',
    bottom: -100,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
});
