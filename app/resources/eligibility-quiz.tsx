import { IconSymbol } from '@/components/ui/icon-symbol';
import dimensions from '@/lib/dimensions';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EligibilityQuizScreen() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    // Navigate to next page after a short delay
    setTimeout(() => {
      router.push('/resources/eligibility-quiz-saved');
    }, 500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
            <IconSymbol name="xmark" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>Eligibility Quiz</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Question */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>What is your citizenship status in Canada?</Text>
        </View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity 
            style={[styles.optionButton, selectedOption === 'canadian' && styles.selectedOption]}
            onPress={() => handleOptionSelect('canadian')}
          >
            <Text style={[styles.optionText, selectedOption === 'canadian' && styles.selectedOptionText]}>
              Canadian Citizen
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.optionButton, selectedOption === 'permanent' && styles.selectedOption]}
            onPress={() => handleOptionSelect('permanent')}
          >
            <Text style={[styles.optionText, selectedOption === 'permanent' && styles.selectedOptionText]}>
              Permanent Resident
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.optionButton, selectedOption === 'protected' && styles.selectedOption]}
            onPress={() => handleOptionSelect('protected')}
          >
            <Text style={[styles.optionText, selectedOption === 'protected' && styles.selectedOptionText]}>
              Protected Person
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.optionButton, selectedOption === 'other' && styles.selectedOption]}
            onPress={() => handleOptionSelect('other')}
          >
            <Text style={[styles.optionText, selectedOption === 'other' && styles.selectedOptionText]}>
              Other
            </Text>
          </TouchableOpacity>
        </View>

        {/* Pagination */}
        <View style={styles.paginationContainer}>
          <TouchableOpacity style={styles.paginationButton}>
            <IconSymbol name="chevron.left" size={20} color="#666" />
          </TouchableOpacity>
          <Text style={styles.paginationText}>1/4</Text>
          <TouchableOpacity style={styles.paginationButton}>
            <IconSymbol name="chevron.right" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    width: dimensions.constrainedWidth,
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
    width: dimensions.constrainedWidth,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    width: dimensions.constrainedWidth,
    backgroundColor: '#F2F2F2',
  },
  closeButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  placeholder: {
    width: 40,
  },
  questionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C2C2C',
    textAlign: 'center',
    lineHeight: 32,
  },
  optionsContainer: {
    paddingHorizontal: 20,
    gap: 16,
  },
  optionButton: {
    backgroundColor: '#F8F8F8',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  selectedOption: {
    backgroundColor: '#E6FAE6',
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  optionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  selectedOptionText: {
    color: '#2E7D32',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    gap: 20,
  },
  paginationButton: {
    padding: 8,
  },
  paginationText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
});
