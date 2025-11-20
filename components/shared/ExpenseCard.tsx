import MaterialIcon from '@/components/shared/MaterialIcon';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ExpenseDetail {
  label: string;
  value: string;
}

interface ExpenseCardProps {
  id: number;
  amount: string;
  title: string;
  detailTitle: string;
  details: ExpenseDetail[];
  isExpanded: boolean;
  onToggle: () => void;
}

export const ExpenseCard: React.FC<ExpenseCardProps> = ({
  amount,
  title,
  detailTitle,
  details,
  isExpanded,
  onToggle,
}) => {
  return (
    <View style={styles.expenseCard}>
      <Text style={styles.expenseAmount}>{amount}</Text>
      <View style={styles.expenseHeader}>
        <Text style={styles.expenseTitle}>Tuition</Text>
        <TouchableOpacity 
          style={styles.viewDetailButton}
          onPress={onToggle}
        >
          <Text style={styles.viewDetailText}>View detail</Text>
          <MaterialIcon 
            name={isExpanded ? 'expand_more_up' : 'expand_more_down'}
            size={16}
            color={Colors.grey[500]}
          />
        </TouchableOpacity>
      </View>
      
      {isExpanded && (
        <View style={styles.expenseDetails}>
          <Text style={styles.expenseDetailTitle}>{detailTitle}</Text>
          
          {details.map((detail, index) => (
            <View key={index} style={styles.expenseDetailRow}>
              <Text style={styles.expenseDetailLabel}>{detail.label}</Text>
              <Text style={styles.expenseDetailValue}>{detail.value}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  expenseCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 24,
    marginBottom: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  expenseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  expenseAmount: {
    ...Typography.contentRegular,
    color: Colors.black,
    marginBottom: 8,
  },
  viewDetailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewDetailText: {
    ...Typography.smBody,
    color: Colors.grey[500],
  },
  expenseTitle: {
    ...Typography.buttonText,
    color: Colors.grey[900],
  },
  expenseDetails: {
    marginTop: 16,
  },
  expenseDetailTitle: {
    ...Typography.buttonText,
    color: Colors.grey[900],
    marginBottom: 12,
  },
  expenseDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  expenseDetailLabel: {
    ...Typography.smBody,
    color: Colors.grey[900],
  },
  expenseDetailValue: {
    ...Typography.smBody,
    color: Colors.grey[900],
  },
});

