import { IconSymbol } from '@/components/ui/icon-symbol';
import dimensions from '@/lib/dimensions';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TrackingScreen() {
  const [activeTab, setActiveTab] = useState<'hour' | 'competency'>('hour');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Tracking</Text>
          
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
                  <IconSymbol name="chevron.left" size={16} color="#666" />
                  <Text style={styles.levelTitle}>Level 1</Text>
                  <View style={styles.greenDot} />
                  <IconSymbol name="chevron.right" size={16} color="#666" />
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
                <Text style={styles.examTitle}>Level 1 Exam</Text>
                <Text style={styles.examStatus}>Not Achieved</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.competencyView}>
            {/* Level 1 Section */}
            <View style={styles.card}>
              <View style={styles.levelHeader}>
                <View style={styles.levelTitleRow}>
                  <IconSymbol name="chevron.left" size={16} color="#666" />
                  <Text style={styles.levelTitle}>Level 1</Text>
                  <View style={styles.greenDot} />
                  <IconSymbol name="chevron.right" size={16} color="#666" />
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
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    width: dimensions.constrainedWidth,
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
    width: dimensions.constrainedWidth,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: 393,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    padding: 4,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
  },
  activeToggle: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666666',
  },
  activeToggleText: {
    color: '#2C2C2C',
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
    backgroundColor: '#FFFFFF',
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
});
