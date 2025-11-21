import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const SearchingPagesBox: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Searching pages...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderColor: Colors.borderGrey,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 24,
    height: 50,
    width: 353,
    marginTop: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 1,
    justifyContent: 'center',
  },
  text: {
    ...Typography.buttonText,
    color: Colors.grey[300],
  },
});
