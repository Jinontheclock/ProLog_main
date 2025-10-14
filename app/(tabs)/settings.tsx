import { IconSymbol } from '@/components/ui/icon-symbol';
import { CommonStyles } from '@/lib/common-styles';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
          <View style={styles.profileIcon}>
            <IconSymbol name="person" size={24} color="#2C2C2C" />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileEmail}>johndoe@gmail.com</Text>
            <TouchableOpacity style={styles.accountDetails}>
              <Text style={styles.accountDetailsText}>Account details</Text>
              <IconSymbol name="chevron.right" size={16} color="#2C2C2C" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Settings Section */}
        <Text style={styles.sectionTitle}>Settings</Text>

        {/* Settings Options */}
        <View style={styles.settingsList}>
          <TouchableOpacity style={styles.settingItem}>
            <IconSymbol name="person.circle" size={20} color="#2C2C2C" />
            <Text style={styles.settingText}>Account Settings</Text>
            <IconSymbol name="chevron.right" size={16} color="#2C2C2C" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <IconSymbol name="bell" size={20} color="#2C2C2C" />
            <Text style={styles.settingText}>Notification</Text>
            <IconSymbol name="chevron.right" size={16} color="#2C2C2C" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <IconSymbol name="accessibility" size={20} color="#2C2C2C" />
            <Text style={styles.settingText}>Accessibility</Text>
            <IconSymbol name="chevron.right" size={16} color="#2C2C2C" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <IconSymbol name="gear" size={20} color="#2C2C2C" />
            <Text style={styles.settingText}>Display Settings</Text>
            <IconSymbol name="chevron.right" size={16} color="#2C2C2C" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <IconSymbol name="globe" size={20} color="#2C2C2C" />
            <Text style={styles.settingText}>Language</Text>
            <IconSymbol name="chevron.right" size={16} color="#2C2C2C" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <IconSymbol name="rectangle.portrait.and.arrow.right" size={20} color="#2C2C2C" />
            <Text style={styles.settingText}>Logout</Text>
            <IconSymbol name="chevron.right" size={16} color="#2C2C2C" />
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
    paddingBottom: 20,
  },
  profileCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  accountDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountDetailsText: {
    fontSize: 14,
    color: '#999',
    marginRight: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  settingsList: {
    paddingHorizontal: 20,
  },
  settingItem: {
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#2C2C2C',
    marginLeft: 16,
  },
});
