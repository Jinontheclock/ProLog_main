import { CompetencyListItem } from "@/components/shared/CompetencyListItem";
import { ExamPrep } from "@/components/shared/ExamPrep";
import { LineCarousel } from "@/components/shared/LineCarousel";
import { LineDescription } from "@/components/shared/LineDescription";
import { PageSwitch } from "@/components/shared/PageSwitch";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { CommonStyles } from "@/lib/common-styles";
import { completionStore } from "@/lib/completion-store";
import { useFocusEffect } from '@react-navigation/native';
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import {
  useSafeAreaInsets
} from "react-native-safe-area-context";

// Import the competency data
import { Colors } from "@/constants";
import skillsData from '@/data/skills-competency-summary.json';

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
  const [selectedSkill, setSelectedSkill] = React.useState<string | null>(null);
  const [completedCompetencies, setCompletedCompetencies] = React.useState<string[]>([]);
  const [selectedPracticalLine, setSelectedPracticalLine] = React.useState("A");
  const [selectedTheoreticalLine, setSelectedTheoreticalLine] = React.useState("A");

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

  // Function to uncheck all competencies
  const handleUncheckAll = async () => {
    try {
      await completionStore.clearAll();
      console.log('All competencies unchecked successfully');
    } catch (error) {
      console.error('Error clearing competencies:', error);
    }
  };

  return (
    <View style={[CommonStyles.container, { backgroundColor: "#F0F0F0" }]}>
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
          title="Skills Competency"
          icon_action="cached"
          currentHours={0} // Example value
          totalHours={81} // Example value
          percentage={0} // Example value
          hrsText=""
          hoursIcon="electric_bolt"
          onIconPress={handleUncheckAll}
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
              iconName: "back_hand",
            },
            {
              id: "theoretical",
              label: "Theoretical",
              iconName: "library_book",
            },
          ]}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />

        {/* Content based on selected tab */}
        {selectedTab === "overall" && (
          <View style={styles.overallContainer}>
            {/* Recents Component */}
            {/* <View style={styles.componentContainer}>
              <Recents
                title="Recently viewed"
                line="Line A-3"
                description="Describe the concepts of electricity..."
                onRemove={() => console.log("Remove recent item")}
              />
            </View> */}

            {/* Exam Prep Component */}
            <View style={styles.componentContainer}>
              <ExamPrep />
            </View>

            {/* Ranking Component */}
            {/* <View style={styles.componentContainer}>
              <Ranking title="Avg. Score" scoreRange="90-94%" rank="Top 2" />
              <Ranking title="Avg. Score" scoreRange="90-94%" rank="Top 2" />
            </View> */}
          </View>
        )}

        {selectedTab === "practical" && (
          <View style={styles.tabContentContainer}>
            {/* Line Carousel */}
            <View style={styles.tabComponentContainer}>
              <LineCarousel
                lines={["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]}
                selectedLine={selectedPracticalLine}
                onLineSelect={(line) => setSelectedPracticalLine(line)}
              />
            </View>

            {/* Line Description */}
            <View style={styles.tabComponentContainer}>
              <LineDescription
                title={`Line ${selectedPracticalLine}`}
                description="Description"
                content="Learn practical electrical skills through real-world applications and laboratory exercises."
              />
            </View>

            {/* Competency List Items */}
            <View style={styles.competencyListContainer}>
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
                selectedLine={selectedTheoreticalLine}
                onLineSelect={(line) => setSelectedTheoreticalLine(line)}
              />
            </View>

            {/* Line Description */}
            <View style={styles.tabComponentContainer}>
              <LineDescription
                title={`Line ${selectedTheoreticalLine}`}
                description="Description"
                content="Master the theoretical foundations of electrical engineering and circuit analysis."
              />
            </View>

            {/* Competency List Items */}
            <View style={styles.competencyListContainer}>
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
    </View>
  );
}


const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  overallContainer: {
    paddingHorizontal: 24,
    gap: 24,
    flex: 1,
  },
  componentContainer: {
    alignItems: "center",
    width: '100%',
    flex: 1,
  },
  tabContentContainer: {
    paddingHorizontal: 24,
    // paddingTop: 24,
    gap: 20,
  },
  tabComponentContainer: {
    alignItems: "center",
  },
  competencyListContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    paddingVertical: 12,
    backgroundColor: Colors.white,
    borderRadius: 20,
    borderColor: Colors.grey[100]
  }
});
