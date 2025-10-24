import { Image } from 'expo-image';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { CommonStyles } from '@/lib/common-styles';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="Journey_Dashboard"
      backBehavior="history"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          alignItems: 'center',
          backgroundColor: '#F2F2F2',
          borderRadius: 60,
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
          ...CommonStyles.neoProjected,
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
              ...CommonStyles.tinyProjected,
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
              ...CommonStyles.tinyProjected,
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
              ...CommonStyles.tinyProjected,
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
          title: '',
          href: '/(tabs)/Settings',
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center',
              backgroundColor: '#F2F2F2',
              borderRadius: 26,
              height: 52,
              justifyContent: 'center',
              padding: 14,
              width: 52,
              ...CommonStyles.tinyProjected,
            }}>
              <Image 
                source={require('@/assets/images/tab-settings.svg')}
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
    </Tabs>
  );
}
