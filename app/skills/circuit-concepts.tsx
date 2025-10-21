import { IconSymbol } from '@/components/ui/icon-symbol';
import { CommonStyles } from '@/lib/common-styles';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CircuitConceptsScreen() {
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState('1x');

  return (
    <SafeAreaView style={CommonStyles.container}>
      <ScrollView style={CommonStyles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Image 
              source={require('@/assets/images/backbutton.png')} 
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerStatus}>
            {isCompleted ? 'Completed' : 'Incomplete'} Competency
          </Text>
        </View>

        {/* Content Card */}
        <View style={styles.contentCard}>
          {/* Title Section */}
          <Text style={styles.subtitle}>Industrial Electrician Level 1</Text>
          <Text style={styles.title}>Line A: Apply Circuit Concepts</Text>

          {/* Tags */}
          <View style={styles.tagsContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Theory</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>AI Generated</Text>
            </View>
            <TouchableOpacity style={styles.speakerButton}>
              <IconSymbol name="speaker.wave.2" size={20} color="#2C2C2C" />
            </TouchableOpacity>
          </View>

          {/* Description */}
          <Text style={styles.description}>
            Describe the principles of alternating current
          </Text>

          {/* Summary Section */}
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={CommonStyles.bodyText}>
            The principles of alternating current (AC) involve understanding how electrical current periodically reverses direction, how it is generated (usually by rotating machines), and its key characteristics such as frequency, voltage, and waveform. Apprentices should also understand why AC is used—mainly for its efficiency in transmission and voltage transformation—and how it behaves in different types of electrical circuits.
          </Text>

          {/* Definition Section */}
          <Text style={styles.sectionTitle}>1. Definition of Alternating Current (AC)</Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <View style={styles.bulletContent}>
                <Text style={styles.bulletTitle}>Alternating Current (AC):</Text>
                <Text style={styles.bulletText}>
                  {' '}An electric current that changes direction periodically, unlike Direct Current (DC), which flows in only one direction.
                </Text>
              </View>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <View style={styles.bulletContent}>
                <Text style={styles.bulletTitle}>Cycle:</Text>
                <Text style={styles.bulletText}>
                  {' '}One complete back-and-forth motion of current flow.
                </Text>
              </View>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <View style={styles.bulletContent}>
                <Text style={styles.bulletTitle}>Frequency (Hz):</Text>
                <Text style={styles.bulletText}>
                  {' '}The number of cycles per second (e.g., 60 Hz in North America, 50 Hz in many other countries).
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Audio Player */}
        <View style={styles.audioPlayer}>
          <TouchableOpacity style={styles.speedButton}>
            <Text style={styles.speedText}>{playbackSpeed}</Text>
          </TouchableOpacity>
          <View style={styles.progressBar} />
          <TouchableOpacity style={styles.infoButton}>
            <IconSymbol name="info.circle" size={24} color="#2C2C2C" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton}>
            <IconSymbol name="xmark" size={24} color="#2C2C2C" />
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={CommonStyles.whiteButton}
              onPress={() => router.push('/skills/quiz')}
            >
              <IconSymbol name="doc.text" size={20} color="#E07843" />
              <Text style={styles.challengeButtonText}>Challenge Quiz</Text>
            </TouchableOpacity>
            
            {!isCompleted && (
              <TouchableOpacity
                style={CommonStyles.whiteButton}
                onPress={() => setIsCompleted(true)}
              >
                <Text style={CommonStyles.whiteButtonText}>Mark as Complete</Text>
                <IconSymbol name="checkmark" size={20} color="#2C2C2C" />
              </TouchableOpacity>
            )}
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 8,
    marginLeft: -8,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#2C2C2C',
  },
  headerStatus: {
    fontSize: 14,
    color: '#8E8E93',
    fontFamily: 'Roboto',
  },
  contentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#8E8E93',
    marginBottom: 4,
    fontFamily: 'Roboto',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
    fontFamily: 'Roboto-Bold',
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  tag: {
    backgroundColor: '#2C2C2C',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
  },
  speakerButton: {
    marginLeft: 'auto',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 24,
    fontFamily: 'Roboto',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 12,
    marginTop: 8,
    fontFamily: 'Roboto-Bold',
  },
  bulletList: {
    marginBottom: 16,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  bulletPoint: {
    fontSize: 15,
    color: '#000000',
    marginRight: 8,
    fontFamily: 'Roboto',
  },
  bulletContent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bulletTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'Roboto-Bold',
  },
  bulletText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#000000',
    fontFamily: 'Roboto',
  },
  audioPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    borderRadius: 16,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  speedButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
  },
  speedText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C2C2C',
    fontFamily: 'Roboto-Medium',
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
  },
  infoButton: {},
  closeButton: {},
  actionButtons: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    gap: 12,
  },
  challengeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E07843',
    fontFamily: 'Roboto-Medium',
  },
});

