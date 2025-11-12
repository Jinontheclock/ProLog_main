import { Image } from 'expo-image';
import React from 'react';
import { ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Tab {
  id: string;
  label: string;
  iconActive: ImageSourcePropType;
  iconInactive: ImageSourcePropType;
}

interface PageSwitchProps {
  tabs: Tab[];
  selectedTab: string;
  onTabChange: (tabId: string) => void;
}

export const PageSwitch: React.FC<PageSwitchProps> = ({
  tabs,
  selectedTab,
  onTabChange,
}) => {
  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={selectedTab === tab.id ? styles.tabActive : styles.tabInactive}
          onPress={() => onTabChange(tab.id)}
        >
          <Image
            source={selectedTab === tab.id ? tab.iconActive : tab.iconInactive}
            style={styles.tabIcon}
          />
          <Text style={selectedTab === tab.id ? styles.tabActiveText : styles.tabInactiveText}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 4,
    marginTop: 20,
    marginBottom: 24,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  tabActive: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E06D34',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tabInactive: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tabIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  tabActiveText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  tabInactiveText: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
  },
});
