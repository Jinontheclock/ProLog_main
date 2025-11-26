import { Colors } from "@/constants/colors";
import { Typography } from "@/constants/typography";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ButtonButtonBar } from "./ButtonButtonBar";
import MaterialIcon from "./MaterialIcon";
import QuizScores from "./QuizScores";
import QuizHeader from "./quiz/QuizHeader";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onBack: () => void;
  onRetakeQuiz: () => void;
}

export default function QuizResults({
  score,
  totalQuestions,
  onBack,
  onRetakeQuiz,
}: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const currentDate = new Date().toLocaleDateString();
  return (
    <View style={styles.pageContainer}>
      {/* Header with Back Button */}
      <View style={styles.pageHeader}>
        <TouchableOpacity style={styles.headerBackButton} onPress={onBack}>
          <MaterialIcon
            name="icon-arrow-back"
            size={24}
            color={Colors.grey[700]}
          />
        </TouchableOpacity>
        <QuizHeader title="Quiz Result" />
        <View style={{ width: 40 }} />
      </View>
      
      <ScrollView 
        style={styles.scrollableContent}
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.resultsContainer}>
        <View style={styles.currentResult}>
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <MaterialIcon name="check" size={24} color="white" />
            </View>
            <Text style={styles.title}>You have Completed the Quiz!</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.scoreTitle}>Score</Text>
            <Text style={styles.scoreAchieved}>
              {score}/{totalQuestions}
            </Text>
            <Text style={styles.scoreMessage}>
              {percentage >= 80
                ? "Excellent work! You've mastered this topic."
                : percentage >= 60
                ? "Good job! Come back anytime to challenge it again to improve your understanding."
                : "Keep practicing! Review the material and try again to improve your score."}
            </Text>
          </View>
        </View>
        <View style={styles.resultComparison}>
          <Text style={styles.historyTitle}>Quiz History</Text>
          <QuizScores
            attempt="Current Attempt"
            correctAnswers={score}
            totalQuestions={totalQuestions}
            date={currentDate}
            score={percentage.toString()}
          />
          <QuizScores
            attempt="Previous Attempt"
            correctAnswers={Math.max(0, score - 1)}
            totalQuestions={totalQuestions}
            date={new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleDateString()}
            score={Math.round((Math.max(0, score - 1) / totalQuestions) * 100).toString()}
          />
        </View>
        </View>
      </ScrollView>
      
      {/* Sticky Bottom Button Bar */}
      <View style={styles.stickyButtonContainer}>
        <ButtonButtonBar
          onComplete={onBack}
          onChallenge={onRetakeQuiz}
          completeText="Back to Details"
          challengeText="Retake Quiz"
          isCompleted={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    position: 'relative',
  },
  scrollableContent: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 120, // Space for sticky button bar
    flexGrow: 1,
  },
  pageHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerBackButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.grey[900],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resultsContainer: {
    marginHorizontal: 20,
    paddingTop: 44,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderRadius: 20,
    backgroundColor: Colors.white,
    minHeight: 600, // Minimum height to ensure content visibility
  },
  currentResult: {
    display: 'flex',
    flexDirection: 'column',
    gap: 85,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: Colors.orange[400],
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    ...Typography.sectionHeader,
    textAlign: "center",
    color: Colors.text?.primary || "#000",
  },
  content: {
    alignItems: "center",
    width: "100%",
  },
  scoreTitle: {
    ...Typography.contentSubtitle,
    color: Colors.text?.secondary || "#666",
    marginBottom: 8,
  },
  scoreAchieved: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.grey[900],
    marginBottom: 16,
  },
  scoreMessage: {
    ...Typography.bigBody,
    textAlign: "center",
    color: Colors.text?.secondary || "#666",
    lineHeight: 22,
  },
  resultComparison: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    width: '100%', // Ensure full width
  },
  historyTitle: {
    ...Typography.contentSubtitle,
    color: Colors.text?.primary || "#000",
    marginBottom: 12,
    fontWeight: "600",
  },
  stickyButtonContainer: {
    position: "absolute",
    bottom: -44,
    left: 0,
    right: 0,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.borderGrey || "#E0E0E0",
  },
});
