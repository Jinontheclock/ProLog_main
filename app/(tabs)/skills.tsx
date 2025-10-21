import { IconSymbol } from '@/components/ui/icon-symbol';
import { CommonStyles } from '@/lib/common-styles';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SkillsScreen() {
  const router = useRouter();
  const [selectedLevel, setSelectedLevel] = useState('Level 1');
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    'Line A: Apply Circuit Concepts': true,
  });
  const [completedItems, setCompletedItems] = useState<{ [key: string]: boolean }>({
    'Analyze series circuits': true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleItem = (item: string) => {
    setCompletedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const levels = ['Level 1', 'Level 2', 'Level 3', 'Level 4'];

  const skillSections = [
    {
      title: 'Line A: Apply Circuit Concepts',
      count: 4,
      items: [
        'Describe the operating principles of parallel circuits',
        'Analyze series circuits',
        'Describe the operating principles of parallel circuits',
        'Analyze parallel circuits',
      ]
    },
    {
      title: 'Line B: Perform Safety-Related Functions',
      count: 2,
      items: [
        'Analyze parallel circuits',
        'Describe the operating principles of parallel circuits',
      ]
    },
  ];

  return (
    <SafeAreaView style={CommonStyles.container}>
      <ScrollView style={CommonStyles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={CommonStyles.mainTitle}>Skills</Text>
        </View>

        {/* Search and Filter */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <Image source={require('@/assets/images/search.png')} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#999999"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Image source={require('@/assets/images/filter_alt.png')} style={styles.filterIcon} />
          </TouchableOpacity>
        </View>

        {/* Level Tabs */}
        <View style={styles.levelTabsWrapper}>
          <View style={styles.levelTabsContent}>
            {levels.map((level) => (
              <TouchableOpacity
                key={level}
                style={[
                  styles.levelTab,
                  selectedLevel === level && styles.levelTabActive
                ]}
                onPress={() => setSelectedLevel(level)}
              >
                <Text style={[
                  styles.levelTabText,
                  selectedLevel === level && styles.levelTabTextActive
                ]}>
                  {level}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Skills Sections */}
        <View style={styles.sectionsContainer}>
          {skillSections.map((section, idx) => (
            <View key={idx} style={styles.sectionWrapper}>
              <TouchableOpacity
                style={styles.sectionHeader}
                onPress={() => toggleSection(section.title)}
              >
                <Text style={styles.sectionTitle}>{section.title}</Text>
                <View style={styles.sectionCount}>
                  <Text style={styles.sectionCountText}>{section.count}</Text>
                </View>
              </TouchableOpacity>

              {expandedSections[section.title] && (
                <View style={styles.sectionItems}>
                  {section.items.map((item, itemIdx) => (
                    <TouchableOpacity
                      key={itemIdx}
                      style={styles.skillItem}
                      onPress={() => router.push('/skills/circuit-concepts')}
                    >
                      <Image 
                        source={completedItems[item] 
                          ? require('@/assets/images/check.png')
                          : require('@/assets/images/check_box_outline_blank.png')
                        } 
                        style={styles.checkbox} 
                      />
                      <Text style={[
                        styles.skillItemText,
                        completedItems[item] && styles.skillItemTextCompleted
                      ]}>
                        {item}
                      </Text>
                      <IconSymbol name="chevron.right" size={20} color="#2C2C2C" />
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 12,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
    shadowColor: '#bebebe',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: -3,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#2C2C2C',
    fontFamily: 'Roboto',
  },
  filterButton: {
    width: 48,
    height: 48,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#bebebe',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: -3,
  },
  levelTabsWrapper: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  levelTabsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  levelTab: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  levelTabActive: {
    backgroundColor: 'transparent',
  },
  levelTabText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#B8B8B8',
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  levelTabTextActive: {
    color: '#2C2C2C',
    fontWeight: '600',
  },
  sectionsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    gap: 12,
  },
  sectionWrapper: {
    backgroundColor: '#2C2C2C',
    borderRadius: 16,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  sectionTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'Roboto-Bold',
  },
  sectionCount: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionCountText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2C2C2C',
    fontFamily: 'Roboto-Bold',
  },
  sectionItems: {
    backgroundColor: '#F2F2F2',
    gap: 1,
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    gap: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#999999',
  },
  filterIcon: {
    width: 20,
    height: 20,
    tintColor: '#2C2C2C',
  },
  skillItemText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '400',
    color: '#2C2C2C',
    fontFamily: 'Roboto',
  },
  skillItemTextCompleted: {
    color: '#999999',
    fontStyle: 'italic',
  },
});
