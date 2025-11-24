import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { tokens } from "@/styles/tokens";
import { Typography } from "@/styles/typography";

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
        padding: tokens.spacing.md,
        marginVertical: tokens.spacing.sm,
    },
    question: {
        ...Typography.body1,
        textAlign: "center",
    },
});

export default QuizQuestionContainer;
