import QuizFooterButton from "@/components/shared/quiz/QuizFooterButton";
import QuizHeader from "@/components/shared/quiz/QuizHeader";
import QuizOption from "@/components/shared/quiz/QuizOption";
import { generateQuiz, QuizQuestion } from "@/lib/quizApi";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

// Mock skill content - in a real app, this would come from your skill data
const mockSkillContent = `
React is a JavaScript library for building user interfaces, particularly web applications. 
It was developed by Facebook and allows developers to create reusable UI components. 
React uses a virtual DOM for efficient rendering and follows a component-based architecture.
`;

const QuizScreen = () => {
    const router = useRouter();
    const { skillId, skillTitle } = useLocalSearchParams();

    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                // Generate quiz using OpenAI API
                const generatedQuestions = await generateQuiz(
                    skillId as string, 
                    mockSkillContent
                );
                setQuestions(generatedQuestions);
            } catch (error) {
                console.error("Error generating quiz questions:", error);
                // Fallback to mock questions if API fails
                const fallbackQuestions: QuizQuestion[] = [
                    {
                        question: "What is React?",
                        options: ["Library", "Framework", "Language", "Database"],
                        correctAnswer: "Library",
                    },
                ];
                setQuestions(fallbackQuestions);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, [skillId]);

    const handleOptionSelect = (option: string) => {
        if (selectedAnswer) return;

        setSelectedAnswer(option);
        if (option === questions[currentQuestionIndex].correctAnswer) {
            setScore((prev) => prev + 1);
        }

        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex((prev) => prev + 1);
                setSelectedAnswer(null);
            } else {
                setCompleted(true);
            }
        }, 1000);
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    size="large"
                    color="orange"
                />
            </View>
        );
    }

    if (questions.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.resultText}>No questions available</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => router.back()}
                >
                    <Text style={styles.buttonText}>Back to Skill</Text>
                </Pressable>
            </View>
        );
    }

    if (completed) {
        return (
            <View style={styles.container}>
                <Text style={styles.resultText}>
                    Your Score: {score} / {questions.length}
                </Text>
                <Pressable
                    style={styles.button}
                    onPress={() =>
                        router.replace({
                            pathname: "/QuizScreen",
                            params: {
                                skillId: skillId as string,
                                skillTitle: skillTitle as string,
                            }
                        })
                    }
                >
                    <Text style={styles.buttonText}>Retake Quiz</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => router.back()}
                >
                    <Text style={styles.buttonText}>Back to Skill</Text>
                </Pressable>
            </View>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <View style={styles.container}>
            <QuizHeader
                title={`Question ${currentQuestionIndex + 1} / ${
                    questions.length
                }`}
            />
            <Text style={styles.questionText}>{currentQuestion.question}</Text>
            {currentQuestion.options.map((option: string, index: number) => (
                <QuizOption
                    key={index}
                    label={option}
                    isSelected={selectedAnswer === option}
                    isCorrect={false}
                    isIncorrect={false}
                    disabled={selectedAnswer !== null}
                    onPress={() => handleOptionSelect(option)}
                />
            ))}
            <QuizFooterButton
                label="Next"
                onPress={() => {}}
                disabled={!selectedAnswer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    questionText: {
        fontSize: 18,
        marginVertical: 16,
    },
    resultText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    button: {
        backgroundColor: "orange",
        padding: 12,
        borderRadius: 8,
        marginVertical: 8,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },
});

export default QuizScreen;
