import { CommonStyles } from "@/lib/common-styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
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
    const [loading, setLoading] = useState(false);
    const rotateAnim = useRef(new Animated.Value(0)).current;

    const handleProceed = () => {
        if (selectedAnswer !== null) {
            setShowAnswer(true);
        }
    };

        useEffect(() => {
            if (showAnswer) {
                // show a brief processing/spin when the answer is revealed
                setIsProcessing(true);
                Animated.timing(rotateAnim, {
                    toValue: 1,
                    duration: 600,
                    useNativeDriver: true,
                }).start(() => {
                    // stop processing after the spin completes so the arrow returns
                    setIsProcessing(false);
                    rotateAnim.setValue(0);
                });
            }
        }, [showAnswer]);

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    const fetchOutputQuestion = async () => {
        setLoading(true);
        setSelectedAnswer(null);
        setShowAnswer(false);
        try {
            const body: any = {};
            if (sectionParam) body.section = sectionParam;
            const res = await fetch("http://localhost:3000/api/output-quiz", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const data = await res.json();
            setQuiz(data);
        } catch (e) {
            console.error(e);
            setQuiz(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // load one question 
        fetchOutputQuestion();
    }, []);

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
                    <Text style={styles.questionCounter}>2 of 6</Text>
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
                                    selectedAnswer === i && !showAnswer && styles.optionSelected,
                                    showAnswer && c.isCorrect && styles.optionCorrect,
                                    showAnswer && selectedAnswer === i && !c.isCorrect && styles.optionIncorrect,
                                ]}
                                onPress={() => !showAnswer && setSelectedAnswer(i)}
                                disabled={showAnswer}
                            >
                                <Text
                                    style={[
                                        styles.optionText,
                                        selectedAnswer === i && !showAnswer && styles.optionTextSelected,
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
                                onPress={async () => {
                                    if (!showAnswer) {
                                        handleProceed();
                                    } else {
                                        // Show the same redo / mark as complete
                                        router.push(
                                            "/skills/Skill_Detail_Quiz_Result"
                                        );
                                    }
                                }}
                                disabled={
                                    selectedAnswer === null && !showAnswer
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
