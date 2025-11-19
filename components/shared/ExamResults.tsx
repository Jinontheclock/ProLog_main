import { Image } from 'expo-image';
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
                <Image
                  source={require('@/assets/images/info.png')}
                  style={styles.alertIcon}
                />
              )}
            </View>
            <TouchableOpacity style={styles.alertAction}>
              <Text style={styles.alertActionText}>{alert.actionText}</Text>
              <Image
                source={require('@/assets/images/chevron_right1.png')}
                style={styles.alertArrow}
                contentFit="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Exam Score Card */}
      <View style={styles.examCard}>
        <View style={styles.examLeft}>
          <View>
            <Text style={styles.examTitle}>{examTitle}</Text>
            <Text style={styles.examDate}>{examDate}</Text>
          </View>
          {badge && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          )}
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
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#E0E0E0',
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
    tintColor: '#999',
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
    color: '#2C2C2C',
    lineHeight: 16,
  },
  alertDate: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2C2C2C',
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
    color: '#2C2C2C',
  },
  alertArrow: {
    width: 18,
    height: 18,
    tintColor: '#2C2C2C',
  },
  examCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  examLeft: {
    flex: 1,
    justifyContent: 'space-between',
    minHeight: 140,
  },
  examTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 4,
    maxWidth: 150,
  },
  examDate: {
    fontSize: 12,
    color: '#999',
    marginBottom: 12,
  },
  badge: {
    backgroundColor: '#4A4A4A',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
  },
  examRight: {
    width: 140,
    height: 140,
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  score: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  scoreUnit: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C2C2C',
    marginTop: 8,
  },
});
