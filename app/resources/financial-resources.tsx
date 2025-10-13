import CustomTabBar from '@/components/custom-tab-bar';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FinancialResourcesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <IconSymbol name="chevron.left" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>Financial Resources</Text>
        </View>

        {/* Financial Resources List */}
        <View style={styles.resourcesContainer}>
          {/* Grants Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Grants & Funding</Text>
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="dollarsign.circle" size={24} color="#4CAF50" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Apprenticeship Incentive Grant</Text>
                <Text style={styles.cardDescription}>Up to $1,000 for completing apprenticeship</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="dollarsign.circle" size={24} color="#4CAF50" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Tools & Equipment Grant</Text>
                <Text style={styles.cardDescription}>Financial support for required tools</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Scholarships Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Scholarships</Text>
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="graduationcap" size={24} color="#2196F3" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Trade Scholarship Program</Text>
                <Text style={styles.cardDescription}>Merit-based scholarships for trade students</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="graduationcap" size={24} color="#2196F3" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Women in Trades Scholarship</Text>
                <Text style={styles.cardDescription}>Supporting women in skilled trades</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Financial Aid Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Financial Aid</Text>
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="creditcard" size={24} color="#FF9800" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Student Loan Programs</Text>
                <Text style={styles.cardDescription}>Low-interest loans for education</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="creditcard" size={24} color="#FF9800" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Payment Plans</Text>
                <Text style={styles.cardDescription}>Flexible payment options available</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Tax Benefits Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tax Benefits</Text>
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="doc.text" size={24} color="#9C27B0" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Education Tax Credits</Text>
                <Text style={styles.cardDescription}>Tax benefits for educational expenses</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="doc.text" size={24} color="#9C27B0" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Tool Deductions</Text>
                <Text style={styles.cardDescription}>Deductible expenses for tools and equipment</Text>
              </View>
            </TouchableOpacity>
          </View>
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
    backgroundColor: '#F5F5F5',
    width: 393,
    height: 852,
  },
  scrollView: {
    flex: 1,
    width: 393,
    maxHeight: 792,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    width: 393,
    backgroundColor: '#F5F5F5',
    marginTop: 0,
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  resourcesContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  resourceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
    marginLeft: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});
