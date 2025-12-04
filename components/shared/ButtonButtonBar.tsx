import { Button } from '@/components/shared/Buttons';
import { Colors } from '@/constants/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ButtonButtonBarProps {
  onComplete?: () => void;
  onChallenge?: () => void;
  isCompleted?: boolean;
  completeText?: string;
  challengeText?: string;
  singleButton?: boolean;
}

export const ButtonButtonBar: React.FC<ButtonButtonBarProps> = ({ 
  onComplete, 
  onChallenge, 
  isCompleted = false, 
  completeText = "Mark as Complete",
  challengeText = "Challenge Quiz",
  singleButton = false
}) => (
  <View style={styles.container}>
    {!isCompleted && !singleButton && (
      <View style={styles.buttonWrapper}>
        <Button
          text={completeText}
          onPress={onComplete}
          variant="dark"
          fullWidth={true}
        />
      </View>
    )}
    <View style={singleButton ? styles.singleButtonWrapper : styles.buttonWrapper}>
      <Button
        text={singleButton ? completeText : challengeText}
        onPress={singleButton ? onComplete : onChallenge}
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
    paddingVertical: 20,
    gap: 12,
    width: '100%',
  },
  buttonWrapper: {
    flex: 1,
  },
  singleButtonWrapper: {
    width: '100%',
  },
});
