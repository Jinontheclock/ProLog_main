import CustomTabBar from '@/components/custom-tab-bar';
import { IconSymbol } from '@/components/ui/icon-symbol';
import dimensions from '@/lib/dimensions';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HowToBuildResumeScreen() {
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
          <Text style={styles.title}>How to Build a Strong R...</Text>
        </View>

        {/* Main Content Card */}
        <View style={styles.mainCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardLabel}>Tips</Text>
            <View style={styles.titleRow}>
              <Text style={styles.cardTitle}>How to Build a Strong Resume</Text>
              <View style={styles.aiGeneratedBadge}>
                <Text style={styles.aiGeneratedText}>Ai-generated</Text>
              </View>
            </View>
          </View>

          <View style={styles.cardActions}>
            <TouchableOpacity style={styles.actionButton}>
              <IconSymbol name="trash" size={20} color="#2C2C2C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <IconSymbol name="arrow.down.circle" size={20} color="#2C2C2C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <IconSymbol name="paperplane" size={20} color="#2C2C2C" />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            {/* Summary Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Summary</Text>
              <Text style={styles.sectionText}>
                Building a strong résumé is all about clarity, relevance, and impact. Here's a breakdown of key tips to help you create one that stands out:
              </Text>
            </View>

            {/* Section 1 */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>1. Start with a Clear Structure</Text>
              <Text style={styles.sectionText}>
                Use a clean, professional layout. Standard sections include:
              </Text>
              <View style={styles.bulletList}>
                <Text style={styles.bulletPoint}>Header: Name, contact info, LinkedIn/portfolio.</Text>
                <Text style={styles.bulletPoint}>Summary/Profile (optional but powerful): 2-3 lines highlighting your strengths and goals.</Text>
                <Text style={styles.bulletPoint}>Skills: Tailored to the job (both technical and soft).</Text>
                <Text style={styles.bulletPoint}>Experience: Reverse chronological order (most recent first).</Text>
                <Text style={styles.bulletPoint}>Education: Include credentials, dates, and key achievements.</Text>
                <Text style={styles.bulletPoint}>Extras (if relevant): Certifications, projects, awards, or volunteer work.</Text>
              </View>
            </View>

            {/* Section 2 */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>2. Tailor for Each Job</Text>
              <View style={styles.bulletList}>
                <Text style={styles.bulletPoint}>Mirror the language from the job posting – it helps with applicant tracking systems (ATS).</Text>
                <Text style={styles.bulletPoint}>Emphasize skills and results that match the employer's priorities.</Text>
                <Text style={styles.bulletPoint}>Cut details that don't support the role you're applying for.</Text>
              </View>
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  mainCard: {
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
  cardHeader: {
    marginBottom: 20,
  },
  cardLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666',
    marginBottom: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
    flex: 1,
    lineHeight: 26,
  },
  aiGeneratedBadge: {
    backgroundColor: '#2C2C2C',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  aiGeneratedText: {
    fontSize: 10,
    fontWeight: '500',
    color: 'white',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    marginBottom: 20,
  },
  actionButton: {
    padding: 8,
  },
  content: {
    gap: 24,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  bulletList: {
    gap: 8,
    paddingLeft: 16,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});
