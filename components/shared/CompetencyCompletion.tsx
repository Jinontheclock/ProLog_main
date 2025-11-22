import MaterialIcon from '@/components/shared/MaterialIcon';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CompetencyCompletionProps {
  title?: string;
  showInfoIcon?: boolean;
  onInfoPress?: () => void;
  checkboxLabel: string;
  current: number;
  total: number;
  lastUpdated: string;
  progressImage: any;
}

export const CompetencyCompletion: React.FC<CompetencyCompletionProps> = ({
  title = 'Completion Details',
  showInfoIcon = true,
  onInfoPress,
  checkboxLabel,
  current,
  total,
  lastUpdated,
  progressImage,
}) => {
  return (
    <>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {showInfoIcon && (
          <TouchableOpacity onPress={onInfoPress}>
            <MaterialIcon
              name="info"
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.detailsCard}>
        <View style={styles.detailsLeft}>
          <View style={styles.checkboxRow}>
            <MaterialIcon
              name="check_box"
              size={20}
              color="#999"
            />
            <Text style={styles.detailsLabel} numberOfLines={1} ellipsizeMode="tail">{checkboxLabel}</Text>
          </View>
          
          <View style={styles.completionRow}>
            <Text style={styles.completionNumber}>{current}/{total}</Text>
            <Text style={styles.completionText}> complete</Text>
          </View>
          
          <Text style={styles.lastUpdated}>Last updated: {lastUpdated}</Text>
        </View>
        
        <View style={styles.circularProgress}>
          <Image 
            source={progressImage}
            style={styles.progressCircleImage}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    width: 353,
    alignSelf: 'center',
  },
  sectionTitle: {
    ...Typography.sectionHeader,
    color: Colors.grey[700],
    marginBottom: 0,
    marginTop: 8,
    marginLeft: 4,
  },
  infoIcon: {
    width: 20,
    height: 20,
    tintColor: '#999',
  },
  detailsCard: {
    width: 353,
    height: 134,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    paddingRight: 10,
    marginBottom: 24,
    alignSelf: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  detailsLeft: {
    flex: 1,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  checkboxIcon: {
    width: 20,
    height: 20,
  },
  detailsLabel: {
    ...Typography.contentTitle,
    color: Colors.grey[300],
  },
  completionRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  completionNumber: {
    ...Typography.contentBold,
    color: Colors.grey[900],
  },
  completionText: {
    ...Typography.contentSuffix,
    color: Colors.grey[900],
  },
  lastUpdated: {
    ...Typography.smBody,
    color: Colors.grey[300],
  },
  circularProgress: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
  },
  progressCircleImage: {
    width: 88,
    height: 88,
  },
});
