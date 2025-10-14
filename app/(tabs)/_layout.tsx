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
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 8,
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
          width: 375,
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
                source={require('@/assets/images/homeIcon.png')}
                style={{ width: 48, height: 48, opacity: focused ? 1 : 0.6 }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="tracking"
        options={{
          title: '',
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
                source={require('@/assets/images/trackingIcon.png')}
                style={{ width: 48, height: 48, opacity: focused ? 1 : 0.6 }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="resources"
        options={{
          title: '',
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
                source={require('@/assets/images/resourcesIcon.png')}
                style={{ width: 48, height: 48, opacity: focused ? 1 : 0.6 }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: '',
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
                source={require('@/assets/images/savedIcon.png')}
                style={{ width: 48, height: 48, opacity: focused ? 1 : 0.6 }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: '',
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
                source={require('@/assets/images/settingsIcon.png')}
                style={{ width: 48, height: 48, opacity: focused ? 1 : 0.6 }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
