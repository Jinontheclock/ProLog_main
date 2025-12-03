import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface LoadingQuizProps {
  loadingTitle?: string;
  loadingContent?: string;
  height?: number;
  isLoading?: boolean;
}

export const LoadingQuiz: React.FC<LoadingQuizProps> = ({
  loadingTitle = "Loading...",
  loadingContent = "Please wait while we process your request.",
  height,
  isLoading = true,
}) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const animationRef = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    const startAnimation = () => {
      rotateAnim.setValue(0);
      animationRef.current = Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2000, // 2 seconds for 1 rotation
        easing: Easing.linear,
        useNativeDriver: true,
      });
      animationRef.current.start(({ finished }) => {
        if (finished && isLoading) {
          startAnimation(); // Loop the animation
        }
      });
    };

    if (isLoading) {
      startAnimation();
    } else {
      animationRef.current?.stop();
    }

    return () => {
      animationRef.current?.stop();
    };
  }, [isLoading, rotateAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <View style={[styles.box, height && { height }]}>
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
    width: 370,
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
    marginTop: 24,
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
