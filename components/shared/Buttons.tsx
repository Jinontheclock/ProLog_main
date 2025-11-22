import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import React, { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonVariant = 'primary' | 'dark' | 'light' | 'grey200' | 'secondary';

interface ButtonProps {
  text: string;
  icon?: any;
  iconBlack?: any;
  iconComponent?: ReactNode;
  onPress?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  centered?: boolean;
  fullWidth?: boolean;
  customStyle?: any;
}

const variantStyles = {
  primary: {
    backgroundColor: Colors.orange[400],
    textColor: Colors.white,
    borderColor: undefined,
    borderWidth: 0,
  },
  dark: {
    backgroundColor: Colors.grey[700],
    textColor: Colors.white,
    borderColor: undefined,
    borderWidth: 0,
  },
  light: {
    backgroundColor: Colors.white,
    textColor: Colors.grey[900],
    borderColor: undefined,
    borderWidth: 0,
  },
  grey200: {
    backgroundColor: Colors.grey[200],
    textColor: Colors.grey[900],
    borderColor: undefined,
    borderWidth: 0,
  },
  secondary: {
    backgroundColor: Colors.white,
    textColor: Colors.orange[400],
    borderColor: Colors.orange[400],
  // removed stray bracket
    borderWidth: 1,
  },
};

export const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  iconBlack,
  iconComponent,
  onPress,
  variant = 'primary',
  disabled = false,
  centered = false,
  fullWidth = false,
  customStyle,
}) => {
  const styleObj = variantStyles[variant] || variantStyles['primary'];
  const { backgroundColor, textColor, borderColor, borderWidth } = styleObj;
  let textColorOverride: string = textColor || Colors.white;
  if (variant === 'grey200') textColorOverride = Colors.grey[900];
  if (variant === 'light') textColorOverride = Colors.grey[900];
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disabled ? Colors.grey[200] : backgroundColor,
          alignSelf: fullWidth ? 'stretch' : (centered ? 'center' : 'flex-start'),
          width: fullWidth ? '100%' : undefined,
        },
        customStyle,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {iconComponent && iconComponent}
      <Text
        style={[
          Typography.buttonText,
          {
            color: disabled ? Colors.grey[400] : textColorOverride,
          },
        ]}
      >
        {text}
      </Text>
      {iconComponent && iconComponent}
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
});
