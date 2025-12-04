import { Colors } from "@/constants/colors";
import { Typography } from "@/constants/typography";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Animated, DimensionValue, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
  isLoading?: boolean;
  onLevel3Press?: () => void;
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
  isLoading = false,
  onLevel3Press,
}) => {
  // Animated values for each bar section
  const bar1Animation = React.useRef(new Animated.Value(0)).current;
  const bar2Animation = React.useRef(new Animated.Value(0)).current;
  const bar3Animation = React.useRef(new Animated.Value(0)).current;
  const bar4Animation = React.useRef(new Animated.Value(0)).current;
  const bar5Animation = React.useRef(new Animated.Value(0)).current;
  const bar6Animation = React.useRef(new Animated.Value(0)).current;
  const bar7Animation = React.useRef(new Animated.Value(0)).current;
  const bar8Animation = React.useRef(new Animated.Value(0)).current;
  const bar9Animation = React.useRef(new Animated.Value(0)).current;
  
  // Animated value for margin movement
  const marginAnimation = React.useRef(new Animated.Value(typeof sProgressContainerMargin === 'number' ? sProgressContainerMargin : 0)).current;
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
    if (typeof styleProp === "string") {
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
            toValue: 1.2,
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

  // Animated progress effect - animate each section sequentially, but wait for loading to complete
  React.useEffect(() => {
    // Reset all animations first
    const resetAnimations = [
      bar1Animation,
      bar2Animation,
      bar3Animation,
      bar4Animation,
      bar5Animation,
      bar6Animation,
      bar7Animation,
      bar8Animation,
      bar9Animation,
    ];
    resetAnimations.forEach((anim) => anim.setValue(0));

    // If loading, don't start animation yet
    if (isLoading) {
      return;
    }

    // Calculate target progress for each section
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    const getTargetProgress = (startPercent: number, endPercent: number) => {
      if (clampedPercentage < startPercent) return 0;
      if (clampedPercentage >= endPercent) return 1;
      return (clampedPercentage - startPercent) / (endPercent - startPercent);
    };

    const targets = [
      getTargetProgress(0, 11.11), // bar1
      getTargetProgress(11.11, 22.22), // bar2
      getTargetProgress(22.22, 33.33), // bar3
      getTargetProgress(33.33, 44.44), // bar4
      getTargetProgress(44.44, 55.55), // bar5
      getTargetProgress(55.55, 66.66), // bar6
      getTargetProgress(66.66, 77.77), // bar7
      getTargetProgress(77.77, 88.88), // bar8
      getTargetProgress(88.88, 100), // bar9
    ];

    const animations = [
      bar1Animation,
      bar2Animation,
      bar3Animation,
      bar4Animation,
      bar5Animation,
      bar6Animation,
      bar7Animation,
      bar8Animation,
      bar9Animation,
    ];

    // Create sequential animations for each section
    const createSectionAnimation = (
      animation: Animated.Value,
      target: number,
      delay: number = 0
    ) => {
      return Animated.sequence([
        Animated.delay(delay),
        Animated.timing(animation, {
          toValue: target,
          duration: target > 0 ? 800 : 0, // Only animate if there's progress to show
          useNativeDriver: false,
        }),
      ]);
    };

    // Delay the animation start to allow loading overlay to complete
    const startDelay = 500; // Extra delay after loading completes for LoadingQuiz to finish

    setTimeout(() => {
      // Create truly sequential animations - each section waits for the previous to complete
      const createSequentialChain = (
        animationIndex: number = 0
      ): Animated.CompositeAnimation => {
        if (animationIndex >= animations.length) {
          // All animations complete
          return Animated.timing(new Animated.Value(0), {
            toValue: 0,
            duration: 0,
            useNativeDriver: false,
          });
        }

        const currentAnimation = animations[animationIndex];
        const currentTarget = targets[animationIndex];

        if (currentTarget === 0) {
          // Skip sections with no progress and move to next
          return createSequentialChain(animationIndex + 1);
        }

        return Animated.sequence([
          Animated.timing(currentAnimation, {
            toValue: currentTarget,
            duration: 600, // Slightly faster since they're truly sequential
            useNativeDriver: false,
          }),
          createSequentialChain(animationIndex + 1),
        ]);
      };

      // Start the sequential chain
      createSequentialChain().start();
    }, startDelay);
  }, [
    percentage,
    isLoading,
    bar1Animation,
    bar2Animation,
    bar3Animation,
    bar4Animation,
    bar5Animation,
    bar6Animation,
    bar7Animation,
    bar8Animation,
    bar9Animation,
  ]);

  // Animate margin movement after loading completes
  React.useEffect(() => {
    if (!isLoading && typeof sProgressContainerMargin === 'number') {
      // Start margin animation after a short delay to let LoadingQuiz finish
      setTimeout(() => {
        Animated.timing(marginAnimation, {
          toValue: sProgressContainerMargin,
          duration: 1000, // Smooth 1-second transition
          useNativeDriver: false,
        }).start();
      }, 300); // Start slightly before progress bar animation
    }
  }, [sProgressContainerMargin, isLoading, marginAnimation]);

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

  // Use animated values for progress (these will be animated from 0 to target values)
  const bar1Progress = bar1Animation;
  const bar2Progress = bar2Animation;
  const bar3Progress = bar3Animation;
  const bar4Progress = bar4Animation;
  const bar5Progress = bar5Animation;
  const bar6Progress = bar6Animation;
  const bar7Progress = bar7Animation;
  const bar8Progress = bar8Animation;
  const bar9Progress = bar9Animation;

  // Calculate actual dimensions
  const containerWidth = 300;
  const barWidth = containerWidth * 0.8; // 240px
  const barHeight = 12;
  const circleSize = 144;
  const circleRadius = 80;

  return (
    <View style={styles.container}>
      {/* Top Gradient Rectangle */}

      <LinearGradient
        colors={[Colors.backgroundGrey, "transparent"]}
        style={styles.topGradient}
        pointerEvents="none"
      />

      <Animated.View
        style={[
          styles.sProgressContainer,
          { margin: containerMargin },
          {
            marginTop: marginAnimation,
          },
        ]}
      >
        <JourneyProgressIndicator
          image={
            level1Image
              ? getImageSource(level1Image)
              : require("@/assets/images/completed_journeyIcon.png")
          }
          title="Level 1"
          subtext={level1Subtext}
          containerStyle={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignContent: "flex-start",
            position: "absolute",
            bottom: 64,
            left: 40,
            zIndex: 5,
            height: 42,
            ...parseStyleProp(level1ContainerStyle),
          }}
          imageStyle={{
            marginTop: 0,
            ...parseStyleProp(level1ImageStyle),
          }}
        />
        <JourneyProgressIndicator
          image={
            level2Image
              ? getImageSource(level2Image)
              : require("@/assets/images/inprogress_journeyIcon.png")
          }
          title="Level 2"
          subtext={level2Subtext}
          containerStyle={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: 16,
            alignContent: "flex-start",
            position: "absolute",
            bottom: 196,
            right: 40,
            zIndex: 5,
            height: 42,
            ...parseStyleProp(level2ContainerStyle),
          }}
          imageStyle={{
            ...parseStyleProp(level2ImageStyle),
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignContent: "flex-start",
            position: "absolute",
            bottom: 328,
            left: 40,
            zIndex: 5,
            height: 42,
            ...parseStyleProp(level3ContainerStyle),
          }}
        >
          <TouchableOpacity
            onPress={onLevel3Press}
            disabled={!onLevel3Press}
            activeOpacity={onLevel3Press ? 0.7 : 1}
          >
            <Animated.Image
              source={
                level3Image
                  ? getImageSource(level3Image)
                  : require("@/assets/images/locked_journeyIcon.png")
              }
              style={[
                {
                  marginTop: 0,
                  ...parseStyleProp(level3ImageStyle),
                },
                {
                  transform: [{ scale: level3ScaleAnimation }],
                },
              ]}
            />
          </TouchableOpacity>
          <View style={styles.level3TextContainer}>
            <Text style={styles.level3Title}>Level 3</Text>
            <Text style={styles.level3Subtext}>{level3Subtext}</Text>
          </View>
        </View>
        <JourneyProgressIndicator
          image={
            level4Image
              ? getImageSource(level4Image)
              : require("@/assets/images/locked_journeyIcon.png")
          }
          title="Level 4"
          subtext={level4Subtext}
          containerStyle={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: 16,
            alignContent: "flex-start",
            position: "absolute",
            bottom: 420,
            right: 40,
            zIndex: 5,
            height: 42,
            ...parseStyleProp(level4ContainerStyle),
          }}
          imageStyle={{
            marginTop: 0,
            ...parseStyleProp(level4ImageStyle),
          }}
        />

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
          <Animated.View
            style={[
              styles.progressFill,
              {
                width: bar1Progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"],
                  extrapolate: "clamp",
                }),
                height: "60%",
                top: "20%",
                backgroundColor: Colors.orange[400],
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
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
          <Animated.View
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
                borderTopColor: bar2Progress.interpolate({
                  inputRange: [0, 0.5, 0.65, 0.8, 1],
                  outputRange: [
                    "transparent",
                    "transparent",
                    "transparent",
                    Colors.orange[400],
                    Colors.orange[400],
                  ],
                  extrapolate: "clamp",
                }),
                borderRightColor: bar2Progress.interpolate({
                  inputRange: [0, 0.15, 0.3, 0.6, 1],
                  outputRange: [
                    "transparent",
                    "transparent",
                    Colors.orange[400],
                    Colors.orange[400],
                    Colors.orange[400],
                  ],
                  extrapolate: "clamp",
                }),
                borderBottomColor: bar2Progress.interpolate({
                  inputRange: [0, 0.05, 0.2, 0.4, 1],
                  outputRange: [
                    "transparent",
                    Colors.orange[400],
                    Colors.orange[400],
                    Colors.orange[400],
                    Colors.orange[400],
                  ],
                  extrapolate: "clamp",
                }),
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
          <Animated.View
            style={[
              styles.progressFill,
              {
                position: "absolute",
                right: 0,
                top: "20%",
                left: bar3Progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["100%", "0%"],
                  extrapolate: "clamp",
                }),
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
          <Animated.View
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
                borderBottomColor: bar4Progress.interpolate({
                  inputRange: [0, 0.05, 0.2, 0.4, 1],
                  outputRange: [
                    "transparent",
                    Colors.orange[400],
                    Colors.orange[400],
                    Colors.orange[400],
                    Colors.orange[400],
                  ],
                  extrapolate: "clamp",
                }),
                borderLeftColor: bar4Progress.interpolate({
                  inputRange: [0, 0.15, 0.3, 0.6, 1],
                  outputRange: [
                    "transparent",
                    "transparent",
                    Colors.orange[400],
                    Colors.orange[400],
                    Colors.orange[400],
                  ],
                  extrapolate: "clamp",
                }),
                borderTopColor: bar4Progress.interpolate({
                  inputRange: [0, 0.5, 0.65, 0.8, 1],
                  outputRange: [
                    "transparent",
                    "transparent",
                    "transparent",
                    Colors.orange[400],
                    Colors.orange[400],
                  ],
                  extrapolate: "clamp",
                }),
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
          <Animated.View
            style={[
              styles.progressFill,
              {
                width: bar5Progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"],
                  extrapolate: "clamp",
                }),
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
          <Animated.View
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
                borderTopColor: bar6Progress.interpolate({
                  inputRange: [0, 0.5, 0.65, 0.8, 1],
                  outputRange: [
                    "transparent",
                    "transparent",
                    "transparent",
                    Colors.orange[400],
                    Colors.orange[400],
                  ],
                  extrapolate: "clamp",
                }),
                borderRightColor: bar6Progress.interpolate({
                  inputRange: [0, 0.15, 0.3, 0.6, 1],
                  outputRange: [
                    "transparent",
                    "transparent",
                    Colors.orange[400],
                    Colors.orange[400],
                    Colors.orange[400],
                  ],
                  extrapolate: "clamp",
                }),
                borderBottomColor: bar6Progress.interpolate({
                  inputRange: [0, 0.05, 0.2, 0.4, 1],
                  outputRange: [
                    "transparent",
                    Colors.orange[400],
                    Colors.orange[400],
                    Colors.orange[400],
                    Colors.orange[400],
                  ],
                  extrapolate: "clamp",
                }),
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
          <Animated.View
            style={[
              styles.progressFill,
              {
                position: "absolute",
                right: 0,
                top: "20%",
                left: bar7Progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["100%", "0%"],
                  extrapolate: "clamp",
                }),
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
          <Animated.View
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
                borderBottomColor: bar8Progress.interpolate({
                  inputRange: [0, 0.05, 0.2, 0.4, 1],
                  outputRange: [
                    "transparent",
                    Colors.orange[400],
                    Colors.orange[400],
                    Colors.orange[400],
                    Colors.orange[400],
                  ],
                  extrapolate: "clamp",
                }),
                borderLeftColor: bar8Progress.interpolate({
                  inputRange: [0, 0.15, 0.3, 0.6, 1],
                  outputRange: [
                    "transparent",
                    "transparent",
                    Colors.orange[400],
                    Colors.orange[400],
                    Colors.orange[400],
                  ],
                  extrapolate: "clamp",
                }),
                borderTopColor: bar8Progress.interpolate({
                  inputRange: [0, 0.5, 0.65, 0.8, 1],
                  outputRange: [
                    "transparent",
                    "transparent",
                    "transparent",
                    Colors.orange[400],
                    Colors.orange[400],
                  ],
                  extrapolate: "clamp",
                }),
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
          <Animated.View
            style={[
              styles.progressFill,
              {
                width: bar9Progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"],
                  extrapolate: "clamp",
                }),
                height: "60%",
                top: "20%",
                backgroundColor: Colors.orange[400],
              },
            ]}
          />
        </View>
      </Animated.View>

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
    overflow: "hidden",
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
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  level3Title: {
    ...Typography.contentSubtitle,
  },
  level3Subtext: {
    ...Typography.contentTitle,
  },
});
