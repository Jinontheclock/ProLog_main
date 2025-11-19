import { Image } from 'expo-image';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { IconButton } from './IconButton';

interface SlotRow {
  startDate: string;
  startYear: string;
  endDate: string;
  endYear: string;
  slot: string;
}

interface Campus {
  name: string;
  location: string;
  slots: SlotRow[];
  onPress?: () => void;
}

interface SchoolSlotsProps {
  campuses: Campus[];
}

export const SchoolSlots: React.FC<SchoolSlotsProps> = ({ campuses }) => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.carouselContainer}
      contentContainerStyle={styles.carouselContent}
    >
      {campuses.map((campus, index) => (
        <View key={index} style={styles.campusCard}>
          <View style={styles.campusHeader}>
            <View>
              <Text style={styles.campusName}>{campus.name}</Text>
              <Text style={styles.campusLocation}>{campus.location}</Text>
            </View>
            <IconButton
              icon={require('@/assets/images/arrow_outward.png')}
              variant="primary"
              size={40}
              onPress={campus.onPress}
            />
          </View>

          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Start</Text>
            <Text style={styles.tableHeaderText}>End</Text>
            <Text style={styles.tableHeaderText}>Slot</Text>
          </View>

          {campus.slots.map((slot, slotIndex) => (
            <View key={slotIndex} style={styles.tableRow}>
              <View style={styles.dateGroup}>
                <View style={styles.dateCell}>
                  <Text style={styles.dateCellText}>{slot.startDate}</Text>
                  <Text style={styles.dateCellText}>{slot.startYear}</Text>
                </View>
                <View style={styles.dateConnector}>
                  <Image
                    source={require('@/assets/images/Line 6.png')}
                    style={styles.lineImage}
                  />
                </View>
                <View style={styles.dateCell}>
                  <Text style={styles.dateCellText}>{slot.endDate}</Text>
                  <Text style={styles.dateCellText}>{slot.endYear}</Text>
                </View>
              </View>
              <View style={styles.slotCell}>
                <Text style={styles.slotCellText}>{slot.slot}</Text>
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginBottom: 20,
  },
  carouselContent: {
    paddingHorizontal: 20,
    gap: 16,
  },
  campusCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    width: 350,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  campusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  campusName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  campusLocation: {
    fontSize: 12,
    color: '#999',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 0,
  },
  tableHeaderText: {
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  dateGroup: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
  },
  dateCell: {
    flex: 2,
  },
  dateCellText: {
    fontSize: 16,
    color: '#2C2C2C',
    textAlign: 'center',
    fontWeight: '400',
  },
  dateConnector: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineImage: {
    width: 60,
    height: 2,
    resizeMode: 'contain',
  },
  slotCell: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 68,
  },
  slotCellText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
    textAlign: 'center',
  },
});
