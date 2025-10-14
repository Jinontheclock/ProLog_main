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
              width: 48,
              height: 48,
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
  tabItem: {
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 26,
    flexDirection: 'row',
    height: 52,
    padding: 14,
    width: 52,
    justifyContent: 'center',
    marginHorizontal: 9,
  },
});
