import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';

// Removed duplicate export
export const LoadingQuiz: React.FC = () => {
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
          <Animated.Image
            source={require('@/assets/images/loading.svg')}
            style={[styles.loadingImage, { transform: [{ rotate: spin }] }]}
          />
        </View>
        <Text style={styles.title}>Generating Program Details</Text>
        <Text style={styles.description}>
          Your quiz is based on the entirety of level 2 competencies and will generate up to 40 questions to test your understanding.
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
  loadingImage: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
  },
});
