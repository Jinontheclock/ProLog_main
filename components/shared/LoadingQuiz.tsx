import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface LoadingQuizProps {
  loadingTitle?: string;
  loadingContent?: string;
}

export const LoadingQuiz: React.FC<LoadingQuizProps> = ({
  loadingTitle = "Loading...",
  loadingContent = "Please wait while we process your request.",
}) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: 5,
      duration: 10000, // 10 seconds for 5 rotations
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [rotateAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 5],
    outputRange: ['0deg', '1800deg'], // 360deg * 5
  });

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.loadingImageWrap}>
          <Animated.View style={[styles.circularLoader, { transform: [{ rotate: spin }] }]}>
            <Svg width={65} height={65} viewBox="0 0 65 65">
              <Circle
                cx={32.5}
                cy={32.5}
                r={28}
                stroke={Colors.grey[100]}
                strokeWidth={4}
                fill="none"
              />
              <Circle
                cx={32.5}
                cy={32.5}
                r={28}
                stroke={Colors.orange[400]}
                strokeWidth={4}
                strokeDasharray={175.929} // 2 * π * 28
                strokeDashoffset={131.947} // 75% of circumference
                strokeLinecap="round"
                fill="none"
              />
            </Svg>
          </Animated.View>
        </View>
        <Text style={styles.title}>{loadingTitle}</Text>
        <Text style={styles.description}>
          {loadingContent}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  box: {
    backgroundColor: Colors.white,
    borderColor: Colors.borderGrey,
    borderWidth: 1,
    borderRadius: 20,
    width: 353,
    height: 453,
    paddingVertical: 48,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 1,
  },
  title: {
    ...Typography.contentBold,
    color: Colors.grey[900],
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
  description: {
    ...Typography.bigBody,
    color: Colors.grey[900],
    textAlign: 'center',
    fontWeight: '400',
  },
  loadingImageWrap: {
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    marginBottom: 8,
  },
  circularLoader: {
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
