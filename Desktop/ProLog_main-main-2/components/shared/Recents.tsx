import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface RecentsProps {
  title?: string;
  line?: string;
  description?: string;
  onRemove?: () => void;
}

export const Recents: React.FC<RecentsProps> = ({ title = 'Recently viewed', line = 'Line A-3', description = 'Describe the concepts of electricity...', onRemove }) => (
  <View style={styles.container}>
    <View style={[styles.row, { alignItems: 'center' }]}> 
      <Text style={styles.header}>{title}</Text>
      <View style={{ flex: 1, alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={onRemove} style={[styles.closeBtn, { alignSelf: 'flex-start', marginTop: 2 }]}>
          <MaterialIcons name="close" size={20} color={Colors.grey[300]} />
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.row}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.line} numberOfLines={1} ellipsizeMode="tail">
          <Text style={[styles.lineBold, { marginRight: 16 }]}>{line}</Text>
          <Text style={styles.description}>{description}</Text>
        </Text>
      </View>
      <TouchableOpacity onPress={onRemove} style={[styles.closeBtn, { alignSelf: 'flex-start', marginTop: 2 }]}> 
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderColor: Colors.borderGrey,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 18,
    marginVertical: 12,
    width: "auto",
    height: 84,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 1,
  },
  header: {
    ...Typography.buttonText,
    color: Colors.grey[300],
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineBold: {
    ...Typography.contentTitle,
    color: Colors.grey[900],
    fontWeight: 'bold',
  },
  description: {
    ...Typography.bigBody,
    color: Colors.grey[900],
  },
  closeBtn: {
    marginLeft: 12,
    padding: 0,
    width: 20,
    height: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
