import MaterialIcon from "@/components/shared/MaterialIcon";
import { Colors } from "@/constants/colors";
import { Typography } from "@/constants/typography";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ExamPrepProps {
  onPress?: () => void;
  onFirstCardPress?: () => void;
  onSecondCardPress?: () => void;
}

export const ExamPrep = ({
  onPress,
  onFirstCardPress,
  onSecondCardPress,
}: ExamPrepProps) => {
  return (
    <View style={styles.container}>
      {/* Orange Button - Give New Exam */}
      <TouchableOpacity
        style={styles.cardButton}
        activeOpacity={0.85}
        onPress={onFirstCardPress || (() => router.push("/skills/loadingExam"))}
      >
        <Image
          source={require("@/assets/images/Exam_prep.svg")}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <View style={styles.orangeCardContent}>
          <View style={styles.textContent}>
            <Text style={styles.orangeTitle}>Give{"\n"}New Exam</Text>
            <View style={styles.iconContainer}>
              <MaterialIcon
                name="chevron_right"
                size={24}
                color={Colors.grey[900]}
              />
            </View>
          </View>
          <Text style={styles.orangeDescription}>
            Test your skills with AI-generated questions, covering all lines in
            your current level.
          </Text>
        </View>
      </TouchableOpacity>

      {/* White Button - View Progress Record */}
      <TouchableOpacity
        style={[styles.cardButton, styles.whiteCard]}
        activeOpacity={0.85}
        onPress={
          onSecondCardPress ||
          onPress ||
          (() => router.push("/skills/exam-prep"))
        }
      >
        <View style={styles.whiteCardContent}>
          <View style={styles.textContent}>
            <Text style={styles.whiteTitle}>View{"\n"}Progress Record</Text>
            <View style={styles.whiteIconContainer}>
              <MaterialIcon
                name="chevron_right"
                size={24}
                color={Colors.grey[900]}
              />
            </View>
          </View>
          <Text style={styles.whiteDescription}>
            Review your progress between each attempts
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignSelf: "stretch",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    paddingHorizontal: 0,
  },
  cardButton: {
    width: "100%",
    marginBottom: 12,
    borderRadius: 20,
    overflow: "hidden",
    alignSelf: "center",
    position: "relative",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  orangeCardContent: {
    flexDirection: "column",
    gap: 12,
    // justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 20,
    minHeight: 136,
    backgroundColor: Colors.orange[400],
  },
  textContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    width: "100%",
    gap: 8,
  },
  orangeTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    lineHeight: 24,
    color: Colors.white,
  },
  orangeDescription: {
    ...Typography.contentSubtitle,
    color: Colors.white,
    // maxWidth: 300,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  whiteCard: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.grey[100],
  },
  whiteCardContent: {
    flexDirection: "column",
    gap: 12,
    // justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 20,
    minHeight: 136,
  },
  whiteTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    lineHeight: 24,
    color: Colors.grey[900],
  },
  whiteDescription: {
    ...Typography.contentSubtitle,
    color: Colors.grey[300],
    maxWidth: 300,
  },
  whiteIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.grey[100],
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ExamPrep;
