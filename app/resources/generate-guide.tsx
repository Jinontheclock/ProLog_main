import CustomTabBar from '@/components/custom-tab-bar';
import { IconSymbol } from '@/components/ui/icon-symbol';
import dimensions from '@/lib/dimensions';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GenerateGuideScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Image 
              source={require('@/assets/images/backArrow.png')}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Generate Guide</Text>
        </View>

        {/* Guide Info */}
        <View style={styles.guideInfoContainer}>
          <Text style={styles.guideLevel}>Industrial Electrician Level 1</Text>
          <View style={styles.guideTitleRow}>
            <Text style={styles.guideTitle}>Line A: Apply Circuit Concepts</Text>
            <View style={styles.actionIcons}>
              <IconSymbol name="bookmark" size={20} color="#666" style={styles.actionIcon} />
              <IconSymbol name="square.and.arrow.down" size={20} color="#666" style={styles.actionIcon} />
              <IconSymbol name="play.circle" size={20} color="#666" />
            </View>
          </View>
          <Text style={styles.guideSubtitle}>Theory Describe the principles of alternating current</Text>
        </View>

        {/* Content Sections */}
        <View style={styles.contentSections}>
          {/* Summary */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.sectionText}>
              Alternating current (AC) is an electric current which periodically reverses direction and changes its magnitude continuously with time, in contrast to direct current (DC), which flows only in one direction. AC is the form in which electric power is delivered to businesses and residences, and it is the form of electrical energy that consumers typically use when they plug kitchen appliances, televisions, fans and electric lamps into a wall socket. The usual waveform of AC in most electric power circuits is a sine wave.
            </Text>
          </View>

          {/* Definition of Alternating Current (AC) */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>1. Definition of Alternating Current (AC):</Text>
            <Text style={styles.sectionText}>
              <Text style={styles.boldText}>Alternating Current (AC):</Text> An electric current that changes direction periodically.
            </Text>
            <Text style={styles.sectionText}>
              <Text style={styles.boldText}>Cycle:</Text> One complete back-and-forth motion of current flow.
            </Text>
            <Text style={styles.sectionText}>
              <Text style={styles.boldText}>Frequency (Hz):</Text> The number of cycles per second (e.g., 60 Hz in North America, 50 Hz in many other countries).
            </Text>
          </View>

          {/* Generation of AC */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>2. Generation of AC:</Text>
            <Text style={styles.sectionText}>
              <Text style={styles.boldText}>Produced by:</Text> Alternators or AC generators.
            </Text>
            <Text style={styles.sectionText}>
              <Text style={styles.boldText}>How it works:</Text> Describes a coil of wire rotating in a magnetic field, inducing alternating voltage.
            </Text>
            <Text style={styles.sectionText}>
              <Text style={styles.boldText}>Result:</Text> A sine wave voltage output.
            </Text>
          </View>

          {/* Characteristics of AC */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>3. Characteristics of AC:</Text>
            <Text style={styles.sectionText}>
              <Text style={styles.boldText}>Waveform:</Text> Most AC systems use a sine wave for smooth and efficient power transmission.
            </Text>
            <Text style={styles.sectionText}>
              <Text style={styles.boldText}>Amplitude (Voltage):</Text> The maximum value (peak) of voltage or current.
            </Text>
            <Text style={styles.sectionText}>
              <Text style={styles.boldText}>Root Mean Square (RMS):</Text> The effective voltage or current value (e.g., 120 V RMS in household outlets).
            </Text>
            <Text style={styles.sectionText}>
              <Text style={styles.boldText}>Phase:</Text> Describes the time relationship between voltage and current waveforms.
            </Text>
          </View>
        </View>
      </ScrollView>
      
      {/* Tab Navigation */}
      <CustomTabBar activeTab="resources" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    width: dimensions.constrainedWidth,
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
    width: dimensions.constrainedWidth,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: dimensions.constrainedWidth,
    backgroundColor: '#F2F2F2',
    marginTop: 0,
  },
  backButton: {
    marginRight: 15,
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  guideInfoContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  guideLevel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  guideTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  guideTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  actionIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  actionIcon: {
    // Add specific styles if needed
  },
  guideSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  contentSections: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
