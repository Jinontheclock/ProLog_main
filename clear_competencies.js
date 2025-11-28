// Simple script to clear all competency completions from AsyncStorage
const AsyncStorage = require('@react-native-async-storage/async-storage').default;

async function clearAllCompetencies() {
  try {
    console.log('Checking current competency completions...');
    
    // Check what's currently stored
    const currentData = await AsyncStorage.getItem('competency_completions');
    console.log('Current completions:', currentData ? JSON.parse(currentData) : 'No data found');
    
    // Clear all completions
    await AsyncStorage.removeItem('competency_completions');
    console.log('✅ Successfully cleared all competency completions from AsyncStorage');
    
    // Verify it's cleared
    const afterClear = await AsyncStorage.getItem('competency_completions');
    console.log('Verification - After clearing:', afterClear);
    
  } catch (error) {
    console.error('❌ Error clearing competencies:', error);
  }
}

// Run the function
clearAllCompetencies()
  .then(() => {
    console.log('Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Script failed:', error);
    process.exit(1);
  });