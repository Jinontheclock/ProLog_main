import { Image } from 'expo-image';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface LineItem {
  name: string;
  current: number;
  total: number;
  isCompleted: boolean;
}

interface CompletedLinesProps {
  title?: string;
  lines: LineItem[];
}

export const CompletedLines: React.FC<CompletedLinesProps> = ({
  title = 'Line Completion',
  lines,
}) => {
  return (
    <View style={styles.lineCompletionCard}>
      <Text style={styles.lineCompletionTitle}>{title}</Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.linesContainer}
      >
        {lines.map((line, index) => (
          <View key={index} style={styles.lineItemBox}>
            <View style={styles.lineItem}>
              <Text style={styles.lineName}>{line.name}</Text>
              <Text style={styles.lineProgress}>
                {line.current}/{line.total}
              </Text>
              <View style={line.isCompleted ? styles.lineButtonGray : styles.lineButtonOrange}>
                <Image 
                  source={
                    line.isCompleted
                      ? require('@/assets/images/check.png')
                      : require('@/assets/images/more_horiz.png')
                  }
                  style={styles.lineButtonIcon}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  lineCompletionCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  lineCompletionTitle: {
    fontSize: 16,
    color: '#999',
    marginBottom: 20,
  },
  linesContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  lineItemBox: {
    width: 80,
    backgroundColor: '#F0F0F0',
    borderRadius: 40,
    padding: 16,
  },
  lineItem: {
    alignItems: 'center',
    gap: 12,
  },
  lineName: {
    fontSize: 16,
    color: '#2C2C2C',
    fontWeight: '500',
  },
  lineProgress: {
    fontSize: 24,
    fontWeight: '400',
    color: '#2C2C2C',
  },
  lineButtonOrange: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E06D34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineButtonGray: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D5D5D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineButtonIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
});
