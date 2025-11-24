import { generateQuiz } from '@/lib/quizApi';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

const SkillScreen: React.FC = () => {
  const router = useRouter();
  const { skillId, title, description, learningObjectives } = useLocalSearchParams();
  
  const [loading, setLoading] = useState(false);

  const handleTakeQuiz = async () => {
    setLoading(true);
    const content = `${description}\nLearning Objectives: ${learningObjectives}`;
    try {
      const questions = await generateQuiz(skillId as string, content as string);
      // Navigate to quiz screen with questions
      router.push({
        pathname: '/QuizScreen',
        params: { 
          skillId: skillId as string, 
          skillTitle: title as string,
          questions: JSON.stringify(questions)
        }
      });
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