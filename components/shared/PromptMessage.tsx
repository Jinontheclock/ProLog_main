import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './Buttons';

interface PromptMessageProps {
  title: string;
  description: string;
  buttonText?: string;
  onButtonPress?: () => void;
}

export const PromptMessage: React.FC<PromptMessageProps> = ({ 
  title, 
  description,
  buttonText = 'Start the next level',
  onButtonPress,
}) => (
  <View style={styles.container}>
    <View style={styles.iconTitleWrapper}>
      <MaterialIcons name="lock-open" size={24} color={Colors.orange[400]} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
    <Text style={styles.description}>{description}</Text>
    <View style={styles.buttonWrapper}>
      <Button
        text={buttonText}
        iconComponent={<MaterialIcons name="arrow-forward" size={20} color={Colors.white} />}
        variant="primary"
        onPress={onButtonPress}
        customStyle={styles.button}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderColor: Colors.borderGrey,
    borderWidth: 1,
    borderRadius: 20,
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 24,
    width: 353,
    height: 174,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 1,
  },
  iconTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    ...Typography.contentTitle,
    color: Colors.grey[900],
  },
  description: {
    ...Typography.buttonText,
    color: Colors.grey[400],
    marginBottom: 12,
  },
  buttonWrapper: {
    alignItems: 'flex-start',
  },
  button: {
    width: 189,
    height: 42,
  },
});
