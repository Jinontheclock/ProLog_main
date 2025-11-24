import { Colors, Spacing, Typography } from "@/constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
        padding: Spacing.md,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        ...Typography.sectionHeader,
        textAlign: "center",
        color: Colors.text.primary,
    },
});

export default QuizHeader;
