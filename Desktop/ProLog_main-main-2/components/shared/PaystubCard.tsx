import MaterialIcon from '@/components/shared/MaterialIcon';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
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
            <MaterialIcon
              name="schedule"
              size={16}
              color="#999"
            />
            <Text style={styles.statLabel}>Work Hours</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Text style={styles.statValue}>{workHours}</Text>
            <Text style={styles.statUnit}> hrs</Text>
          </View>
        </View>

        <View style={styles.statBox}>
          <View style={styles.statHeader}>
            <MaterialIcon
              name="account_balance_wallet"
              size={16}
              color="#999"
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
    ...Typography.contentMedium,
    color: Colors.grey[900],
    marginBottom: 4,
  },
  company: {
    ...Typography.smBody,
    color: Colors.grey[500],
  },
  receivedDate: {
    ...Typography.smBody,
    color: Colors.grey[500],
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
    ...Typography.contentTitle,
    color: Colors.grey[300],
  },
  statValue: {
    ...Typography.contentBold,
    color: Colors.grey[900],
  },
  statUnit: {
    ...Typography.contentSuffix,
    color: Colors.grey[900],
    marginLeft: 2,
  },
});
