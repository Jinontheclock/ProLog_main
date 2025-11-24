import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Image, ScrollView, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Colors } from "@/constants/colors";
import { Typography } from "@/constants/typography";
import { useColorScheme } from "@/hooks/use-color-scheme";
import dimensions from "@/lib/dimensions";
import { PageSwitch } from '@/components/shared/PageSwitch';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});

const CommonStyles = {
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  backgroundImage: {
    position: 'absolute' as 'absolute', // Explicitly cast to match allowed values
    width: '100%',
    height: 100, // Ensure height is a number
    opacity: 0.5,
  },
};

export default function SkillsScreen() {
  const skillId = '123';
  const title = 'Skill Development';
  const description = 'Learn and enhance your skills effectively.';
  const learningObjectives = ['Objective 1', 'Objective 2', 'Objective 3'];
  const [selectedTab, setSelectedTab] = React.useState('');
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const [selectedSkill, setSelectedSkill] = React.useState<string | null>(null);


  return (
    <View>
      <View style={CommonStyles.backgroundContainer} />
      <Image 
        source={require('@/assets/images/background-grid 1.svg')}
        style={CommonStyles.backgroundImage}
        resizeMode="cover"
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          paddingBottom: 70 + insets.bottom + 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Card */}
        <SectionHeading
          level="1"
          title="Track and manage your skill development journey."
          currentHours={10} // Example value
          totalHours={100} // Example value
          percentage={10} // Example value
        />
        {/* Tabs */}
        <PageSwitch
          key="my-skills-tabs"
          tabs={[
            {
              id: "overall",
              label: "overall",
              iconName: "",
            },
            {
              id: "",
              label: "",
              iconName: "",
            },
            {
              id: "",
              label: "",
              iconName: "",
            },
          ]}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />
      </ScrollView>
    </View>
  );
}
