import { Colors, Spacing } from "@/constants";
import React from "react";
import { StyleSheet, View } from "react-native";

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
        padding: Spacing.md,
        backgroundColor: Colors.background.default,
    },
    header: {
        marginBottom: Spacing.md,
    },
    progressBar: {
        marginBottom: Spacing.md,
    },
    question: {
        marginBottom: Spacing.md,
    },
    options: {
        flex: 1,
        justifyContent: "center",
    },
    footer: {
        marginTop: Spacing.md,
    },
});

export default QuizScreenLayout;
