import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface CustomTabBarProps {
  activeTab?: 'home' | 'skills' | 'finances' | 'settings' | 'resources';
}

export default function CustomTabBar({ activeTab = 'home' }: CustomTabBarProps) {
  const tabs = [
    { key: 'home', icon: require('@/assets/images/tab-home.svg'), route: '/(tabs)/Journey_Dashboard' },
    { key: 'skills', icon: require('@/assets/images/tab-skills.svg'), route: '/(tabs)/My_Skills' },
    { key: 'finances', icon: require('@/assets/images/tab-finances.svg'), route: '/(tabs)/Finance' },
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
            style={[
              styles.tabIcon,
              { tintColor: activeTab === tab.key ? '#2C2C2C' : '#999999' }
            ]}
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
  tabIcon: {
    width: 24,
    height: 24,
  },
});
