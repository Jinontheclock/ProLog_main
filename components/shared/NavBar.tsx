import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

interface NavBarItemProps {
  label: string;
  iconName: string;
  focused: boolean;
}

export const NavBarItem: React.FC<NavBarItemProps> = ({ label, iconName, focused }) => {
  return (
    <View style={{
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 26,
      height: 70,
      justifyContent: 'center',
      padding: 8,
      width: 60,
    }}>
      <MaterialIcons
        name={iconName as any}
        size={24}
        color={focused ? Colors.grey[800] : Colors.grey[100]}
      />
      <Text style={{
        ...(focused ? Typography.captionBold : Typography.captionLight),
        marginTop: 4,
        color: focused ? Colors.grey[800] : Colors.grey[100],
      }}>
        {label}
      </Text>
    </View>
  );
};

export const NAVBAR_TABS = [
  { name: 'School', label: 'School', iconName: 'school', href: '/(tabs)/School' },
  { name: 'Work', label: 'Work', iconName: 'construction', href: '/(tabs)/Work' },
  { name: 'Dashboard', label: 'Dashboard', iconName: 'route', href: '/(tabs)/Dashboard' },
  { name: 'My_Skills', label: 'Skills', iconName: 'flash-on', href: '/(tabs)/My_Skills' },
  { name: 'Resources', label: 'Settings', iconName: 'settings', href: '/(tabs)/Resources' },
];

// Default export to prevent "NavBar is not defined" error
export default { NavBarItem, NAVBAR_TABS };
