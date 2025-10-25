import { Colors } from '@/constants/colors';
import { BorderRadius, IconSize, Spacing } from '@/constants/design-tokens';
import { Typography } from '@/constants/typography';
import { CommonStyles } from '@/lib/common-styles';
import { dimensions } from '@/lib/dimensions';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FinancesScreen() {
  const router = useRouter();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <SafeAreaView style={CommonStyles.container}>
      <ScrollView style={CommonStyles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={CommonStyles.headerSimple}>
          <Text style={CommonStyles.mainTitle}>Finances</Text>
        </View>
        
        <View style={CommonStyles.contentPadding}>
          {/* Chart Card */}
          <View style={[CommonStyles.neoInsetOuter, { borderRadius: BorderRadius.lg }]}>
            <View style={[CommonStyles.neoInsetInner, styles.chartCard]}>
              <Image 
                source={require('@/assets/images/chart-income-comparison.png')}
                style={styles.chartImage}
                resizeMode="contain"
              />
              
              <Text style={styles.description}>
                Getting an education helps you progress to the next level, thus also increasing pay by <Text style={styles.highlightText}>10%</Text>.
              </Text>
              
              <View style={styles.costRow}>
                <Text style={styles.costLabel}>Est. Education Cost</Text>
                <Text style={styles.costValue}>$ 1900 / Level</Text>
              </View>
              
              <View style={[CommonStyles.neoDoubleOuter, { borderRadius: BorderRadius.base }]}>
                <TouchableOpacity 
                  style={[CommonStyles.neoDoubleInner, styles.detailsButton]}
                  onPress={() => setShowDetails(true)}
                >
                  <Text style={styles.detailsButtonText}>Show Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Note Section */}
          <View style={styles.noteSection}>
            <Text style={styles.noteText}>
              <Text style={styles.noteBold}>Note:</Text> Refer Resources section below to get help acquiring finances for your educational journey and any other needs
            </Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Financial Resources Card */}
          <View style={[CommonStyles.neoDoubleOuter, { borderRadius: BorderRadius.lg }]}>
            <TouchableOpacity 
              style={[CommonStyles.neoDoubleInner, styles.resourceCard]}
              onPress={() => router.push('/finances/Finance_Resources')}
            >
              <View style={styles.resourceContent}>
                <View style={styles.resourceTextContainer}>
                  <Text style={styles.resourceTitle}>Financial{'\n'}Resources</Text>
                  <Text style={styles.resourceSubtitle}>Scholarship, grants, bursaries, EI, and more</Text>
                </View>
                <Image 
                  source={require('@/assets/images/icon-arrow-forward.png')}
                  style={styles.arrowIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Financial Breakdown Modal */}
      <Modal
        visible={showDetails}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowDetails(false)}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity 
            style={styles.modalBackground}
            activeOpacity={1}
            onPress={() => setShowDetails(false)}
          />
          <View style={styles.modalContainer}>
            <View style={styles.modalHandle} />
            
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.modalTitle}>Financial Breakdown</Text>
              
              {/* Chart Image */}
              <Image 
                source={require('@/assets/images/chart-financial-breakdown.png')}
                style={styles.breakdownChart}
                resizeMode="contain"
              />
              
              {/* Total Annual Income Section */}
              <View style={styles.sectionContainer}>
                <View style={styles.sectionDivider} />
                <Text style={styles.sectionTitle}>Total Annual Income <Text style={styles.estimatedText}>(Estimated)</Text></Text>
                
                <View style={styles.incomeRow}>
                  <View style={styles.incomeItem}>
                    <Text style={styles.incomeLabel}>Current ($24/hr)</Text>
                    <Text style={styles.incomeValue}>$ 46,080</Text>
                  </View>
                  <Image 
                    source={require('@/assets/images/chart-income-arrow.png')}
                    style={styles.arrowImage}
                    resizeMode="contain"
                  />
                  <View style={styles.incomeItem}>
                    <Text style={styles.incomeLabel}>Increase ($27/hr)</Text>
                    <Text style={styles.incomeValue}>$ 51,840</Text>
                  </View>
                </View>
                
                <Text style={styles.sectionDescription}>
                  By getting an education, you are estimated to increase by an extra 1 1/2 months pay <Text style={styles.orangeText}>($ 5,760)</Text>
                </Text>
              </View>
              
              {/* Required Savings Section */}
              <View style={styles.sectionContainer}>
                <View style={styles.sectionDivider} />
                <Text style={styles.sectionTitle}>Required Savings <Text style={styles.estimatedText}>(Estimated)</Text></Text>
                
                <Text style={styles.earningsLabel}>Monthly Earnings ($ 3840)</Text>
                
                <Image 
                  source={require('@/assets/images/chart-savings-bar.png')}
                  style={styles.savingsBar}
                  resizeMode="stretch"
                />
                
                <View style={styles.savingsLabels}>
                  <Text style={styles.savingsLabel}>Expenses/Spending = $ 3,040</Text>
                  <Text style={styles.savingsLabel}>Savings = $ 800</Text>
                </View>
                
                <Text style={styles.sectionDescription}>
                  By saving <Text style={styles.boldText}>20%</Text> every month for <Text style={styles.boldText}>11 months</Text> you can cover your educational as well as living expenses <Text style={styles.boldText}>($ 8800)</Text>.
                </Text>
              </View>
              
              <View style={[CommonStyles.neoDoubleOuter, { borderRadius: BorderRadius.base }]}>
                <TouchableOpacity 
                  style={[CommonStyles.neoDoubleInner, styles.closeDetailsButton]}
                  onPress={() => setShowDetails(false)}
                >
                  <Text style={styles.closeDetailsButtonText}>Close Details</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chartCard: {
    backgroundColor: Colors.grey[50],
    padding: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  chartImage: {
    width: '100%',
    height: 280,
    marginBottom: Spacing.base,
  },
  description: {
    ...Typography.bodyBase,
    color: Colors.text.secondary,
    marginBottom: Spacing.base,
  },
  highlightText: {
    ...Typography.bodyBase,
    fontWeight: '600',
    color: Colors.text.primary,
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.base,
  },
  costLabel: {
    ...Typography.subTitle,
    color: Colors.text.primary,
  },
  costValue: {
    ...Typography.bodyLarge,
    color: Colors.text.primary,
  },
  detailsButton: {
    paddingVertical: Spacing.md,
    alignItems: 'center',
  },
  detailsButtonText: {
    ...Typography.bodyLarge,
    color: Colors.text.primary,
  },
  noteSection: {
    marginBottom: Spacing.lg,
  },
  noteText: {
    ...Typography.caption,
    color: Colors.text.secondary,
    marginBottom: Spacing.base,
  },
  noteBold: {
    ...Typography.caption,
    fontWeight: '600',
    color: Colors.text.primary,
  },
  dividerLine: {
    height: 1,
    backgroundColor: Colors.border.default,
  },
  resourceCard: {
    padding: Spacing.xl,
    paddingVertical: Spacing['2xl'],
  },
  resourceContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resourceTextContainer: {
    flex: 1,
  },
  resourceTitle: {
    ...Typography.pageTitleRegular,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
  },
  resourceSubtitle: {
    ...Typography.bodyBase,
    color: Colors.text.secondary,
  },
  arrowIcon: {
    width: IconSize.base,
    height: IconSize.base,
    tintColor: Colors.text.secondary,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.background.overlay,
  },
  modalContainer: {
    backgroundColor: Colors.grey[50],
    borderTopLeftRadius: BorderRadius.lg,
    borderTopRightRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing['3xl'],
    paddingTop: Spacing.md,
    width: dimensions.constrainedWidth,
    alignSelf: 'center',
    maxHeight: '85%',
  },
  modalHandle: {
    width: 140,
    height: 4,
    backgroundColor: Colors.grey[300],
    borderRadius: BorderRadius.xs,
    alignSelf: 'center',
    marginBottom: Spacing.lg,
  },
  modalTitle: {
    ...Typography.pageTitle,
    color: Colors.text.primary,
    marginTop: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  breakdownChart: {
    width: '100%',
    height: 220,
    marginBottom: Spacing.xl,
  },
  sectionContainer: {
    marginBottom: Spacing['2xl'],
  },
  sectionDivider: {
    height: 1,
    backgroundColor: Colors.border.default,
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    ...Typography.sectionTitle,
    color: Colors.text.primary,
    marginBottom: Spacing.base,
  },
  estimatedText: {
    ...Typography.bodyLarge,
    color: Colors.text.secondary,
  },
  incomeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.base,
    paddingHorizontal: Spacing.sm,
  },
  incomeItem: {
    alignItems: 'center',
  },
  incomeLabel: {
    ...Typography.caption,
    color: Colors.text.secondary,
    marginBottom: Spacing.sm,
    fontWeight: '400',
  },
  incomeValue: {
    ...Typography.sectionTitle,
    color: Colors.text.primary,
    fontWeight: '700',
  },
  arrowImage: {
    width: 60,
    height: 12,
    marginHorizontal: Spacing.base,
  },
  earningsLabel: {
    ...Typography.bodyBase,
    color: Colors.text.primary,
    marginBottom: Spacing.md,
  },
  savingsBar: {
    width: '100%',
    height: 40,
    marginBottom: Spacing.sm,
  },
  savingsLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.base,
  },
  savingsLabel: {
    ...Typography.tag,
    color: Colors.text.primary,
  },
  sectionDescription: {
    ...Typography.bodyBase,
    color: Colors.text.primary,
  },
  orangeText: {
    ...Typography.bodyBase,
    color: Colors.primary,
    fontWeight: '600',
  },
  boldText: {
    ...Typography.bodyBase,
    fontWeight: '800',
    color: Colors.text.primary,
  },
  closeDetailsButton: {
    paddingVertical: Spacing.md,
    alignItems: 'center',
    marginTop: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  closeDetailsButtonText: {
    ...Typography.bodyLarge,
    color: Colors.text.primary,
  },
});
