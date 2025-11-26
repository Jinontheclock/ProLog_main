import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcon from "../MaterialIcon";

type QuizOptionProps = {
  label: string;
  isSelected: boolean;
  isCorrect: boolean;
  isIncorrect: boolean;
  disabled: boolean;
  onPress: () => void;
};

const QuizOption: React.FC<QuizOptionProps> = ({
  label,
  isSelected,
  isCorrect,
  isIncorrect,
  disabled,
  onPress,
}) => {
  return (
    <View
      style={[
        styles.basicOption,
        isSelected && !isCorrect && !isIncorrect && { backgroundColor: '#FFF3E0', borderColor: '#FF9800' },
        isCorrect && { backgroundColor: '#E8F5E8', borderColor: '#4CAF50' },
        isIncorrect && { backgroundColor: '#FFE8E8', borderColor: '#F44336' },
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={styles.optionTouchable}
      >
        <MaterialIcon
          name={
            isCorrect 
              ? "check" 
              : isIncorrect 
              ? "cancel"
              : isSelected 
              ? "radio_button_checked"
              : "radio_button_unchecked"
          }
          size={22}
          color={
            isCorrect 
              ? "#4CAF50"
              : isIncorrect 
              ? "#F44336"
              : isSelected 
              ? "#FF9800"
              : "#757575"
          }
        />
        <Text
          style={[
            styles.basicOptionText,
            isCorrect && { color: '#2E7D32' },
            isIncorrect && { color: '#C62828' },
            isSelected && !isCorrect && !isIncorrect && { color: '#E65100' },
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  basicOption: {
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 2,
    backgroundColor: "#FFFFFF",
    borderColor: "#E0E0E0",
    overflow: 'hidden',
  },
  optionTouchable: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
    minHeight: 56,
  },
  basicOptionText: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
    marginLeft: 12,
    color: "#000000",
    lineHeight: 22,
  },
});

export default QuizOption;
