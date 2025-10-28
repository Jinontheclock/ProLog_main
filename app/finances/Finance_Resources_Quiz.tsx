import {
  Colors,
  ELIGIBILITY,
  QUIZ,
  Spacing,
  TIMING,
  Typography
} from '@/constants';
import { CommonStyles } from '@/lib/common-styles';
import dimensions from '@/lib/dimensions';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EligibilityQuizScreen() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const questions = [
    {
      question: 'What is your citizenship status in Canada?',
      options: ELIGIBILITY.CITIZENSHIP_OPTIONS
    },
    // Add more questions as needed
  ];

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    // Navigate to saved page after a short delay
    setTimeout(() => {
      router.push('/finances/Finance_Resources_Quiz_Results');
    }, TIMING.NAVIGATION_DELAY);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      router.push('/finances/Finance_Resources_Quiz_Results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  if (!quizStarted) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.startContainer}>
          {/* Header */}
          <View style={styles.startHeader}>
            <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
              <Image 
                source={require('@/assets/images/icon-close.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <Text style={styles.startTitle}>Eligibility Quiz</Text>
          </View>

          {/* Content */}
          <View style={styles.startContent}>
            <Text style={styles.startText}>
              Based on the result of this{'\n'}quiz, we will recommend{'\n'}you financial support{'\n'}that you can apply to.
            </Text>
            
            {/* Start Button */}
            <View style={[CommonStyles.neoDoubleOuter, { borderRadius: 40, width: '100%' }]}>
              <TouchableOpacity 
                style={[CommonStyles.neoDoubleInner, styles.startButton]}
                onPress={() => setQuizStarted(true)}
              >
                <Text style={styles.startButtonText}>Start</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.startHeader}>
          <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
            <Image 
              source={require('@/assets/images/icon-close.png')}
              style={styles.closeIcon}
            />
          </TouchableOpacity>
          <Text style={styles.startTitle}>Eligibility Quiz</Text>
        </View>

        {/* Question */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>What is your{'\n'}citizenship status{'\n'}in Canada?</Text>
        </View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {currentQ.options.map((option, index) => (
            <TouchableOpacity 
              key={index}
              style={[styles.optionButton, selectedOption === option && styles.selectedOption]}
              onPress={() => handleOptionSelect(option)}
            >
              <Text style={[styles.optionText, selectedOption === option && styles.selectedOptionText]}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Pagination */}
        <View style={styles.paginationContainer}>
          <TouchableOpacity 
            style={styles.paginationButton}
            onPress={handlePrevious}
            disabled={currentQuestion === 0}
          >
            <Image 
              source={require('@/assets/images/icon-arrow-back.png')}
              style={[styles.paginationIcon, currentQuestion === 0 && styles.disabledIcon]}
            />
          </TouchableOpacity>
          <Text style={styles.paginationText}>{currentQuestion + 1}/{QUIZ.TOTAL_QUESTIONS}</Text>
          <TouchableOpacity 
            style={styles.paginationButton}
            onPress={handleNext}
          >
            <Image 
              source={require('@/assets/images/icon-arrow-back.png')}
              style={styles.paginationIconRight}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey[50],
    width: dimensions.constrainedWidth,
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
    width: dimensions.constrainedWidth,
  },
  startContainer: {
    flex: 1,
  },
  startHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  startTitle: {
    ...Typography.pageTitle,
    color: Colors.text.primary,
    marginLeft: Spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  closeButton: {
    padding: 8,
  },
  closeIcon: {
    width: 24,
    height: 24,
    tintColor: '#2C2C2C',
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    color: '#2C2C2C',
    fontFamily: 'Roboto',
  },
  placeholder: {
    width: 40,
  },
  startContent: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startText: {
    fontSize: 24,
    fontWeight: '400',
    color: '#2C2C2C',
    textAlign: 'center',
    lineHeight: 32,
    fontFamily: 'Roboto',
    marginBottom: 40,
  },
  startButton: {
    backgroundColor: '#2C2C2C',
    paddingVertical: 14,
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
  },
  questionContainer: {
    paddingHorizontal: 40,
    paddingVertical: 60,
    alignItems: 'center',
  },
  questionText: {
    fontSize: 24,
    fontWeight: '400',
    color: '#2C2C2C',
    textAlign: 'center',
    lineHeight: 32,
    fontFamily: 'Roboto',
  },
  optionsContainer: {
    paddingHorizontal: 20,
    gap: 16,
  },
  optionButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D5D5D5',
  },
  selectedOption: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#2C2C2C',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#2C2C2C',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  selectedOptionText: {
    color: '#2C2C2C',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    gap: 20,
  },
  paginationButton: {
    padding: 8,
  },
  paginationIcon: {
    width: 20,
    height: 20,
    tintColor: '#8E8E93',
    transform: [{ rotate: '180deg' }],
  },
  paginationIconRight: {
    width: 20,
    height: 20,
    tintColor: '#8E8E93',
  },
  disabledIcon: {
    opacity: 0.3,
  },
  paginationText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#8E8E93',
    fontFamily: 'Roboto',
  },
});
