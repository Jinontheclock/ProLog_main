import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IconSymbol } from './ui/icon-symbol';

interface CustomTabBarProps {
  activeTab?: 'home' | 'tracking' | 'resources' | 'saved' | 'settings';
}

export default function CustomTabBar({ activeTab = 'home' }: CustomTabBarProps) {
  const tabs = [
    { key: 'home', iconName: 'house.fill', route: '/(tabs)/' },
    { key: 'tracking', iconName: 'chart.bar.fill', route: '/(tabs)/tracking' },
    { key: 'resources', iconName: 'book.fill', route: '/(tabs)/resources' },
    { key: 'saved', iconName: 'bookmark.fill', route: '/(tabs)/saved' },
    { key: 'settings', iconName: 'gearshape.fill', route: '/(tabs)/settings' },
  ];

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={styles.tabItem}
          onPress={() => router.push(tab.route as any)}
        >
          <IconSymbol
            name={tab.iconName as any}
            size={24}
            color={activeTab === tab.key ? '#2C2C2C' : '#999999'}
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
