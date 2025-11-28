import { Colors } from "@/constants/colors";
import { Typography } from "@/constants/typography";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface RankingProps {
    title?: string;
    scoreRange?: string;
    rank?: string;
}

export const Ranking: React.FC<RankingProps> = ({
    title = "Avg. Score",
    scoreRange = "90-94%",
    rank = "Top 2",
}) => {
    return (
        <View style={styles.imageContainer}>
            <Image
                source={require("@/assets/images/Ranking.png")}
                style={styles.rankingImage}
            />
            <View style={styles.textOverlay}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.scoreRange}>{scoreRange}</Text>
                <Text style={styles.rank}>{rank}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        position: "relative",
    },
    rankingImage: {
        width: undefined,
        height: undefined,
    },
    textOverlay: {
        position: "absolute",
        top: 12,
        left: 16,
        right: 16,
    },
    title: {
        ...Typography.buttonText,
        color: Colors.grey[900],
        marginBottom: 6,
    },
    scoreRange: {
        ...Typography.smBody,
        color: Colors.grey[900],
        marginBottom: 6,
    },
    rank: {
        ...Typography.contentRegular,
        color: Colors.grey[900],
    },
});

export default Ranking;
