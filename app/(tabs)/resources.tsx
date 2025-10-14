import { IconSymbol } from '@/components/ui/icon-symbol';
import { CommonStyles } from '@/lib/common-styles';
import dimensions from '@/lib/dimensions';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ResourcesScreen() {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <ScrollView style={CommonStyles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={CommonStyles.mainTitle}>Library</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Image
              source={require('@/assets/images/searchIcon.png')}
              style={{ width: 20, height: 20 }}
            /> 
            <TextInput 
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#666"
            />
            <TouchableOpacity style={styles.filterButton}>
              <Image
                source={require('@/assets/images/filterIcon.png')}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Resource Cards */}
        <View style={styles.cardsContainer}>
          {/* Study Resources Card */}
          <TouchableOpacity 
            style={styles.studyCard}
            onPress={() => router.push('/resources/study-resources')}
          >
            <View style={styles.cardContent}>
              <View style={styles.cardText}>
                <Text style={styles.studyTitle}>Study</Text>
                <Text style={styles.studySubtitle}>Resources</Text>
                <Text style={styles.studyDescription}>Competency summary, study guides, pdfs</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color="white" />
            </View>
          </TouchableOpacity>

          {/* Financial Resources Card */}
          <TouchableOpacity 
            style={styles.financialCard}
            onPress={() => router.push('/resources/financial-resources')}
          >
            <View style={styles.cardContent}>
              <View style={styles.cardText}>
                <Text style={styles.financialTitle}>Financial</Text>
                <Text style={styles.financialSubtitle}>Resources</Text>
                <Text style={styles.financialDescription}>Scholarship, grants, bursaries, EI, and more</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color="#333" />
            </View>
          </TouchableOpacity>

          {/* Other Resources Card */}
          <TouchableOpacity 
            style={styles.otherCard}
            onPress={() => router.push('/resources/other-resources')}
          >
            <View style={styles.cardContent}>
              <View style={styles.cardText}>
                <Text style={styles.otherTitle}>Other</Text>
                <Text style={styles.otherSubtitle}>Resources</Text>
                <Text style={styles.otherDescription}>Resume, employment law, help centers, and more</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color="#333" />
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
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#2C2C2C',
  },
  filterButton: {
    padding: 5,
  },
  cardsContainer: {
    paddingHorizontal: 20,
    gap: 15,
  },
  studyCard: {
    backgroundColor: '#2C2C2C',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  financialCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  otherCard: {
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
  studyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  studySubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 8,
  },
  studyDescription: {
    fontSize: 14,
    color: '#E0E0E0',
    lineHeight: 20,
  },
  financialTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  financialSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 8,
  },
  financialDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  otherTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  otherSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 8,
  },
  otherDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
});
