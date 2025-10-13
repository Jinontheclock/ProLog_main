import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface CustomTabBarProps {
  activeTab?: 'home' | 'tracking' | 'resources' | 'saved' | 'settings';
}

export default function CustomTabBar({ activeTab = 'home' }: CustomTabBarProps) {
  const tabs = [
    { key: 'home', icon: require('@/assets/images/homeIcon.png'), route: '/(tabs)/' },
    { key: 'tracking', icon: require('@/assets/images/trackingIcon.png'), route: '/(tabs)/tracking' },
    { key: 'resources', icon: require('@/assets/images/resourcesIcon.png'), route: '/(tabs)/resources' },
    { key: 'saved', icon: require('@/assets/images/savedIcon.png'), route: '/(tabs)/saved' },
    { key: 'settings', icon: require('@/assets/images/settingsIcon.png'), route: '/(tabs)/settings' },
  ];

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={styles.tabItem}
          onPress={() => router.push(tab.route as any)}
        >
          <Image
            source={tab.icon}
            style={{
              width: 56,
              height: 56,
              opacity: activeTab === tab.key ? 1 : 0.6,
            }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderTopWidth: 0,
    height: 60,
    paddingBottom: 8,
    paddingTop: 8,
    width: 393,
    position: 'absolute',
    bottom: 0,
    left: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
  },
});
