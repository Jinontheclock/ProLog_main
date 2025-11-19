import { CommonStyles } from "@/lib/common-styles";
import { getAllTitles, getRandomQuestionsAsync } from "@/lib/quiz-loader";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function QuizScreen() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const sectionParam = (params as any)?.section;

    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [quiz, setQuiz] = useState<any | null>(null);
    const [questionPool, setQuestionPool] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(false);
    const rotateAnim = useRef(new Animated.Value(0)).current;
    // refs and timers
    const advanceTimerRef = useRef<any>(null);

    const handleProceed = () => {
        try {
            const choices = quiz?.choices ?? [];

            // ignore if no selection
            if (selectedAnswer === null) return;

            const sel = choices[selectedAnswer];
            const willBeCorrect = !!sel?.isCorrect;

            // reveal answer and compute new score deterministically
            setShowAnswer(true);
            const newScore = willBeCorrect ? score + 1 : score;
            setScore(newScore);

            // show processing state briefly then advance deterministically
            setIsProcessing(true);
            // clear any existing timer
            try {
                if (advanceTimerRef.current)
                    clearTimeout(advanceTimerRef.current);
            } catch (e) {}

            const newScoreForNav = newScore;

            // If this is the last question, navigate deterministically after a short reveal.
            if (questionPool && currentIndex === questionPool.length - 1) {
                try {
                    // ensure answer is visible for a brief moment
                    setShowAnswer(true);
                    if (advanceTimerRef.current) {
                        try {
                            clearTimeout(advanceTimerRef.current);
                        } catch (e) {}
                        advanceTimerRef.current = null;
                    }
                    advanceTimerRef.current = setTimeout(() => {
                        setIsProcessing(false);
                        try {
                            router.push(`/skills/Skill_Detail_Quiz_Result?score=${newScoreForNav}&total=${questionPool.length}`);
                        } catch (e) {
                            console.error("navigation error", e);
                        }
                    }, 300);
                } catch (e) {
                    console.error("final navigation error", e);
                    try {
                        router.push(`/skills/Skill_Detail_Quiz_Result?score=${newScoreForNav}&total=${questionPool.length}`);
                    } catch (err) {
                        console.error("navigation error", err);
                    }
                }
                return;
            }

            // Not last question: advance after short delay for feedback
            if (advanceTimerRef.current) {
                try {
                    clearTimeout(advanceTimerRef.current);
                } catch (e) {}
                advanceTimerRef.current = null;
            }

            advanceTimerRef.current = setTimeout(() => {
                setIsProcessing(false);
                rotateAnim.setValue(0);
                const nextIndex = currentIndex + 1;
                if (questionPool && nextIndex < questionPool.length) {
                    // advance to next question after feedback
                    const q = questionPool[nextIndex];
                    setQuiz({ question: q.question, choices: q.choices });
                    setCurrentIndex(nextIndex);
                    setSelectedAnswer(null);
                    setShowAnswer(false);
                } else {
                    // final - navigate to results deterministically
                    const url = `/skills/Skill_Detail_Quiz_Result?score=${newScoreForNav}&total=${questionPool.length}`;
                    try {
                        router.push(url);
                    } catch (e) {
                        console.error("navigation error", e);
                    }
                }
            }, 500);
        } catch (err) {
            console.error("handleProceed error", err);
            // fallback immediate advance
            try {
                if (questionPool && currentIndex < questionPool.length - 1)
                    advanceToNextQuestion();
                else
                    router.push(
                        `/skills/Skill_Detail_Quiz_Result?score=${score}&total=${questionPool.length}`
                    );
            } catch (e) {
                console.error("fallback navigation error", e);
            }
        }
    };

    useEffect(() => {
        return () => {
            try {
                if (advanceTimerRef.current)
                    clearTimeout(advanceTimerRef.current);
            } catch (e) {}
        };
    }, []);

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    const fetchOutputQuestion = async () => {
        // load local questions from competency_summaries.json
        setLoading(true);
        setSelectedAnswer(null);
        setShowAnswer(false);
        try {
            const pool = await getRandomQuestionsAsync(6);
            setQuestionPool(pool);
            setCurrentIndex(0);
            setScore(0);
            const allTitles = getAllTitles();
            if (pool.length > 0) {
                const first = pool[0];
                setQuiz({ question: first.question, choices: first.choices });
            } else {
                setQuiz(null);
            }
        } catch (e) {
            console.error(e);
            setQuiz(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // load question pool on mount
        fetchOutputQuestion();
    }, []);

    const advanceToNextQuestion = useCallback(() => {
        // clear any pending advance timer to avoid duplicate advances
        try {
            if (advanceTimerRef.current) {
                clearTimeout(advanceTimerRef.current);
                advanceTimerRef.current = null;
            }
        } catch (e) {}

        const nextIndex = currentIndex + 1;
        const pool = questionPool;
        if (nextIndex < pool.length) {
            const allTitles = getAllTitles();
            const q = pool[nextIndex];
            setQuiz({ question: q.question, choices: q.choices });
            setCurrentIndex(nextIndex);
            setSelectedAnswer(null);
            setShowAnswer(false);
        } else {
            // final - navigate to result with params
            const url = `/skills/Skill_Detail_Quiz_Result?score=${score}&total=${pool.length}`;
            router.push(url);
        }
    }, [currentIndex, questionPool, score, router]);

    // Intercept router.push path to reuse existing button logic without changing JSX.
    // Removed router.push monkeypatching. Use explicit advance/navigation logic
    // to avoid interception pitfalls and ensure deterministic behavior.

    return (
        <SafeAreaView style={CommonStyles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => router.push("/skills/Skill_Details")}
                    >
                        <Image
                            source={require("@/assets/images/icon-close.png")}
                            style={styles.closeIcon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.questionCounter}>
                        {loading
                            ? "..."
                            : `${Math.min(
                                  questionPool.length ? currentIndex + 1 : 0,
                                  questionPool.length
                              )} of ${questionPool.length || 0}`}
                    </Text>
                </View>

                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            {loading
                                ? "Loading question..."
                                : quiz?.question ?? "No question loaded"}
                        </Text>
                    </View>

                    <View style={styles.optionsContainer}>
                        {(quiz?.choices ?? []).map((c: any, i: number) => (
                            <TouchableOpacity
                                key={i}
                                style={[
                                    styles.option,
                                    selectedAnswer === i &&
                                        !showAnswer &&
                                        styles.optionSelected,
                                    showAnswer &&
                                        c.isCorrect &&
                                        styles.optionCorrect,
                                    showAnswer &&
                                        selectedAnswer === i &&
                                        !c.isCorrect &&
                                        styles.optionIncorrect,
                                ]}
                                onPress={() =>
                                    !showAnswer && setSelectedAnswer(i)
                                }
                                disabled={showAnswer}
                            >
                                <Text
                                    style={[
                                        styles.optionText,
                                        selectedAnswer === i &&
                                            !showAnswer &&
                                            styles.optionTextSelected,
                                    ]}
                                >
                                    {c.text}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.actionContainer}>
                        <View
                            style={[
                                CommonStyles.neoDoubleOuter,
                                { borderRadius: 24, width: "100%" },
                            ]}
                        >
                            <TouchableOpacity
                                style={[
                                    CommonStyles.whiteButton,
                                    CommonStyles.neoDoubleInner,
                                    {
                                        borderRadius: 24,
                                        backgroundColor: "#FFFFFF",
                                        paddingVertical: 10,
                                        width: "100%",
                                    },
                                ]}
                                onPress={() => {
                                    try {
                                        handleProceed();
                                    } catch (e) {
                                        console.error("proceed press error", e);
                                    }
                                }}
                                disabled={
                                    (selectedAnswer === null && !showAnswer) ||
                                    isProcessing
                                }
                            >
                                <Text
                                    style={[
                                        CommonStyles.whiteButtonText,
                                        { fontWeight: "400" },
                                    ]}
                                >
                                    Proceed to Next
                                </Text>
                                {isProcessing ? (
                                    <Animated.Image
                                        source={require("@/assets/images/icon-progress.png")}
                                        style={[
                                            styles.arrowIcon,
                                            { transform: [{ rotate: spin }] },
                                        ]}
                                    />
                                ) : (
                                    <Image
                                        source={require("@/assets/images/icon-arrow-right.png")}
                                        style={styles.arrowIcon}
                                    />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 16,
        position: "relative",
    },
    closeButton: {
        padding: 4,
        position: "absolute",
        left: 20,
    },
    questionCounter: {
        fontSize: 16,
        color: "#8E8E93",
        fontFamily: "Roboto",
        textAlign: "center",
    },
    scrollView: {
        flex: 1,
    },
    questionContainer: {
        paddingHorizontal: 40,
        minHeight: 300,
        alignItems: "center",
        justifyContent: "center",
    },
    questionText: {
        fontSize: 24,
        fontWeight: "400",
        color: "#000000",
        lineHeight: 32,
        textAlign: "center",
        fontFamily: "Roboto",
    },
    optionsContainer: {
        paddingHorizontal: 20,
        gap: 12,
    },
    option: {
        backgroundColor: "#FFFFFF",
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    optionSelected: {
        backgroundColor: "#4A4A4A",
    },
    optionCorrect: {
        backgroundColor: "#FFFFFF",
        borderColor: "#1A963E",
        borderWidth: 2,
    },
    optionIncorrect: {
        backgroundColor: "rgba(216, 1, 0, 0.1)",
        borderColor: "#D80100",
        borderWidth: 2,
    },
    optionText: {
        fontSize: 16,
        fontWeight: "400",
        color: "#000000",
        textAlign: "center",
        fontFamily: "Roboto",
    },
    optionTextSelected: {
        color: "#FFFFFF",
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
