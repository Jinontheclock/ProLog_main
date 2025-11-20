import MaterialIcon from '@/components/shared/MaterialIcon';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HourItem {
  title: string;
  hours: string;
  unit: string;
  lastUpdated: string;
}

interface HourDiscrepancyProps {
  items: HourItem[];
  discrepancy: string;
  onReportError?: () => void;
}

export const HourDiscrepancy: React.FC<HourDiscrepancyProps> = ({
  items,
  discrepancy,
  onReportError,
}) => {
  const isNegative = Number(discrepancy) < 0;

  // Sort items: SkilledTradedBC first, Paystub second
  const sortedItems = [...items].sort((a, b) => {
    if (a.title === 'SkilledTradedBC') return -1;
    if (b.title === 'SkilledTradedBC') return 1;
    if (a.title === 'Paystub') return 1;
    if (b.title === 'Paystub') return -1;
    return 0;
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Left column with 2 cards */}
        <View style={styles.leftColumn}>
          {sortedItems.map((item, index) => (
            <React.Fragment key={index}>
              <View style={[styles.card, styles.shadow]}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View style={styles.valueRow}>
                  <Text style={styles.value}>{item.hours}</Text>
                  <Text style={styles.unit}> {item.unit}</Text>
                </View>
                <Text style={styles.lastUpdated}>Last updated: {item.lastUpdated}</Text>
              </View>
              {index < sortedItems.length - 1 && <View style={styles.spacer} />}
            </React.Fragment>
          ))}
        </View>

        {/* Right discrepancy card - positioned absolutely to overlap */}
        <View style={[styles.discrepancyCard, styles.shadow]}>
          <View style={styles.discrepancyHeader}>
            <MaterialIcon
              name="warning_amber"
              size={18}
              color="#D92D20"
            />
            <Text style={styles.discrepancyLabel}>Discrepancy</Text>
          </View>
          
          <View style={styles.valueRow}>
            <Text style={[styles.value, isNegative && styles.negativeValue]}>{discrepancy}</Text>
            <Text style={styles.unit}> days</Text>
          </View>
          
          <TouchableOpacity style={styles.reportButton} onPress={onReportError} activeOpacity={0.8}>
            <Text style={styles.reportButtonText} numberOfLines={1}>Report Error</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const RADIUS = 18;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 24,
    marginHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  leftColumn: {
    width: '100%',
  },
  spacer: {
    height: 14,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: RADIUS,
    padding: 18,
  },
  cardTitle: {
    ...Typography.contentTitle,
    color: Colors.grey[300],
    marginBottom: 6,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  value: {
    ...Typography.contentBold,
    color: Colors.grey[900],
    lineHeight: 24,
  },
  unit: {
    ...Typography.contentSuffix,
    color: Colors.grey[900],
    marginLeft: 6,
    marginBottom: 4,
  },
  lastUpdated: {
    ...Typography.smBody,
    color: Colors.grey[500],
    marginTop: 8,
  },
  discrepancyCard: {
    backgroundColor: 'white',
    borderRadius: RADIUS,
    padding: 18,
    width: 160,
    position: 'absolute',
    right: 0,
    top: '50%',
    marginTop: -75,
    zIndex: 2,
    borderColor: Colors.backgroundGrey,
    borderWidth: 12,
    borderRightWidth: 0,
  },
  discrepancyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  warningIcon: {
    width: 18,
    height: 18,
    tintColor: '#D92D20',
  },
  discrepancyLabel: {
    ...Typography.contentTitle,
    color: Colors.grey[300],
    fontWeight: undefined,
    fontSize: undefined,
  },
  negativeValue: {
    color: '#111827',
  },
  reportButton: {
    marginTop: 12,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: Colors.white,
    flexWrap: 'nowrap',
  },
  reportButtonText: {
    ...Typography.buttonText,
    color: Colors.grey[900],
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.12,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
      default: {},
    }),
  },
});
