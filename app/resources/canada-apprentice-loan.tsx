import CustomTabBar from '@/components/custom-tab-bar';
import { IconSymbol } from '@/components/ui/icon-symbol';
import dimensions from '@/lib/dimensions';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CanadaApprenticeLoanScreen() {
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
          <Text style={styles.title}>Canada Apprentice Loan</Text>
          <TouchableOpacity style={styles.bookmarkButton}>
            <IconSymbol name="bookmark" size={24} color="#2C2C2C" />
          </TouchableOpacity>
        </View>

        {/* Loan Summary Card */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryColumn}>
            <Text style={styles.summaryLabel}>Deadline</Text>
            <Text style={styles.summaryValue}>N/A</Text>
          </View>
          <View style={styles.summaryColumn}>
            <Text style={styles.summaryLabel}>Amount</Text>
            <Text style={styles.summaryValue}>Up to $4,000</Text>
          </View>
          <View style={styles.summaryColumn}>
            <Text style={styles.summaryLabel}>Provider</Text>
            <Text style={styles.summaryValue}>EPBC</Text>
          </View>
        </View>

        {/* About Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>About</Text>
          <View style={styles.bulletPoints}>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                The Government of Canada offers apprentices registered in a Red Seal Opens a new window Trade apprenticeship program up to $4,000 per period of technical training.
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                You can get Canada Apprentice Loans for up to 5 periods of technical training
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                Your loan will be payment-free for up to 312 weeks/6 years as long as you are confirmed as being registered in a Red Seal Opens a new window Trade apprenticeship program
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                You do not have to make any loan payments as long as your loan is in active apprenticeship/payment-free status.
              </Text>
            </View>
          </View>
        </View>

        {/* Eligibility Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Eligibility</Text>
          <Text style={styles.eligibilitySubtitle}>
            To be eligible, you must meet all of these criteria: (the eligibility has been determined based on your profile)
          </Text>
          
          <View style={styles.criteriaContainer}>
            <View style={[styles.criteriaBox, styles.metCriteria]}>
              <IconSymbol name="checkmark" size={20} color="#4CAF50" />
              <Text style={styles.criteriaText}>
                be a Canadian Citizen, Permanent Resident, or Protected Person
              </Text>
            </View>
            
            <View style={[styles.criteriaBox, styles.metCriteria]}>
              <IconSymbol name="checkmark" size={20} color="#4CAF50" />
              <Text style={styles.criteriaText}>
                be registered in a Red Seal Opens a new window Trade apprenticeship program that is designated by the province or territory where you are registered as an apprentice
              </Text>
            </View>
            
            <View style={[styles.criteriaBox, styles.pendingCriteria]}>
              <IconSymbol name="questionmark" size={20} color="#666" />
              <Text style={styles.criteriaText}>
                be enrolled in block release technical training or the equivalent full-time technical training with an approved technical training provider
              </Text>
            </View>
            
            <View style={[styles.criteriaBox, styles.pendingCriteria]}>
              <IconSymbol name="questionmark" size={20} color="#666" />
              <Text style={styles.criteriaText}>
                pass a credit check (required if you are applying for the first time)
              </Text>
            </View>
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
  backButton: {
    marginRight: 15,
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
    flex: 1,
    textAlign: 'center',
  },
  bookmarkButton: {
    padding: 8,
  },
  summaryCard: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  summaryColumn: {
    flex: 1,
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666',
    marginBottom: 8,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionCard: {
    backgroundColor: '#F8F8F8',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  bulletPoints: {
    gap: 12,
  },
  bulletPoint: {
    paddingLeft: 16,
  },
  bulletText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  eligibilitySubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    lineHeight: 20,
  },
  criteriaContainer: {
    gap: 12,
  },
  criteriaBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  metCriteria: {
    backgroundColor: '#E6FAE6',
  },
  pendingCriteria: {
    backgroundColor: '#F5F5F5',
  },
  criteriaText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});
