import { Colors } from '@/constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

type ProgressCardProps = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  value: string;
  suffix?: string;
};

const ProgressCard: React.FC<ProgressCardProps> = ({ icon, label, value, suffix }) => {
  return (
    <View style={styles.cardWrapper}>
      <ImageBackground
        source={require('@/assets/images/Frame 1221.png')}
        style={styles.card}
        imageStyle={styles.cardImage}
        resizeMode="cover"
      >
        <View style={styles.labelRow}>
          <MaterialCommunityIcons name={icon} size={20} color={Colors.grey[400]} />
          <Text style={styles.cardLabel}>{label}</Text>
        </View>

        <View style={styles.valueRow}>
          <Text style={styles.mainNumber}>{value}</Text>
          {suffix && <Text style={styles.unit}>{suffix}</Text>}
        </View>
      </ImageBackground>
    </View>
  );
};

export const DashboardData: React.FC = () => {
  return (
    <View style={styles.container}>
      <ProgressCard icon="clock-outline" label="Hours" value="1,790" suffix="hrs" />
      <ProgressCard icon="lightning-bolt-outline" label="Skills" value="28 / 81" />
      <ProgressCard icon="school-outline" label="School" value="0/10" suffix="weeks" />
      <ProgressCard icon="trophy-outline" label="Exam" value="-" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  cardWrapper: {
    width: '48%',
    minWidth: 165,
    position: 'relative',
  },
  card: {
    padding: 16,
    minHeight: 120,
    position: 'relative',
  },
  cardImage: {
    borderRadius: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardLabel: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 16,
    color: Colors.grey[400],
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
    position: 'absolute',
    bottom: 36,
    left: 16,
  },
  mainNumber: {
    fontFamily: 'SpaceGrotesk-Medium',
    fontSize: 32,
    lineHeight: 36,
    color: Colors.grey[900],
  },
  unit: {
    fontFamily: 'SpaceGrotesk-Light',
    fontSize: 16,
    color: Colors.grey[900],
  },
});

export default DashboardData;
