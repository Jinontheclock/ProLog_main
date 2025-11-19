import { Image } from 'expo-image';
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

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Left column with 2 cards */}
        <View style={styles.leftColumn}>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <View style={[styles.card, styles.shadow]}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View style={styles.valueRow}>
                  <Text style={styles.value}>{item.hours}</Text>
                  <Text style={styles.unit}> {item.unit}</Text>
                </View>
                <Text style={styles.lastUpdated}>Last updated: {item.lastUpdated}</Text>
              </View>
              {index < items.length - 1 && <View style={styles.spacer} />}
            </React.Fragment>
          ))}
        </View>

        {/* Right discrepancy card - positioned absolutely to overlap */}
        <View style={[styles.discrepancyCard, styles.shadow]}>
          <View style={styles.discrepancyHeader}>
            <Image 
              source={require('@/assets/images/warning_amber.png')}
              style={styles.warningIcon}
            />
            <Text style={styles.discrepancyLabel}>Discrepancy</Text>
          </View>
          
          <View style={styles.valueRow}>
            <Text style={[styles.value, isNegative && styles.negativeValue]}>{discrepancy}</Text>
            <Text style={styles.unit}> days</Text>
          </View>
          
          <TouchableOpacity style={styles.reportButton} onPress={onReportError} activeOpacity={0.8}>
            <Image 
              source={require('@/assets/images/ios_share.png')}
              style={styles.shareIcon}
            />
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
    color: '#6B7280',
    fontWeight: '600',
    marginBottom: 6,
    fontSize: 14,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  value: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    lineHeight: 24,
  },
  unit: {
    fontSize: 16,
    color: '#6B7280',
    marginLeft: 6,
    marginBottom: 4,
    fontWeight: '600',
  },
  lastUpdated: {
    marginTop: 8,
    color: '#9CA3AF',
    fontSize: 12,
    fontWeight: '500',
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
    color: '#6B7280',
    fontWeight: '700',
    fontSize: 14,
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
    backgroundColor: '#F9FAFB',
    flexWrap: 'nowrap',
  },
  shareIcon: {
    width: 16,
    height: 16,
    tintColor: '#111827',
  },
  reportButtonText: {
    fontWeight: '700',
    color: '#111827',
    fontSize: 14,
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
