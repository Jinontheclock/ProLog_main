import { CommonStyles } from '@/lib/common-styles';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FinancesScreen() {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <ScrollView style={CommonStyles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={CommonStyles.headerSimple}>
          <Text style={CommonStyles.mainTitle}>Finances</Text>
        </View>
        
        <View style={CommonStyles.contentPadding}>
          <Text style={CommonStyles.placeholderText}>Finances content coming soon</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

