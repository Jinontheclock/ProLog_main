import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface StatusButton {
  label: string;
  status: 'declared' | 'pending' | 'registered' | 'not-registered';
}

interface ExamStatusProps {
  buttons: StatusButton[];
}

export const ExamStatus: React.FC<ExamStatusProps> = ({ buttons }) => {
  const getButtonStyle = (status: string) => {
    switch (status) {
      case 'declared':
        return styles.buttonDeclared;
      case 'pending':
        return styles.buttonPending;
      case 'registered':
        return styles.buttonRegistered;
      case 'not-registered':
        return styles.buttonNotRegistered;
      default:
        return styles.buttonDefault;
    }
  };

  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, getButtonStyle(button.status)]}
        >
          <Text style={styles.buttonText}>{button.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  buttonDeclared: {
    backgroundColor: '#4A4A4A',
  },
  buttonPending: {
    backgroundColor: '#4A4A4A',
  },
  buttonRegistered: {
    backgroundColor: '#4A4A4A',
  },
  buttonNotRegistered: {
    backgroundColor: '#4A4A4A',
  },
  buttonDefault: {
    backgroundColor: '#4A4A4A',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
  },
});
