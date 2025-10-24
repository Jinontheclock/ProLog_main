import { CommonStyles } from '@/lib/common-styles';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function QuizResultScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={CommonStyles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => router.push('/skills/Skill_Details')}
        >
          <Image 
            source={require('@/assets/images/icon-close.png')} 
            style={styles.closeIcon}
          />
        </TouchableOpacity>

        <View style={styles.resultContainer}>
          <Image 
            source={require('@/assets/images/icon-bookmark-check.png')} 
            style={styles.iconImage}
          />
          
          <Text style={styles.resultTitle}>You've Completed{'\n'}the quiz</Text>
          
          <Text style={styles.resultSubtitle}>
            You got 2/5 questions right!{'\n'}
            You might want to read up on the{'\n'}
            competency one more.
          </Text>

          <TouchableOpacity 
            style={[CommonStyles.whiteButton, styles.buttonMargin]}
            onPress={() => router.push('/skills/Skill_Detail_Quiz')}
          >
            <Text style={styles.redoButtonText}>Redo Quiz</Text>
            <Image 
              source={require('@/assets/images/icon-assignment.png')} 
              style={styles.buttonIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[CommonStyles.whiteButton, styles.buttonMargin]}
            onPress={() => router.push('/skills/Skill_Details')}
          >
            <Text style={CommonStyles.whiteButtonText}>Mark as Complete</Text>
            <Image 
              source={require('@/assets/images/icon-check.png')} 
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    left: 20,
    padding: 4,
    zIndex: 1,
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  iconImage: {
    width: 80,
    height: 80,
    marginBottom: 32,
  },
  resultTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Roboto-Bold',
  },
  resultSubtitle: {
    fontSize: 16,
    color: '#8E8E93',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    fontFamily: 'Roboto',
  },
  redoButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E07843',
    fontFamily: 'Roboto-Medium',
    flexShrink: 0,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginLeft: 6,
  },
  buttonMargin: {
    marginBottom: 12,
    width: '100%',
  },
});

