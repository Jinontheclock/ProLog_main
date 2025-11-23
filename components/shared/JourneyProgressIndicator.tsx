import { Typography } from "@/constants/typography";
import React from "react";
import { Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

type JourneyIndicatorVariant = 'completed' | 'inProgress' | 'locked' | 'unlocked';

interface JourneyProgressIndicatorProps {
  image: any; // Could be more specific with ImageSourcePropType
  title: string;
  subtext: string;
  containerStyle?: ViewStyle | ViewStyle[];
  imageStyle?: ImageStyle | ImageStyle[];
  textContainerStyle?: ViewStyle | ViewStyle[];
  titleStyle?: TextStyle | TextStyle[];
  subtextStyle?: TextStyle | TextStyle[];
}


export default function JourneyProgressIndicator({
  image, 
  title, 
  subtext,
  containerStyle,
  imageStyle,
}: JourneyProgressIndicatorProps) {
    return (
        <View style={containerStyle}>
            <Image source={image} style={imageStyle} />
            <View style={styles.textContainerStyle}>
                <Text style={styles.titleStyle}>{title}</Text>
                <Text style={styles.subtextStyle}>{subtext}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainerStyle: {
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            },
            titleStyle:{
              ...Typography.contentSubtitle
            },
            subtextStyle:{
              ...Typography.contentTitle
            }
})

