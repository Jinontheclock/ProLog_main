import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

type IconButtonVariant = 'primary' | 'dark' | 'light';

interface IconButtonProps {
  icon?: any;
  iconBlack?: any;
  onPress?: () => void;
  variant?: IconButtonVariant;
  size?: number;
  disabled?: boolean;
}

const variantStyles = {
  primary: {
    backgroundColor: '#E06D34',
    iconColor: '#FFFFFF',
  },
  dark: {
    backgroundColor: '#2C2C2C',
    iconColor: '#FFFFFF',
  },
  light: {
    backgroundColor: '#FFFFFF',
    iconColor: '#2C2C2C',
  },
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  iconBlack,
  onPress,
  variant = 'primary',
  size = 48,
  disabled = false,
}) => {
  const { backgroundColor, iconColor } = variantStyles[variant];
  const iconSource = variant === 'light' && iconBlack ? iconBlack : icon;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: disabled ? '#E0E0E0' : backgroundColor,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Image
        source={iconSource}
        style={[
          styles.icon,
          {
            width: size * 0.4,
            height: size * 0.4,
          },
        ]}
        contentFit="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    resizeMode: 'contain',
  },
});
