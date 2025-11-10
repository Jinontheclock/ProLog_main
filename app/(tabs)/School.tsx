import { Image } from 'expo-image';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useColorScheme } from '@/hooks/use-color-scheme';

export default function SchoolScreen() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState('program');
  const [expandedExpense, setExpandedExpense] = useState<number | null>(3);

  return (
    <View style={[styles.container, { backgroundColor: '#F5F5F5' }]}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={{ paddingBottom: 70 + insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Card */}
        <View style={styles.topCard}>
          <Text style={styles.levelText}>Level 2</Text>
          <Text style={styles.programTitle}>Technical Training</Text>
          
          <View style={styles.daysRow}>
            <Image 
              source={require('@/assets/images/schedule.png')}
              style={styles.clockIcon}
            />
            <Text style={styles.daysText}>9/10 days</Text>
          </View>

          <View style={styles.progressContainer}>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '72%' }]} />
            </View>
            <Text style={styles.progressText}>72%</Text>
          </View>
        </View>

        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={selectedTab === 'program' ? styles.tabActive : styles.tabInactive}
            onPress={() => setSelectedTab('program')}
          >
            <Image 
              source={selectedTab === 'program' 
                ? require('@/assets/images/house_siding_off.png')
                : require('@/assets/images/house_siding_on.png')
              }
              style={styles.tabIcon}
            />
            <Text style={selectedTab === 'program' ? styles.tabActiveText : styles.tabInactiveText}>Program</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={selectedTab === 'skills' ? styles.tabActive : styles.tabInactive}
            onPress={() => setSelectedTab('skills')}
          >
            <Image 
              source={selectedTab === 'skills'
                ? require('@/assets/images/electric_bolt_off.png')
                : require('@/assets/images/electric_bolt_on.png')
              }
              style={styles.tabIcon}
            />
            <Text style={selectedTab === 'skills' ? styles.tabActiveText : styles.tabInactiveText}>Skills</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={selectedTab === 'finance' ? styles.tabActive : styles.tabInactive}
            onPress={() => setSelectedTab('finance')}
          >
            <Image 
              source={selectedTab === 'finance'
                ? require('@/assets/images/paid_off.png')
                : require('@/assets/images/paid_on.png')
              }
              style={styles.tabIcon}
            />
            <Text style={selectedTab === 'finance' ? styles.tabActiveText : styles.tabInactiveText}>Finance</Text>
          </TouchableOpacity>
        </View>

        {selectedTab === 'program' && (
          <>
            {/* Program Details */}
            <Text style={styles.sectionTitle}>Program Details</Text>
            <View style={styles.detailsCard}>
              <View>
                <Text style={styles.detailLabel}>Sponsor</Text>
                <Text style={styles.detailValue}>Industrial Electrician, APPR.</Text>
                
                <Text style={[styles.detailLabel, { marginTop: 20 }]}>Institute</Text>
                <Text style={styles.detailValue}>British Columbia Institute of Technology</Text>
              </View>
              
              <View style={styles.dateRow}>
                <View style={styles.dateBox}>
                  <Text style={styles.dateLabel}>Start Date</Text>
                  <Text style={styles.dateValue}>Sep 4, 2025</Text>
                </View>
                <View style={styles.dateBox}>
                  <Text style={styles.dateLabel}>Est. End Date</Text>
                  <Text style={styles.dateValue}>Nov 14, 2025</Text>
                </View>
              </View>
            </View>

            {/* Standard Exam */}
            <Text style={styles.sectionTitle}>Standard Exam</Text>
            <View style={styles.examCard}>
              <View style={styles.examLeft}>
                <Text style={styles.examTitle}>Attempt 1</Text>
                <Text style={styles.examDate}>Mar 12, 2025</Text>
                <View style={styles.registeredBadge}>
                  <Text style={styles.registeredText}>Registered</Text>
                </View>
              </View>
              <View style={styles.examRight}>
                <Text style={styles.examScore}>-</Text>
              </View>
            </View>

            {/* Discrepancy Tracking */}
            <View style={styles.discrepancyHeader}>
              <Text style={styles.sectionTitle}>Discrepancy Tracking</Text>
              <Image 
                source={require('@/assets/images/info.png')}
                style={styles.infoIcon}
              />
            </View>

            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              style={styles.carouselContainer}
              contentContainerStyle={styles.carouselContent}
            >
              <View style={styles.campusCard}>
                <View style={styles.campusHeader}>
                  <View>
                    <Text style={styles.campusName}>BCIT Burnaby Campus</Text>
                    <Text style={styles.campusLocation}>Burnaby</Text>
                  </View>
                  <TouchableOpacity style={styles.arrowButton}>
                    <Image 
                      source={require('@/assets/images/arrow_outward.png')}
                      style={styles.arrowIcon}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.tableHeader}>
                  <Text style={styles.tableHeaderText}>Start</Text>
                  <Text style={styles.tableHeaderText}>End</Text>
                  <Text style={styles.tableHeaderText}>Slot</Text>
                </View>

                <View style={styles.tableRow}>
                  <View style={styles.dateGroup}>
                    <View style={styles.dateCell}>
                      <Text style={styles.dateCellText}>Jan 5</Text>
                      <Text style={styles.dateCellText}>2026</Text>
                    </View>
                    <View style={styles.dateConnector}>
                      <Image
                        source={require('@/assets/images/Line 6.png')}
                        style={styles.lineImage}
                      />
                    </View>
                    <View style={styles.dateCell}>
                      <Text style={styles.dateCellText}>Mar 13</Text>
                      <Text style={styles.dateCellText}>2026</Text>
                    </View>
                  </View>
                  <View style={styles.slotCell}>
                    <Text style={styles.slotCellText}>02</Text>
                  </View>
                </View>

                <View style={styles.tableRow}>
                  <View style={styles.dateGroup}>
                    <View style={styles.dateCell}>
                      <Text style={styles.dateCellText}>Jan 5,</Text>
                      <Text style={styles.dateCellText}>2026</Text>
                    </View>
                    <View style={styles.dateConnector}>
                      <Image
                        source={require('@/assets/images/Line 6.png')}
                        style={styles.lineImage}
                      />
                    </View>
                    <View style={styles.dateCell}>
                      <Text style={styles.dateCellText}>Mar 13,</Text>
                      <Text style={styles.dateCellText}>2026</Text>
                    </View>
                  </View>
                  <View style={styles.slotCell}>
                    <Text style={styles.slotCellText}>12</Text>
                  </View>
                </View>

                <View style={styles.tableRow}>
                  <View style={styles.dateGroup}>
                    <View style={styles.dateCell}>
                      <Text style={styles.dateCellText}>Jan 5,</Text>
                      <Text style={styles.dateCellText}>2026</Text>
                    </View>
                    <View style={styles.dateConnector}>
                      <Image
                        source={require('@/assets/images/Line 6.png')}
                        style={styles.lineImage}
                      />
                    </View>
                    <View style={styles.dateCell}>
                      <Text style={styles.dateCellText}>Mar 13,</Text>
                      <Text style={styles.dateCellText}>2026</Text>
                    </View>
                  </View>
                  <View style={styles.slotCell}>
                    <Text style={styles.slotCellText}>05</Text>
                  </View>
                </View>
              </View>

              <View style={styles.campusCard}>
                <View style={styles.campusHeader}>
                  <View>
                    <Text style={styles.campusName}>North Delta Secondary</Text>
                    <Text style={styles.campusLocation}>Delta</Text>
                  </View>
                  <TouchableOpacity style={styles.arrowButton}>
                    <Image 
                      source={require('@/assets/images/arrow_outward.png')}
                      style={styles.arrowIcon}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.tableHeader}>
                  <Text style={styles.tableHeaderText}>Start</Text>
                  <Text style={styles.tableHeaderText}>End</Text>
                  <Text style={styles.tableHeaderText}>Slot</Text>
                </View>

                <View style={styles.tableRow}>
                  <View style={styles.dateGroup}>
                    <View style={styles.dateCell}>
                      <Text style={styles.dateCellText}>Jan 5</Text>
                      <Text style={styles.dateCellText}>2026</Text>
                    </View>
                    <View style={styles.dateConnector}>
                      <Image
                        source={require('@/assets/images/Line 6.png')}
                        style={styles.lineImage}
                      />
                    </View>
                    <View style={styles.dateCell}>
                      <Text style={styles.dateCellText}>Mar 13</Text>
                      <Text style={styles.dateCellText}>2026</Text>
                    </View>
                  </View>
                  <View style={styles.slotCell}>
                    <Text style={styles.slotCellText}>02</Text>
                  </View>
                </View>

                <View style={styles.tableRow}>
                  <View style={styles.dateGroup}>
                    <View style={styles.dateCell}>
                      <Text style={styles.dateCellText}>Jan 5,</Text>
                      <Text style={styles.dateCellText}>2026</Text>
                    </View>
                    <View style={styles.dateConnector}>
                      <Image
                        source={require('@/assets/images/Line 6.png')}
                        style={styles.lineImage}
                      />
                    </View>
                    <View style={styles.dateCell}>
                      <Text style={styles.dateCellText}>Mar 13,</Text>
                      <Text style={styles.dateCellText}>2026</Text>
                    </View>
                  </View>
                  <View style={styles.slotCell}>
                    <Text style={styles.slotCellText}>12</Text>
                  </View>
                </View>

                <View style={styles.tableRow}>
                  <View style={styles.dateGroup}>
                    <View style={styles.dateCell}>
                      <Text style={styles.dateCellText}>Jan 5,</Text>
                      <Text style={styles.dateCellText}>2026</Text>
                    </View>
                    <View style={styles.dateConnector}>
                      <Image
                        source={require('@/assets/images/Line 6.png')}
                        style={styles.lineImage}
                      />
                    </View>
                    <View style={styles.dateCell}>
                      <Text style={styles.dateCellText}>Mar 13,</Text>
                      <Text style={styles.dateCellText}>2026</Text>
                    </View>
                  </View>
                  <View style={styles.slotCell}>
                    <Text style={styles.slotCellText}>05</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </>
        )}

        {selectedTab === 'skills' && (
          <>
            {/* Completion Details */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Completion Details</Text>
              <Image 
                source={require('@/assets/images/info.png')}
                style={styles.infoIcon}
              />
            </View>

            <View style={styles.detailsCard}>
              <View style={styles.detailsLeft}>
                <View style={styles.checkboxRow}>
                  <Image 
                    source={require('@/assets/images/check_box.png')}
                    style={styles.checkboxIcon}
                  />
                  <Text style={styles.detailsLabel}>Theoretical Competencies</Text>
                </View>
                
                <View style={styles.completionRow}>
                  <Text style={styles.completionNumber}>25/50</Text>
                  <Text style={styles.completionText}> complete</Text>
                </View>
                
                <Text style={styles.lastUpdated}>Last updated: Mar 12, 2025</Text>
              </View>
              
              <View style={styles.circularProgress}>
                <Image 
                  source={require('@/assets/images/Group 46.png')}
                  style={styles.progressCircleImage}
                />
              </View>
            </View>

            {/* Line Completion */}
            <View style={styles.lineCompletionCard}>
              <Text style={styles.lineCompletionTitle}>Line Completion</Text>
              
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={styles.linesContainer}
              >
                <View style={styles.lineItemBox}>
                  <View style={styles.lineItem}>
                    <Text style={styles.lineName}>Line A</Text>
                    <Text style={styles.lineProgress}>6/10</Text>
                    <View style={styles.lineButtonOrange}>
                      <Image 
                        source={require('@/assets/images/more_horiz.png')}
                        style={styles.lineButtonIcon}
                      />
                    </View>
                  </View>
                </View>
                
                <View style={styles.lineItemBox}>
                  <View style={styles.lineItem}>
                    <Text style={styles.lineName}>Line B</Text>
                    <Text style={styles.lineProgress}>3/3</Text>
                    <View style={styles.lineButtonGray}>
                      <Image 
                        source={require('@/assets/images/check.png')}
                        style={styles.lineButtonIcon}
                      />
                    </View>
                  </View>
                </View>
                
                <View style={styles.lineItemBox}>
                  <View style={styles.lineItem}>
                    <Text style={styles.lineName}>Line C</Text>
                    <Text style={styles.lineProgress}>2/2</Text>
                    <View style={styles.lineButtonGray}>
                      <Image 
                        source={require('@/assets/images/check.png')}
                        style={styles.lineButtonIcon}
                      />
                    </View>
                  </View>
                </View>
                
                <View style={styles.lineItemBox}>
                  <View style={styles.lineItem}>
                    <Text style={styles.lineName}>Line D</Text>
                    <Text style={styles.lineProgress}>3/6</Text>
                    <View style={styles.lineButtonOrange}>
                      <Image 
                        source={require('@/assets/images/more_horiz.png')}
                        style={styles.lineButtonIcon}
                      />
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>

            {/* View Checklist Button */}
            <TouchableOpacity style={styles.checklistButton}>
              <Text style={styles.checklistButtonText}>View Checklist</Text>
              <Image 
                source={require('@/assets/images/arrow_forward.png')}
                style={styles.checklistArrow}
              />
            </TouchableOpacity>
          </>
        )}

        {selectedTab === 'finance' && (
          <>
            {/* Potential Expenses */}
            <View style={styles.sectionHeader}>
              <View>
                <Text style={styles.sectionTitle}>Potential Expenses</Text>
                <Text style={styles.sectionSubtitle}>Upcoming potential expenses to consider for financial planning</Text>
              </View>
              <Image 
                source={require('@/assets/images/info.png')}
                style={styles.infoIcon}
              />
            </View>

            {/* Expense Card 1 */}
            <View style={styles.expenseCard}>
              <View style={styles.expenseHeader}>
                <Text style={styles.expenseAmount}>$200</Text>
                <TouchableOpacity 
                  style={styles.viewDetailButton}
                  onPress={() => setExpandedExpense(expandedExpense === 1 ? null : 1)}
                >
                  <Text style={styles.viewDetailText}>View detail</Text>
                  <Image 
                    source={expandedExpense === 1 
                      ? require('@/assets/images/expand_more_up.png')
                      : require('@/assets/images/expand_more_down.png')
                    }
                    style={styles.expandIcon}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.expenseTitle}>Tools</Text>
              
              {expandedExpense === 1 && (
                <View style={styles.expenseDetails}>
                  <Text style={styles.expenseDetailTitle}>Tool Kit</Text>
                  
                  <View style={styles.expenseDetailRow}>
                    <Text style={styles.expenseDetailLabel}>Basic Tools</Text>
                    <Text style={styles.expenseDetailValue}>$200.00</Text>
                  </View>
                </View>
              )}
            </View>

            {/* Expense Card 2 */}
            <View style={styles.expenseCard}>
              <View style={styles.expenseHeader}>
                <Text style={styles.expenseAmount}>$85</Text>
                <TouchableOpacity 
                  style={styles.viewDetailButton}
                  onPress={() => setExpandedExpense(expandedExpense === 2 ? null : 2)}
                >
                  <Text style={styles.viewDetailText}>View detail</Text>
                  <Image 
                    source={expandedExpense === 2 
                      ? require('@/assets/images/expand_more_up.png')
                      : require('@/assets/images/expand_more_down.png')
                    }
                    style={styles.expandIcon}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.expenseTitle}>Books</Text>
              
              {expandedExpense === 2 && (
                <View style={styles.expenseDetails}>
                  <Text style={styles.expenseDetailTitle}>Course Materials</Text>
                  
                  <View style={styles.expenseDetailRow}>
                    <Text style={styles.expenseDetailLabel}>Textbooks</Text>
                    <Text style={styles.expenseDetailValue}>$85.00</Text>
                  </View>
                </View>
              )}
            </View>

            {/* Expense Card 3 */}
            <View style={styles.expenseCard}>
              <View style={styles.expenseHeader}>
                <Text style={styles.expenseAmount}>$1,900</Text>
                <TouchableOpacity 
                  style={styles.viewDetailButton}
                  onPress={() => setExpandedExpense(expandedExpense === 3 ? null : 3)}
                >
                  <Text style={styles.viewDetailText}>View detail</Text>
                  <Image 
                    source={expandedExpense === 3 
                      ? require('@/assets/images/expand_more_up.png')
                      : require('@/assets/images/expand_more_down.png')
                    }
                    style={styles.expandIcon}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.expenseTitle}>Tools</Text>
              
              {expandedExpense === 3 && (
                <View style={styles.expenseDetails}>
                  <Text style={styles.expenseDetailTitle}>BCIT Industrial Electrician</Text>
                  
                  <View style={styles.expenseDetailRow}>
                    <Text style={styles.expenseDetailLabel}>Tuition</Text>
                    <Text style={styles.expenseDetailValue}>$1,450.30</Text>
                  </View>
                  
                  <View style={styles.expenseDetailRow}>
                    <Text style={styles.expenseDetailLabel}>BCITSA</Text>
                    <Text style={styles.expenseDetailValue}>$155.50</Text>
                  </View>
                  
                  <View style={styles.expenseDetailRow}>
                    <Text style={styles.expenseDetailLabel}>Ancillary</Text>
                    <Text style={styles.expenseDetailValue}>$25.30</Text>
                  </View>
                </View>
              )}
            </View>
          </>
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  topCard: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    padding: 24,
    paddingTop: 60,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  levelText: {
    fontSize: 14,
    color: '#999',
    marginBottom: 4,
  },
  programTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 16,
  },
  daysRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  clockIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
    tintColor: '#999',
  },
  daysText: {
    fontSize: 16,
    color: '#2C2C2C',
    fontWeight: '500',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  progressBarBg: {
    flex: 1,
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#E06D34',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#2C2C2C',
    fontWeight: '600',
    marginLeft: 12,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 4,
    marginBottom: 24,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  tabActive: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E06D34',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tabInactive: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tabIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  tabActiveText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  tabInactiveText: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 16,
    marginTop: 8,
    marginHorizontal: 20,
  },
  detailsCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    marginHorizontal: 20,
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  detailLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    color: '#2C2C2C',
    fontWeight: '500',
  },
  dateRow: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 16,
  },
  dateBox: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
  },
  dateLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  dateValue: {
    fontSize: 14,
    color: '#2C2C2C',
    fontWeight: '500',
  },
  examCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  examLeft: {
    flex: 1,
  },
  examTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  examDate: {
    fontSize: 12,
    color: '#999',
    marginBottom: 12,
  },
  registeredBadge: {
    backgroundColor: '#4A4A4A',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },
  registeredText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  examRight: {
    width: 100,
    height: 100,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  examScore: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  discrepancyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginHorizontal: 20,
  },
  infoIcon: {
    width: 20,
    height: 20,
    tintColor: '#999',
  },
  carouselContainer: {
    marginBottom: 20,
  },
  carouselContent: {
    paddingHorizontal: 20,
    gap: 16,
  },
  campusCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    width: 350,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  campusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  campusName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  campusLocation: {
    fontSize: 12,
    color: '#999',
  },
  arrowButton: {
    backgroundColor: '#E06D34',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 0,
  },
  tableHeaderText: {
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  dateGroup: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
  },
  dateCell: {
    flex: 2,
  },
  dateCellText: {
    fontSize: 16,
    color: '#2C2C2C',
    textAlign: 'center',
    fontWeight: '400',
  },
  dateConnector: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineImage: {
    width: 60,
    height: 2,
    resizeMode: 'contain',
  },
  slotCell: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 68,
  },
  slotCellText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 20,
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
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressCircleImage: {
    width: 100,
    height: 100,
  },
  progressTextContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  progressValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E06D34',
  },
  progressUnit: {
    fontSize: 16,
    color: '#E06D34',
  },
  lineCompletionCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  lineCompletionTitle: {
    fontSize: 16,
    color: '#999',
    marginBottom: 20,
  },
  linesContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  lineItemBox: {
    width: 80,
    backgroundColor: '#F0F0F0',
    borderRadius: 40,
    padding: 16,
  },
  lineItem: {
    alignItems: 'center',
    gap: 12,
  },
  lineName: {
    fontSize: 16,
    color: '#2C2C2C',
    fontWeight: '500',
  },
  lineProgress: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  lineButtonOrange: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E06D34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineButtonGray: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D5D5D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineButtonIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  checklistButton: {
    backgroundColor: '#2C2C2C',
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginHorizontal: 100,
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  checklistButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  checklistArrow: {
    width: 18,
    height: 18,
    tintColor: '#FFFFFF',
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  expenseCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  expenseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  expenseAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  viewDetailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewDetailText: {
    fontSize: 12,
    color: '#999',
  },
  expandIcon: {
    width: 16,
    height: 16,
    tintColor: '#999',
  },
  expenseTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2C2C2C',
  },
  expenseDetails: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  expenseDetailTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 12,
  },
  expenseDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  expenseDetailLabel: {
    fontSize: 14,
    color: '#666',
  },
  expenseDetailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2C2C2C',
  },
});
