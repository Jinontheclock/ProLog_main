import { Colors } from "@/constants/colors";
import { Typography } from "@/constants/typography";
import { CommonStyles } from "@/lib/common-styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExamPrepScreen() {
  const handleBackPress = () => {
    // Navigate back immediately
    router.back();
  };
  return (
    <SafeAreaView style={CommonStyles.container}>
      <Image
        source={require("@/assets/images/background-grid 1.svg")}
        style={[CommonStyles.backgroundImage, { opacity: 0.15 }]}
        resizeMode="cover"
      />
      
      {/* Simple Header with Back Button and Title */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color={Colors.grey[900]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Exam Prep</Text>
      </View>
      
      <View style={styles.container}>
        <Text style={styles.text}>Exam Prep</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: Colors.white,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.grey[100],
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  headerTitle: {
    ...Typography.sectionHeader,
    fontSize: 20,
    color: Colors.grey[900],
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.grey[900],
  },
});