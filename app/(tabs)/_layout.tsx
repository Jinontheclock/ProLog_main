import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HapticTab } from '@/components/haptic-tab';
import { NavBarItem } from '@/components/NavBar';
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
      initialRouteName="Dashboard"
      backBehavior="history"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          ...CommonStyles.neoDoubleOuter,
          alignItems: 'center',
          backgroundColor: '#F2F2F2',
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
          borderColor: 'rgba(0, 0, 0, 0.1)',
        },
        tabBarLabelStyle: {
          display: 'none',
        },
      }}>
      <Tabs.Screen
        name="School"
        options={{
          title: '',
          href: '/(tabs)/School',
          tabBarIcon: ({ focused }) => (
            <NavBarItem 
              label="School"
              iconOn={require('@/assets/images/school_on.png')}
              iconOff={require('@/assets/images/school_off.png')}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Work"
        options={{
          title: '',
          href: '/(tabs)/Work',
          tabBarIcon: ({ focused }) => (
            <NavBarItem 
              label="Work"
              iconOn={require('@/assets/images/construction_on.png')}
              iconOff={require('@/assets/images/construction_off.png')}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Dashboard"
        options={{
          title: '',
          href: '/(tabs)/Dashboard',
          tabBarIcon: ({ focused }) => (
            <NavBarItem 
              label="Dashboard"
              iconOn={require('@/assets/images/route_on.png')}
              iconOff={require('@/assets/images/route_off.png')}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="My_Skills"
        options={{
          title: '',
          href: '/(tabs)/My_Skills',
          tabBarIcon: ({ focused }) => (
            <NavBarItem 
              label="Skills"
              iconOn={require('@/assets/images/electric_bolt_on.png')}
              iconOff={require('@/assets/images/electric_bolt_off.png')}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Resources"
        options={{
          title: '',
          href: '/(tabs)/Resources',
          tabBarIcon: ({ focused }) => (
            <NavBarItem 
              label="Resources"
              iconOn={require('@/assets/images/library_books_on.png')}
              iconOff={require('@/assets/images/library_books_off.png')}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
