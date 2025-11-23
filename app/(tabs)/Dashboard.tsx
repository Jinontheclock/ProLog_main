import { DashboardData } from "@/components/shared/DashboardData";
import { Reminder } from "@/components/shared/Reminder";
import { SProgressBar } from "@/components/shared/SProgressBar";
import { Tags } from "@/components/shared/Tags";
import { Colors } from "@/constants/colors";
import { Spacing } from "@/constants/design-tokens";
import { Typography } from "@/constants/typography";
import { CommonStyles } from "@/lib/common-styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DashboardScreen() {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <Image
        source={require("@/assets/images/background-grid 1.svg")}
        style={CommonStyles.backgroundImage}
        resizeMode="cover"
      />
      <ScrollView
        style={CommonStyles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Status Bar Spacer */}
        <View style={{ height: 47 }} />

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello Jessica</Text>
            <Text style={styles.subtitle}>
              You're getting closer to the goal everyday!
            </Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <MaterialCommunityIcons
              name="account-outline"
              size={24}
              color={Colors.grey[700]}
            />
          </TouchableOpacity>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressSection}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: "10%" }]} />
          </View>
          <Text style={styles.progressText}>10%</Text>
        </View>

        {/* S-Shaped Progress */}
        <View style={styles.journeySection}>
          <SProgressBar percentage={41} height={50} />
        </View>

        {/* Overall Progress Section */}
        <View style={styles.dashboardDataProgress}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Overall Progress</Text>
            <DashboardData />
          </View>

          {/* Reminder Section */}
          <Reminder
            onHeaderPress={() => router.push("/dashboard/Dashboard_Reminder")}
            onViewMore={() => router.push("/dashboard/Dashboard_Reminder")}
          />

          {/* Exam Detail Section */}
          <View style={styles.sectionContainer}>
            <Text style={[styles.sectionTitle, { marginTop: 24 }]}>
              Exam Detail
            </Text>

            <View style={styles.examCard}>
              <View style={styles.examLeft}>
                <View style={styles.examInfo}>
                  <Text style={styles.examTitle}>Attempt 1</Text>
                </View>
                <Tags label="Not Registered" />
              </View>
              <View style={styles.examRight}>
                <Text style={styles.score}>-</Text>
                <Text style={styles.scoreUnit}>%</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    marginBottom: Spacing.base,
  },
  greeting: {
    fontFamily: "SpaceGrotesk-Light",
    fontSize: 32,
    lineHeight: 36 * 1.05,
    color: Colors.grey[700],
  },
  subtitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    lineHeight: 16 * 1.05,
    color: Colors.grey[500],
    marginTop: 4,
  },
  profileButton: {
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
  progressSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.sm,
    gap: Spacing.md,
  },
  progressBar: {
    width: 317,
    height: 8,
    backgroundColor: Colors.grey[100],
    borderRadius: 40,
    overflow: "hidden",
    justifyContent: "center",
  },
  progressFill: {
    width: 244,
    height: 6,
    backgroundColor: Colors.orange[400],
    borderRadius: 40,
    marginLeft: 2,
  },
  progressText: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    lineHeight: 18 * 1.05,
    color: Colors.grey[500],
  },
  journeySection: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
    marginTop: Spacing.lg,
    flex: 1,
  },
  dashboardDataProgress: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  sectionTitle: {
    fontFamily: "SpaceGrotesk-Regular",
    fontSize: 20,
    lineHeight: 20 * 1.05,
    color: Colors.grey[700],
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  examCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: Spacing.lg,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    shadowColor: Colors.grey[900],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 353,
    height: 119,
    alignSelf: "center",
  },
  examLeft: {
    flex: 1,
    gap: Spacing.md,
  },
  examInfo: {
    gap: 4,
  },
  examTitle: {
    ...Typography.contentTitle,
    color: Colors.grey[900],
  },
  examDate: {
    ...Typography.smBody,
    color: Colors.grey[500],
  },
  examRight: {
    width: 140,
    height: 103,
    borderRadius: 8,
    backgroundColor: Colors.grey[50],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  score: {
    fontFamily: "SpaceGrotesk-Medium",
    fontSize: 32,
    lineHeight: 36,
    color: Colors.grey[900],
  },
  scoreUnit: {
    fontFamily: "SpaceGrotesk-Light",
    fontSize: 16,
    color: Colors.grey[900],
  },
});
