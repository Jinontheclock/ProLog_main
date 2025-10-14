import CustomTabBar from '@/components/custom-tab-bar';
import { IconSymbol } from '@/components/ui/icon-symbol';
import dimensions from '@/lib/dimensions';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FinancialResourcesScreen() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

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
          <Text style={styles.title}>Financial Resources</Text>
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

        {/* Canada Apprentice Loan Card */}
        <View style={styles.resourcesContainer}>
          <TouchableOpacity 
            style={styles.loanCard}
            onPress={() => router.push('/resources/canada-apprentice-loan')}
          >
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Canada Apprentice Loan</Text>
              <Text style={styles.cardDescription}>Interest-free loans to help registered apprentices with the cost of their training.</Text>
            </View>
            <IconSymbol name="chevron.right" size={20} color="#2C2C2C" />
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
  },
  loanCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

