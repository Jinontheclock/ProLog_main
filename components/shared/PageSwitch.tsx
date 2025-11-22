import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Tab {
  id: string;
  label: string;
  iconName?: string;
  iconActive?: any;
  iconInactive?: any;
}

interface PageSwitchProps {
  tabs: Tab[];
  selectedTab: string;
  onTabChange: (tabId: string) => void;
}

// Hardcoded icon mapping
const getIconName = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
    'schedule': 'schedule',
    'electric_bolt': 'flash-on',
    'paid': 'attach-money',
    'house': 'home',
  };
  return iconMap[iconName] || 'help-outline';
};

const getIconLibrary = (iconName: string) => {
  const communityIcons = [];  // Temporarily disable MaterialCommunityIcons
  return communityIcons.includes(iconName) ? 'MaterialCommunityIcons' : 'MaterialIcons';
};

export const PageSwitch: React.FC<PageSwitchProps> = ({
  tabs,
  selectedTab,
  onTabChange,
}) => {
  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => {
        const isActive = selectedTab === tab.id;
        
        return (
          <TouchableOpacity
            key={tab.id}
            style={isActive ? styles.tabActive : styles.tabInactive}
            onPress={() => onTabChange(tab.id)}
          >
            {tab.iconActive && tab.iconInactive ? (
              <Image
                source={isActive ? tab.iconActive : tab.iconInactive}
                style={styles.tabIconImage}
                contentFit="contain"
              />
            ) : tab.iconName ? (
              getIconLibrary(tab.iconName) === 'MaterialCommunityIcons' ? (
                <MaterialCommunityIcons
                  name={getIconName(tab.iconName) as any}
                  size={20}
                  color={isActive ? Colors.white : Colors.grey[500]}
                  style={styles.tabIcon}
                />
              ) : (
                <MaterialIcons
                  name={getIconName(tab.iconName)}
                  size={20}
                  color={isActive ? Colors.white : Colors.grey[500]}
                  style={styles.tabIcon}
                />
              )
            ) : null}
            <Text style={isActive ? styles.tabActiveText : styles.tabInactiveText}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 50,
    padding: 4,
    minHeight: 50,
    marginTop: 20,
    marginBottom: 24,
    marginHorizontal: 20,
    alignSelf: 'stretch',
    shadowColor: Colors.black,
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
    backgroundColor: Colors.orange[400],
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 8,
    minHeight: 42,
    flexBasis: 0,
  },
  tabInactive: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 8,
    minHeight: 42,
    flexBasis: 0,
  },
  tabIcon: {
    marginRight: 6,
  },
  tabIconImage: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  tabActiveText: {
    ...Typography.buttonText,
    color: Colors.white,
    fontSize: 14,
    flexShrink: 1,
  },
  tabInactiveText: {
    ...Typography.contentSubtitle,
    color: Colors.grey[500],
    fontSize: 14,
    flexShrink: 1,
  },
});
