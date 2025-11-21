import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TagsProps {
  label: string;
}

export const Tags: React.FC<TagsProps> = ({ label }) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    backgroundColor: Colors.grey[700],
    borderRadius: 8,
    width: 112,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  tagText: {
    ...Typography.smBody,
    color: Colors.grey[200],
  },
});
