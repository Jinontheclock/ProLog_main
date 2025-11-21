import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from './Buttons';

interface DialogueBoxProps {
  visible: boolean;
  onClose: () => void;
  onExit: () => void;
}

export const DialogueBox: React.FC<DialogueBoxProps> = ({ visible, onClose, onExit }) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <View style={styles.box}>
        <TouchableOpacity style={styles.closeIcon} onPress={onClose} accessibilityLabel="Close">
          <MaterialCommunityIcons name="close" size={20} color={Colors.grey[900]} />
        </TouchableOpacity>
        <Text style={{ ...Typography.competencyTitle, color: Colors.grey[900], textAlign: 'center', marginBottom: 16, marginTop: 8 }}>
          Exit the Quiz?
        </Text>
        <Text style={{ ...Typography.bigBody, color: Colors.grey[900], textAlign: 'center', marginBottom: 32 }}>
          Any progress made will be lost. Do you still wish to proceed to exit quiz?
        </Text>
        <View style={styles.buttonWrap}>
            <Button
              text="Exit"
              variant="dark"
              onPress={onExit}
              centered={true}
              customStyle={{ width: 197, height: 40, borderRadius: 30 }}
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
    borderColor: Colors.borderGrey,
    borderWidth: 1,
    borderRadius: 24,
    width: 330,
    height: 236,
    paddingVertical: 48,
    paddingHorizontal: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
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
  exitButton: {
    width: 220,
    borderRadius: 24,
  },
});
