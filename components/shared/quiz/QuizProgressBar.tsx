import { BorderRadius, Colors } from "@/constants";
import React from "react";
import { StyleSheet, View } from "react-native";

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
        backgroundColor: Colors.grey[200],
        borderRadius: BorderRadius.xs,
        overflow: "hidden",
    },
    fill: {
        height: "100%",
        backgroundColor: Colors.primary,
    },
});

export default QuizProgressBar;
