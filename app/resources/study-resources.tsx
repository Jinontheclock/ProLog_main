import CustomTabBar from '@/components/custom-tab-bar';
import { IconSymbol } from '@/components/ui/icon-symbol';
import dimensions from '@/lib/dimensions';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StudyResourcesScreen() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <IconSymbol 
              name="chevron.left"
              size={24}
              color="#2C2C2C"
            />
          </TouchableOpacity>
          <Text style={styles.title}>Study Resources</Text>
        </View>

        {/* Filter Buttons */}
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Level</Text>
            <IconSymbol 
              name="chevron.down"
              size={16}
              color="#666"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Line</Text>
            <IconSymbol 
              name="chevron.down"
              size={16}
              color="#666"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Theory/Practical</Text>
            <IconSymbol 
              name="chevron.down"
              size={16}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        {/* Resources List */}
        <View style={styles.resourcesContainer}>
          {/* Line A Section */}
          <TouchableOpacity 
            style={styles.sectionHeader}
            onPress={() => setExpandedItem(expandedItem === 'line-a' ? null : 'line-a')}
          >
            <Text style={styles.sectionTitle}>Line A: Apply Circuit Concepts</Text>
            <Text style={styles.sectionCount}>2</Text>
            <IconSymbol 
              name={expandedItem === 'line-a' ? 'chevron.up' : 'chevron.down'}
              size={20}
              color="#2C2C2C"
            />
          </TouchableOpacity>
          
          {expandedItem === 'line-a' && (
            <View style={styles.expandedSection}>
              <TouchableOpacity 
                style={styles.subItem}
                onPress={() => router.push('/resources/alternating-current')}
              >
                <Text style={styles.subItemText}>Describe the principles of alternating current</Text>
                <IconSymbol name="chevron.right" size={16} color="#2C2C2C" />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.subItem}
                onPress={() => router.push('/resources/series-circuits')}
              >
                <Text style={styles.subItemText}>Analyze series circuits</Text>
                <IconSymbol name="chevron.right" size={16} color="#2C2C2C" />
              </TouchableOpacity>
            </View>
          )}

          {/* Line B Section */}
          <TouchableOpacity 
            style={styles.sectionHeader}
            onPress={() => setExpandedItem(expandedItem === 'line-b' ? null : 'line-b')}
          >
            <Text style={styles.sectionTitle}>Line B: Perform Safety-Related Functions</Text>
            <Text style={styles.sectionCount}>1</Text>
            <IconSymbol 
              name={expandedItem === 'line-b' ? 'chevron.up' : 'chevron.down'}
              size={20}
              color="#2C2C2C"
            />
          </TouchableOpacity>
          
          {expandedItem === 'line-b' && (
            <View style={styles.expandedSection}>
              <TouchableOpacity 
                style={styles.subItem}
                onPress={() => router.push('/resources/series-circuits')}
              >
                <Text style={styles.subItemText}>Describe the operating principles of series circuits</Text>
                <IconSymbol name="chevron.right" size={16} color="#2C2C2C" />
              </TouchableOpacity>
            </View>
          )}
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
    paddingTop: 20,
    paddingBottom: 20,
    width: dimensions.constrainedWidth,
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
    fontFamily: 'Roboto-Bold',
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 20,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    gap: 5,
  },
  filterText: {
    fontSize: 14,
    color: '#2C2C2C',
    fontWeight: '500',
    fontFamily: 'Roboto-Medium',
  },
  resourcesContainer: {
    paddingHorizontal: 20,
    gap: 10,
  },
  sectionHeader: {
    backgroundColor: '#2C2C2C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
    fontFamily: 'Roboto-Bold',
  },
  sectionCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginRight: 10,
    fontFamily: 'Roboto-Bold',
  },
  expandedSection: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  subItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  subItemText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2C2C2C',
    flex: 1,
    fontFamily: 'Roboto-Medium',
  },
});