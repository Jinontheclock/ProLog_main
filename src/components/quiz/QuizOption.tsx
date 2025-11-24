import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { tokens } from "@/styles/tokens";
import { Typography } from "@/styles/typography";

type QuizOptionProps = {
    label: string;
    isSelected: boolean;
    isCorrect: boolean;
    isIncorrect: boolean;
    disabled: boolean;
    onPress: () => void;
};

const QuizOption: React.FC<QuizOptionProps> = ({
    label,
    isSelected,
    isCorrect,
    isIncorrect,
    disabled,
    onPress,
}) => {
    const getBackgroundColor = () => {
        if (isCorrect) return styles.correct.backgroundColor;
        if (isIncorrect) return styles.incorrect.backgroundColor;
        if (isSelected) return styles.selected.backgroundColor;
        return styles.default.backgroundColor;
    };

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={({ pressed }) => [
                styles.option,
                { backgroundColor: getBackgroundColor() },
                disabled && styles.disabled,
                pressed && !disabled && styles.pressed,
            ]}
        >
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    option: {
        padding: tokens.spacing.md,
        borderRadius: tokens.radius.lg,
        marginVertical: tokens.spacing.sm,
    },
    default: {
        backgroundColor: tokens.quiz.option.default.bg,
    },
    selected: {
        backgroundColor: tokens.quiz.option.selected.bg,
    },
    correct: {
        backgroundColor: tokens.quiz.option.correct.bg,
    },
    incorrect: {
        backgroundColor: tokens.quiz.option.incorrect.bg,
    },
    disabled: {
        opacity: tokens.quiz.disabled.opacity,
    },
    pressed: {
        opacity: 0.8,
    },
    text: {
        ...Typography.body2,
    },
});

export default QuizOption;
