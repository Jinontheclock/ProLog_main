import { MaterialIcon } from "@/components/shared/MaterialIcon";
import {
  APPRENTICESHIP,
  BorderRadius,
  Colors,
  FINANCIAL,
  IconSize,
  Shadow,
  Spacing,
  Typography,
} from "@/constants";
import { CommonStyles } from "@/lib/common-styles";
import { router } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CanadaApprenticeLoanScreen() {
    return (
        <SafeAreaView style={CommonStyles.whiteContainer}>
            <ScrollView
                style={CommonStyles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={CommonStyles.scrollContent}
            >
                {/* Header */}
                <View style={CommonStyles.headerCompact}>
                    <TouchableOpacity
                        onPress={() => router.push("/(tabs)/Resources")}
                        style={CommonStyles.backButtonWithText}
                    >
                        <MaterialIcon name="icon-back-button" size={24} color="#000" />
                        <Text style={CommonStyles.backText}>Back</Text>
                    </TouchableOpacity>
                </View>

                {/* Main Info Card */}
                <View style={styles.mainInfoCard}>
                    {/* Title and Tag */}
                    <Text style={styles.title}>Canada Apprentice Loan</Text>
                    <View style={CommonStyles.tag}>
                        <Text style={CommonStyles.tagText}>Loan</Text>
                    </View>

                    {/* Loan Summary */}
                    <View style={styles.summarySection}>
                        <Text style={styles.summaryText}>Deadline: N/A</Text>
                        <Text style={styles.summaryText}>
                            Amount: up to $
                            {FINANCIAL.MAX_LOAN_AMOUNT.toLocaleString()}
                        </Text>
                        <Text style={styles.summaryText}>
                            Provider: {FINANCIAL.LOAN_PROVIDER}
                        </Text>
                    </View>

                    {/* About Section */}
                    <Text style={styles.sectionTitle}>About</Text>
                    <View style={styles.bulletPoints}>
                        <View style={styles.bulletPoint}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.bulletText}>
                                The Government of Canada offers apprentices
                                registered in a Red Seal Opens a new window
                                Trade apprenticeship program up to $
                                {FINANCIAL.MAX_LOAN_AMOUNT.toLocaleString()} per
                                period of technical training.
                            </Text>
                        </View>
                        <View style={styles.bulletPoint}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.bulletText}>
                                You can get Canada Apprentice Loans for up to{" "}
                                {APPRENTICESHIP.MAX_LOAN_PERIODS} periods of
                                technical training.
                            </Text>
                        </View>
                        <View style={styles.bulletPoint}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.bulletText}>
                                Your loan will be payment-free for up to{" "}
                                {APPRENTICESHIP.LOAN_PAYMENT_FREE_WEEKS} weeks/6
                                years as long as you are confirmed as being
                                registered in a Red Seal Opens a new window
                                Trade apprenticeship program.
                            </Text>
                        </View>
                        <View style={styles.bulletPoint}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.bulletText}>
                                You do not have to make any loan payments as
                                long as your loan is in active
                                apprenticeship/payment-free status.
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Eligibility Section */}
                <View style={styles.sectionCard}>
                    <Text style={styles.sectionTitle}>Eligibility</Text>
                    <Text style={styles.eligibilitySubtitle}>
                        To be eligible, you must meet all of these criteria
                        {"\n"}(the eligibility has been determined based on your
                        profile)
                    </Text>

                    <View style={styles.criteriaContainer}>
                        <View style={styles.criteriaBox}>
                            <MaterialIcon name="icon-check" size={24} color="#4CAF50" />
                            <Text style={styles.criteriaText}>
                                be a Canadian Citizen, Permanent Resident, or
                                Protected Person
                            </Text>
                        </View>

                        <View style={styles.criteriaBox}>
                            <MaterialIcon name="icon-check" size={24} color="#4CAF50" />
                            <Text style={styles.criteriaText}>
                                be registered in a Red Seal Opens a new window
                                Trade apprenticeship program that is designated
                                by the province or territory where you are
                                registered as an apprentice
                            </Text>
                        </View>

                        <View style={styles.criteriaBox}>
                            <Text style={styles.questionIcon}>?</Text>
                            <Text style={styles.criteriaText}>
                                be enrolled in block release technical training
                                or the equivalent full-time technical training
                                with an approved technical training provider
                            </Text>
                        </View>

                        <View style={styles.criteriaBox}>
                            <Text style={styles.questionIcon}>?</Text>
                            <Text style={styles.criteriaText}>
                                pass a credit check (required if you are
                                applying for the first time)
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Apply Now Button */}
                <TouchableOpacity
                    style={styles.applyButton}
                    onPress={() => router.push("/(tabs)/Resources")}
                >
                    <Text style={styles.applyButtonText}>Apply Now</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainInfoCard: {
        backgroundColor: Colors.white,
        marginHorizontal: Spacing.lg,
        marginBottom: Spacing.lg,
        borderRadius: BorderRadius.base,
        padding: Spacing.lg,
        ...Shadow.sm,
    },
    title: {
        ...Typography.mainTitle,
        color: Colors.text.primary,
        marginBottom: Spacing.md,
    },
    summarySection: {
        marginBottom: Spacing.xl,
    },
    summaryText: {
        ...Typography.bodyBase,
        color: Colors.text.primary,
    },
    sectionCard: {
        backgroundColor: Colors.white,
        marginHorizontal: Spacing.lg,
        marginBottom: Spacing.lg,
        borderRadius: BorderRadius.base,
        padding: Spacing.lg,
        ...Shadow.sm,
    },
    sectionTitle: {
        ...Typography.sectionTitle,
        color: Colors.text.primary,
        marginBottom: Spacing.base,
    },
    bulletPoints: {
        gap: Spacing.base,
    },
    bulletPoint: {
        flexDirection: "row",
        alignItems: "flex-start",
        gap: Spacing.sm,
    },
    bullet: {
        ...Typography.bodyBase,
        color: Colors.text.primary,
        marginTop: Spacing.xxs,
    },
    bulletText: {
        flex: 1,
        ...Typography.bodyBase,
        color: Colors.text.primary,
    },
    eligibilitySubtitle: {
        ...Typography.caption,
        color: Colors.text.secondary,
        marginBottom: Spacing.lg,
    },
    criteriaContainer: {
        gap: Spacing.md,
    },
    criteriaBox: {
        flexDirection: "row",
        alignItems: "flex-start",
        padding: Spacing.base,
        borderRadius: BorderRadius.md,
        gap: Spacing.md,
        backgroundColor: Colors.grey[200],
    },
    checkIcon: {
        width: IconSize.sm,
        height: IconSize.sm,
        marginTop: Spacing.xxs,
    },
    questionIcon: {
        ...Typography.bodyLarge,
        fontWeight: "600",
        color: Colors.text.primary,
        width: IconSize.sm,
        height: IconSize.sm,
        textAlign: "center",
        marginTop: Spacing.xxs,
    },
    criteriaText: {
        flex: 1,
        ...Typography.bodyBase,
        color: Colors.text.primary,
    },
    applyButton: {
        backgroundColor: Colors.dark,
        marginHorizontal: Spacing.lg,
        marginTop: Spacing.md,
        paddingVertical: Spacing.lg,
        borderRadius: BorderRadius.base,
        alignItems: "center",
        justifyContent: "center",
    },
    applyButtonText: {
        ...Typography.button,
        color: Colors.white,
    },
});
