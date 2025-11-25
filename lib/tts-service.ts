import { Audio } from 'expo-av';

export interface TTSConfig {
  text: string;
  languageCode?: string;
  voiceName?: string;
  gender?: 'MALE' | 'FEMALE' | 'NEUTRAL';
  speakingRate?: number;
  pitch?: number;
}

export class GoogleTTSService {
  private apiKey: string;
  private baseUrl = 'https://texttospeech.googleapis.com/v1/text:synthesize';
  private currentSound: Audio.Sound | null = null;
  private isInitialized: boolean = false;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.initializeAudio();
  }

  private async initializeAudio(): Promise<void> {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });
      this.isInitialized = true;
      console.log('Audio initialized successfully');
    } catch (error) {
      console.error('Failed to initialize audio:', error);
    }
  }

  async synthesizeSpeech(config: TTSConfig): Promise<string> {
    if (!this.apiKey) {
      throw new Error('Google TTS API key is not configured');
    }

    if (!config.text || config.text.trim().length === 0) {
      throw new Error('Text content is empty');
    }

    const {
      text,
      languageCode = 'en-US',
      voiceName = 'en-US-Standard-A',
      gender = 'FEMALE',
      speakingRate = 1.0,
      pitch = 0.0
    } = config;

    const requestBody = {
      input: { text: text.trim() },
      voice: {
        languageCode,
        name: voiceName,
        ssmlGender: gender
      },
      audioConfig: {
        audioEncoding: 'MP3',
        speakingRate,
        pitch
      }
    };

    console.log('Making TTS API request with:', { text: text.substring(0, 50) + '...', languageCode, voiceName });

    try {
      const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('TTS API error response:', errorText);
        throw new Error(`TTS API request failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      if (!data.audioContent) {
        throw new Error('No audio content received from TTS API');
      }

      console.log('TTS API request successful, audio content length:', data.audioContent.length);
      return data.audioContent;
    } catch (error) {
      console.error('Error synthesizing speech:', error);
      throw error;
    }
  }

  async playAudio(audioContent: string): Promise<Audio.Sound> {
    if (!this.isInitialized) {
      await this.initializeAudio();
    }

    try {
      // Stop any existing audio first
      if (this.currentSound) {
        await this.stopAudio();
      }

      console.log('Creating audio from base64 content, length:', audioContent.length);
      
      // Convert base64 to data URI
      const audioUri = `data:audio/mp3;base64,${audioContent}`;
      
      // Create and load the sound
      const { sound } = await Audio.Sound.createAsync(
        { uri: audioUri },
        { 
          shouldPlay: false,
          progressUpdateIntervalMillis: 100
        }
      );

      // Check if sound loaded successfully
      const status = await sound.getStatusAsync();
      if (!status.isLoaded) {
        await sound.unloadAsync();
        throw new Error('Failed to load audio file');
      }

      console.log('Audio loaded successfully, duration:', status.durationMillis);
      this.currentSound = sound;
      return sound;
    } catch (error) {
      console.error('Error playing audio:', error);
      throw new Error(`Failed to create audio: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async speakText(config: TTSConfig): Promise<Audio.Sound> {
    try {
      const audioContent = await this.synthesizeSpeech(config);
      const sound = await this.playAudio(audioContent);
      return sound;
    } catch (error) {
      console.error('Error in text-to-speech:', error);
      throw error;
    }
  }

  async stopAudio(): Promise<void> {
    if (this.currentSound) {
      try {
        await this.currentSound.stopAsync();
        await this.currentSound.unloadAsync();
        this.currentSound = null;
      } catch (error) {
        console.error('Error stopping audio:', error);
      }
    }
  }

  async pauseAudio(): Promise<void> {
    if (this.currentSound) {
      try {
        await this.currentSound.pauseAsync();
      } catch (error) {
        console.error('Error pausing audio:', error);
      }
    }
  }

  async resumeAudio(): Promise<void> {
    if (this.currentSound) {
      try {
        await this.currentSound.playAsync();
      } catch (error) {
        console.error('Error resuming audio:', error);
      }
    }
  }

  getCurrentSound(): Audio.Sound | null {
    return this.currentSound;
  }
}

// Helper function to create TTS service instance
export const createTTSService = (apiKey: string): GoogleTTSService => {
  return new GoogleTTSService(apiKey);
};

// Helper function to get duration from audio content
export const getAudioDuration = async (audioContent: string): Promise<number> => {
  try {
    const audioUri = `data:audio/mp3;base64,${audioContent}`;
    const { sound } = await Audio.Sound.createAsync(
      { uri: audioUri },
      { shouldPlay: false }
    );
    
    const status = await sound.getStatusAsync();
    await sound.unloadAsync();
    
    if (status.isLoaded && status.durationMillis) {
      return status.durationMillis / 1000; // Convert to seconds
    }
    
    return 0;
  } catch (error) {
    console.error('Error getting audio duration:', error);
    return 0;
  }
};

// Helper function to format time for display
export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};