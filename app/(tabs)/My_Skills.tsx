import { CommonStyles } from '@/lib/common-styles';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SkillsScreen() {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <Image 
        source={require('@/assets/images/background-grid 1.svg')}
        style={CommonStyles.backgroundImage}
        resizeMode="cover"
      />
      <ScrollView style={CommonStyles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={CommonStyles.headerSimple}>
          <Text style={CommonStyles.mainTitle}>Skills</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
