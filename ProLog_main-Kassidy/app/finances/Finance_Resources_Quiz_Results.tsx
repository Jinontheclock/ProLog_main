import { Colors } from '@/constants/colors';
import { BorderRadius, Spacing } from '@/constants/design-tokens';
import { Typography } from '@/constants/typography';
import { CommonStyles } from '@/lib/common-styles';
import dimensions from '@/lib/dimensions';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EligibilityQuizSavedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Success Content */}
        <View style={styles.contentContainer}>
          <View style={styles.checkmarkContainer}>
            <Image 
              source={require('@/assets/images/icon-bookmark-check.png')}
              style={styles.checkmarkIcon}
            />
          </View>
          
          <Text style={styles.successTitle}>Your answers have{'\n'}been saved.</Text>
          
          <Text style={styles.successDescription}>
            The eligibility section of the financial resources will now automatically show your eligibility.
          </Text>

          <View style={[CommonStyles.neoDoubleOuter, { borderRadius: BorderRadius.xl, width: '100%' }]}>
            <TouchableOpacity 
              style={[CommonStyles.neoDoubleInner, styles.goToButton]}
              onPress={() => router.push('/finances/Finance_Resources')}
            >
              <Text style={styles.goToButtonText}>Go to Resources</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey[50],
    width: dimensions.constrainedWidth,
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
    width: dimensions.constrainedWidth,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing['3xl'],
  },
  checkmarkContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  checkmarkIcon: {
    width: 60,
    height: 60,
  },
  successTitle: {
    ...Typography.pageTitle,
    fontWeight: 'bold',
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: Spacing.lg,
    lineHeight: 32,
  },
  successDescription: {
    ...Typography.bodyLarge,
    color: Colors.grey[600],
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: Spacing['3xl'],
    paddingHorizontal: Spacing.lg,
  },
  goToButton: {
    paddingHorizontal: 80,
    paddingVertical: Spacing.md,
    alignItems: 'center',
  },
  goToButtonText: {
    ...Typography.bodyLarge,
    color: Colors.text.primary,
  },
});
