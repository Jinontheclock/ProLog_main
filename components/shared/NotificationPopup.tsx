import { Colors, Typography } from "@/constants";
import { Image, StyleSheet, Text, View } from "react-native";

interface NotificationPopupProps {
  typeName?: string;
  date?: string;
  title?: string;
  content?: string;
}

export default function NotificationPopup({ 
  typeName = "Notification",
  date = "now", 
  title = "Title",
  content = "Content" 
}: NotificationPopupProps) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoBackground}>
        <Image
          source={require("@/assets/images/white_logo.png")}
          style={styles.logoContainer}
        />
      </View>

      <View style={styles.textContainer}>
        <View style={styles.notificationnType}>
          <Text style={styles.typeName}>{typeName}</Text>
          <Text style={styles.notificationDate}>{date}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.notificationTitle}>{title}</Text>
          <Text style={styles.notificationContent}>{content}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    marginHorizontal: 20,
    paddingLeft: 16,
    paddingRight: 24,
    paddingVertical: 20,
    justifyContent: "flex-start",
    backgroundColor: Colors.grey[900],
    borderWidth: 1,
    borderColor: Colors.borderGrey,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  logoBackground: {
    backgroundColor: Colors.orange[400],
    width: 45,
    height: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    marginLeft: 2,
    height: 25,
    resizeMode: 'contain'
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    flex: 1,
  },
  notificationnType: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  typeName: {
    ...Typography.smBody,
    color: Colors.white,
  },
  notificationDate: {
    ...Typography.smBody,
    color: Colors.white,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  notificationTitle: {
    ...Typography.contentTitle,
    color: Colors.white,
  },
  notificationContent: {
    ...Typography.contentSubtitle,
    color: Colors.white,
  },
});
