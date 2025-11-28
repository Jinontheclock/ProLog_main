const AsyncStorage = require('@react-native-async-storage/async-storage').default;

class CompletionStore {
  constructor() {
    this.completions = new Set();
    this.initialized = false;
  }

  async initialize() {
    if (this.initialized) return;
    
    try {
      const stored = await AsyncStorage.getItem('competency_completions');
      if (stored) {
        const completionsArray = JSON.parse(stored);
        this.completions = new Set(completionsArray);
      }
      this.initialized = true;
    } catch (error) {
      console.error('Error loading completions:', error);
    }
  }

  async clearAll() {
    this.completions.clear();
    try {
      await AsyncStorage.removeItem('competency_completions');
      console.log('All competency completions cleared from AsyncStorage');
    } catch (error) {
      console.error('Error clearing completions:', error);
      throw error;
    }
  }

  async checkCurrentData() {
    try {
      const stored = await AsyncStorage.getItem('competency_completions');
      console.log('Current AsyncStorage data:', stored ? JSON.parse(stored) : 'No data');
    } catch (error) {
      console.error('Error checking data:', error);
    }
  }
}

// Create instance and clear all data
const completionStore = new CompletionStore();

async function clearAllCompetencies() {
  try {
    console.log('🔍 Checking current competency data...');
    await completionStore.checkCurrentData();
    
    console.log('🧹 Clearing all competencies...');
    await completionStore.initialize();
    await completionStore.clearAll();
    
    console.log('✅ Verification - checking data after clear...');
    await completionStore.checkCurrentData();
    
    console.log('🎉 All competency completions have been successfully cleared!');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

clearAllCompetencies();