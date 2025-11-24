import { CompetencyListItem } from "@/components/shared/CompetencyListItem";
import { ExamPrep } from "@/components/shared/ExamPrep";
import { LineCarousel } from "@/components/shared/LineCarousel";
import { LineDescription } from "@/components/shared/LineDescription";
import { PageSwitch } from "@/components/shared/PageSwitch";
import { Ranking } from "@/components/shared/Ranking";
import { Recents } from "@/components/shared/Recents";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { CommonStyles } from "@/lib/common-styles";
import { completionStore } from "@/lib/completion-store";
import { useFocusEffect } from '@react-navigation/native';
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// Import the competency data
import skillsData from '@/data/skills-competency-summary.json';

type CompetencyItem = {
  id: string;
  Title: string;
  Summary: any[];
  Category: string;
  Quiz: string;
};

const styles = StyleSheet.create({
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
});

export default function SkillsScreen() {
  const skillId = "123";
  const title = "Skill Development";
  const description = "Learn and enhance your skills effectively.";
  const learningObjectives = ["Objective 1", "Objective 2", "Objective 3"];
  const [selectedTab, setSelectedTab] = React.useState("overall");
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const [selectedSkill, setSelectedSkill] = React.useState<string | null>(null);
  const [completedCompetencies, setCompletedCompetencies] = React.useState<string[]>([]);

  // Process competency data from JSON
  const lineACompetencies = skillsData['level 1']['Line A'] as CompetencyItem[];
  const theoryCompetencies = lineACompetencies.filter(comp => comp.Category === 'Theory');
  const practicalCompetencies = lineACompetencies.filter(comp => comp.Category === 'Practical');

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
      params: { competencyId }
    });
  };

  return (
    <SafeAreaView style={CommonStyles.container}>
      <Image
        source={require("@/assets/images/background-grid 1.svg")}
        style={CommonStyles.backgroundImage}
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
          currentHours={10} // Example value
          totalHours={100} // Example value
          percentage={10} // Example value
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
                onRemove={() => console.log("Remove recent item")}
              />
            </View>

            {/* Exam Prep Component */}
            <View style={styles.componentContainer}>
              <ExamPrep />
            </View>

            {/* Ranking Component */}
            <View style={styles.componentContainer}>
              <Ranking title="Avg. Score" scoreRange="90-94%" rank="Top 2" />
            </View>
          </View>
        )}

        {selectedTab === "practical" && (
          <View style={styles.tabContentContainer}>
            {/* Line Carousel */}
            <View style={styles.tabComponentContainer}>
              <LineCarousel
                lines={["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]}
                selectedLine="A"
                onLineSelect={(line) => console.log("Selected line:", line)}
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
                  checked={completedCompetencies.includes(competency.id)}
                  onCheckedChange={() => handleCompetencyPress(competency.id)}
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
                lines={["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]}
                selectedLine="A"
                onLineSelect={(line) => console.log("Selected line:", line)}
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
                  checked={completedCompetencies.includes(competency.id)}
                  onCheckedChange={() => handleCompetencyPress(competency.id)}
                />
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
      </ScrollView>
    </SafeAreaView>
  );
}
