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
            <IconSymbol name="chevron.left" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>Study Resources</Text>
        </View>

        {/* Filter Buttons */}
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Level</Text>
            <IconSymbol name="chevron.down" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Line</Text>
            <IconSymbol name="chevron.down" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Theory/Practical</Text>
            <IconSymbol name="chevron.down" size={16} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Resources List */}
        <View style={styles.resourcesContainer}>
          {/* Highlighted Resource */}
          <View style={styles.highlightedCard}>
            <Text style={styles.highlightedTitle}>Line A: Apply Circuit Concepts</Text>
            <Text style={styles.highlightedNumber}>16</Text>
          </View>

          {/* Expandable Resource Items */}
          <TouchableOpacity 
            style={styles.resourceItem}
            onPress={() => setExpandedItem(expandedItem === 'alternating-current' ? null : 'alternating-current')}
          >
            <Text style={styles.resourceTitle}>Describe the principles of alternating current</Text>
            <IconSymbol 
              name={expandedItem === 'alternating-current' ? 'chevron.up' : 'chevron.down'} 
              size={20} 
              color="#333" 
            />
          </TouchableOpacity>
          
          {expandedItem === 'alternating-current' && (
            <View style={styles.expandedContent}>
              <Text style={styles.summaryTitle}>Summary</Text>
              <Text style={styles.summaryText}>
                Alternating current (AC) is an electric current which periodically reverses direction and changes its magnitude continuously with time, in contrast to direct current (DC), which flows only in one direction.
              </Text>
              <TouchableOpacity 
                style={styles.generateButton}
                onPress={() => router.push('/resources/generate-guide')}
              >
                <IconSymbol name="doc.text" size={20} color="white" />
                <Text style={styles.generateButtonText}>Generate Study Guide</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity 
            style={styles.resourceItem}
            onPress={() => setExpandedItem(expandedItem === 'series-circuits' ? null : 'series-circuits')}
          >
            <Text style={styles.resourceTitle}>Describe the operating principles of series circuits</Text>
            <IconSymbol 
              name={expandedItem === 'series-circuits' ? 'chevron.up' : 'chevron.down'} 
              size={20} 
              color="#333" 
            />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.resourceItem}
            onPress={() => setExpandedItem(expandedItem === 'analyze-series' ? null : 'analyze-series')}
          >
            <Text style={styles.resourceTitle}>Analyze series circuits</Text>
            <IconSymbol 
              name={expandedItem === 'analyze-series' ? 'chevron.up' : 'chevron.down'} 
              size={20} 
              color="#333" 
            />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.resourceItem}
            onPress={() => setExpandedItem(expandedItem === 'parallel-circuits' ? null : 'parallel-circuits')}
          >
            <Text style={styles.resourceTitle}>Describe the operating principles of parallel circuits</Text>
            <IconSymbol 
              name={expandedItem === 'parallel-circuits' ? 'chevron.up' : 'chevron.down'} 
              size={20} 
              color="#333" 
            />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.resourceItem}
            onPress={() => setExpandedItem(expandedItem === 'analyze-parallel' ? null : 'analyze-parallel')}
          >
            <Text style={styles.resourceTitle}>Analyze parallel circuits</Text>
            <IconSymbol 
              name={expandedItem === 'analyze-parallel' ? 'chevron.up' : 'chevron.down'} 
              size={20} 
              color="#333" 
            />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.resourceItem}
            onPress={() => setExpandedItem(expandedItem === 'combination-circuits' ? null : 'combination-circuits')}
          >
            <Text style={styles.resourceTitle}>Describe the operating principles of combination circuits</Text>
            <IconSymbol 
              name={expandedItem === 'combination-circuits' ? 'chevron.up' : 'chevron.down'} 
              size={20} 
              color="#333" 
            />
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
  },
  resourcesContainer: {
    paddingHorizontal: 20,
    gap: 10,
  },
  highlightedCard: {
    backgroundColor: '#2C2C2C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  highlightedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    flex: 1,
  },
  highlightedNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  resourceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    flex: 1,
    marginRight: 10,
  },
  expandedContent: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#E0E0E0',
    marginBottom: 10,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 20,
  },
  generateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2C2C2C',
    borderRadius: 8,
    paddingVertical: 12,
    gap: 8,
  },
  generateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});