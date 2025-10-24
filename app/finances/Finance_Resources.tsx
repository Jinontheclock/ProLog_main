import CustomTabBar from '@/components/custom-tab-bar';
import { CommonStyles } from '@/lib/common-styles';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type FilterCategory = 'All' | 'Financial Support' | 'Loan' | 'Tax Credit' | 'Employment Support';

export default function FinancialResourcesScreen() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('All');
  const [searchText, setSearchText] = useState('');

  const filters: FilterCategory[] = ['All', 'Financial Support', 'Loan', 'Tax Credit', 'Employment Support'];

  return (
    <SafeAreaView style={CommonStyles.container}>
      <ScrollView style={CommonStyles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={CommonStyles.headerCompact}>
          <TouchableOpacity onPress={() => router.back()} style={CommonStyles.backButton}>
            <Image 
              source={require('@/assets/images/icon-back-button.png')}
              style={CommonStyles.backIcon}
            />
          </TouchableOpacity>
          <Text style={CommonStyles.pageTitleRegular}>Financial Resources</Text>
        </View>

        {/* Search Bar */}
        <View style={CommonStyles.searchContainer}>
          <Image 
            source={require('@/assets/images/icon-search.png')}
            style={[CommonStyles.icon20, CommonStyles.iconGray, styles.searchIconMargin]}
          />
          <TextInput
            style={CommonStyles.searchInput}
            placeholder="Search"
            placeholderTextColor="#8E8E93"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Filter Tabs */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filtersScrollView}
          contentContainerStyle={styles.filtersContainer}
        >
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                CommonStyles.filterTab,
                selectedFilter === filter && CommonStyles.filterTabActive
              ]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text style={[
                CommonStyles.filterTabText,
                selectedFilter === filter && CommonStyles.filterTabTextActive
              ]}>
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Content Container */}
        <View style={CommonStyles.contentContainer}>
          {/* Suggested Section */}
          {selectedFilter === 'All' && (
            <>
              <Text style={CommonStyles.sectionTitleGray}>Suggested</Text>
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={styles.suggestedScrollView}
                contentContainerStyle={styles.suggestedRow}
              >
                <TouchableOpacity 
                  style={styles.eligibilityCard}
                  onPress={() => router.push('/finances/Finance_Resources_Quiz')}
                >
                  <View>
                    <Text style={styles.eligibilityCardTitleSmall}>Take</Text>
                    <Text style={styles.eligibilityCardTitle}>Eligibility</Text>
                    <Text style={styles.eligibilityCardTitle}>Quiz</Text>
                  </View>
                  <View style={styles.eligibilityArrowContainer}>
                    <Image 
                      source={require('@/assets/images/icon-arrow-forward.png')}
                      style={styles.eligibilityArrow}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tipsCard}>
                  <View>
                    <Text style={styles.tipsLabel}>Tips</Text>
                    <Text style={styles.tipsTitle}>Strategies to{'\n'}Increase Savings</Text>
                  </View>
                  <View style={styles.tipsArrowContainer}>
                    <Image 
                      source={require('@/assets/images/icon-arrow-forward.png')}
                      style={styles.tipsArrow}
                    />
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </>
          )}

          {/* Financial Support Section */}
          {(selectedFilter === 'All' || selectedFilter === 'Financial Support') && (
            <>
              <Text style={CommonStyles.sectionTitleGray}>Financial Support</Text>
              <View style={styles.cardsGrid}>
            <View style={styles.resourceCard}>
              <Text style={styles.cardTitle}>WorkBC{'\n'}Apprentice{'\n'}Services</Text>
              <Text style={styles.cardDescription}>
                Financial support for travel, childcare and relocation
              </Text>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>Read more</Text>
                <Image 
                  source={require('@/assets/images/icon-arrow-right.png')}
                  style={styles.readMoreArrow}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.resourceCard}>
              <Text style={styles.cardTitle}>Provincial{'\n'}Tuition Waiver{'\n'}Program</Text>
              <Text style={styles.cardDescription}>
                Covers tuition and fees for dependents during training
              </Text>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>Read more</Text>
                <Image 
                  source={require('@/assets/images/icon-arrow-right.png')}
                  style={styles.readMoreArrow}
                />
              </TouchableOpacity>
            </View>
              </View>
            </>
          )}

          {/* Loan Section */}
          {(selectedFilter === 'All' || selectedFilter === 'Loan') && (
            <>
              <Text style={CommonStyles.sectionTitleGray}>Loan</Text>
              <View style={styles.cardsGrid}>
            <TouchableOpacity 
              style={styles.resourceCard}
              onPress={() => router.push('/finances/canada-apprentice-loan')}
            >
              <Text style={styles.cardTitle}>Canada{'\n'}Apprentice{'\n'}Loan</Text>
              <Text style={styles.cardDescription}>
                Interest-free loans for each period of technical training
              </Text>
              <View style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>Read more</Text>
                <Image 
                  source={require('@/assets/images/icon-arrow-right.png')}
                  style={styles.readMoreArrow}
                />
              </View>
            </TouchableOpacity>
              </View>
            </>
          )}

          {/* Tax Credit Section */}
          {(selectedFilter === 'All' || selectedFilter === 'Tax Credit') && (
            <>
              <Text style={CommonStyles.sectionTitleGray}>Tax Credit</Text>
              <View style={styles.cardsGrid}>
            <View style={styles.resourceCard}>
              <Text style={styles.cardTitle}>B.C. Training{'\n'}Tax Credit for{'\n'}Apprentices</Text>
              <Text style={styles.cardDescription}>
                Provides refundable income tax credits for apprentices
              </Text>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>Read more</Text>
                <Image 
                  source={require('@/assets/images/icon-arrow-right.png')}
                  style={styles.readMoreArrow}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.resourceCard}>
              <Text style={styles.cardTitle}>Canada{'\n'}Training{'\n'}Credit</Text>
              <Text style={styles.cardDescription}>
                Claim a tax credit for tuition and exam fees
              </Text>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>Read more</Text>
                <Image 
                  source={require('@/assets/images/icon-arrow-right.png')}
                  style={styles.readMoreArrow}
                />
              </TouchableOpacity>
            </View>
              </View>
            </>
          )}

          {/* Employment Support Section */}
          {(selectedFilter === 'All' || selectedFilter === 'Employment Support') && (
            <Text style={styles.sectionTitle}>Employment Support</Text>
          )}
        </View>
      </ScrollView>
      
      {/* Tab Navigation */}
      <CustomTabBar activeTab="finances" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchIconMargin: {
    marginRight: 8,
  },
  filtersScrollView: {
    marginBottom: 20,
  },
  filtersContainer: {
    paddingHorizontal: 20,
    gap: 8,
  },
  suggestedScrollView: {
    marginBottom: 24,
    marginHorizontal: -20,
  },
  suggestedRow: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
  },
  eligibilityCard: {
    width: 200,
    height: 100,
    backgroundColor: '#2C2C2C',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eligibilityCardTitleSmall: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    lineHeight: 24,
  },
  eligibilityCardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: 'Roboto-Medium',
    lineHeight: 24,
  },
  eligibilityArrowContainer: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  eligibilityArrow: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
  },
  tipsCard: {
    width: 200,
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tipsLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: '#8E8E93',
    fontFamily: 'Roboto',
    marginBottom: 8,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    fontFamily: 'Roboto-Medium',
    lineHeight: 22,
  },
  tipsArrowContainer: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  tipsArrow: {
    width: 20,
    height: 20,
    tintColor: '#2C2C2C',
  },
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  resourceCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    minHeight: 230,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    fontFamily: 'Roboto-Medium',
    marginBottom: 12,
    lineHeight: 22,
  },
  cardDescription: {
    fontSize: 13,
    fontWeight: '400',
    color: '#8E8E93',
    fontFamily: 'Roboto',
    lineHeight: 18,
    marginBottom: 12,
    flex: 1,
  },
  readMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  readMoreText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#2C2C2C',
    fontFamily: 'Roboto',
  },
  readMoreArrow: {
    width: 16,
    height: 16,
    tintColor: '#2C2C2C',
  },
});

