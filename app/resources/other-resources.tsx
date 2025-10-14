import CustomTabBar from '@/components/custom-tab-bar';
import dimensions from '@/lib/dimensions';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OtherResourcesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Image 
              source={require('@/assets/images/backArrow.png')}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Other Resources</Text>
        </View>

        {/* Category Filter */}
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Category</Text>
            <Image 
              source={require('@/assets/images/downArrow.png')}
              style={{ width: 16, height: 16 }}
            />
          </TouchableOpacity>
        </View>

        {/* Resource Cards */}
        <View style={styles.resourcesContainer}>
          <TouchableOpacity 
            style={styles.resourceCard}
            onPress={() => router.push('/resources/how-to-build-resume')}
          >
            <View style={styles.cardContent}>
              <Text style={styles.cardLabel}>Tips</Text>
              <Text style={styles.cardTitle}>How to Build a Strong Resume</Text>
              <Text style={styles.cardDescription}>Resume structure, content, vocabulary, and more. How to write a strong job description.</Text>
            </View>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View →</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resourceCard}>
            <View style={styles.cardContent}>
              <Text style={styles.cardLabel}>Law</Text>
              <Text style={styles.cardTitle}>Right to a Safe Workplace</Text>
              <Text style={styles.cardDescription}>You have the right to a safe workplace. Learn more about how this protects you in workplace.</Text>
            </View>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View →</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      {/* Tab Navigation */}
      <CustomTabBar activeTab="resources" />
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
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    width: 393,
    backgroundColor: '#F2F2F2',
    marginTop: 0,
  },
  backButton: {
    marginRight: 15,
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  filterContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    width: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  filterText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  resourcesContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
  resourceCard: {
    backgroundColor: '#F8F8F8',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardContent: {
    marginBottom: 16,
  },
  cardLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    lineHeight: 26,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  viewButton: {
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    alignSelf: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  viewButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C2C2C',
  },
});
