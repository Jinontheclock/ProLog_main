import MaterialIcon from '@/components/shared/MaterialIcon';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface DataItem {
  label: string;
  value: string;
}

interface DateItem {
  label: string;
  value: string;
}

interface ContentDataFormatsProps {
  mainItems: DataItem[];
  dateItems?: DateItem[];
  onInfoPress?: () => void;
}

export const ContentDataFormats: React.FC<ContentDataFormatsProps> = ({ 
  mainItems, 
  dateItems,
  onInfoPress
}) => {
  // Parse countdown value if it contains 'days'
  const parseCountdown = (value: string) => {
    const match = value.match(/(\d+)\s+(\w+)/);
    if (match) {
      return { number: match[1], unit: match[2] };
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View>
        {mainItems.map((item, index) => {
          const countdown = parseCountdown(item.value);
          return (
            <View key={index} style={index > 0 ? { marginTop: 20 } : undefined}>
              <Text style={styles.label}>{item.label}</Text>
              {countdown ? (
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                  <Text style={styles.countdownNumber}>{countdown.number}</Text>
                  <Text style={styles.countdownUnit}> {countdown.unit}</Text>
                </View>
              ) : (
                <Text style={styles.valueMedium}>{item.value}</Text>
              )}
            </View>
          );
        })}
      </View>
      {dateItems && dateItems.length > 0 && (
        <View style={styles.dateRow}>
          {dateItems.map((item, index) => (
            <View key={index} style={styles.dateBox}>
              <View style={styles.dateLabelRow}>
                <Text style={index === 1 ? styles.dateLabel400 : styles.dateLabel}>{item.label}</Text>
                {index === 1 && (
                  <TouchableOpacity onPress={onInfoPress}>
                    <MaterialIcon name="info" size={16} color={Colors.grey[400]} style={{ marginLeft: 4 }} />
                  </TouchableOpacity>
                )}
              </View>
              <Text style={styles.dateValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    alignSelf: 'center',
    flexDirection: 'column',
    width: 353,
    height: 256,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
      },
      android: {
        elevation: 2,
      },
      default: {},
    }),
  },
  label: {
    ...Typography.contentTitle,
    color: Colors.grey[300],
    marginBottom: 4,
  },
  valueMedium: {
    ...Typography.contentMedium,
    color: Colors.grey[700],
  },
  countdownNumber: {
    ...Typography.contentBold,
    color: Colors.grey[900],
  },
  countdownUnit: {
    ...Typography.contentSuffix,
    color: Colors.grey[900],
  },
  dateRow: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 16,
  },
  dateBox: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    width: 154,
    height: 76,
  },
  dateLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  dateLabel: {
    ...Typography.contentTitle,
    color: Colors.grey[400],
  },
  dateLabel400: {
    ...Typography.contentTitle,
    color: Colors.grey[400],
  },
  dateValue: {
    ...Typography.bigBody,
    color: Colors.grey[700],
  },
});
