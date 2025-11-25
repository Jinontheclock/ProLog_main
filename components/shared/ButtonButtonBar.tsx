import { Button } from '@/components/shared/Buttons';
import { Colors } from '@/constants/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ButtonButtonBarProps {
  onComplete?: () => void;
  onChallenge?: () => void;
  isCompleted?: boolean;
}

export const ButtonButtonBar: React.FC<ButtonButtonBarProps> = ({ onComplete, onChallenge, isCompleted = false }) => (
  <View style={styles.container}>
    {!isCompleted && (
      <View style={styles.buttonWrapper}>
        <Button
          text="Mark as Complete"
          onPress={onComplete}
          variant="dark"
          fullWidth={true}
        />
      </View>
    )}
    <View style={styles.buttonWrapper}>
      <Button
        text="Challenge Quiz"
        onPress={onChallenge}
        variant="primary"
        fullWidth={true}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.borderGrey,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    paddingHorizontal: 20,
    paddingVertical: 28,
    gap: 12,
    width: '100%',
  },
  buttonWrapper: {
    flex: 1,
  },
});
