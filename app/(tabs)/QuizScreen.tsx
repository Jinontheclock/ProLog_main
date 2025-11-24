import QuizFooterButton from "@/components/quiz/QuizFooterButton";
import QuizHeader from "@/components/quiz/QuizHeader";
import QuizOption from "@/components/quiz/QuizOption";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

// Define types for questions and options
interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
}

const questions: Question[] = [
    {
        question: "What is React?",
        options: ["Library", "Framework", "Language"],
        correctAnswer: "Library",
    },
    // Add more questions as needed
];

const QuizScreen = () => {
    const router = useRouter();
    const { skillId, skillTitle } = useLocalSearchParams();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch("YOUR_API_ENDPOINT", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ skillId }),
                });
                const data = await response.json();
                // Removed lingering reference to setQuestions
            } catch (error) {
                console.error("Error fetching quiz questions:", error);
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

    if (completed) {
        return (
            <View style={styles.container}>
                <Text style={styles.resultText}>
                    Your Score: {score} / {questions.length}
                </Text>
                <Pressable
                    style={styles.button}
                    onPress={() =>
                        router.replace("/(tabs)/QuizScreen", {
                            skillId: skillId as string,
                            skillTitle: skillTitle as string,
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
            {currentQuestion.options.map((option, index) => (
                <QuizOption
                    key={index}
                    optionText={option}
                    isSelected={selectedAnswer === option}
                    onSelect={() => handleOptionSelect(option)}
                />
            ))}
            <QuizFooterButton
                title="Next"
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
