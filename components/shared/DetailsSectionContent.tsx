import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface DetailsSectionContentProps {
  title: string;
  content: string;
}

export const DetailsSectionContent: React.FC<DetailsSectionContentProps> = ({ title, content }) => (
  <View style={styles.container}>
    <Text style={[styles.title, { color: Colors.grey[900] }]}>{title}</Text>
    <Text style={[styles.content, { color: Colors.grey[900], ...Typography.bigBody }]}>{content}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 8,
  },
  content: {
    marginBottom: 0,
  },
});
