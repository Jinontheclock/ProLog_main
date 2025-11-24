import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { tokens } from "@/styles/tokens";
import { Typography } from "@/styles/typography";

type QuizHeaderProps = {
    title: string;
};

const QuizHeader: React.FC<QuizHeaderProps> = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: tokens.spacing.md,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        ...Typography.h4,
        textAlign: "center",
    },
});

export default QuizHeader;
