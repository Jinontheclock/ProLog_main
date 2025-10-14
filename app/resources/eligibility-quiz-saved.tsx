import { IconSymbol } from '@/components/ui/icon-symbol';
import dimensions from '@/lib/dimensions';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EligibilityQuizSavedScreen() {
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

        {/* Success Content */}
        <View style={styles.contentContainer}>
          <View style={styles.checkmarkContainer}>
            <IconSymbol name="checkmark" size={48} color="#4CAF50" />
          </View>
          
          <Text style={styles.successTitle}>Your answers have been saved.</Text>
          
          <Text style={styles.successDescription}>
            The eligibility section of the financial resources will now automatically show your eligibility.
          </Text>

          <TouchableOpacity 
            style={styles.goToButton}
            onPress={() => router.push('/resources/financial-resources')}
          >
            <Text style={styles.goToButtonText}>Go to Financial Resources</Text>
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
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  checkmarkContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C2C2C',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 32,
  },
  successDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  goToButton: {
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  goToButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
