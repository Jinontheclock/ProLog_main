import { Colors } from '@/constants/colors';
import { FontFamily } from '@/constants/typography';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from './Buttons';
import MaterialIcon from './MaterialIcon';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSend: () => void;
  company?: string;
  icon?: string;
  iconColor?: string;
  title?: string;
  content?: string;
  buttonText?: string;
  buttonIcon?: string;
  buttonVariant?: 'primary' | 'dark' | 'light' | 'grey200' | 'secondary';
}

const SendDiscrepancyReportModal: React.FC<Props> = ({ 
  visible, 
  onClose, 
  onSend, 
  company = 'Burquos Inc.',
  icon = 'ios_share',
  iconColor = Colors.grey[900],
  title = 'Send Discrepancy Report',
  content,
  buttonText = 'Send Report',
  buttonIcon = 'arrow_forward',
  buttonVariant = 'dark'
}) => {
  if (!visible) return null;
  return (
    <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose}>
      <TouchableOpacity activeOpacity={1} onPress={e => e.stopPropagation()} style={styles.modal}>
        <View style={styles.headerRow}>
          <View style={styles.iconWrap}>
            <MaterialIcon name={icon} size={20} color={iconColor} />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.bodyRow}>
          <Text style={styles.bodyText}>
            {content || (
              <>
                We have detected discrepancy between your official hours and the pay stub hours. Would you like to send a report to - 
                <Text style={styles.company}>{company}</Text>
                ?
              </>
            )}
          </Text>
        </View>
        <Button
          text={buttonText}
          variant={buttonVariant}
          onPress={onSend}
          iconComponent={<MaterialCommunityIcons name={buttonIcon} size={18} color={Colors.grey[50]} />}
          customStyle={{
            height: 42,
            alignSelf: 'flex-start',
            marginTop: 8,
          }}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  modal: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    width: 353,
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
});

export default SendDiscrepancyReportModal;
