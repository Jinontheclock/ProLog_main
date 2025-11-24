import { tokens } from "@/styles/tokens";
import { Typography } from "@/styles/typography";
import React from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";

type QuizFooterButtonProps = {
    label: string;
    onPress: () => void;
    disabled: boolean;
    loading?: boolean;
};

const QuizFooterButton: React.FC<QuizFooterButtonProps> = ({
    label,
    onPress,
    disabled,
    loading = false,
}) => {
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled || loading}
            style={({ pressed }) => [
                styles.button,
                disabled && styles.disabled,
                pressed && !disabled && styles.pressed,
            ]}
        >
            {loading ? (
                <ActivityIndicator color={"#FFFFFF"} />
            ) : (
                <Text style={styles.text}>{label}</Text>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: tokens.quiz.button.primary.bg,
        borderRadius: tokens.quiz.button.borderRadius,
        padding: tokens.spacing.md,
        marginVertical: tokens.spacing.sm,
        alignItems: "center",
        justifyContent: "center",
    },
    disabled: {
        backgroundColor: tokens.quiz.button.disabled.bg,
        opacity: tokens.quiz.disabled.opacity,
    },
    pressed: {
        opacity: 0.8,
    },
    text: {
        ...Typography.button,
        color: "#FFFFFF",
    },
});

export default QuizFooterButton;
