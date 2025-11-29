import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from './Buttons';

interface DeleteReminderDialogueProps {
  visible: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export const DeleteReminderDialogue: React.FC<DeleteReminderDialogueProps> = ({ 
  visible, 
  onClose, 
  onDelete 
}) => {
  if (!visible) return null;
  
  return (
    <View style={styles.overlay}>
      <View style={styles.box}>
        <TouchableOpacity 
          style={styles.closeIcon} 
          onPress={onClose} 
          accessibilityLabel="Close"
        >
          <MaterialCommunityIcons name="close" size={20} color={Colors.grey[900]} />
        </TouchableOpacity>
        
        <Text style={styles.title}>Delete Reminder?</Text>
        
        <Text style={styles.description}>
          This action won't be reversible.{'\n'}Would you like to proceed?
        </Text>
        
        <View style={styles.buttonWrap}>
          <Button
            text="Delete"
            variant="dark"
            onPress={onDelete}
            centered={true}
            customStyle={styles.deleteButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(44,44,44,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  box: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    width: 353,
    // height: 236,
    paddingVertical: 48,
    paddingHorizontal: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 10,
  },
  closeIcon: {
    position: 'absolute',
    top: 24,
    right: 24,
    zIndex: 2,
  },
  title: {
    ...Typography.competencyTitle,
    color: Colors.grey[900],
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 8,
  },
  description: {
    ...Typography.bigBody,
    color: Colors.grey[900],
    textAlign: 'center',
    marginBottom: 32,
  },
  buttonWrap: {
    width: '100%',
    alignItems: 'center',
  },
  deleteButton: {
    width: 197,
    height: 40,
    borderRadius: 30,
  },
});

export default DeleteReminderDialogue;
