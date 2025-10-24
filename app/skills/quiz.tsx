import { CommonStyles } from '@/lib/common-styles';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function QuizScreen() {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const correctAnswer = 2; // "It has constant magnitude"
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const handleProceed = () => {
    if (selectedAnswer !== null) {
      setShowAnswer(true);
    }
  };

  useEffect(() => {
    if (showAnswer) {
      // 회전 애니메이션 시작
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        // 1초 후 결과 페이지로 이동
        router.push('/skills/quiz-result');
      });
    }
  }, [showAnswer]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={CommonStyles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => router.push('/skills/circuit-concepts')}
          >
            <Image 
              source={require('@/assets/images/icon-close.png')} 
              style={styles.closeIcon}
            />
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
              style={[
                styles.option, 
                selectedAnswer === 0 && !showAnswer && styles.optionSelected,
                showAnswer && 0 === correctAnswer && styles.optionCorrect,
                showAnswer && selectedAnswer === 0 && 0 !== correctAnswer && styles.optionIncorrect
              ]}
              onPress={() => !showAnswer && setSelectedAnswer(0)}
              disabled={showAnswer}
            >
              <Text style={[
                styles.optionText, 
                selectedAnswer === 0 && !showAnswer && styles.optionTextSelected
              ]}>It flows in one direction only</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.option, 
                selectedAnswer === 1 && !showAnswer && styles.optionSelected,
                showAnswer && 1 === correctAnswer && styles.optionCorrect,
                showAnswer && selectedAnswer === 1 && 1 !== correctAnswer && styles.optionIncorrect
              ]}
              onPress={() => !showAnswer && setSelectedAnswer(1)}
              disabled={showAnswer}
            >
              <Text style={[
                styles.optionText, 
                selectedAnswer === 1 && !showAnswer && styles.optionTextSelected
              ]}>It changes direction periodically</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.option, 
                selectedAnswer === 2 && !showAnswer && styles.optionSelected,
                showAnswer && 2 === correctAnswer && styles.optionCorrect,
                showAnswer && selectedAnswer === 2 && 2 !== correctAnswer && styles.optionIncorrect
              ]}
              onPress={() => !showAnswer && setSelectedAnswer(2)}
              disabled={showAnswer}
            >
              <Text style={[
                styles.optionText, 
                selectedAnswer === 2 && !showAnswer && styles.optionTextSelected
              ]}>It has constant magnitude</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.option, 
                selectedAnswer === 3 && !showAnswer && styles.optionSelected,
                showAnswer && 3 === correctAnswer && styles.optionCorrect,
                showAnswer && selectedAnswer === 3 && 3 !== correctAnswer && styles.optionIncorrect
              ]}
              onPress={() => !showAnswer && setSelectedAnswer(3)}
              disabled={showAnswer}
            >
              <Text style={[
                styles.optionText, 
                selectedAnswer === 3 && !showAnswer && styles.optionTextSelected
              ]}>It stops and starts repeatedly</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.actionContainer}>
            <TouchableOpacity 
              style={CommonStyles.whiteButton}
              onPress={handleProceed}
              disabled={selectedAnswer === null}
            >
              <Text style={CommonStyles.whiteButtonText}>Proceed to Next</Text>
              {showAnswer ? (
                <Animated.Image 
                  source={require('@/assets/images/icon-progress.png')} 
                  style={[styles.arrowIcon, { transform: [{ rotate: spin }] }]}
                />
              ) : (
                <Image 
                  source={require('@/assets/images/icon-arrow-right.png')} 
                  style={styles.arrowIcon}
                />
              )}
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
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
    position: 'relative',
  },
  closeButton: {
    padding: 4,
    position: 'absolute',
    left: 20,
  },
  questionCounter: {
    fontSize: 16,
    color: '#8E8E93',
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  questionContainer: {
    paddingHorizontal: 40,
    minHeight: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 32,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  optionsContainer: {
    paddingHorizontal: 20,
    gap: 12,
  },
  option: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
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
  optionCorrect: {
    backgroundColor: '#FFFFFF',
    borderColor: '#1A963E',
    borderWidth: 2,
  },
  optionIncorrect: {
    backgroundColor: 'rgba(216, 1, 0, 0.1)',
    borderColor: '#D80100',
    borderWidth: 2,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  optionTextSelected: {
    color: '#FFFFFF',
  },
  actionContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    marginLeft: 6,
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
});

