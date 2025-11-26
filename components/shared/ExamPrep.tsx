import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export const ExamPrep = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardButton} activeOpacity={0.85}>
        <Image 
          source={require('@/assets/images/examprep1.jpg')} 
          style={styles.image1}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardButton} activeOpacity={0.85}>
        <Image 
          source={require('@/assets/images/examprep2.jpg')} 
          style={styles.image2}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardButton: {
    marginBottom: 12,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image1: {
    width: 353,
    height: 136,
  },
  image2: {
    width: 353,
    height: 118,
  },
});

export default ExamPrep;