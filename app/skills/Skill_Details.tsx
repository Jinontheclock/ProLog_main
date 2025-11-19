import {
    AUDIO,
    BorderRadius,
    Colors,
    IconSize,
    Shadow,
    Spacing,
    Typography
} from '@/constants';
import { CommonStyles } from '@/lib/common-styles';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CircuitConceptsScreen() {
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(AUDIO.DEFAULT_PLAYBACK_SPEED);
  const [isAudioModalVisible, setIsAudioModalVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <SafeAreaView style={CommonStyles.container}>
      <ScrollView style={CommonStyles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push('/(tabs)/My_Skills')} style={CommonStyles.backButtonWithText}>
            <Image 
              source={require('@/assets/images/icon-back-button.png')} 
              style={CommonStyles.backIcon}
            />
            <Text style={CommonStyles.backText}>Back</Text>
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
            <TouchableOpacity 
              style={styles.speakerButton}
              onPress={() => setIsAudioModalVisible(true)}
            >
              <Image 
                source={require('@/assets/images/icon-volume.png')} 
                style={styles.volumeIcon}
              />
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
              </View>

          {/* Definition Section */}
                  <View style={styles.contentCard}>
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

          {/* Generation of AC Section */}
          <View style={styles.contentCard}>
          <Text style={styles.sectionTitle}>2. Generation of AC</Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <View style={styles.bulletContent}>
                <Text style={styles.bulletTitle}>Produced by:</Text>
                <Text style={styles.bulletText}>
                  {' '}Alternators or AC generators.
                </Text>
              </View>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <View style={styles.bulletContent}>
                <Text style={styles.bulletTitle}>How it works:</Text>
              </View>
            </View>
            <View style={[styles.bulletItem, { paddingLeft: 20 }]}>
              <Text style={styles.bulletPoint}>•</Text>
              <View style={styles.bulletContent}>
                <Text style={styles.bulletText}>
                  A coil of wire rotates within a magnetic field.
                </Text>
              </View>
            </View>
            <View style={[styles.bulletItem, { paddingLeft: 20 }]}>
              <Text style={styles.bulletPoint}>•</Text>
              <View style={styles.bulletContent}>
                <Text style={styles.bulletText}>
                  This rotation induces a voltage that alternates in polarity (positive and negative).
                </Text>
              </View>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <View style={styles.bulletContent}>
                <Text style={styles.bulletTitle}>Result:</Text>
                <Text style={styles.bulletText}>
                  {' '}A sine wave voltage output.
                </Text>
              </View>
            </View>
          </View>
          </View>

          {/* Characteristics of AC Section */}
          <View style={styles.contentCard}>
          <Text style={styles.sectionTitle}>3. Characteristics of AC</Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <View style={styles.bulletContent}>
                <Text style={styles.bulletTitle}>Waveform:</Text>
                <Text style={styles.bulletText}>
                  {' '}Most AC systems use a sine wave because it's smooth and efficient for power transmission.
                </Text>
              </View>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <View style={styles.bulletContent}>
                <Text style={styles.bulletTitle}>Amplitude (Voltage):</Text>
                <Text style={styles.bulletText}>
                  {' '}The maximum value (peak) of the voltage or current in a cycle.
                </Text>
              </View>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <View style={styles.bulletContent}>
                <Text style={styles.bulletTitle}>Root Mean Square (RMS):</Text>
                <Text style={styles.bulletText}>
                  {' '}The effective voltage or current value (e.g., 120 V RMS in household outlets).
                </Text>
              </View>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <View style={styles.bulletContent}>
                <Text style={styles.bulletTitle}>Phase:</Text>
                <Text style={styles.bulletText}>
                  {' '}Describes the time relationship between voltage and current waveforms.
                </Text>
              </View>
            </View>
          </View>
          </View>

        {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <View style={[CommonStyles.neoDoubleOuter, { borderRadius: 24, width: '100%' }]}>
              <TouchableOpacity
                style={[CommonStyles.whiteButton, CommonStyles.neoDoubleInner, { borderRadius: 24, backgroundColor: Colors.white, paddingVertical: 10, width: '100%' }]}
                onPress={() => router.push('/skills/Skill_Detail_Quiz')}
              >
                <Text style={[styles.challengeButtonText, { fontWeight: '400' }]}>Challenge Quiz</Text>
                <Image 
                    source={require('@/assets/images/icon-assignment.png')}
                  style={styles.buttonIcon}
                />
              </TouchableOpacity>
            </View>
            
            {!isCompleted && (
              <View style={[CommonStyles.neoDoubleOuter, { borderRadius: 24, width: '100%' }]}>
                <TouchableOpacity
                  style={[CommonStyles.whiteButton, CommonStyles.neoDoubleInner, { borderRadius: 24, backgroundColor: Colors.white, paddingVertical: 10, width: '100%' }]}
                  onPress={() => {
                    setIsCompleted(true);
                    router.push('/(tabs)/My_Skills');
                  }}
                >
                  <Text style={[CommonStyles.whiteButtonText, { fontWeight: '400' }]}>Mark as Complete</Text>
                  <Image 
                    source={require('@/assets/images/icon-check.png')} 
                    style={styles.buttonIcon}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
      </ScrollView>

      {/* Audio Control Bar - Fixed Overlay */}
      {isAudioModalVisible && (
        <View style={styles.audioControlBarOverlay}>
          <View style={styles.audioControlBar}>
            <TouchableOpacity style={styles.speedButton}>
              <Text style={styles.speedButtonText}>{playbackSpeed}</Text>
            </TouchableOpacity>

            <View style={styles.progressBarContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '30%' }]} />
              </View>
            </View>

            <TouchableOpacity 
              style={styles.playPauseButton}
              onPress={() => setIsPlaying(!isPlaying)}
            >
              <Image 
                source={require('@/assets/images/icon-pause.png')} 
                style={styles.playPauseIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.closeModalButton}
              onPress={() => setIsAudioModalVisible(false)}
            >
              <Image 
                source={require('@/assets/images/icon-close.png')} 
                style={styles.closeModalIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.base,
  },
  headerStatus: {
    ...Typography.bodyBase,
    color: Colors.text.secondary,
  },
  contentCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    paddingTop: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.sm,
    ...Shadow.base,
  },
  subtitle: {
    ...Typography.caption,
    color: Colors.text.secondary,
    marginBottom: Spacing.xs,
  },
  title: {
    ...Typography.pageTitle,
    color: Colors.black,
    marginBottom: Spacing.base,
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.base,
  },
  tag: {
    backgroundColor: Colors.dark,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.base,
  },
  tagText: {
    ...Typography.tag,
    color: Colors.white,
  },
  speakerButton: {
    marginLeft: 'auto',
  },
  description: {
    ...Typography.bodyLarge,
    color: Colors.black,
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    ...Typography.bodyLarge,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: Spacing.md,
    marginTop: Spacing.sm,
    fontFamily: 'Roboto-Bold',
  },
  bulletList: {
    marginBottom: Spacing.base,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: Spacing.md,
  },
  bulletPoint: {
    ...Typography.body,
    color: Colors.black,
    marginRight: Spacing.sm,
  },
  bulletContent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bulletTitle: {
    ...Typography.body,
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Roboto-Bold',
  },
  bulletText: {
    ...Typography.body,
    color: Colors.black,
  },
  audioPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.base,
    padding: Spacing.base,
    borderRadius: BorderRadius.base,
    gap: Spacing.md,
    ...Shadow.sm,
  },
  speedButton: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    backgroundColor: Colors.grey[50],
    borderRadius: BorderRadius.sm,
  },
  speedText: {
    ...Typography.bodyBase,
    fontWeight: '600',
    color: Colors.text.primary,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: Colors.grey[200],
    borderRadius: BorderRadius.xxs,
  },
  infoButton: {},
  closeButton: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: 100, // Extra space for bottom tab bar
    gap: Spacing.md,
  },
    actionButtons: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',  
    gap: Spacing.lg,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
},

  challengeButtonText: {
    ...Typography.bodyLarge,
    fontWeight: '600',
    color: Colors.primary,
    flexShrink: 0,
  },
  buttonIcon: {
    width: IconSize.sm,
    height: IconSize.sm,
    marginLeft: Spacing.xs,
  },
  flexButton: {
    flex: 1,
  },
  volumeIcon: {
    width: IconSize.sm,
    height: IconSize.sm,
  },
  audioControlBarOverlay: {
    position: 'absolute',
    bottom: 120, // Fixed position above bottom tab bar
    left: 0,
    right: 0,
  },
  audioControlBar: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    marginHorizontal: Spacing.lg,
    paddingVertical: Spacing.base,
    paddingHorizontal: Spacing.base,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    ...CommonStyles.dropShadow,
  },
  speedButton: {
    backgroundColor: Colors.grey[50],
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.sm,
  },
  speedButtonText: {
    ...Typography.bodyBase,
    fontWeight: '600',
    color: Colors.text.primary,
  },
  progressBarContainer: {
    flex: 1,
  },
  progressBar: {
    height: 4,
    backgroundColor: Colors.grey[200],
    borderRadius: BorderRadius.xxs,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.text.primary,
    borderRadius: BorderRadius.xxs,
  },
  playPauseButton: {
    padding: Spacing.sm,
  },
  playPauseIcon: {
    width: IconSize.base,
    height: IconSize.base,
  },
  closeModalButton: {
    padding: Spacing.sm,
  },
  closeModalIcon: {
    width: IconSize.base,
    height: IconSize.base,
  },
});

