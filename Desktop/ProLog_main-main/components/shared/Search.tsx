import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { IconButton } from './IconButton';

interface SearchProps {
  value: string;
  onChange: (text: string) => void;
  onClear: () => void;
  onBack: () => void;
  placeholder?: string;
  state: 'idle' | 'typing' | 'done'; // idle: before typing, typing: while typing, done: after typing
  onSubmitEditing?: () => void;
}

export const Search: React.FC<SearchProps> = ({ value, onChange, onClear, onBack, placeholder, state, onSubmitEditing }) => {
  // ...existing code...
  // Destructure onSubmitEditing from props
  // ...existing code...
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', width: 353 }}>
      <View style={{ flex: 0 }}>
        <IconButton
          iconComponent={<MaterialIcons name="arrow-back" size={24} color={Colors.grey[900]} />}
          onPress={onBack}
          variant="light"
          size={40}
        />
      </View>
      <View style={[styles.container, { marginLeft: 'auto' }]}> 
        <View style={styles.inputWrapper}>
          <MaterialIcons name="search" size={18} color={Colors.grey[900]} style={{ marginRight: 6 }} />
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            placeholder={placeholder || 'Search by keyword'}
            placeholderTextColor={Colors.grey[300]}
            onSubmitEditing={typeof onSubmitEditing === 'function' ? onSubmitEditing : undefined}
          />
          {value.length > 0 && (
            <TouchableOpacity onPress={onClear} style={styles.clearButton}>
              <MaterialIcons name="close" size={24} color={Colors.grey[400]} />
            </TouchableOpacity>
          )}
        </View>
        {/* No typing text shown while typing */}
        {/* No typed text shown below search bar */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    hintBigBody: {
      ...Typography.bigBody,
      color: Colors.grey[300],
    },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.borderGrey,
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 8,
    paddingVertical: 8,
    width: 301,
    height: 40,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 1,
    marginLeft: 'auto',
  },
  iconButton: {
    marginRight: 8,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 24,
    paddingHorizontal: 8,
    marginLeft: 4,
  },
  input: {
    flex: 1,
    ...Typography.bigBody,
    color: Colors.grey[900],
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  clearButton: {
    marginLeft: 8,
  },
  hintText: {
    ...Typography.buttonText,
    color: Colors.grey[300],
    marginLeft: 12,
  },
  typingText: {
    ...Typography.bigBody,
    color: Colors.grey[900],
    marginLeft: 12,
  },
  doneText: {
    ...Typography.bigBody,
    color: Colors.grey[900],
    marginLeft: 12,
  },
});
