import { IconSymbol } from '@/components/ui/icon-symbol';
import dimensions from '@/lib/dimensions';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Dashboard Title */}
        <View style={styles.dashboardHeader}>
          <Text style={styles.dashboardTitle}>Dashboard</Text>
        </View>

        {/* Main Cards Row */}
        <View style={styles.cardsContainer}>
          {/* Training Hours Card */}
          <View style={styles.trainingCard}>
            <View style={styles.cardHeader}>
              <IconSymbol name="clock" size={20} color="#666" />
              <Text style={styles.cardTitle}>Training hours</Text>
            </View>
            <Text style={styles.lastUpdated}>Last updated 2:45PM</Text>
            
            <View style={styles.progressContainer}>
              <View style={styles.progressCircle}>
                <View style={styles.progressArc} />
                <View style={styles.progressTextContainer}>
                  <Text style={styles.progressLevel}>Level 1</Text>
                </View>
              </View>
            </View>
            
            <Text style={styles.progressText}>1,500/6,000 hrs</Text>
            
            <TouchableOpacity style={styles.viewDetailButton}>
              <Text style={styles.viewDetailText}>View detail →</Text>
            </TouchableOpacity>
          </View>

          {/* Reminder Card */}
          <View style={styles.reminderCard}>
            <View style={styles.reminderHeader}>
              <IconSymbol name="bell" size={20} color="white" />
              <Text style={styles.reminderTitle}>Reminder</Text>
            </View>
            
            <View style={styles.reminderList}>
              <View style={styles.reminderItem}>
                <Text style={styles.reminderDate}>Oct 10, 2025</Text>
                <Text style={styles.reminderText}>WHIMS Expiration</Text>
              </View>
              <View style={styles.reminderDivider} />
              <View style={styles.reminderItem}>
                <Text style={styles.reminderDate}>Oct 25, 2025</Text>
                <Text style={styles.reminderText}>Level 1 Exam</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.addButton}>
              <IconSymbol name="plus" size={24} color="#333" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Competency Checklist */}
        <TouchableOpacity style={styles.checklistContainer}>
          <View style={styles.checklistHeader}>
            <IconSymbol name="list.bullet" size={20} color="white" />
            <Text style={styles.checklistTitle}>Competency Checklist</Text>
            <IconSymbol name="chevron.right" size={20} color="white" />
          </View>
          <View style={styles.checklistContent}>
            <Text style={styles.checklistLevel}>Level 1</Text>
            <Text style={styles.checklistProgress}>3/60</Text>
          </View>
        </TouchableOpacity>

        {/* Suggested Reading */}
        <View style={styles.suggestedReadingSection}>
          <Text style={styles.sectionTitle}>Suggested Reading</Text>
          
          <View style={styles.readingCardsContainer}>
            {/* WHMIS Card */}
            <TouchableOpacity style={styles.readingCard}>
              <Text style={styles.readingCategory}>Other Resources</Text>
              <Text style={styles.readingTitle}>WHMIS Application</Text>
              <Text style={styles.readingDescription}>WHMIS: What it is and How to apply</Text>
              <Text style={styles.readMoreText}>Read more →</Text>
            </TouchableOpacity>

            {/* Savings Card */}
            <TouchableOpacity style={styles.readingCard}>
              <Text style={styles.readingCategory}>Other Resources</Text>
              <Text style={styles.readingTitle}>Strategies to Increase Savings</Text>
              <Text style={styles.readingDescription}>Learn more about saving strategies</Text>
              <Text style={styles.readMoreText}>Read more →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  dashboardHeader: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: dimensions.constrainedWidth,
  },
  dashboardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  cardsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 15,
    marginBottom: 20,
    width: dimensions.constrainedWidth,
  },
  trainingCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    maxWidth: 180,
  },
  reminderCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    maxWidth: 180,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    marginLeft: 8,
  },
  lastUpdated: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 20,
  },
  progressContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  progressCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 8,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  progressArc: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 8,
    borderColor: 'transparent',
    borderTopColor: '#2C2C2C',
    borderRightColor: '#2C2C2C',
    transform: [{ rotate: '-45deg' }],
  },
  progressTextContainer: {
    alignItems: 'center',
  },
  progressLevel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
  },
  progressText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2C2C2C',
    textAlign: 'center',
    marginBottom: 15,
  },
  viewDetailButton: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  viewDetailText: {
    fontSize: 14,
    color: '#666666',
  },
  reminderHeader: {
    backgroundColor: '#2C2C2C',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 15,
  },
  reminderTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  reminderList: {
    marginBottom: 15,
  },
  reminderItem: {
    marginBottom: 8,
  },
  reminderDate: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 2,
  },
  reminderText: {
    fontSize: 14,
    color: '#2C2C2C',
    fontWeight: '500',
  },
  reminderDivider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 8,
  },
  addButton: {
    backgroundColor: '#F0F0F0',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  checklistContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    width: 353,
  },
  checklistHeader: {
    backgroundColor: '#2C2C2C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  checklistTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  checklistContent: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  checklistLevel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
  },
  checklistProgress: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
  },
  suggestedReadingSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 15,
  },
  readingCardsContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  readingCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  readingCategory: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 8,
  },
  readingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 8,
  },
  readingDescription: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
    lineHeight: 20,
  },
  readMoreText: {
    fontSize: 14,
    color: '#2C2C2C',
    fontWeight: '500',
  },
});
