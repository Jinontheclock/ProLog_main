import React from "react";
import { StyleSheet, View } from "react-native";
import { tokens } from "@/styles/tokens";

type QuizScreenLayoutProps = {
    header: React.ReactNode;
    progressBar: React.ReactNode;
    question: React.ReactNode;
    options: React.ReactNode;
    footer: React.ReactNode;
};

const QuizScreenLayout: React.FC<QuizScreenLayoutProps> = ({
    header,
    progressBar,
    question,
    options,
    footer,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>{header}</View>
            <View style={styles.progressBar}>{progressBar}</View>
            <View style={styles.question}>{question}</View>
            <View style={styles.options}>{options}</View>
            <View style={styles.footer}>{footer}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: tokens.spacing.md,
        backgroundColor: tokens.colors.background,
    },
    header: {
        marginBottom: tokens.spacing.md,
    },
    progressBar: {
        marginBottom: tokens.spacing.md,
    },
    question: {
        marginBottom: tokens.spacing.md,
    },
    options: {
        flex: 1,
        justifyContent: "center",
    },
    footer: {
        marginTop: tokens.spacing.md,
    },
});

export default QuizScreenLayout;
