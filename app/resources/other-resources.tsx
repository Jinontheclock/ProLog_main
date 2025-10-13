import CustomTabBar from '@/components/custom-tab-bar';
import { IconSymbol } from '@/components/ui/icon-symbol';
import dimensions from '@/lib/dimensions';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OtherResourcesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <IconSymbol name="chevron.left" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>Other Resources</Text>
        </View>

        {/* Resources List */}
        <View style={styles.resourcesContainer}>
          {/* Career Development Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Career Development</Text>
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="briefcase" size={24} color="#4CAF50" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Job Placement Services</Text>
                <Text style={styles.cardDescription}>Connect with employers and find opportunities</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="person.2" size={24} color="#4CAF50" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Mentorship Program</Text>
                <Text style={styles.cardDescription}>Connect with experienced professionals</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Support Services Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Support Services</Text>
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="heart" size={24} color="#E91E63" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Mental Health Support</Text>
                <Text style={styles.cardDescription}>Counseling and wellness resources</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="questionmark.circle" size={24} color="#E91E63" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Academic Support</Text>
                <Text style={styles.cardDescription}>Tutoring and study assistance</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Community Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Community</Text>
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="person.3" size={24} color="#2196F3" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Student Groups</Text>
                <Text style={styles.cardDescription}>Join clubs and student organizations</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="calendar" size={24} color="#2196F3" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Events & Workshops</Text>
                <Text style={styles.cardDescription}>Networking and skill-building events</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Technology Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Technology</Text>
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="laptopcomputer" size={24} color="#FF9800" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Digital Tools</Text>
                <Text style={styles.cardDescription}>Software and apps for learning</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="wifi" size={24} color="#FF9800" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Online Resources</Text>
                <Text style={styles.cardDescription}>Web-based learning materials</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Legal & Rights Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Legal & Rights</Text>
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="doc.text" size={24} color="#9C27B0" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Student Rights</Text>
                <Text style={styles.cardDescription}>Know your rights as a student</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.resourceCard}>
              <IconSymbol name="scale.3d" size={24} color="#9C27B0" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Legal Aid</Text>
                <Text style={styles.cardDescription}>Free legal assistance for students</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
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
