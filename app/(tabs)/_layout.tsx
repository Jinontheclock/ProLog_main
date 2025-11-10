import { Image } from 'expo-image';
import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HapticTab } from '@/components/haptic-tab';
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
                source={focused ? require('@/assets/images/school_on.png') : require('@/assets/images/school_off.png')}
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
                School
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Work"
        options={{
          title: '',
          href: '/(tabs)/Work',
          tabBarIcon: ({ focused }) => (
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
                source={focused ? require('@/assets/images/electric_bolt_on.png') : require('@/assets/images/electric_bolt_off.png')}
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
                Work
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Dashboard"
        options={{
          title: '',
          href: '/(tabs)/Dashboard',
          tabBarIcon: ({ focused }) => (
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
                source={focused ? require('@/assets/images/route_on.png') : require('@/assets/images/route_off.png')}
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
                Dashboard
              </Text>
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
              height: 70,
              justifyContent: 'center',
              padding: 8,
              width: 60,
            }}>
              <Image 
                source={focused ? require('@/assets/images/construction_on.png') : require('@/assets/images/construction_off.png')}
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
                Skills
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Resources"
        options={{
          title: '',
          href: '/(tabs)/Resources',
          tabBarIcon: ({ focused }) => (
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
                source={focused ? require('@/assets/images/library_books_on.png') : require('@/assets/images/library_books_off.png')}
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
                Resources
              </Text>
            </View>
          ),
        }}
      />
      {/* Hide old tabs but keep them for backward compatibility */}
      <Tabs.Screen
        name="Journey_Dashboard"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="Finance"
        options={{
          href: null,
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
