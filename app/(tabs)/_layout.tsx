import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HapticTab } from '@/components/shared/haptic-tab';
import { NAVBAR_TABS, NavBarItem } from '@/components/shared/NavBar';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { CommonStyles } from '@/lib/common-styles';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width;
  const maxAppWidth = 428; // iPhone 14 Pro Max width
  const appWidth = Math.min(screenWidth, maxAppWidth);

  return (
    <Tabs
      initialRouteName="School"
      backBehavior="history"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          ...CommonStyles.neoDoubleOuter,
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          flexDirection: 'row',
          height: 70 + insets.bottom,
          justifyContent: 'center',
          paddingHorizontal: 10,
          paddingBottom: insets.bottom,
          position: 'absolute',
          bottom: 0,
          left: '50%',
          marginLeft: -(appWidth / 2),
          width: appWidth,
          borderWidth: 0,
          borderTopWidth: 1,
          borderColor: '#D5D5D5',
        },
        tabBarLabelStyle: {
          display: 'none',
        },
      }}>
      {NAVBAR_TABS.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: '',
            href: tab.href as any,
            tabBarIcon: ({ focused }) => (
              <NavBarItem 
                label={tab.label}
                iconName={tab.iconName}
                focused={focused}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
