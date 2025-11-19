import { Image } from 'expo-image';
import React from 'react';
import { Text, View } from 'react-native';

interface NavBarItemProps {
  label: string;
  iconOn: any;
  iconOff: any;
  focused: boolean;
}

export const NavBarItem: React.FC<NavBarItemProps> = ({ label, iconOn, iconOff, focused }) => {
  return (
    <View style={{
      alignItems: 'center',
      backgroundColor: '#F2F2F2',
      borderRadius: 26,
      height: 70,
      justifyContent: 'center',
      padding: 8,
      width: 60,
    }}>
      <Image 
        source={focused ? iconOn : iconOff}
        style={{ 
          width: 20, 
          height: 20,
        }}
      />
      <Text style={{
        fontSize: 10,
        marginTop: 4,
        color: focused ? '#2C2C2C' : '#D5D5D5',
        fontWeight: focused ? '600' : '400',
      }}>
        {label}
      </Text>
    </View>
  );
};
