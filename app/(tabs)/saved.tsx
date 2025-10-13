import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SavedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Saved</Text>
        </View>

        {/* Saved Categories */}
        <View style={styles.categoriesContainer}>
          {/* Saved Events Card */}
          <TouchableOpacity style={styles.savedEventsCard}>
            <View style={styles.cardContent}>
              <View style={styles.cardText}>
                <Text style={styles.savedEventsTitle}>Saved Events</Text>
                <Text style={styles.savedEventsSubtitle}>3 items</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color="#FFFFFF" />
            </View>
          </TouchableOpacity>

          {/* Study Resources Card */}
          <TouchableOpacity style={styles.studyResourcesCard}>
            <View style={styles.cardContent}>
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>Study Resources</Text>
                <Text style={styles.cardSubtitle}>1 item</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color="#2C2C2C" />
            </View>
          </TouchableOpacity>

          {/* Financial Resources Card */}
          <TouchableOpacity style={styles.financialResourcesCard}>
            <View style={styles.cardContent}>
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>Financial Resources</Text>
                <Text style={styles.cardSubtitle}>1 item</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color="#2C2C2C" />
            </View>
          </TouchableOpacity>

          {/* Other Resources Card */}
          <TouchableOpacity style={styles.otherResourcesCard}>
            <View style={styles.cardContent}>
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>Other Resources</Text>
                <Text style={styles.cardSubtitle}>2 items</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color="#2C2C2C" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: 393,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    gap: 15,
  },
  savedEventsCard: {
    backgroundColor: '#2C2C2C',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  studyResourcesCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  financialResourcesCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  otherResourcesCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    flex: 1,
  },
  savedEventsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  savedEventsSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#E0E0E0',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666666',
  },
});
