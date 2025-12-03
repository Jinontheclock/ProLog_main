import { CommonStyles } from '@/lib/common-styles';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/shared/Buttons';

export default function ResourcesScreen() {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <Image 
        source={require('@/assets/images/background-grid 1.svg')}
        style={[CommonStyles.backgroundImage, { opacity: 0.12 }]}
        resizeMode="cover"
      />
      <ScrollView style={CommonStyles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Status Bar Spacer */}
        <View style={{ height: 47 }} />
        
        <View style={CommonStyles.headerSimple}>
          <Text style={CommonStyles.mainTitle}>Settings</Text>
        </View>

        <View style={{ paddingHorizontal: 24, paddingTop: 40 }}>
          <Button
            text="Logout"
            variant="dark"
            fullWidth={true}
            onPress={() => router.push('/login')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
