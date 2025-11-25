import MaterialIcon from '@/components/shared/MaterialIcon';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { Audio } from 'expo-av';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface SimpleTTSPlayerProps {
  text: string;
  apiKey: string;
  languageCode?: string;
  voiceName?: string;
  speakingRate?: number;
  pitch?: number;
}

export const SimpleTTSPlayer: React.FC<SimpleTTSPlayerProps> = ({
  text,
  apiKey,
  languageCode = 'en-US',
  voiceName = 'en-US-Standard-A',
  speakingRate = 1.0,
  pitch = 0.0,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const synthesizeAndPlay = async () => {
    try {
      console.log('SimpleTTSPlayer: Starting TTS synthesis...');
      console.log('Text length:', text.length, 'API Key present:', !!apiKey);
      
      setIsLoading(true);

      // Initialize audio first
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });

      const requestBody = {
        input: { text },
        voice: {
          languageCode,
          name: voiceName,
          ssmlGender: 'FEMALE'
        },
        audioConfig: {
          audioEncoding: 'MP3',
          speakingRate,
          pitch
        }
      };

      console.log('Making API request to Google TTS...');
      const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('API Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error response:', errorText);
        throw new Error(`TTS API request failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const audioContent = data.audioContent;

      if (!audioContent) {
        throw new Error('No audio content received from API');
      }

      console.log('Received audio content, length:', audioContent.length);

      // Create a data URI for the audio
      const audioUri = `data:audio/mp3;base64,${audioContent}`;
      
      console.log('Creating audio sound object...');
      // Use the device's native audio player
      const { sound } = await Audio.Sound.createAsync(
        { uri: audioUri },
        { shouldPlay: false, isLooping: false }
      );

      console.log('Sound created, checking if loaded...');
      const status = await sound.getStatusAsync();
      
      if (status.isLoaded) {
        console.log('Sound loaded successfully, playing...');
        await sound.playAsync();
        console.log('Playback started');
      } else {
        console.error('Sound failed to load');
        throw new Error('Failed to load audio');
      }

      // The native player will handle the playback
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          console.log('Playback finished, unloading sound');
          sound.unloadAsync();
        }
      });

      setIsLoading(false);
      
    } catch (error) {
      console.error('Error in TTS:', error);
      setIsLoading(false);
      Alert.alert('Error', `Failed to play audio: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const handlePlay = () => {
    synthesizeAndPlay();
  };

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <TouchableOpacity 
          onPress={handlePlay} 
          style={styles.playButton}
          disabled={isLoading}
        >
          {isLoading ? (
            <MaterialIcon name="cached" size={24} color={Colors.grey[500]} />
          ) : (
            <MaterialIcon name="play_arrow" size={24} color={Colors.white} />
          )}
        </TouchableOpacity>
        
        <View style={styles.textContainer}>
          <Text style={styles.title}>Listen to Content</Text>
          <Text style={styles.subtitle}>
            {isLoading ? 'Generating audio...' : 'Tap to play with device audio player'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border.light,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  playButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.orange[400],
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    ...Typography.contentTitle,
    color: Colors.grey[900],
    marginBottom: 4,
  },
  subtitle: {
    ...Typography.captionLight,
    color: Colors.grey[600],
  },
});