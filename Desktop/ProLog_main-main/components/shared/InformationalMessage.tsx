import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface InformationalMessageProps {
  message: string;
}

export const InformationalMessage: React.FC<InformationalMessageProps> = ({ message }) => (
  <View style={styles.container}>
    <View style={styles.iconWrapper}>
      <MaterialIcons name="info" size={20} color={Colors.grey[700]} />
    </View>
    <Text style={styles.text}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.white,
    borderColor: Colors.borderGrey,
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 24,
    width: 393,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 1,
  },
  iconWrapper: {
    marginRight: 16,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  text: {
    ...Typography.bigBody,
    color: Colors.grey[900],
    flex: 1,
  },
});
