import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Tab {
  id: string;
  label: string;
  iconName: string;
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
  };
  return iconMap[iconName] || 'help-outline';
};

export const PageSwitch: React.FC<PageSwitchProps> = ({
  tabs,
  selectedTab,
  onTabChange,
}) => {
  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => {
        const iconName = getIconName(tab.iconName);
        
        return (
          <TouchableOpacity
            key={tab.id}
            style={selectedTab === tab.id ? styles.tabActive : styles.tabInactive}
            onPress={() => onTabChange(tab.id)}
          >
            <MaterialIcons
              name={iconName}
              size={20}
              color={selectedTab === tab.id ? Colors.white : Colors.grey[500]}
              style={styles.tabIcon}
            />
            <Text style={selectedTab === tab.id ? styles.tabActiveText : styles.tabInactiveText}>
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
    width: 354,
    height: 42,
    marginTop: 20,
    marginBottom: 24,
    alignSelf: 'center',
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
    backgroundColor: Colors.orange[500],
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tabInactive: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tabIcon: {
    marginRight: 6,
  },
  tabActiveText: {
    ...Typography.buttonText,
    color: Colors.white,
  },
  tabInactiveText: {
    ...Typography.contentSubtitle,
    color: Colors.grey[500],
  },
});
