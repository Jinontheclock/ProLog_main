import { IconSymbol } from '@/components/ui/icon-symbol';
import { CommonStyles } from '@/lib/common-styles';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function QuizResultScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={CommonStyles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => router.back()}
        >
          <IconSymbol name="xmark" size={24} color="#2C2C2C" />
        </TouchableOpacity>

        <View style={styles.resultContainer}>
          <View style={styles.resultIcon}>
            <IconSymbol name="checkmark" size={48} color="#2C2C2C" />
          </View>
          
          <Text style={styles.resultTitle}>You've Completed{'\n'}the quiz</Text>
          
          <Text style={styles.resultSubtitle}>
            You got 2/5 questions right!{'\n'}
            You might want to read up on the{'\n'}
            competency one more.
          </Text>

          <TouchableOpacity style={CommonStyles.whiteButton}>
            <IconSymbol name="arrow.clockwise" size={20} color="#E07843" />
            <Text style={styles.redoButtonText}>Redo Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={CommonStyles.whiteButton}
            onPress={() => router.back()}
          >
            <Text style={CommonStyles.whiteButtonText}>Mark as Complete</Text>
            <IconSymbol name="checkmark" size={20} color="#2C2C2C" />
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
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  resultIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
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
  },
});

