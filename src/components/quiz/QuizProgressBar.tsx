import React from "react";
import { View, StyleSheet } from "react-native";
import { tokens } from "@/styles/tokens";

type QuizProgressBarProps = {
    progress: number;
    total: number;
};

const QuizProgressBar: React.FC<QuizProgressBarProps> = ({
    progress,
    total,
}) => {
    const progressPercentage = (progress / total) * 100;

    return (
        <View style={styles.container}>
            <View style={[styles.fill, { width: `${progressPercentage}%` }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 8,
        backgroundColor: tokens.quiz.progress.bg,
        borderRadius: 4,
        overflow: "hidden",
    },
    fill: {
        height: "100%",
        backgroundColor: tokens.quiz.progress.fill,
    },
});

export default QuizProgressBar;
