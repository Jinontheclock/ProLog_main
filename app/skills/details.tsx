import { Button } from '@/components/shared/Buttons';
import MaterialIcon from '@/components/shared/MaterialIcon';
import { Colors } from '@/constants/colors';
import { Spacing } from '@/constants/design-tokens';
import { Typography } from '@/constants/typography';
import { CommonStyles } from '@/lib/common-styles';
import { completionStore } from '@/lib/completion-store';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

// Import the competency data
import skillsData from '@/data/skills-competency-summary.json';

type SummarySection = {
  Section: string;
  Content: string;
};

type CompetencyData = {
  id: string;
  Title: string;
  Summary: SummarySection[];
  Category: string;
  Quiz: string;
};

export default function SkillsDetailsScreen() {
  const insets = useSafeAreaInsets();
  const { competencyId } = useLocalSearchParams<{ competencyId: string }>();
  const [competencyData, setCompetencyData] = useState<CompetencyData | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Load completion status from the completion store
  const loadCompletionStatus = async (id: string) => {
    await completionStore.waitForInitialization();
    const completed = completionStore.isCompleted(id);
    setIsCompleted(completed);
  };

  // Save completion status to the completion store
  const saveCompletionStatus = async (id: string, completed: boolean) => {
    await completionStore.setCompleted(id, completed);
  };
  
  useEffect(() => {
    const loadData = async () => {
      if (competencyId) {
        // Find the competency in the JSON data
        const lineAData = skillsData['level 1']['Line A'];
        const foundCompetency = lineAData.find(item => item.id === competencyId);
        
        if (foundCompetency) {
          setCompetencyData(foundCompetency as CompetencyData);
          await loadCompletionStatus(competencyId);
          setIsLoading(false);
        } else {
          Alert.alert('Error', 'Competency not found', [
            { text: 'OK', onPress: () => router.back() }
          ]);
          setIsLoading(false);
        }
      }
    };
    
    loadData();
  }, [competencyId]);
  
  const handleStartQuiz = () => {
    if (!competencyData) return;
    
    router.push({
      pathname: '/skills/quiz',
      params: {
        skillId: competencyData.id,
        content: competencyData.Quiz
      }
    });
  };

  const handleMarkAsComplete = async () => {
    if (!competencyData) return;
    
    const newCompletedState = !isCompleted;
    setIsCompleted(newCompletedState);
    
    try {
      await saveCompletionStatus(competencyData.id, newCompletedState);
      
      Alert.alert(
        'Success',
        newCompletedState ? 'Competency marked as complete!' : 'Competency marked as incomplete.',
        [{ text: 'OK' }]
      );
    } catch (error) {
      console.error('Error saving completion status:', error);
      // Revert the local state if save failed
      setIsCompleted(!newCompletedState);
      Alert.alert(
        'Error',
        'Failed to save completion status. Please try again.',
        [{ text: 'OK' }]
      );
    }
  };
  
  if (!competencyData || isLoading) {
    return (
      <SafeAreaView style={CommonStyles.container}>
        <Image
          source={require("@/assets/images/background-grid 1.svg")}
          style={CommonStyles.backgroundImage}
          resizeMode="cover"
        />
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading competency data...</Text>
        </View>
      </SafeAreaView>
    );
  }

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
        {/* Header with Back Button */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <MaterialIcon
              name="icon-arrow-back"
              size={24}
              color={Colors.grey[700]}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Skills Details</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Competency Title */}
        <View style={styles.titleContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.competencyTitle}>{competencyData.Title}</Text>
            {isCompleted && (
              <MaterialIcon
                name="check_circle"
                size={24}
                color={Colors.green[500]}
              />
            )}
          </View>
          <View style={styles.badgeRow}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{competencyData.Category}</Text>
            </View>
            {isCompleted && (
              <View style={styles.completedBadge}>
                <Text style={styles.completedText}>Completed</Text>
              </View>
            )}
          </View>
        </View>
        
        {/* Summary Cards */}
        <View style={styles.summaryContainer}>
          {competencyData.Summary.map((section, index) => (
            <View key={index} style={styles.summaryCard}>
              <Text style={styles.sectionHeader}>{section.Section}</Text>
              <Text style={styles.sectionContent}>{section.Content}</Text>
            </View>
          ))}
        </View>
        
        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <Button
            text="Start Quiz"
            variant="primary"
            onPress={handleStartQuiz}
            customStyle={{
              alignSelf: 'center',
              width: 150,
              marginBottom: 12,
            }}
          />
          <Button
            text={isCompleted ? "Mark as Incomplete" : "Mark as Complete"}
            variant={isCompleted ? "secondary" : "tertiary"}
            onPress={handleMarkAsComplete}
            customStyle={{
              alignSelf: 'center',
              width: 180,
            }}
          />
        </View>


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.base,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.grey[900],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  headerTitle: {
    ...Typography.sectionHeader,
    color: Colors.grey[700],
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  contentContainer: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.base,
  },
  contentTitle: {
    ...Typography.sectionHeader,
    color: Colors.grey[900],
    marginBottom: Spacing.sm,
  },
  contentDescription: {
    ...Typography.bigBody,
    color: Colors.grey[700],
    lineHeight: 24,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    ...Typography.contentTitle,
    color: Colors.grey[500],
  },
  titleContainer: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.base,
    alignItems: 'center',
  },
  competencyTitle: {
    ...Typography.sectionHeader,
    color: Colors.grey[900],
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  categoryBadge: {
    backgroundColor: Colors.orange[100],
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: 16,
  },
  categoryText: {
    ...Typography.buttonText,
    color: Colors.orange[500],
    fontWeight: '600',
  },
  summaryContainer: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
  },
  summaryCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: Spacing.lg,
    shadowColor: Colors.grey[900],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.grey[100],
  },
  sectionHeader: {
    ...Typography.contentBold,
    color: Colors.grey[900],
    marginBottom: Spacing.sm,
  },
  sectionContent: {
    ...Typography.bigBody,
    color: Colors.grey[700],
    lineHeight: 22,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
  },
  completedBadge: {
    backgroundColor: Colors.green[100],
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: 16,
  },
  completedText: {
    ...Typography.buttonText,
    color: Colors.green[600],
    fontWeight: '600',
  },
});