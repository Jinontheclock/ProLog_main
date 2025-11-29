import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface FilterDropdownProps {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  placeholder?: string;
  style?: any;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({ options, selected, onSelect, placeholder, style }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ position: 'relative' }}>
      <TouchableOpacity
        style={[styles.dropdown, style]}
        activeOpacity={0.7}
        onPress={() => setVisible(true)}
      >
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={[styles.dropdownText, { color: Colors.grey[500], flex: 1, textAlign: 'left' }]}> 
            {selected || placeholder || 'Select'}
          </Text>
          <MaterialIcons name="arrow-drop-down" size={16} color={Colors.grey[500]} style={{ marginLeft: 8, alignSelf: 'flex-end' }} />
        </View>
      </TouchableOpacity>
      {visible && (
        <TouchableOpacity
          style={[styles.dropdownListWrapper, { position: 'absolute', top: 38, left: 0, zIndex: 10 }]}
          activeOpacity={1}
          onPress={() => setVisible(false)}
        >
          <FlatList
            data={options}
            keyExtractor={(item) => item}
            renderItem={({ item, index }) => (
              <>
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => {
                    onSelect(item);
                    setVisible(false);
                  }}
                >
                  <Text style={item === selected ? [styles.itemText, { color: Colors.grey[900] }] : styles.itemText}>{item}</Text>
                </TouchableOpacity>
                {index < options.length - 1 && <View style={styles.divider} />}
              </>
            )}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    dropdownText: {
      ...Typography.smBody,
      color: Colors.grey[500],
    },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderColor: Colors.borderGrey,
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 8,
    width: 162,
    height: 30,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    marginRight: 8,
  },
    selectedBoldText: {
      ...Typography.contentBold,
      color: Colors.grey[900],
    },
  placeholderText: {
    ...Typography.smBody,
    color: Colors.grey[300],
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownListWrapper: {
    backgroundColor: Colors.white,
    borderColor: Colors.borderGrey,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 8,
    width: 162,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  itemText: {
    ...Typography.smBody,
    color: Colors.grey[700],
  },
    divider: {
      height: 1,
      backgroundColor: Colors.borderGrey,
      marginHorizontal: 20,
    },
});
