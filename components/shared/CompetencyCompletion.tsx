import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CompetencyCompletionProps {
  title?: string;
  showInfoIcon?: boolean;
  checkboxLabel: string;
  current: number;
  total: number;
  lastUpdated: string;
  progressImage: any;
}

export const CompetencyCompletion: React.FC<CompetencyCompletionProps> = ({
  title = 'Completion Details',
  showInfoIcon = true,
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
          <Image 
            source={require('@/assets/images/info.png')}
            style={styles.infoIcon}
          />
        )}
      </View>

      <View style={styles.detailsCard}>
        <View style={styles.detailsLeft}>
          <View style={styles.checkboxRow}>
            <Image 
              source={require('@/assets/images/check_box.png')}
              style={styles.checkboxIcon}
            />
            <Text style={styles.detailsLabel}>{checkboxLabel}</Text>
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
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 0,
    marginTop: 8,
  },
  infoIcon: {
    width: 20,
    height: 20,
    tintColor: '#999',
  },
  detailsCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    marginHorizontal: 20,
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
    fontSize: 14,
    color: '#999',
  },
  completionRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  completionNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  completionText: {
    fontSize: 16,
    color: '#2C2C2C',
  },
  lastUpdated: {
    fontSize: 12,
    color: '#999',
  },
  circularProgress: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressCircleImage: {
    width: 100,
    height: 100,
  },
});
