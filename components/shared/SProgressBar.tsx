import { Colors } from "@/constants/colors";
import { Typography } from "@/constants/typography";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Animated, DimensionValue, StyleSheet, Text, View } from "react-native";
import JourneyProgressIndicator from "./JourneyProgressIndicator";

interface SProgressBarProps {
  percentage: number;
  height?: number;
  level1Image?: any;
  level1Subtext?: string;
  level1ContainerStyle?: any;
  level1ImageStyle?: any;
  level2Image?: any;
  level2Subtext?: string;
  level2ContainerStyle?: any;
  level2ImageStyle?: any;
  level3Image?: any;
  level3Subtext?: string;
  level3ContainerStyle?: any;
  level3ImageStyle?: any;
  level4Image?: any;
  level4Subtext?: string;
  level4ContainerStyle?: any;
  level4ImageStyle?: any;
  containerMargin?: DimensionValue;
  sProgressContainerMargin?: DimensionValue;
  level3AnimationTrigger?: boolean;
}

export const SProgressBar: React.FC<SProgressBarProps> = ({
  percentage,
  height = 40,
  level1Image,
  level1Subtext = "completed",
  level1ContainerStyle,
  level1ImageStyle,
  level2Image,
  level2Subtext = "In-Progress",
  level2ContainerStyle,
  level2ImageStyle,
  level3Image,
  level3Subtext = "Locked",
  level3ContainerStyle,
  level3ImageStyle,
  level4Image,
  level4Subtext = "Locked",
  level4ContainerStyle,
  level4ImageStyle,
  containerMargin = 0,
  sProgressContainerMargin,
  level3AnimationTrigger = false,
}) => {
  // Function to resolve image sources from string paths
  const getImageSource = (imagePath: string) => {
    switch (imagePath) {
      case "@/assets/images/locked_journeyIcon.png":
        return require("@/assets/images/locked_journeyIcon.png");
      case "@/assets/images/unlocked_journeyIcon.png":
        return require("@/assets/images/unlocked_journeyIcon.png");
      case "@/assets/images/inprogress_journeyIcon.png":
        return require("@/assets/images/inprogress_journeyIcon.png");
      case "@/assets/images/completed_journeyIcon.png":
        return require("@/assets/images/completed_journeyIcon.png");
      default:
        return require("@/assets/images/inprogress_journeyIcon.png");
    }
  };

  // Function to parse style objects from JSON (if they're strings) or use them directly
  const parseStyleProp = (styleProp: any) => {
    if (typeof styleProp === 'string') {
      try {
        return JSON.parse(styleProp);
      } catch {
        return {};
      }
    }
    return styleProp || {};
  };

  // Level 3 pulsing animation
  const level3ScaleAnimation = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    if (level3AnimationTrigger) {
      const pulseAnimation = Animated.loop(
        Animated.sequence([
          Animated.timing(level3ScaleAnimation, {
            toValue: 1.15,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(level3ScaleAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      );
      pulseAnimation.start();
      
      return () => {
        pulseAnimation.stop();
        level3ScaleAnimation.setValue(1);
      };
    } else {
      level3ScaleAnimation.setValue(1);
    }
  }, [level3AnimationTrigger, level3ScaleAnimation]);

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
        image={level1Image ? getImageSource(level1Image) : require("@/assets/images/completed_journeyIcon.png")}
        title="Level 1"
        subtext={level1Subtext}
        containerStyle={{
          display: 'flex',
          flexDirection: 'row',
          gap: 16,
          alignContent: 'flex-start',
          position: 'absolute',
          bottom: 64,
          left: 40,
          zIndex: 5,
          height: 42,
          ...parseStyleProp(level1ContainerStyle)
        }}
        imageStyle={{
          marginTop: 0,
          ...parseStyleProp(level1ImageStyle)
        }}
      />
      <JourneyProgressIndicator
        image={level2Image ? getImageSource(level2Image) : require("@/assets/images/inprogress_journeyIcon.png")}
        title="Level 2"
        subtext={level2Subtext}
        containerStyle={{
          display: 'flex',
          flexDirection: 'row-reverse',
          gap: 16,
          alignContent: 'flex-start',
          position: 'absolute',
          bottom: 196,
          right: 40,
          zIndex: 5,
          height: 42,
          ...parseStyleProp(level2ContainerStyle)
        }}
        imageStyle={{
          marginTop: -14,
          ...parseStyleProp(level2ImageStyle)
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 16,
          alignContent: 'flex-start',
          position: 'absolute',
          bottom: 328,
          left: 40,
          zIndex: 5,
          height: 42,
          ...parseStyleProp(level3ContainerStyle)
        }}
      >
        <Animated.Image
          source={level3Image ? getImageSource(level3Image) : require("@/assets/images/locked_journeyIcon.png")}
          style={[
            {
              marginTop: 0,
              ...parseStyleProp(level3ImageStyle)
            },
            {
              transform: [{ scale: level3ScaleAnimation }]
            }
          ]}
        />
        <View style={styles.level3TextContainer}>
          <Text style={styles.level3Title}>Level 3</Text>
          <Text style={styles.level3Subtext}>{level3Subtext}</Text>
        </View>
      </View>
      <JourneyProgressIndicator
        image={level4Image ? getImageSource(level4Image) : require("@/assets/images/locked_journeyIcon.png")}
        title="Level 4"
        subtext={level4Subtext}
        containerStyle={{
          display: 'flex',
          flexDirection: 'row-reverse',
          gap: 16,
          alignContent: 'flex-start',
          position: 'absolute',
          bottom: 420,
          right: 40,
          zIndex: 5,
          height: 42,
          ...parseStyleProp(level4ContainerStyle)
        }}
        imageStyle={{
          marginTop: 0,
          ...parseStyleProp(level4ImageStyle)
        }}
      />
      <LinearGradient
        colors={[Colors.backgroundGrey, "transparent"]}
        style={styles.topGradient}
        pointerEvents="none"
      />

      <View style={[styles.sProgressContainer, { margin: containerMargin }, sProgressContainerMargin ? { marginTop: sProgressContainerMargin } : {}]}>
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
    height: 380,
    overflow: 'hidden'
  },
  sProgressContainer: {
    flexDirection: "column-reverse",
    width: "100%",
    // height: 380,
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
    top: -10,
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
  level3TextContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  level3Title: {
    ...Typography.contentSubtitle
  },
  level3Subtext: {
    ...Typography.contentTitle
  },

});
