import { Image } from 'expo-image';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

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
          alignItems: 'center',
          backgroundColor: '#F2F2F2',
          borderRadius: 60,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.15,
          shadowRadius: 16,
          elevation: 12,
          flexDirection: 'row',
          height: 52,
          justifyContent: 'center',
          paddingHorizontal: 6,
          position: 'absolute',
          bottom: 20,
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 360,
          alignSelf: 'center',
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.5)',
        },
        tabBarLabelStyle: {
          display: 'none',
        },
      }}>
      <Tabs.Screen
        name="Journey_Dashboard"
        options={{
          title: '',
          href: '/(tabs)/Journey_Dashboard',
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center',
              backgroundColor: '#F2F2F2',
              borderRadius: 26,
              height: 52,
              justifyContent: 'center',
              padding: 14,
              width: 52,
            }}>
              <Image 
                source={require('@/assets/images/tab-home.svg')}
                style={{ 
                  width: 24, 
                  height: 24,
                  tintColor: focused ? '#2C2C2C' : '#999999'
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="My_Skills"
        options={{
          title: '',
          href: '/(tabs)/My_Skills',
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center',
              backgroundColor: '#F2F2F2',
              borderRadius: 26,
              height: 52,
              justifyContent: 'center',
              padding: 14,
              width: 52,
            }}>
              <Image 
                source={require('@/assets/images/tab-skills.svg')}
                style={{ 
                  width: 24, 
                  height: 24,
                  tintColor: focused ? '#2C2C2C' : '#999999'
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Finance"
        options={{
          title: '',
          href: '/(tabs)/Finance',
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center',
              backgroundColor: '#F2F2F2',
              borderRadius: 26,
              height: 52,
              justifyContent: 'center',
              padding: 14,
              width: 52,
            }}>
              <Image 
                source={require('@/assets/images/tab-finances.svg')}
                style={{ 
                  width: 24, 
                  height: 24,
                  tintColor: focused ? '#2C2C2C' : '#999999'
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
