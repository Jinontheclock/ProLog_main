import { Colors } from '@/constants/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface SProgressBarProps {
  percentage: number;
  height?: number;
}

export const SProgressBar: React.FC<SProgressBarProps> = ({ 
  percentage, 
  height = 40
}) => {

  // Ensure percentage is between 0 and 100
  const clampedPercentage = Math.max(0, Math.min(100, percentage));
  
  // Calculate progress for each segment (each segment is 50% of total)
  const bottomSegmentProgress = Math.min(clampedPercentage * 2, 100);
  const topSegmentProgress = Math.max(0, (clampedPercentage - 50) * 2);

  return (
    <View style={styles.container}>
      <View style={[styles.sProgressContainer, { height: height * 2 }]}>

        {/* Top Rectangle */}
        <View style={[
          styles.topSegment, 
          { 
            width: '80%', 
            height: 127,
            zIndex: 1,
            borderTopWidth: 12,
            borderBottomWidth: 12,
            borderLeftWidth: 12,
            borderRightWidth: 0,
            borderStyle: 'solid',
            borderBottomColor: topSegmentProgress >= 15 ? Colors.orange[400] : Colors.grey[100],
            borderLeftColor: topSegmentProgress >= 50 ? Colors.orange[400] : Colors.grey[100],
            borderTopColor: topSegmentProgress >= 85 ? Colors.orange[400] : Colors.grey[100],
            borderRightColor: 'transparent',
            borderTopLeftRadius: 80,
            borderBottomLeftRadius: 80,
          }
        ]} />

        {/* Bottom Rectangle */}
        <View style={[
          styles.bottomSegment, 
          { 
            width: '80%', 
            height: 127,
            alignSelf: 'flex-end',
            marginTop: -12,
            zIndex: 2,
            borderTopWidth: 12,
            borderBottomWidth: 12,
            borderRightWidth: 12,
            borderLeftWidth: 0,
            borderStyle: 'solid',
            borderBottomColor: bottomSegmentProgress >= 5 ? Colors.orange[400] : Colors.grey[100],
            borderRightColor: bottomSegmentProgress >= 35 ? Colors.orange[400] : Colors.grey[100],
            borderTopColor: bottomSegmentProgress >= 85 ? Colors.orange[400] : Colors.grey[100],
            borderLeftColor: 'transparent',
            borderTopRightRadius: 80,
            borderBottomRightRadius: 80,
          }
        ]} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300
  },
  sProgressContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  topSegment: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  bottomSegment: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: 'transparent',
  },
});
