import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { generateQuiz, QuizQuestion } from './quizApi';
import QuizScreen from './QuizScreen';

type SkillScreenProps = {
  route: {
    params: {
      skillId: string;
      title: string;
      description: string;
      learningObjectives: string[];
    };
  };
};

const SkillScreen: React.FC<SkillScreenProps> = ({ route }) => {
  const { skillId, title, description, learningObjectives } = route.params;
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [quizVisible, setQuizVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTakeQuiz = async () => {
    setLoading(true);
    const content = `${description}\nLearning Objectives: ${learningObjectives.join('; ')}`;
    try {
      const questions = await generateQuiz(skillId, content);
      setQuizQuestions(questions);
      setQuizVisible(true);
    } catch (error) {
      console.error('Quiz generation error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {/* ... other skill content ... */}

      {loading ? (
        <ActivityIndicator size="large" color="orange" style={styles.spinner} />
      ) : (
        <Pressable style={styles.takeQuizButton} onPress={handleTakeQuiz}>
          <Text style={styles.takeQuizButtonText}>Take Quiz</Text>
        </Pressable>
      )}

      {/* Render QuizScreen as a modal or conditional view */}
      {quizVisible && (
        <QuizScreen
          questions={quizQuestions}
          onClose={() => setQuizVisible(false)}
        />
      )}
    </View>
  );
};

export default SkillScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 8 },
  description: { fontSize: 16, marginBottom: 16 },
  spinner: { marginTop: 20 },
  takeQuizButton: {
    backgroundColor: 'orange',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  takeQuizButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});