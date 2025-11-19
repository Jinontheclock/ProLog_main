import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SmallDataCardProps {
  icon: any;
  label: string;
  value: string;
  unit: string;
  lastUpdated: string;
}

export const SmallDataCard: React.FC<SmallDataCardProps> = ({
  icon,
  label,
  value,
  unit,
  lastUpdated,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image 
          source={icon}
          style={styles.icon}
        />
        <Text style={styles.label}>{label}</Text>
      </View>
      
      <View style={styles.valueRow}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.unit}> {unit}</Text>
      </View>
      
      <Text style={styles.lastUpdated}>Last updated: {lastUpdated}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    marginHorizontal: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#999',
  },
  label: {
    fontSize: 16,
    color: '#999',
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  value: {
    fontSize: 32,
    fontWeight: '400',
    color: '#2C2C2C',
  },
  unit: {
    fontSize: 16,
    color: '#2C2C2C',
  },
  lastUpdated: {
    fontSize: 12,
    color: '#999',
  },
});
