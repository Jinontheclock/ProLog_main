import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface PaystubCardProps {
  month: string;
  company: string;
  receivedDate: string;
  workHours: number;
  income: string;
}

export const PaystubCard: React.FC<PaystubCardProps> = ({
  month,
  company,
  receivedDate,
  workHours,
  income,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.month}>{month}</Text>
          <Text style={styles.company}>By {company}</Text>
        </View>
        <Text style={styles.receivedDate}>Received on: {receivedDate}</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <View style={styles.statHeader}>
            <Image
              source={require('@/assets/images/schedule.png')}
              style={styles.icon}
            />
            <Text style={styles.statLabel}>Work Hours</Text>
          </View>
          <Text style={styles.statValue}>{workHours} hrs</Text>
        </View>

        <View style={styles.statBox}>
          <View style={styles.statHeader}>
            <Image
              source={require('@/assets/images/account_balance_wallet.png')}
              style={styles.icon}
            />
            <Text style={styles.statLabel}>Income</Text>
          </View>
          <Text style={styles.statValue}>{income}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  month: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  company: {
    fontSize: 12,
    color: '#999',
  },
  receivedDate: {
    fontSize: 11,
    color: '#999',
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
  icon: {
    width: 16,
    height: 16,
    tintColor: '#999',
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C2C2C',
  },
});
