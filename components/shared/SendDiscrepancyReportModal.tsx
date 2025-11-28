import { Colors } from '@/constants/colors';
import { FontFamily } from '@/constants/typography';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcon from './MaterialIcon';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSend: () => void;
  company?: string;
}

const SendDiscrepancyReportModal: React.FC<Props> = ({ visible, onClose, onSend, company = 'Burquos Inc.' }) => {
  if (!visible) return null;
  return (
    <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose}>
      <TouchableOpacity activeOpacity={1} onPress={e => e.stopPropagation()} style={styles.modal}>
        <View style={styles.headerRow}>
          <View style={styles.iconWrap}>
            <MaterialIcon name="ios_share" size={20} color={Colors.grey[900]} />
          </View>
          <Text style={styles.title}>Send Discrepancy Report</Text>
        </View>
        <View style={styles.bodyRow}>
          <Text style={styles.bodyText}>
            We have detected discrepancy between your official hours and the pay stub hours. Would you like to send a report to - 
            <Text style={styles.company}>{company}</Text>
            ?
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onSend}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Send Report</Text>
            <MaterialIcon name="arrow_forward" size={18} color={Colors.grey[50]} style={styles.buttonIcon} />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonIcon: {
      marginLeft: 8,
    },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(44, 44, 44, 0.18)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
    bodyRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginBottom: 8,
      width: '100%',
    },
    buttonRow: {
      width: '100%',
      alignItems: 'flex-start',
    },
  modal: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    width: 353,
    // height: 174,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
    iconWrap: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
      height: 20,
      width: 20,
    },
    title: {
      fontFamily: FontFamily.roboto.medium,
      fontSize: 16,
      color: Colors.grey[900],
      lineHeight: 20 * 1.05,
      textAlign: 'left',
    },
    bodyText: {
      fontFamily: FontFamily.roboto.medium,
      fontSize: 14,
      color: Colors.grey[400],
      lineHeight: 18 * 1.05,
      textAlign: 'left',
    },
    company: {
      fontFamily: FontFamily.roboto.medium,
      fontSize: 14,
      color: Colors.grey[900],
      lineHeight: 18 * 1.05,
      marginLeft: 2,
  },
    button: {
      backgroundColor: Colors.grey[700],
      borderRadius: 30,
      width: 150,
      height: 42,
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginTop: 8,
      paddingLeft: 24,
  },
  buttonText: {
    fontFamily: FontFamily.roboto.regular,
    fontSize: 14,
    color: Colors.grey[50],
    lineHeight: 18 * 1.05,
  },
});

export default SendDiscrepancyReportModal;
