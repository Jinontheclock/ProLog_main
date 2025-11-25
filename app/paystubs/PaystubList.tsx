import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MaterialIcon from '@/components/shared/MaterialIcon';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';

export default function PaystubListScreen() {
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width;
  const maxAppWidth = 428;
  const appWidth = Math.min(screenWidth, maxAppWidth);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const years = ['2024', '2025'];

  const allPaystubs = [
    {
      month: 'May',
      year: '2025',
      company: 'Burquos Inc.',
      receivedDate: 'June 7, 2025',
      workHours: 162,
      income: '$1,134',
    },
    {
      month: 'April',
      year: '2025',
      company: 'Burquos Inc.',
      receivedDate: 'May 22, 2025',
      workHours: 82,
      income: '$2,258',
    },
    {
      month: 'March',
      year: '2025',
      company: 'Burquos Inc.',
      receivedDate: 'Apr 31, 2025',
      workHours: 312,
      income: '$4,512',
    },
    {
      month: 'February',
      year: '2025',
      company: 'Burquos Inc.',
      receivedDate: 'Mar 28, 2025',
      workHours: 175,
      income: '$2,852',
    },
    {
      month: 'January',
      year: '2025',
      company: 'Burquos Inc.',
      receivedDate: 'Feb 12, 2025',
      workHours: 291,
      income: '$3,789',
    },
    {
      month: 'December',
      year: '2024',
      company: 'Burquos Inc.',
      receivedDate: 'Jan 06, 2025',
      workHours: 291,
      income: '$3,789',
    },
  ];

  const filteredPaystubs = allPaystubs.filter(paystub => {
    if (selectedMonth && paystub.month !== selectedMonth) return false;
    if (selectedYear && paystub.year !== selectedYear) return false;
    return true;
  });

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.container, { backgroundColor: '#F0F0F0' }]}>
        <View style={[styles.contentWrapper, { width: appWidth, alignSelf: 'center' }]}>
          <Image 
            source={require('@/assets/images/background-grid 1.svg')}
            style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.15 }}
            resizeMode="cover"
          />
          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={{ paddingBottom: 70 + insets.bottom + 20 }}
            showsVerticalScrollIndicator={false}
          >
        {/* Header */}
        <View style={[styles.header, { paddingTop: insets.top + 47 }]}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.push('/(tabs)/Work')}>
            <MaterialIcon name="icon-arrow-back" size={24} color={Colors.grey[900]} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Paystub Records</Text>
          <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/paystubs/DocumentScanner')}>
            <MaterialIcon name="document_scanner" size={24} color={Colors.grey[900]} />
          </TouchableOpacity>
        </View>

        {/* Month/Year Selectors */}
        <View style={styles.filtersContainer}>
          <View>
            <TouchableOpacity 
              style={styles.monthButton} 
              onPress={() => setShowMonthDropdown(!showMonthDropdown)}
            >
              <Text style={styles.filterText}>{selectedMonth || 'Month'}</Text>
              <MaterialIcon name="icon-dropdown-arrow" size={16} color={Colors.grey[500]} />
            </TouchableOpacity>
            {showMonthDropdown && (
              <View style={styles.dropdown}>
                <TouchableOpacity 
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedMonth(null);
                    setShowMonthDropdown(false);
                  }}
                >
                  <Text style={styles.dropdownText}>All</Text>
                </TouchableOpacity>
                {months.map((month) => (
                  <TouchableOpacity
                    key={month}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSelectedMonth(month);
                      setShowMonthDropdown(false);
                    }}
                  >
                    <Text style={styles.dropdownText}>{month}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
          
          <View>
            <TouchableOpacity 
              style={styles.yearButton}
              onPress={() => setShowYearDropdown(!showYearDropdown)}
            >
              <Text style={styles.filterText}>{selectedYear || 'Year'}</Text>
              <MaterialIcon name="icon-dropdown-arrow" size={16} color={Colors.grey[500]} />
            </TouchableOpacity>
            {showYearDropdown && (
              <View style={styles.dropdown}>
                <TouchableOpacity 
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedYear(null);
                    setShowYearDropdown(false);
                  }}
                >
                  <Text style={styles.dropdownText}>All</Text>
                </TouchableOpacity>
                {years.map((year) => (
                  <TouchableOpacity
                    key={year}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSelectedYear(year);
                      setShowYearDropdown(false);
                    }}
                  >
                    <Text style={styles.dropdownText}>{year}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        {/* Paystub List */}
        {filteredPaystubs.map((paystub, index) => (
          <View key={index} style={styles.paystubCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.monthText}>{paystub.month}, {paystub.year}</Text>
              <Text style={styles.receivedText}>Received on: {paystub.receivedDate}</Text>
            </View>
            <Text style={styles.companyText}>By {paystub.company}</Text>
            
            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <View style={styles.statHeader}>
                  <MaterialIcon name="schedule" size={16} color={Colors.grey[400]} />
                  <Text style={styles.statLabel}>Work Hours</Text>
                </View>
                <View style={styles.statValueRow}>
                  <Text style={styles.statValue}>{paystub.workHours}</Text>
                  <Text style={styles.statUnit}>hrs</Text>
                </View>
              </View>

              <View style={styles.statBox}>
                <View style={styles.statHeader}>
                  <MaterialIcon name="account_balance_wallet" size={16} color={Colors.grey[400]} />
                  <Text style={styles.statLabel}>Income</Text>
                </View>
                <Text style={styles.statValue}>{paystub.income}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    position: 'relative',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.grey[200],
  },
  headerTitle: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 20,
    color: Colors.grey[700],
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.grey[200],
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    paddingHorizontal: 24,
    marginBottom: 24,
    position: 'relative',
    zIndex: 1000,
  },
  monthButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
    gap: 4,
    borderWidth: 1,
    borderColor: Colors.grey[200],
    width: 120,
    height: 30,
    justifyContent: 'space-between',
  },
  yearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
    gap: 4,
    borderWidth: 1,
    borderColor: Colors.grey[200],
    width: 100,
    height: 30,
    justifyContent: 'space-between',
  },
  filterText: {
    ...Typography.smBody,
    color: Colors.grey[500],
  },
  dropdown: {
    position: 'absolute',
    top: 35,
    left: 0,
    right: 0,
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.grey[200],
    maxHeight: 200,
    zIndex: 1001,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey[100],
  },
  dropdownText: {
    ...Typography.smBody,
    color: Colors.grey[700],
  },
  paystubCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    marginHorizontal: 24,
    width: 353,
    height: 193,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Colors.grey[200],
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  monthText: {
    ...Typography.contentMedium,
    color: Colors.grey[900],
  },
  companyText: {
    ...Typography.smBody,
    color: Colors.grey[400],
    marginBottom: 16,
  },
  receivedText: {
    ...Typography.smBody,
    color: Colors.grey[400],
  },
  statsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  statBox: {
    flex: 1,
    backgroundColor: Colors.grey[50],
    borderRadius: 12,
    padding: 12,
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
  statLabel: {
    ...Typography.smBody,
    color: Colors.grey[400],
  },
  statValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 2,
  },
  statValue: {
    ...Typography.contentBold,
    color: Colors.grey[900],
  },
  statUnit: {
    ...Typography.contentSuffix,
    color: Colors.grey[900],
  },
});
