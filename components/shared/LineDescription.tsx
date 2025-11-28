import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface LineDescriptionProps {
  title: string;
  description: string;
  content: string;
}

export const LineDescription: React.FC<LineDescriptionProps> = ({ title, description, content }) => (
  <View style={styles.mainContainer}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    backgroundColor: Colors.white,
    borderColor: Colors.borderGrey,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    // width: 353,
    // height: 86,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 1,
  },
  title: {
    textAlign: 'left',
    ...Typography.contentBold,
    color: Colors.grey[900],
    marginBottom: 8,
  },
  description: {
    ...Typography.buttonText,
    color: Colors.grey[300],
    marginBottom: 8,
  },
  content: {
    ...Typography.bigBody,
    color: Colors.grey[900],
  },
});
