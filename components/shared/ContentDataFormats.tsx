import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

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
}

export const ContentDataFormats: React.FC<ContentDataFormatsProps> = ({ 
  mainItems, 
  dateItems 
}) => {
  return (
    <View style={styles.container}>
      <View>
        {mainItems.map((item, index) => (
          <View key={index} style={index > 0 ? { marginTop: 20 } : undefined}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        ))}
      </View>
      
      {dateItems && dateItems.length > 0 && (
        <View style={styles.dateRow}>
          {dateItems.map((item, index) => (
            <View key={index} style={styles.dateBox}>
              <Text style={styles.dateLabel}>{item.label}</Text>
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
    marginHorizontal: 20,
    flexDirection: 'column',
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
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#2C2C2C',
    fontWeight: '500',
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
  },
  dateLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  dateValue: {
    fontSize: 14,
    color: '#2C2C2C',
    fontWeight: '500',
  },
});
