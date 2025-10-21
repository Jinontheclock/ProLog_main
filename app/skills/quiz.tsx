import { IconSymbol } from '@/components/ui/icon-symbol';
import { CommonStyles } from '@/lib/common-styles';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function QuizScreen() {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  return (
    <SafeAreaView style={CommonStyles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => router.back()}
          >
            <IconSymbol name="xmark" size={24} color="#2C2C2C" />
          </TouchableOpacity>
          <Text style={styles.questionCounter}>2 of 6</Text>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>
              What is the main characteristic of alternating current (AC)?
            </Text>
          </View>

          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.option}
              onPress={() => setSelectedAnswer(0)}
            >
              <Text style={styles.optionText}>It flows in one direction only</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.option}
              onPress={() => setSelectedAnswer(1)}
            >
              <Text style={styles.optionText}>It changes direction periodically</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.option, selectedAnswer === 2 && styles.optionSelected]}
              onPress={() => setSelectedAnswer(2)}
            >
              <Text style={styles.optionText}>It has constant magnitude</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.option}
              onPress={() => setSelectedAnswer(3)}
            >
              <Text style={styles.optionText}>It stops and starts repeatedly</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.actionContainer}>
            <TouchableOpacity style={CommonStyles.whiteButton}>
              <Text style={CommonStyles.whiteButtonText}>Proceed to Next</Text>
              <IconSymbol name="arrow.right" size={20} color="#2C2C2C" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  closeButton: {
    padding: 4,
  },
  questionCounter: {
    fontSize: 16,
    color: '#8E8E93',
    fontFamily: 'Roboto',
  },
  scrollView: {
    flex: 1,
  },
  questionContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
  },
  questionText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    lineHeight: 32,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  optionsContainer: {
    paddingHorizontal: 20,
    gap: 12,
  },
  option: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  optionSelected: {
    backgroundColor: '#4A4A4A',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  actionContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
});

