import { tokens } from "@/styles/tokens";
import { Typography } from "@/styles/typography";
import { StyleSheet } from "react-native";

const quizStyles = StyleSheet.create({
    option: {
        padding: tokens.spacing.md,
        borderRadius: tokens.radius.lg,
        marginVertical: tokens.spacing.sm,
        backgroundColor: tokens.quiz.option.default.bg,
    },
    optionSelected: {
        backgroundColor: tokens.quiz.option.selected.bg,
    },
    optionCorrect: {
        backgroundColor: tokens.quiz.option.correct.bg,
    },
    optionIncorrect: {
        backgroundColor: tokens.quiz.option.incorrect.bg,
    },
    optionDisabled: {
        opacity: tokens.quiz.disabled.opacity,
    },
    optionText: {
        ...Typography.body2,
    },
    progressBarContainer: {
        height: 8,
        backgroundColor: tokens.quiz.progress.bg,
        borderRadius: 4,
        overflow: "hidden",
    },
    progressBarFill: {
        height: "100%",
        backgroundColor: tokens.quiz.progress.fill,
    },
    footerButton: {
        backgroundColor: tokens.quiz.button.primary.bg,
        borderRadius: tokens.quiz.button.borderRadius,
        padding: tokens.spacing.md,
        marginVertical: tokens.spacing.sm,
        alignItems: "center",
        justifyContent: "center",
    },
    footerButtonDisabled: {
        backgroundColor: tokens.quiz.button.disabled.bg,
        opacity: tokens.quiz.disabled.opacity,
    },
    footerButtonText: {
        ...Typography.button,
        color: "#FFFFFF",
    },
});

export default quizStyles;
