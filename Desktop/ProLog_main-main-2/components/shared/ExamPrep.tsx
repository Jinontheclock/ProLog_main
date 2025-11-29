import ExamPrepHeader from "@/components/shared/ExamPrepHeader";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface ExamPrepProps {
  onPress?: () => void;
}

export const ExamPrep = ({ onPress }: ExamPrepProps) => {
  return (
    <View style={styles.container}>
      {/* Exam Prep Header */}
      <ExamPrepHeader onInfoPress={() => { /* TODO: info action */ }} />
      <TouchableOpacity
        style={styles.cardButton}
        activeOpacity={0.85}
        onPress={onPress}
      >
        <Image
          source={require("@/assets/images/examprep1.jpg")}
          style={styles.image1}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardButton}
        activeOpacity={0.85}
        onPress={onPress}
      >
        <Image
          source={require("@/assets/images/examprep2.jpg")}
          style={styles.image2}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 0,
  },
  cardButton: {
    width: '100%',
    marginBottom: 12,
    borderRadius: 20,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  image1: {
    width: '100%',
    height: 136,
    resizeMode: 'cover',
  },
  image2: {
    width: '100%',
    height: 118,
    resizeMode: 'cover',
  },
});

export default ExamPrep;
