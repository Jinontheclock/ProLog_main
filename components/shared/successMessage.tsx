import { Colors, Typography } from "@/constants";
import { StyleSheet, Text, View } from "react-native";
import MaterialIcon from "./MaterialIcon";

export default function SuccessMessage() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.contentText}>Competency Marked as Complete</Text>
      <MaterialIcon name="check" color={Colors.orange[400]} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 24,
    paddingVertical: 24,
    marginHorizontal: 20,
    borderLeftWidth: 8,
    borderColor: Colors.orange[400],
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  contentText: {
    ...Typography.contentTitle,
    color: Colors.black
  }
});
