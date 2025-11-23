import { Colors } from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import JourneyProgressIndicator from "./JourneyProgressIndicator";

interface SProgressBarProps {
  percentage: number;
  height?: number;
}

export const SProgressBar: React.FC<SProgressBarProps> = ({
  percentage,
  height = 40,
}) => {
  // Ensure percentage is between 0 and 100
  const clampedPercentage = Math.max(0, Math.min(100, percentage));

  // 9-bar S-shaped progress structure (each bar ≈ 11.11%)
  // Bar1: Bottom rectangular bar (0-11.11%)
  // Bar2: Bottom-right half-circle bar (11.11-22.22%)
  // Bar3: Middle 1 rectangular bar (22.22-33.33%)
  // Bar4: Middle-left half-circle bar (33.33-44.44%)
  // Bar5: Middle 2 rectangular bar (44.44-55.55%)
  // Bar6: Middle-right half-circle bar (55.55-66.66%)
  // Bar7: Middle 3 rectangular bar (66.66-77.77%)
  // Bar8: Top-left half-circle bar (77.77-88.88%)
  // Bar9: Top rectangular bar (88.88-100%)

  // Calculate progressive fills for each section as actual values (0-1)
  const getProgress = (startPercent: number, endPercent: number) => {
    if (clampedPercentage < startPercent) return 0;
    if (clampedPercentage >= endPercent) return 1;
    const progress =
      (clampedPercentage - startPercent) / (endPercent - startPercent);
    return Math.max(0, Math.min(1, progress));
  };

  // Progressive values for each bar (0-1)
  const bar1Progress = getProgress(0, 11.11); // Bar1: Bottom rectangular bar
  const bar2Progress = getProgress(11.11, 22.22); // Bar2: Bottom-right half-circle bar
  const bar3Progress = getProgress(22.22, 33.33); // Bar3: Middle 1 rectangular bar
  const bar4Progress = getProgress(33.33, 44.44); // Bar4: Middle-left half-circle bar
  const bar5Progress = getProgress(44.44, 55.55); // Bar5: Middle 2 rectangular bar
  const bar6Progress = getProgress(55.55, 66.66); // Bar6: Middle-right half-circle bar
  const bar7Progress = getProgress(66.66, 77.77); // Bar7: Middle 3 rectangular bar
  const bar8Progress = getProgress(77.77, 88.88); // Bar8: Top-left half-circle bar
  const bar9Progress = getProgress(88.88, 100); // Bar9: Top rectangular bar

  // Calculate actual dimensions
  const containerWidth = 300;
  const barWidth = containerWidth * 0.8; // 240px
  const barHeight = 12;
  const circleSize = 144;
  const circleRadius = 80;





  return (
    <View style={styles.container}>
      {/* Top Gradient Rectangle */}
      <JourneyProgressIndicator
        image={require("@/assets/images/completed_journeyIcon.png")}
        title="Level 1"
        subtext="completed"
        containerStyle={{
          display: 'flex',
          flexDirection: 'row',
          gap: 16,
          alignContent: 'flex-start',
          position: 'absolute',
          bottom: 64,
          left: 40,
          zIndex: 5,
          height: 42
        }}
      />
      <JourneyProgressIndicator
        image={require("@/assets/images/inprogress_journeyIcon.png")}
        title="Level 2"
        subtext="In-Progress"
        containerStyle={{
          display: 'flex',
          flexDirection: 'row-reverse',
          gap: 16,
          alignContent: 'flex-start',
          position: 'absolute',
          bottom: 196,
          right: 40,
          zIndex: 5,
          height: 42
        }}
        imageStyle={{
          marginTop: -14
        }}
      />
      <JourneyProgressIndicator
        image={require("@/assets/images/locked_journeyIcon.png")}
        title="Level 3"
        subtext="Locked"
        containerStyle={{
          display: 'flex',
          flexDirection: 'row',
          gap: 16,
          alignContent: 'flex-start',
          position: 'absolute',
          bottom: 312,
          left: 40,
          zIndex: 5,
          height: 42
        }}
        imageStyle={{
          marginTop: -14
        }}
      />
      <LinearGradient
        colors={[Colors.backgroundGrey, "transparent"]}
        style={styles.topGradient}
        pointerEvents="none"
      />

      <View style={styles.sProgressContainer}>
        {/* Bar1: Bottom Rectangular Bar */}
        <View
          style={[
            styles.bar,
            {
              width: "73%",
              height: barHeight,
              backgroundColor: Colors.white,
              alignSelf: "flex-end",
              position: "absolute",
              bottom: 14,
              right: 65,
              left: 20,
              zIndex: 2,
              borderRadius: 20,
            },
          ]}
        >
          <View
            style={[
              styles.progressFill,
              {
                width: `${bar1Progress * 100}%`,
                height: "60%",
                top: "20%",
                backgroundColor: Colors.orange[400],
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30
              },
            ]}
          />
        </View>

        {/* Bar2: Bottom-Right Half-Circle Bar */}
        <View
          style={{
            position: "relative",
            alignSelf: "flex-end",
            marginVertical: -6,
          }}
        >
          {/* Background Circle */}
          <View
            style={[
              styles.circle,
              {
                width: circleSize / 2,
                height: circleSize,
                borderTopRightRadius: circleRadius,
                borderBottomRightRadius: circleRadius,
                borderTopWidth: barHeight,
                borderRightWidth: barHeight,
                borderBottomWidth: barHeight,
                borderLeftWidth: 0,
                borderTopColor: Colors.white,
                borderRightColor: Colors.white,
                borderBottomColor: Colors.white,
                backgroundColor: "transparent",
              },
            ]}
          />
          {/* Progress Overlay */}
          <View
            style={[
              styles.circle,
              {
                position: "absolute",
                top: barHeight * 0.2,
                right: barHeight * 0.2,
                width: circleSize / 2 - barHeight * 0.4,
                height: circleSize - barHeight * 0.4,
                borderTopRightRadius: circleRadius - barHeight * 0.2,
                borderBottomRightRadius: circleRadius - barHeight * 0.2,
                borderTopWidth: barHeight * 0.6,
                borderRightWidth: barHeight * 0.6,
                borderBottomWidth: barHeight * 0.6,
                borderLeftWidth: 0,
                borderTopColor:
                  bar2Progress > 0.33 ? Colors.orange[400] : "transparent",
                borderRightColor:
                  bar2Progress > 0.66 ? Colors.orange[400] : "transparent",
                borderBottomColor:
                  bar2Progress > 0 ? Colors.orange[400] : "transparent",
                backgroundColor: "transparent",
              },
            ]}
          />
        </View>

        {/* Bar3: Middle 1 Rectangular Bar */}
        <View
          style={[
            styles.bar,
            {
              width: "60%",
              height: barHeight,
              backgroundColor: Colors.white,
              alignSelf: "center",
              marginVertical: -6,
              zIndex: 2,
            },
          ]}
        >
          <View
            style={[
              styles.progressFill,
              {
                position: "absolute",
                right: 0,
                top: "20%",
                left: `${100 - bar3Progress * 100}%`,
                height: "60%",
                backgroundColor: Colors.orange[400],
              },
            ]}
          />
        </View>

        {/* Bar4: Middle 1 Left Half-Circle Bar */}
        <View
          style={{
            position: "relative",
            alignSelf: "flex-start",
            marginVertical: -6,
          }}
        >
          {/* Background Circle */}
          <View
            style={[
              styles.circle,
              {
                width: circleSize / 2,
                height: circleSize,
                borderTopLeftRadius: circleRadius,
                borderBottomLeftRadius: circleRadius,
                borderTopWidth: barHeight,
                borderLeftWidth: barHeight,
                borderBottomWidth: barHeight,
                borderRightWidth: 0,
                borderTopColor: Colors.white,
                borderLeftColor: Colors.white,
                borderBottomColor: Colors.white,
                backgroundColor: "transparent",
              },
            ]}
          />
          {/* Progress Overlay */}
          <View
            style={[
              styles.circle,
              {
                position: "absolute",
                top: barHeight * 0.2,
                left: barHeight * 0.2,
                width: circleSize / 2 - barHeight * 0.4,
                height: circleSize - barHeight * 0.4,
                borderTopLeftRadius: circleRadius - barHeight * 0.2,
                borderBottomLeftRadius: circleRadius - barHeight * 0.2,
                borderTopWidth: barHeight * 0.6,
                borderLeftWidth: barHeight * 0.6,
                borderBottomWidth: barHeight * 0.6,
                borderRightWidth: 0,
                borderBottomColor:
                  bar4Progress > 0 ? Colors.orange[400] : "transparent",
                borderLeftColor:
                  bar4Progress > 0.33 ? Colors.orange[400] : "transparent",
                borderTopColor:
                  bar4Progress > 0.66 ? Colors.orange[400] : "transparent",
                backgroundColor: "transparent",
              },
            ]}
          />
        </View>

        {/* Bar5: Middle 2 Rectangular Bar */}
        <View
          style={[
            styles.bar,
            {
              width: "60%",
              height: barHeight,
              backgroundColor: Colors.white,
              alignSelf: "center",
              marginVertical: -6,
              zIndex: 2,
            },
          ]}
        >
          <View
            style={[
              styles.progressFill,
              {
                width: `${bar5Progress * 100}%`,
                height: "60%",
                top: "20%",
                backgroundColor: Colors.orange[400],
              },
            ]}
          />
        </View>

        {/* Bar6: Middle 2 Right Half-Circle Bar */}
        <View
          style={{
            position: "relative",
            alignSelf: "flex-end",
            marginVertical: -6,
          }}
        >
          {/* Background Circle */}
          <View
            style={[
              styles.circle,
              {
                width: circleSize / 2,
                height: circleSize,
                borderTopRightRadius: circleRadius,
                borderBottomRightRadius: circleRadius,
                borderTopWidth: barHeight,
                borderRightWidth: barHeight,
                borderBottomWidth: barHeight,
                borderLeftWidth: 0,
                borderTopColor: Colors.white,
                borderRightColor: Colors.white,
                borderBottomColor: Colors.white,
                backgroundColor: "transparent",
              },
            ]}
          />
          {/* Progress Overlay */}
          <View
            style={[
              styles.circle,
              {
                position: "absolute",
                top: barHeight * 0.2,
                right: barHeight * 0.2,
                width: circleSize / 2 - barHeight * 0.4,
                height: circleSize - barHeight * 0.4,
                borderTopRightRadius: circleRadius - barHeight * 0.2,
                borderBottomRightRadius: circleRadius - barHeight * 0.2,
                borderTopWidth: barHeight * 0.6,
                borderRightWidth: barHeight * 0.6,
                borderBottomWidth: barHeight * 0.6,
                borderLeftWidth: 0,
                borderTopColor:
                  bar6Progress > 0.33 ? Colors.orange[400] : "transparent",
                borderRightColor:
                  bar6Progress > 0.66 ? Colors.orange[400] : "transparent",
                borderBottomColor:
                  bar6Progress > 0 ? Colors.orange[400] : "transparent",
                backgroundColor: "transparent",
              },
            ]}
          />
        </View>

        {/* Bar7: Middle 3 Rectangular Bar */}
        <View
          style={[
            styles.bar,
            {
              width: "60%",
              height: barHeight,
              backgroundColor: Colors.white,
              alignSelf: "center",
              marginVertical: -6,
              zIndex: 2,
            },
          ]}
        >
          <View
            style={[
              styles.progressFill,
              {
                position: "absolute",
                right: 0,
                top: "20%",
                left: `${100 - bar7Progress * 100}%`,
                height: "60%",
                backgroundColor: Colors.orange[400],
              },
            ]}
          />
        </View>

        {/* Bar8: Top-Left Half-Circle Bar */}
        <View
          style={{
            position: "relative",
            alignSelf: "flex-start",
            marginVertical: -6,
          }}
        >
          {/* Background Circle */}
          <View
            style={[
              styles.circle,
              {
                width: circleSize / 2,
                height: circleSize,
                borderTopLeftRadius: circleRadius,
                borderBottomLeftRadius: circleRadius,
                borderTopWidth: barHeight,
                borderLeftWidth: barHeight,
                borderBottomWidth: barHeight,
                borderRightWidth: 0,
                borderTopColor: Colors.white,
                borderLeftColor: Colors.white,
                borderBottomColor: Colors.white,
                backgroundColor: "transparent",
              },
            ]}
          />
          {/* Progress Overlay */}
          <View
            style={[
              styles.circle,
              {
                position: "absolute",
                top: barHeight * 0.2,
                left: barHeight * 0.2,
                width: circleSize / 2 - barHeight * 0.4,
                height: circleSize - barHeight * 0.4,
                borderTopLeftRadius: circleRadius - barHeight * 0.2,
                borderBottomLeftRadius: circleRadius - barHeight * 0.2,
                borderTopWidth: barHeight * 0.6,
                borderLeftWidth: barHeight * 0.6,
                borderBottomWidth: barHeight * 0.6,
                borderRightWidth: 0,
                borderBottomColor:
                  bar8Progress > 0 ? Colors.orange[400] : "transparent",
                borderLeftColor:
                  bar8Progress > 0.33 ? Colors.orange[400] : "transparent",
                borderTopColor:
                  bar8Progress > 0.66 ? Colors.orange[400] : "transparent",
                backgroundColor: "transparent",
              },
            ]}
          />
        </View>

        {/* Bar9: Top Rectangular Bar */}
        <View
          style={[
            styles.bar,
            {
              width: "80%",
              height: barHeight,
              backgroundColor: Colors.white,
              alignSelf: "flex-start",
              marginVertical: -6,
              left: 55,
            },
          ]}
        >
          <View
            style={[
              styles.progressFill,
              {
                width: `${bar9Progress * 100}%`,
                height: "60%",
                top: "20%",
                backgroundColor: Colors.orange[400],
              },
            ]}
          />
        </View>


      </View>

      {/* Bottom Gradient Rectangle */}
      <LinearGradient
        colors={["transparent", Colors.backgroundGrey]}
        style={styles.bottomGradientContainer}
        pointerEvents="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    alignSelf: "center",
    // height: 400,
  },
  sProgressContainer: {
    flexDirection: "column-reverse",
    width: "100%",
    height: 380,
    overflow: "hidden",
    paddingBottom: 20,
    // paddingVertical: 20,
  },
  bar: {
    position: "relative",
    overflow: "hidden",
  },
  circle: {
    overflow: "hidden",
  },
  progressFill: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  topGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    zIndex: 10,
  },
  bottomGradientContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    zIndex: 10,
  },

});
