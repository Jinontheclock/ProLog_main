import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonVariant = 'primary' | 'dark' | 'light';

interface ButtonProps {
  text: string;
  icon?: any;
  iconBlack?: any;
  onPress?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
}

const variantStyles = {
  primary: {
    backgroundColor: '#E06D34',
    textColor: '#FFFFFF',
  },
  dark: {
    backgroundColor: '#2C2C2C',
    textColor: '#FFFFFF',
  },
  light: {
    backgroundColor: '#E0E0E0',
    textColor: '#2C2C2C',
  },
};

export const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  iconBlack,
  onPress,
  variant = 'primary',
  disabled = false,
}) => {
  const { backgroundColor, textColor } = variantStyles[variant];
  const iconSource = variant === 'light' && iconBlack ? iconBlack : icon;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disabled ? '#E0E0E0' : backgroundColor,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {iconSource && (
        <Image
          source={iconSource}
          style={styles.iconLeft}
          contentFit="contain"
        />
      )}
      <Text
        style={[
          styles.text,
          {
            color: disabled ? '#999' : textColor,
          },
        ]}
      >
        {text}
      </Text>
      {iconSource && (
        <Image
          source={iconSource}
          style={styles.iconRight}
          contentFit="contain"
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 24,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 13,
    fontWeight: '400',
  },
  iconLeft: {
    width: 20,
    height: 20,
  },
  iconRight: {
    width: 20,
    height: 20,
  },
});
