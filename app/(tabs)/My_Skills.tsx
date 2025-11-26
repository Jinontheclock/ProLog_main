import { CompetencyListItem } from "@/components/shared/CompetencyListItem";
import { ExamPrep } from "@/components/shared/ExamPrep";
import { LineCarousel } from "@/components/shared/LineCarousel";
import { LineDescription } from "@/components/shared/LineDescription";
import { PageSwitch } from "@/components/shared/PageSwitch";
import { Ranking } from "@/components/shared/Ranking";
import { Recents } from "@/components/shared/Recents";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Colors } from "@/constants/colors";
import { Typography } from "@/constants/typography";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { CommonStyles } from "@/lib/common-styles";
import { completionStore } from "@/lib/completion-store";
import { dimensions } from "@/lib/dimensions";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import {
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Text } from "react-native-svg";

// Import the competency data
import { MaterialIcon } from "@/components/shared/MaterialIcon";
import skillsData from "@/data/skills-competency-summary.json";

type CompetencyItem = {
    id: string;
    Title: string;
    Summary: any[];
    Category: string;
    Quiz: string;
};

export default function SkillsScreen() {
    const skillId = "123";
    const title = "Skill Development";
    const description = "Learn and enhance your skills effectively.";
    const learningObjectives = ["Objective 1", "Objective 2", "Objective 3"];
    const [selectedTab, setSelectedTab] = React.useState("overall");
    const colorScheme = useColorScheme();
    const insets = useSafeAreaInsets();
    const [selectedSkill, setSelectedSkill] = React.useState<string | null>(
        null
    );
    const [completedCompetencies, setCompletedCompetencies] = React.useState<
        string[]
    >([]);

    // Process competency data from JSON
    const lineACompetencies = skillsData["level 1"][
        "Line A"
    ] as CompetencyItem[];
    const theoryCompetencies = lineACompetencies.filter(
        (comp) => comp.Category === "Theory"
    );
    const practicalCompetencies = lineACompetencies.filter(
        (comp) => comp.Category === "Practical"
    );

    // Subscribe to completion store changes
    React.useEffect(() => {
        const setupStore = async () => {
            // Wait for store to initialize
            await completionStore.waitForInitialization();

            // Set initial state
            setCompletedCompetencies(completionStore.getCompleted());

            // Subscribe to changes
            const unsubscribe = completionStore.subscribe((completedIds) => {
                setCompletedCompetencies(completedIds);
            });

            return unsubscribe;
        };

        let unsubscribe: (() => void) | undefined;

        setupStore().then((unsub) => {
            unsubscribe = unsub;
        });

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, []);

    // Refresh completion status when screen comes into focus
    useFocusEffect(
        React.useCallback(() => {
            const refreshData = async () => {
                await completionStore.waitForInitialization();
                setCompletedCompetencies(completionStore.getCompleted());
            };
            refreshData();
        }, [])
    );

    // Helper function to handle competency navigation
    const handleCompetencyPress = (competencyId: string) => {
        router.push({
            pathname: "/skills/details",
            params: { competencyId },
        });
    };

    return (
        <SafeAreaView style={CommonStyles.container}>
            <Image
                source={require("@/assets/images/background-grid 1.svg")}
                style={[CommonStyles.backgroundImage, { opacity: 0.12 }]}
                resizeMode="cover"
            />
            <ScrollView
                style={CommonStyles.scrollView}
                contentContainerStyle={{
                    paddingBottom: 70 + insets.bottom + 20,
                }}
                showsVerticalScrollIndicator={false}
            >
                {/* Top Card */}
                <SectionHeading
                    level="Level 2"
                    title="Skills"
                    icon_action="cached"
                    currentHours={28} // Example value
                    totalHours={81} // Example value
                    percentage={72} // Example value
                />

                {/* Tab Navigation */}
                <PageSwitch
                    key="my-skills-tabs"
                    tabs={[
                        {
                            id: "overall",
                            label: "Overall",
                            iconName: "dashboard",
                        },
                        {
                            id: "practical",
                            label: "Practical",
                            iconName: "build",
                        },
                        {
                            id: "theoretical",
                            label: "Theoretical",
                            iconName: "menu_book",
                        },
                    ]}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                />

                {/* Content based on selected tab */}
                {selectedTab === "overall" && (
                    <View style={styles.overallContainer}>
                        {/* Recents Component */}
                        <View style={styles.componentContainer}>
                            <Recents
                                title="Recently viewed"
                                line="Line A-3"
                                description="Describe the concepts of electricity..."
                                onRemove={() =>
                                    console.log("Remove recent item")
                                }
                            />
                        </View>

                        {/* Exam Prep Component */}
                        <View style={styles.sectionTitleContainer}>
                            <Text style={styles.sectionTitle}>Exam Prep</Text>
                            <MaterialIcon
                                name="info"
                                size={20}
                                color="#999"
                            />
                        </View>
                        <View style={styles.examContainer}>
                            <ExamPrep />
                        </View>

                        {/* Ranking Component */}
                        <Text style={styles.sectionTitle}>Quiz Ranking</Text>
                        <View style={styles.quizContainer}>
                            <Ranking
                                style={styles.rankingContainer}
                                title="Avg. Score"
                                scoreRange="90-94%"
                                rank="Top 2"
                            />
                            <Ranking
                                style={styles.rankingContainer}
                                title="Completion"
                                scoreRange="60-69%"
                                rank="Top 5"
                            />
                        </View>
                        <View style={styles.scoreContainer}>
                            <Image
                                style={styles.scoreImage}
                                source={require("@/assets/images/Frame 1168.png")}
                            />
                        </View>
                    </View>
                )}

                {selectedTab === "practical" && (
                    <View style={styles.tabContentContainer}>
                        {/* Line Carousel */}
                        <View style={styles.tabComponentContainer}>
                            <LineCarousel
                                lines={[
                                    "A",
                                    "B",
                                    "C",
                                    "D",
                                    "E",
                                    "F",
                                    "G",
                                    "H",
                                    "I",
                                    "J",
                                ]}
                                selectedLine="A"
                                onLineSelect={(line) =>
                                    console.log("Selected line:", line)
                                }
                            />
                        </View>

                        {/* Line Description */}
                        <View style={styles.tabComponentContainer}>
                            <LineDescription
                                title="Line C"
                                description="Hands-on experience"
                                content="Learn practical electrical skills through real-world applications and laboratory exercises."
                            />
                        </View>

                        {/* Competency List Items */}
                        <View style={styles.tabComponentContainer}>
                            {practicalCompetencies.map((competency) => (
                                <CompetencyListItem
                                    key={competency.id}
                                    text={competency.Title}
                                    checked={completedCompetencies.includes(
                                        competency.id
                                    )}
                                    onCheckedChange={() =>
                                        handleCompetencyPress(competency.id)
                                    }
                                />
                            ))}
                        </View>
                    </View>
                )}

                {selectedTab === "theoretical" && (
                    <View style={styles.tabContentContainer}>
                        {/* Line Carousel */}
                        <View style={styles.tabComponentContainer}>
                            <LineCarousel
                                lines={[
                                    "A",
                                    "B",
                                    "C",
                                    "D",
                                    "E",
                                    "F",
                                    "G",
                                    "H",
                                    "I",
                                    "J",
                                ]}
                                selectedLine="A"
                                onLineSelect={(line) =>
                                    console.log("Selected line:", line)
                                }
                            />
                        </View>

                        {/* Line Description */}
                        <View style={styles.tabComponentContainer}>
                            <LineDescription
                                title="Line X"
                                description="Fundamental principles"
                                content="Master the theoretical foundations of electrical engineering and circuit analysis."
                            />
                        </View>

                        {/* Competency List Items */}
                        <View style={styles.tabComponentContainer}>
                            {theoryCompetencies.map((competency) => (
                                <CompetencyListItem
                                    key={competency.id}
                                    text={competency.Title}
                                    checked={completedCompetencies.includes(
                                        competency.id
                                    )}
                                    onCheckedChange={() =>
                                        handleCompetencyPress(competency.id)
                                    }
                                />
                            ))}
                        </View>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: dimensions.constrainedWidth,
        alignSelf: "center",
    },
    quizContainer: {
        flexDirection: "row",
        alignSelf: "stretch",
        justifyContent: "space-between",
        gap: 12,
    },
    scrollView: {
        flex: 1,
    },
    sectionTitle: {
        ...Typography.sectionHeader,
        color: Colors.grey[700],
        justifyContent: "center",
        alignItems: "center",
        // marginBottom: 16,
        // textAlign: 'center',
        // marginTop: 8,
        // marginHorizontal: 20,
        alignSelf: "stretch",
        width: "100%",
        letterSpacing: -0.32,
    },
    sectionSubtitle: {
        fontSize: 12,
        color: "#999",
        marginHorizontal: 20,
        marginTop: -12,
        marginBottom: 16,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4,
        marginHorizontal: 24,
    },
    buttonContainer: {
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    overallContainer: {
        paddingHorizontal: 24,
        paddingTop: 24,
        gap: 24,
    },
    componentContainer: {
        alignItems: "center",
    },
    tabContentContainer: {
        paddingHorizontal: 24,
        paddingTop: 24,
        gap: 20,
    },
    tabComponentContainer: {
        alignItems: "center",
    },
    scoreContainer: {
        padding: 16,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 10,
        alignSelf: "stretch",
        borderRadius: 20,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.borderGrey,
    },
    scoreImage: {
        marginLeft: 10,
    },
    rankingContainer: {
        // width: 170,
    },
    examContainer: {
        alignSelf: "stretch",
    },
    sectionTitleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
});
