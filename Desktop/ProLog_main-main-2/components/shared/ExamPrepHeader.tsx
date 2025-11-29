import { Colors } from "@/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ExamPrepHeaderProps {
  onInfoPress?: () => void;
}

export const ExamPrepHeader: React.FC<ExamPrepHeaderProps> = ({ onInfoPress }) => {
  return (
    <View style={styles.headerRow}>
      <Text style={styles.headerText}>Exam Prep</Text>
      <TouchableOpacity onPress={onInfoPress} style={styles.iconButton} hitSlop={{top:8, bottom:8, left:8, right:8}}>
        <MaterialCommunityIcons name="information-outline" size={22} color={Colors.grey[500]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  headerText: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 20,
    color: Colors.grey[700],
    textAlign: 'left',
    flex: 1,
  },
  iconButton: {
    paddingLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExamPrepHeader;
