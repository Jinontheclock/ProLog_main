import { BorderRadius, Colors, Spacing, Typography } from "@/constants";
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
        backgroundColor: Colors.primary,
        borderRadius: BorderRadius.base,
        padding: Spacing.md,
        marginVertical: Spacing.sm,
        alignItems: "center",
        justifyContent: "center",
    },
    disabled: {
        backgroundColor: Colors.grey[300],
        opacity: 0.6,
    },
    pressed: {
        opacity: 0.8,
    },
    text: {
        ...Typography.buttonText,
        color: Colors.white,
    },
});

export default QuizFooterButton;
