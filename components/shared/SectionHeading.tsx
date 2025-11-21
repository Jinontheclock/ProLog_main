import MaterialIcon from '@/components/shared/MaterialIcon';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface SectionHeadingProps {
  level: string;
  title: string;
  currentHours: number;
  totalHours: number;
  percentage: number;
  iconName?: string;
  iconColor?: string;
  hoursUnit?: string;
  onIconPress?: () => void;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  level,
  title,
  currentHours,
  totalHours,
  percentage,
  iconName = 'cached',
  iconColor = Colors.grey[900],
  hoursUnit = 'weeks',
  onIconPress,
}) => {
  const isZero = currentHours === 0 && totalHours === 10;
  
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.level}>{level}</Text>
        <TouchableOpacity style={styles.searchButton} onPress={onIconPress}>
          <MaterialIcon name={iconName} size={24} color={iconColor} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.hoursContainer}>
        <MaterialIcon
          name="schedule"
          size={20}
          color={Colors.grey[500]}
        />
        <View style={{ width: 8 }} />
        <Text style={[
          styles.hoursText,
          isZero && { color: Colors.grey[300] }
        ]}>
          {currentHours.toLocaleString()} / {totalHours.toLocaleString()} 
        </Text>
        <View style={{ width: 8 }} />
        <Text style={[
          styles.hrsText,
          isZero && { color: Colors.grey[300] }
        ]}>{hoursUnit}</Text>
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
    backgroundColor: Colors.white,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: 56,
    paddingBottom: 20,
    paddingHorizontal: 40,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  level: {
    ...Typography.contentSubtitle,
    color: Colors.black,
  },
  searchButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    ...Typography.title,
    color: Colors.black,
    marginBottom: 16,
  },
  hoursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  hoursText: {
    ...Typography.contentRegular,
    color: Colors.grey[300],
  },
  hrsText: {
    ...Typography.contentSuffix,
    color: Colors.grey[300],
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progressBarBackground: {
    flex: 1,
    height: 4,
    backgroundColor: Colors.grey[200],
    borderRadius: 2,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  progressBarFill: {
    height: 2,
    backgroundColor: Colors.orange[500],
    borderRadius: 1,
    marginLeft: 2,
  },
  percentageText: {
    ...Typography.contentSubtitle,
    color: Colors.black,
    minWidth: 40,
    textAlign: 'right',
  },
});
