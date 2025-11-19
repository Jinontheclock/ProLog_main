import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SectionHeadingProps {
  level: string;
  title: string;
  currentHours: number;
  totalHours: number;
  percentage: number;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  level,
  title,
  currentHours,
  totalHours,
  percentage,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.level}>{level}</Text>
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.hoursContainer}>
        <Image
          source={require('@/assets/images/schedule.png')}
          style={styles.icon}
          contentFit="contain"
        />
        <Text style={styles.hoursText}>
          {currentHours.toLocaleString()} / {totalHours.toLocaleString()} hrs
        </Text>
      </View>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarBackground}>
          <View 
            style={[
              styles.progressBarFill, 
              { width: `${percentage}%` }
            ]} 
          />
        </View>
        <Text style={styles.percentageText}>{percentage}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  level: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 12,
  },
  hoursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  hoursText: {
    fontSize: 16,
    color: '#666666',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progressBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#E06D34',
    borderRadius: 4,
  },
  percentageText: {
    fontSize: 14,
    color: '#666666',
    minWidth: 40,
    textAlign: 'right',
  },
});
