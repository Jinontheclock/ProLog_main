import MaterialIcon from '@/components/shared/MaterialIcon';
import { Tags } from '@/components/shared/Tags';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface AlertMessage {
  type: 'warning' | 'success';
  text: string;
  date?: string;
  actionText: string;
}

interface ExamResultsProps {
  alerts: AlertMessage[];
  examTitle: string;
  examDate: string;
  score: number;
  badge?: string;
}

export const ExamResults: React.FC<ExamResultsProps> = ({
  alerts,
  examTitle,
  examDate,
  score,
  badge,
}) => {
  return (
    <View style={styles.container}>
      {/* Alert Messages */}
      {alerts.map((alert, index) => (
        <View
          key={index}
          style={styles.alertBox}
        >
          <View style={styles.alertContent}>
            <View style={styles.alertHeader}>
              <View style={styles.alertText}>
                <Text style={styles.alertMessage}>
                  {alert.text}
                  {alert.date && (
                    <Text style={styles.alertDateInline}> {alert.date}</Text>
                  )}
                </Text>
              </View>
                  {index === 0 && (
                    <MaterialIcon
                      name="info"
                      size={20}
                      color={Colors.grey[300]}
                    />
                  )}
            </View>
            <TouchableOpacity style={styles.alertAction}>
              <Text style={styles.alertActionText}>{alert.actionText}</Text>
                  <MaterialIcon
                    name="chevron_right"
                    size={18}
                    color={Colors.grey[900]}
                  />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Exam Score Card */}
      <View style={styles.examCard}>
        <View style={styles.examLeft}>
          <View style={styles.examInfo}>
            <Text style={styles.examTitle}>{examTitle}</Text>
            <Text style={styles.examDate}>{examDate}</Text>
          </View>
          {badge && <Tags label={badge} />}
        </View>
        <View style={styles.examRight}>
          <Text style={styles.score}>{score}</Text>
          <Text style={styles.scoreUnit}>%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  alertBox: {
      backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1.5,
    borderStyle: 'dashed',
      borderColor: Colors.grey[200],
  },
  alertContent: {
    gap: 12,
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
  },
  alertIcon: {
    width: 20,
    height: 20,
      tintColor: Colors.grey[300],
  },
  alertText: {
    flex: 1,
  },
  alertMessage: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
  },
  alertDateInline: {
    fontSize: 12,
    fontWeight: '700',
      color: Colors.grey[900],
    lineHeight: 16,
  },
  alertDate: {
    fontSize: 13,
    fontWeight: '600',
      color: Colors.grey[900],
    marginTop: 4,
  },
  alertAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  alertActionText: {
    fontSize: 14,
    fontWeight: '600',
      color: Colors.grey[900],
  },
  alertArrow: {
    width: 18,
    height: 18,
      tintColor: Colors.grey[900],
  },
  examCard: {
     backgroundColor: Colors.white,
     borderRadius: 20,
     padding: 8,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'stretch',
     borderWidth: 1,
     borderColor: Colors.grey[50],
     shadowColor: Colors.black,
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.05,
     shadowRadius: 8,
     elevation: 2,
     width: 386,
  },
  examLeft: {
    flex: 1,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingLeft: 12,
  },
  examInfo: {
    alignSelf: 'flex-start',
  },
  examTitle: {
    ...Typography.contentMedium,
    color: Colors.grey[900],
    marginBottom: 4,
    maxWidth: 150,
    flexWrap: 'wrap',
  },
  examDate: {
    ...Typography.smBody,
    color: Colors.grey[500],
    marginBottom: 12,
  },

  examRight: {
    width: 140,
    height: 127,
    backgroundColor: Colors.grey[50],
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginLeft: 12,
  },
  score: {
    ...Typography.contentBold,
    color: Colors.grey[900],
  },
  scoreUnit: {
    ...Typography.contentSuffix,
    color: Colors.grey[900],
    marginTop: 8,
  },
});
