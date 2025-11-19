import { Image } from 'expo-image';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PaystubListScreen() {
  const insets = useSafeAreaInsets();
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedYear, setSelectedYear] = useState('2025');

  const paystubs = [
    {
      month: 'December, 2024',
      company: 'Burquos Inc.',
      receivedDate: 'Jan 06, 2025',
      workHours: 291,
      income: '$3,789',
    },
    {
      month: 'January, 2025',
      company: 'Burquos Inc.',
      receivedDate: 'Feb 12, 2025',
      workHours: 291,
      income: '$3,789',
    },
    {
      month: 'February, 2025',
      company: 'Burquos Inc.',
      receivedDate: 'Mar 28, 2025',
      workHours: 175,
      income: '$2,852',
    },
    {
      month: 'March, 2025',
      company: 'Burquos Inc.',
      receivedDate: 'Apr 31, 2025',
      workHours: 220,
      income: '$3,450',
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: '#F5F5F5' }]}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Image 
            source={require('@/assets/images/chevron_right.png')}
            style={[styles.backIcon, { transform: [{ rotate: '180deg' }] }]}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Paystub Records</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Image 
            source={require('@/assets/images/document_scanner.png')}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Month/Year Selectors */}
      <View style={styles.filtersContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>{selectedMonth}</Text>
          <Image 
            source={require('@/assets/images/expand_more_down.png')}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>{selectedYear}</Text>
          <Image 
            source={require('@/assets/images/expand_more_down.png')}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Paystub List */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {paystubs.map((paystub, index) => (
          <View key={index} style={styles.paystubCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.monthText}>{paystub.month}</Text>
              <Text style={styles.receivedText}>Received on: {paystub.receivedDate}</Text>
            </View>
            <Text style={styles.companyText}>By {paystub.company}</Text>
            
            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <View style={styles.statHeader}>
                  <Image 
                    source={require('@/assets/images/schedule.png')}
                    style={styles.statIcon}
                  />
                  <Text style={styles.statLabel}>Work Hours</Text>
                </View>
                <View style={styles.statValueRow}>
                  <Text style={styles.statValue}>{paystub.workHours}</Text>
                  <Text style={styles.statUnit}>hrs</Text>
                </View>
              </View>

              <View style={styles.statBox}>
                <View style={styles.statHeader}>
                  <Image 
                    source={require('@/assets/images/account_balance_wallet.png')}
                    style={styles.statIcon}
                  />
                  <Text style={styles.statLabel}>Income</Text>
                </View>
                <Text style={styles.statValue}>{paystub.income}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#F5F5F5',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: '#2C2C2C',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C2C2C',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  headerIcon: {
    width: 20,
    height: 20,
    tintColor: '#2C2C2C',
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  filterText: {
    fontSize: 14,
    color: '#2C2C2C',
    fontWeight: '500',
  },
  dropdownIcon: {
    width: 16,
    height: 16,
    tintColor: '#999',
  },
  scrollView: {
    flex: 1,
  },
  paystubCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  monthText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C2C2C',
  },
  receivedText: {
    fontSize: 12,
    color: '#999',
  },
  companyText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 12,
  },
  statIcon: {
    width: 16,
    height: 16,
    tintColor: '#999',
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
  },
  statValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  statUnit: {
    fontSize: 14,
    color: '#2C2C2C',
    fontWeight: '500',
  },
});
