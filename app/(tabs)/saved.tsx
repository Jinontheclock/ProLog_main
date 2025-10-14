import { IconSymbol } from '@/components/ui/icon-symbol';
import { CommonStyles } from '@/lib/common-styles';
import dimensions from '@/lib/dimensions';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SavedScreen() {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <ScrollView style={CommonStyles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={CommonStyles.mainTitle}>Saved</Text>
        </View>

        {/* Saved Categories */}
        <View style={styles.categoriesContainer}>
          {/* Study Resources Card - Dark */}
          <TouchableOpacity 
            style={styles.studyResourcesCard}
            onPress={() => router.push('/resources/study-resources')}
          >
            <View style={styles.cardContent}>
              <View style={styles.cardText}>
                <Text style={styles.studyResourcesTitle}>Study Resources</Text>
                <Text style={styles.studyResourcesSubtitle}>3 items</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color="#FFFFFF" />
            </View>
          </TouchableOpacity>

          {/* Financial Resources Card - Light */}
          <TouchableOpacity 
            style={styles.financialResourcesCard}
            onPress={() => router.push('/resources/financial-resources')}
          >
            <View style={styles.cardContent}>
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>Financial Resources</Text>
                <Text style={styles.cardSubtitle}>1 item</Text>
              </View>
              <View style={styles.chevronButton}>
                <IconSymbol name="chevron.right" size={16} color="#2C2C2C" />
              </View>
            </View>
          </TouchableOpacity>

          {/* Other Resources Card - Light */}
          <TouchableOpacity 
            style={styles.otherResourcesCard}
            onPress={() => router.push('/resources/other-resources')}
          >
            <View style={styles.cardContent}>
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>Other Resources</Text>
                <Text style={styles.cardSubtitle}>2 items</Text>
              </View>
              <View style={styles.chevronButton}>
                <IconSymbol name="chevron.right" size={16} color="#2C2C2C" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: dimensions.constrainedWidth,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    gap: 15,
  },
  studyResourcesCard: {
    backgroundColor: '#2C2C2C',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  financialResourcesCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  otherResourcesCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    flex: 1,
  },
  studyResourcesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  studyResourcesSubtitle: {
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
  chevronButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
});
