import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface RecentsListProps {
  items: string[];
  onSelect: (item: string) => void;
}

export const RecentsList: React.FC<RecentsListProps> = ({ items, onSelect }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Recents</Text>
    {items.map((item, idx) => (
      <TouchableOpacity key={item} style={styles.itemRow} onPress={() => onSelect(item)}>
        <Text style={styles.itemText}>{item}</Text>
        <MaterialIcons name="chevron-right" size={20} color={Colors.grey[300]} />
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderColor: Colors.borderGrey,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 20,
    width: 353,
    marginTop: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 1,
  },
  header: {
    ...Typography.buttonText,
    color: Colors.grey[300],
    marginBottom: 12,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemText: {
    ...Typography.bigBody,
    color: Colors.grey[900],
  },
});
