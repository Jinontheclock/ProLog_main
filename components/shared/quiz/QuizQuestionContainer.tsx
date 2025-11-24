import { Colors, Spacing, Typography } from "@/constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type QuizQuestionContainerProps = {
    question: string;
};

const QuizQuestionContainer: React.FC<QuizQuestionContainerProps> = ({
    question,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.question}>{question}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: Spacing.md,
        marginVertical: Spacing.sm,
    },
    question: {
        ...Typography.contentMedium,
        textAlign: "center",
        color: Colors.text.primary,
    },
});

export default QuizQuestionContainer;
