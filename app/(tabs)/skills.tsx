import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/colors';
import { BorderRadius, IconSize, Shadow, Spacing } from '@/constants/design-tokens';
import { Typography } from '@/constants/typography';
import { CommonStyles } from '@/lib/common-styles';
import dimensions from '@/lib/dimensions';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [completionFilter, setCompletionFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  
  const hasFilterChanged = completionFilter !== 'All' || typeFilter !== 'All';

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
            <Image source={require('@/assets/images/icon-search.png')} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor={Colors.text.disabled}
            />
          </View>
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => setIsFilterModalVisible(true)}
          >
            <Image source={require('@/assets/images/icon-filter.png')} style={styles.filterIcon} />
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
                          ? require('@/assets/images/icon-check.png')
                          : require('@/assets/images/icon-checkbox-empty.png')
                        } 
                        style={styles.checkbox} 
                      />
                      <Text style={[
                        styles.skillItemText,
                        completedItems[item] && styles.skillItemTextCompleted
                      ]}>
                        {item}
                      </Text>
                      <IconSymbol name="chevron.right" size={20} color={Colors.text.primary} />
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Filter Modal */}
      <Modal
        visible={isFilterModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsFilterModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity 
            style={styles.modalBackground}
            activeOpacity={1}
            onPress={() => setIsFilterModalVisible(false)}
          />
          <View style={styles.filterModal}>
            <View style={styles.modalHandle} />
            
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.modalTitle}>Filters</Text>

              {/* Line module */}
              <View style={styles.filterSection}>
                <Text style={styles.filterLabel}>Line module</Text>
                <TouchableOpacity style={styles.dropdown}>
                  <Text style={styles.dropdownText}>Level</Text>
                  <Image 
                    source={require('@/assets/images/icon-chevron-down.png')} 
                    style={styles.dropdownIcon}
                  />
                </TouchableOpacity>
              </View>

              {/* Competency Completion */}
              <View style={styles.filterSection}>
                <Text style={styles.filterLabel}>Competency Completion</Text>
                <View style={styles.buttonGroup}>
                  {['All', 'Completed', 'Incomplete'].map((option) => (
                    <TouchableOpacity
                      key={option}
                      style={[
                        styles.filterOptionButton,
                        completionFilter === option && styles.filterOptionButtonActive
                      ]}
                      onPress={() => setCompletionFilter(option)}
                    >
                      <Text style={[
                        styles.filterOptionText,
                        completionFilter === option && styles.filterOptionTextActive
                      ]}>
                        {option}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Competency Type */}
              <View style={styles.filterSection}>
                <Text style={styles.filterLabel}>Competency Type</Text>
                <View style={styles.buttonGroup}>
                  {['All', 'Theory', 'Practical'].map((option) => (
                    <TouchableOpacity
                      key={option}
                      style={[
                        styles.filterOptionButton,
                        typeFilter === option && styles.filterOptionButtonActive
                      ]}
                      onPress={() => setTypeFilter(option)}
                    >
                      <Text style={[
                        styles.filterOptionText,
                        typeFilter === option && styles.filterOptionTextActive
                      ]}>
                        {option}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Action Buttons */}
              <View style={styles.modalActions}>
                <TouchableOpacity 
                  style={styles.resetButton}
                  onPress={() => {
                    setCompletionFilter('All');
                  setTypeFilter('All');
                }}
              >
                <Text style={[
                  styles.resetButtonText,
                  hasFilterChanged && styles.resetButtonTextActive
                ]}>Reset Filters</Text>
              </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.applyButton}
                  onPress={() => setIsFilterModalVisible(false)}
                >
                  <Text style={styles.applyButtonText}>Apply Filters</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.base,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    gap: Spacing.md,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grey[200],
    borderRadius: BorderRadius.base,
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.md,
    gap: Spacing.sm,
    ...Shadow.base,
  },
  searchInput: {
    ...Typography.bodyLarge,
    flex: 1,
    color: Colors.text.primary,
  },
  filterButton: {
    width: IconSize['2xl'],
    height: IconSize['2xl'],
    backgroundColor: Colors.grey[200],
    borderRadius: BorderRadius.base,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadow.base,
  },
  levelTabsWrapper: {
    backgroundColor: Colors.white,
    marginHorizontal: Spacing.lg,
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    ...Shadow.base,
  },
  levelTabsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.sm,
  },
  levelTab: {
    flex: 1,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.lg,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  levelTabActive: {
    backgroundColor: 'transparent',
  },
  levelTabText: {
    ...Typography.bodyBase,
    color: Colors.grey[400],
    textAlign: 'center',
  },
  levelTabTextActive: {
    ...Typography.bodyBase,
    color: Colors.text.primary,
    fontWeight: '600',
  },
  sectionsContainer: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: 100,
    gap: Spacing.md,
  },
  sectionWrapper: {
    backgroundColor: Colors.dark,
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Spacing.lg,
  },
  sectionTitle: {
    ...Typography.bodyLarge,
    flex: 1,
    fontWeight: '700',
    color: Colors.white,
    fontFamily: 'Roboto-Bold',
  },
  sectionCount: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionCountText: {
    ...Typography.bodyBase,
    fontWeight: '700',
    color: Colors.dark,
    fontFamily: 'Roboto-Bold',
  },
  sectionItems: {
    backgroundColor: Colors.grey[50],
    gap: 1,
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.base,
    backgroundColor: Colors.white,
    gap: Spacing.md,
  },
  checkbox: {
    width: IconSize.sm,
    height: IconSize.sm,
  },
  searchIcon: {
    width: IconSize.sm,
    height: IconSize.sm,
    tintColor: Colors.text.disabled,
  },
  filterIcon: {
    width: IconSize.sm,
    height: IconSize.sm,
    tintColor: Colors.text.primary,
  },
  skillItemText: {
    ...Typography.body,
    flex: 1,
    color: Colors.text.primary,
  },
  skillItemTextCompleted: {
    color: Colors.text.disabled,
    fontStyle: 'italic',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.background.overlay,
  },
  filterModal: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: BorderRadius.lg,
    borderTopRightRadius: BorderRadius.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing['3xl'],
    maxHeight: '80%',
    width: dimensions.constrainedWidth,
    alignSelf: 'center',
  },
  modalHandle: {
    width: 130,
    height: 4,
    backgroundColor: Colors.grey[300],
    borderRadius: BorderRadius.xs,
    alignSelf: 'center',
    marginBottom: Spacing.lg,
  },
  modalTitle: {
    ...Typography.pageTitleRegular,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: Spacing.xl,
    marginHorizontal: Spacing.lg,
    fontFamily: 'Roboto-Bold',
  },
  filterSection: {
    marginBottom: Spacing.xl,
    marginHorizontal: Spacing.lg,
  },
  filterLabel: {
    ...Typography.bodyBase,
    color: Colors.black,
    marginBottom: Spacing.md,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.grey[50],
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.base,
  },
  dropdownText: {
    ...Typography.bodyLarge,
    color: Colors.text.secondary,
  },
  dropdownIcon: {
    width: IconSize.base,
    height: IconSize.base,
    tintColor: Colors.text.secondary,
  },
  buttonGroup: {
    flexDirection: 'row',
    backgroundColor: Colors.grey[50],
    borderRadius: BorderRadius.base,
    padding: Spacing.xs,
    gap: Spacing.xs,
  },
  filterOptionButton: {
    flex: 1,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.sm,
    alignItems: 'center',
  },
  filterOptionButtonActive: {
    backgroundColor: Colors.grey[700],
  },
  filterOptionText: {
    ...Typography.bodyBase,
    color: Colors.text.secondary,
  },
  filterOptionTextActive: {
    ...Typography.bodyBase,
    color: Colors.white,
    fontWeight: '600',
  },
  modalActions: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.sm,
    marginHorizontal: Spacing.lg,
  },
  resetButton: {
    flex: 1,
    paddingVertical: Spacing.base,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
    backgroundColor: Colors.grey[50],
  },
  resetButtonText: {
    ...Typography.bodyLarge,
    color: Colors.text.secondary,
  },
  resetButtonTextActive: {
    color: Colors.primary,
  },
  applyButton: {
    flex: 1,
    paddingVertical: Spacing.base,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
    backgroundColor: Colors.grey[50],
  },
  applyButtonText: {
    ...Typography.bodyLarge,
    color: Colors.black,
  },
});
