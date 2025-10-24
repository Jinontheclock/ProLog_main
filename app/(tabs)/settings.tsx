import {
    BorderRadius,
    Colors,
    IconSize,
    SETTINGS_OPTIONS,
    Shadow,
    Spacing,
    Typography,
    USER
} from '@/constants';
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
            source={require('@/assets/images/avatar-profile.png')} 
            style={styles.profileIcon}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{USER.DEFAULT_NAME}</Text>
            <Text style={styles.profileEmail}>{USER.DEFAULT_EMAIL}</Text>
            <TouchableOpacity style={styles.accountDetails}>
              <Text style={styles.accountDetailsText}>Account details</Text>
              <Image source={require('@/assets/images/icon-dropdown-arrow.png')} style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Settings Section */}
        <Text style={styles.sectionTitle}>Settings</Text>

        {/* Settings Options */}
        <View style={styles.settingsList}>
          <TouchableOpacity style={styles.settingItem}>
            <Image source={require('@/assets/images/icon-account.png')} style={styles.settingIcon} />
            <Text style={styles.settingText}>{SETTINGS_OPTIONS.ACCOUNT}</Text>
            <Image source={require('@/assets/images/icon-dropdown-arrow.png')} style={styles.arrowIconLarge} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Image source={require('@/assets/images/icon-notifications.png')} style={styles.settingIcon} />
            <Text style={styles.settingText}>{SETTINGS_OPTIONS.NOTIFICATIONS}</Text>
            <Image source={require('@/assets/images/icon-dropdown-arrow.png')} style={styles.arrowIconLarge} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Image source={require('@/assets/images/icon-accessibility.png')} style={styles.settingIcon} />
            <Text style={styles.settingText}>{SETTINGS_OPTIONS.ACCESSIBILITY}</Text>
            <Image source={require('@/assets/images/icon-dropdown-arrow.png')} style={styles.arrowIconLarge} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Image source={require('@/assets/images/icon-brightness.png')} style={styles.settingIcon} />
            <Text style={styles.settingText}>{SETTINGS_OPTIONS.DISPLAY}</Text>
            <Image source={require('@/assets/images/icon-dropdown-arrow.png')} style={styles.arrowIconLarge} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Image source={require('@/assets/images/icon-language.png')} style={styles.settingIcon} />
            <Text style={styles.settingText}>{SETTINGS_OPTIONS.LANGUAGE}</Text>
            <Image source={require('@/assets/images/icon-dropdown-arrow.png')} style={styles.arrowIconLarge} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Image source={require('@/assets/images/icon-logout.png')} style={styles.settingIcon} />
            <Text style={styles.settingText}>{SETTINGS_OPTIONS.LOGOUT}</Text>
            <Image source={require('@/assets/images/icon-dropdown-arrow.png')} style={styles.arrowIconLarge} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.base,
  },
  profileCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing['3xl'],
    flexDirection: 'row',
    alignItems: 'center',
    ...Shadow.sm,
  },
  profileIcon: {
    width: 60, // Profile icon size
    height: 60,
    borderRadius: 30,
    marginRight: Spacing.base,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    ...Typography.bodyLarge,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: Spacing.xxs,
  },
  profileEmail: {
    ...Typography.caption,
    color: Colors.text.secondary,
    marginBottom: Spacing.xs,
  },
  accountDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  accountDetailsText: {
    ...Typography.caption,
    color: Colors.black,
  },
  sectionTitle: {
    ...Typography.body,
    color: Colors.text.secondary,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },
  settingsList: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
    paddingBottom: 100, // Extra space for bottom tab bar
  },
  settingItem: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.base,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    ...Shadow.sm,
  },
  settingIcon: {
    width: IconSize.base,
    height: IconSize.base,
    tintColor: Colors.black,
  },
  settingText: {
    flex: 1,
    ...Typography.bodyLarge,
    color: Colors.black,
    marginLeft: Spacing.base,
  },
  arrowIcon: {
    width: IconSize.xs,
    height: IconSize.xs,
    tintColor: Colors.black,
  },
  arrowIconLarge: {
    width: IconSize.base,
    height: IconSize.base,
    tintColor: Colors.black,
  },
});
