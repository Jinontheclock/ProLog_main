import { Image } from 'expo-image';
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
      <View style={styles.expenseHeader}>
        <Text style={styles.expenseAmount}>{amount}</Text>
        <TouchableOpacity 
          style={styles.viewDetailButton}
          onPress={onToggle}
        >
          <Text style={styles.viewDetailText}>View detail</Text>
          <Image 
            source={isExpanded
              ? require('@/assets/images/expand_more_up.png')
              : require('@/assets/images/expand_more_down.png')
            }
            style={styles.expandIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.expenseTitle}>{title}</Text>
      
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
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  expenseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  expenseAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  viewDetailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewDetailText: {
    fontSize: 12,
    color: '#999',
  },
  expandIcon: {
    width: 16,
    height: 16,
    tintColor: '#999',
  },
  expenseTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2C2C2C',
  },
  expenseDetails: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  expenseDetailTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 12,
  },
  expenseDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  expenseDetailLabel: {
    fontSize: 14,
    color: '#666',
  },
  expenseDetailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2C2C2C',
  },
});
