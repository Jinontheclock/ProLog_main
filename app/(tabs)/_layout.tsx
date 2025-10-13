import dimensions from '@/lib/dimensions';
import { Image } from 'expo-image';
import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: '#F5F5F5',
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          width: dimensions.constrainedWidth,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          alignSelf: 'center',
        },
        tabBarLabelStyle: {
          display: 'none',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('@/assets/images/homeIcon.png')}
              style={{ width: 56, height: 56, opacity: focused ? 1 : 0.6 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tracking"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('@/assets/images/trackingIcon.png')}
              style={{ width: 56, height: 56, opacity: focused ? 1 : 0.6 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="resources"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('@/assets/images/resourcesIcon.png')}
              style={{ width: 56, height: 56, opacity: focused ? 1 : 0.6 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('@/assets/images/savedIcon.png')}
              style={{ width: 56, height: 56, opacity: focused ? 1 : 0.6 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('@/assets/images/settingsIcon.png')}
              style={{ width: 56, height: 56, opacity: focused ? 1 : 0.6 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
