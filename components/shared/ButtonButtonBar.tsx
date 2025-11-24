import { Button } from '@/components/shared/Buttons';
import { Colors } from '@/constants/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ButtonButtonBarProps {
  onComplete?: () => void;
  onChallenge?: () => void;
}

export const ButtonButtonBar: React.FC<ButtonButtonBarProps> = ({ onComplete, onChallenge }) => (
  <View style={styles.container}>
    <View style={{ flex: 1, marginRight: 8 }}>
      <Button
        text="Mark as Complete"
        onPress={onComplete}
        variant="dark"
      />
    </View>
    <View style={{ flex: 1, marginLeft: 8 }}>
      <Button
        text="Challenge Quiz"
        onPress={onChallenge}
        variant="primary"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 393,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.borderGrey,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginVertical: 16,
  },
  // Button spacing handled by wrapper Views
});
