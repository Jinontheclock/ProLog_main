import { CommonStyles } from '@/lib/common-styles';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <ScrollView style={CommonStyles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={CommonStyles.mainTitle}>Settings</Text>
        </View>

        {/* User Profile Card */}
        <View style={styles.profileCard}>
          <Image 
            source={require('@/assets/images/Frame 171.png')} 
            style={styles.profileIcon}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Gilbert Pickles</Text>
            <Text style={styles.profileEmail}>gpickles69@gmail.com</Text>
            <TouchableOpacity style={styles.accountDetails}>
              <Text style={styles.accountDetailsText}>Account details</Text>
              <Image source={require('@/assets/images/keyboard_arrow_down.png')} style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Settings Section */}
        <Text style={styles.sectionTitle}>Settings</Text>

        {/* Settings Options */}
        <View style={styles.settingsList}>
          <TouchableOpacity style={styles.settingItem}>
            <Image source={require('@/assets/images/account_circle.png')} style={styles.settingIcon} />
            <Text style={styles.settingText}>Account Settings</Text>
            <Image source={require('@/assets/images/keyboard_arrow_down.png')} style={styles.arrowIconLarge} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Image source={require('@/assets/images/notifications.png')} style={styles.settingIcon} />
            <Text style={styles.settingText}>Notification</Text>
            <Image source={require('@/assets/images/keyboard_arrow_down.png')} style={styles.arrowIconLarge} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Image source={require('@/assets/images/accessibility.png')} style={styles.settingIcon} />
            <Text style={styles.settingText}>Accessibility</Text>
            <Image source={require('@/assets/images/keyboard_arrow_down.png')} style={styles.arrowIconLarge} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Image source={require('@/assets/images/brightness_6.png')} style={styles.settingIcon} />
            <Text style={styles.settingText}>Display Settings</Text>
            <Image source={require('@/assets/images/keyboard_arrow_down.png')} style={styles.arrowIconLarge} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Image source={require('@/assets/images/language.png')} style={styles.settingIcon} />
            <Text style={styles.settingText}>Language</Text>
            <Image source={require('@/assets/images/keyboard_arrow_down.png')} style={styles.arrowIconLarge} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Image source={require('@/assets/images/exit_to_app.png')} style={styles.settingIcon} />
            <Text style={styles.settingText}>Logout</Text>
            <Image source={require('@/assets/images/keyboard_arrow_down.png')} style={styles.arrowIconLarge} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  profileIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
    fontFamily: 'Roboto-Medium',
  },
  profileEmail: {
    fontSize: 13,
    color: '#8E8E93',
    marginBottom: 6,
    fontFamily: 'Roboto',
  },
  accountDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  accountDetailsText: {
    fontSize: 13,
    color: '#000000',
    fontFamily: 'Roboto',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#8E8E93',
    marginHorizontal: 20,
    marginBottom: 12,
    fontFamily: 'Roboto',
  },
  settingsList: {
    paddingHorizontal: 20,
    gap: 12,
    paddingBottom: 100,
  },
  settingItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  settingIcon: {
    width: 24,
    height: 24,
    tintColor: '#000000',
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    marginLeft: 16,
    fontFamily: 'Roboto',
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: '#000000',
  },
  arrowIconLarge: {
    width: 24,
    height: 24,
    tintColor: '#000000',
  },
});
