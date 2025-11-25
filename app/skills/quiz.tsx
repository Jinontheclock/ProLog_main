import { LoadingQuiz } from '@/components/shared/LoadingQuiz';
import MaterialIcon from '@/components/shared/MaterialIcon';
import QuizFooterButton from '@/components/shared/quiz/QuizFooterButton';
import QuizHeader from '@/components/shared/quiz/QuizHeader';
import QuizOption from '@/components/shared/quiz/QuizOption';
import QuizProgressBar from '@/components/shared/quiz/QuizProgressBar';
import QuizQuestionContainer from '@/components/shared/quiz/QuizQuestionContainer';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/design-tokens';
import { Typography } from '@/constants/typography';
import { CommonStyles } from '@/lib/common-styles';
import { generateQuiz, QuizQuestion } from '@/lib/quizApi';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

// Load API key from environment variable
const OPENAI_API_KEY = process.env.EXPO_PUBLIC_OPENAI_API_KEY || '';

const QuizPage: React.FC = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { skillId, content } = useLocalSearchParams<{ skillId: string; content: string }>();

  // Quiz state
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Question state
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  // Load quiz questions on component mount
  useEffect(() => {
    const loadQuiz = async () => {
      if (!skillId || !content) {
        setError('Missing skill content');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const generatedQuestions = await generateQuiz(skillId, content, OPENAI_API_KEY);
        
        if (generatedQuestions.length !== 10) {
          throw new Error(`Expected 10 questions, got ${generatedQuestions.length}`);
        }
        
        setQuestions(generatedQuestions);
        setError(null);
      } catch (err) {
        console.error('Failed to load quiz:', err);
        setError(err instanceof Error ? err.message : 'Failed to load quiz');
        
        // Show error alert and go back
        Alert.alert(
          'Quiz Error', 
          'Failed to generate quiz questions. Please try again later.',
          [{ text: 'OK', onPress: () => router.back() }]
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadQuiz();
  }, [skillId, content]);

  const handleOptionPress = (option: string) => {
    if (!isAnswered) {
      setSelectedOption(option);
    }
  };

  const handleCheck = () => {
    if (selectedOption && !isAnswered && questions.length > 0) {
      setIsAnswered(true);
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Quiz completed - show results and go back
      Alert.alert(
        'Quiz Complete!', 
        `Your score: ${score}/${questions.length} (${Math.round((score / questions.length) * 100)}%)`,
        [{ text: 'OK', onPress: () => router.back() }]
      );
    }
  };

  const isLastQuestion = questions.length > 0 && currentQuestion === questions.length - 1;

  // Show loading screen while generating quiz
  if (isLoading) {
    return (
      <SafeAreaView style={CommonStyles.container}>
        <Image
          source={require("@/assets/images/background-grid 1.svg")}
          style={[CommonStyles.backgroundImage, { opacity: 0.15 }]}
          resizeMode="cover"
        />
        <View style={styles.loadingContainer}>
          <LoadingQuiz 
            loadingTitle="Generating Quiz..."
            loadingContent="Creating personalized questions based on your skill content. This may take a moment."
          />
        </View>
      </SafeAreaView>
    );
  }

  // Show error state
  if (error || questions.length === 0) {
    return (
      <SafeAreaView style={CommonStyles.container}>
        <Image
          source={require("@/assets/images/background-grid 1.svg")}
          style={CommonStyles.backgroundImage}
          resizeMode="cover"
        />
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>Unable to Load Quiz</Text>
          <Text style={styles.errorMessage}>{error || 'No questions available'}</Text>
          <TouchableOpacity 
            style={styles.errorButton}
            onPress={() => router.back()}
          >
            <Text style={styles.errorButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // Render quiz content
  return (
    <SafeAreaView style={CommonStyles.container}>
      <Image
        source={require("@/assets/images/background-grid 1.svg")}
        style={CommonStyles.backgroundImage}
        resizeMode="cover"
      />
      <ScrollView
        style={CommonStyles.scrollView}
        contentContainerStyle={{
          paddingBottom: 70 + insets.bottom + 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with Back Button */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <MaterialIcon
              name="icon-arrow-back"
              size={24}
              color={Colors.grey[700]}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Skills Quiz</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Quiz Content */}
        <View style={styles.quizContainer}>
          <QuizHeader title="AI-Generated Skills Assessment" />

          <QuizProgressBar 
            progress={currentQuestion + 1}
            total={questions.length}
          />

          <QuizQuestionContainer question={questions[currentQuestion].question} />

          <View style={styles.optionsContainer}>
            {questions[currentQuestion].options.map((option, index) => (
              <QuizOption
                key={index}
                label={option}
                isSelected={selectedOption === option}
                isCorrect={isAnswered && option === questions[currentQuestion].correctAnswer}
                isIncorrect={isAnswered && selectedOption === option && option !== questions[currentQuestion].correctAnswer}
                onPress={() => handleOptionPress(option)}
                disabled={isAnswered}
              />
            ))}
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          {!isAnswered ? (
            <QuizFooterButton
              label="Check Answer"
              onPress={handleCheck}
              disabled={!selectedOption}
            />
          ) : (
            <QuizFooterButton
              label={isLastQuestion ? "Finish Quiz" : "Next Question"}
              onPress={handleNext}
              disabled={false}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.base,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.grey[900],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  headerTitle: {
    ...Typography.sectionHeader,
    color: Colors.grey[700],
  },
  quizContainer: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.base,
    gap: Spacing.lg,
  },
  optionsContainer: {
    gap: Spacing.sm,
  },
  footer: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.base,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
  },
  errorTitle: {
    ...Typography.sectionHeader,
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  errorMessage: {
    ...Typography.bigBody,
    color: Colors.text.secondary,
    textAlign: 'center',
    marginBottom: Spacing.lg,
    lineHeight: 24,
  },
  errorButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: 8,
  },
  errorButtonText: {
    ...Typography.buttonText,
    color: Colors.white,
  },
});

export default QuizPage;