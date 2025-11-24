import { BorderRadius, Colors, Spacing, Typography } from "@/constants";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

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
        padding: Spacing.md,
        borderRadius: BorderRadius.lg,
        marginVertical: Spacing.sm,
    },
    default: {
        backgroundColor: Colors.background.card,
    },
    selected: {
        backgroundColor: Colors.orange[100],
    },
    correct: {
        backgroundColor: Colors.green[100],
    },
    incorrect: {
        backgroundColor: Colors.error + '20', // Adding 20 for transparency
    },
    disabled: {
        opacity: 0.6,
    },
    pressed: {
        opacity: 0.8,
    },
    text: {
        ...Typography.contentSubtitle,
        color: Colors.text.primary,
    },
});

export default QuizOption;
