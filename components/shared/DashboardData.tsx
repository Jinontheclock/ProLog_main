import { Colors } from "@/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

type ProgressCardProps = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  value: string;
  suffix?: string;
};

const ProgressCard: React.FC<ProgressCardProps> = ({
  icon,
  label,
  value,
  suffix,
}) => {
  return (
    <View style={styles.cardWrapper}>
      <ImageBackground
        source={require("@/assets/images/Frame 1221.png")}
        style={styles.card}
        imageStyle={styles.cardImage}
        resizeMode="stretch"
      >
        <View style={styles.cardContent}>
          <View style={styles.labelRow}>
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={Colors.grey[400]}
            />
            <Text style={styles.cardLabel}>{label}</Text>
          </View>

          <View style={styles.valueRow}>
            <Text style={styles.mainNumber}>{value}</Text>
            {suffix && <Text style={styles.unit}>{suffix}</Text>}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export const DashboardData: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ProgressCard
          icon="clock-outline"
          label="Hours"
          value="1,790"
          suffix="hrs"
        />
        <ProgressCard
          icon="lightning-bolt-outline"
          label="Skills"
          value="28 / 81"
        />
      </View>
      <View style={styles.row}>
        <ProgressCard
          icon="school-outline"
          label="School"
          value="0/10"
          suffix="weeks"
        />
        <ProgressCard icon="trophy-outline" label="Exam" value="-" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16,
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  // ssssss
  cardWrapper: {
    flex: 1,
    // marginHorizontal: 4,
    position: "relative",
  },
  card: {
    width: "100%",
    // minHeight: 120,
    position: "relative",
  },
  cardContent: {
    padding: 16,
    height: 100,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  cardImage: {
    borderRadius: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardLabel: {
    fontFamily: "SpaceGrotesk-Regular",
    fontSize: 16,
    color: Colors.grey[400],
  },
  valueRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
    alignSelf: "flex-start",
  },
  mainNumber: {
    fontFamily: "SpaceGrotesk-Bold",
    fontSize: 24,
    lineHeight: 28,
    color: Colors.grey[900],
  },
  unit: {
    fontFamily: "SpaceGrotesk-Light",
    fontSize: 16,
    color: Colors.grey[900],
  },
});

export default DashboardData;
