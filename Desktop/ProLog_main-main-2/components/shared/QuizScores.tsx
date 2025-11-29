import { Colors } from "@/constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface QuizScoresProps {
  attempt: string;
  correctAnswers: number;
  totalQuestions: number;
  date: string;
  score: string;
}

export default function QuizScores({
  attempt,
  correctAnswers,
  totalQuestions,
  date,
  score
}: QuizScoresProps) {
  return (
    <View style={styles.resultsContainer}>
      <View style={styles.mainContentContainer}>
        <Text style={styles.attempt}>{attempt}</Text>
        <Text style={styles.questions}>{correctAnswers} out of {totalQuestions} questions</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.scoresContainer}>
        <Text style={styles.scoreText}>{score}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resultsContainer: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: 16,
    backgroundColor: "#FFFFFF",
    // borderRadius: 8,
    marginVertical: 4,
    // borderWidth: 1,
    // borderColor: Colors.grey[50],
    minHeight: 80, // Ensure consistent height
  },
  mainContentContainer: {
    flex: 1,
  },
  attempt: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 4,
  },
  questions: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 2,
  },
  date: {
    fontSize: 12,
    color: "#999999",
  },
  scoresContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.grey[900],
  },
});
