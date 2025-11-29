import MaterialIcon from '@/components/shared/MaterialIcon';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { useTTS } from '@/hooks/use-tts';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TextToSpeechPlayerProps {
  text: string; // The text content to convert to speech
  apiKey: string; // Google TTS API key
  languageCode?: string;
  voiceName?: string;
  speakingRate?: number;
  pitch?: number;
}

export const TextToSpeechPlayer: React.FC<TextToSpeechPlayerProps> = ({
  text,
  apiKey,
  languageCode = 'en-US',
  voiceName = 'en-US-Standard-A',
  speakingRate = 1.0,
  pitch = 0.0,
}) => {
  const {
    isPlaying,
    isLoading,
    currentTime,
    duration,
    progress,
    error,
    speak,
    pause,
    resume,
    stop
  } = useTTS(apiKey);

  const [hasStarted, setHasStarted] = useState(false);

  // Debug logging on component mount
  useEffect(() => {
    console.log('TextToSpeechPlayer mounted with:', {
      textLength: text?.length || 0,
      hasApiKey: !!apiKey,
      apiKeyLength: apiKey?.length || 0,
      text: text?.substring(0, 100) + '...'
    });
  }, [text, apiKey]);

  useEffect(() => {
    if (error) {
      console.error('TTS Error occurred:', error);
      Alert.alert('Audio Error', error);
    }
  }, [error]);

  const handlePlayPause = async () => {
    try {
      console.log('HandlePlayPause called:', { isLoading, hasStarted, isPlaying, textLength: text.length, apiKeyExists: !!apiKey });
      
      if (isLoading) return;

      if (!apiKey) {
        Alert.alert('Configuration Error', 'Google TTS API key is not configured');
        return;
      }

      if (!text || text.trim().length === 0) {
        Alert.alert('Error', 'No text content available for speech synthesis');
        return;
      }

      if (!hasStarted) {
        // First time play - synthesize and start
        console.log('Starting TTS with text:', text.substring(0, 100) + '...');
        await speak(text, {
          languageCode,
          voiceName,
          speakingRate,
          pitch,
        });
        setHasStarted(true);
      } else if (isPlaying) {
        // Currently playing - pause
        console.log('Pausing audio');
        await pause();
      } else {
        // Not playing but has started - resume
        console.log('Resuming audio');
        await resume();
      }
    } catch (error) {
      console.error('Error in play/pause:', error);
      Alert.alert('Playback Error', error instanceof Error ? error.message : 'Failed to play audio');
    }
  };

  const handleStop = async () => {
    try {
      await stop();
      setHasStarted(false);
    } catch (error) {
      console.error('Error stopping audio:', error);
    }
  };

  const handleVolume = () => {
    // TODO: Implement volume control
    Alert.alert('Volume Control', 'Volume control will be implemented here');
  };

  const handleMenu = () => {
    // Menu options for TTS settings
    Alert.alert(
      'Audio Settings',
      'Voice settings and options',
      [
        { text: 'Stop Audio', onPress: handleStop },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        {/* Play/Pause Icon */}
        <TouchableOpacity 
          onPress={handlePlayPause} 
          style={styles.iconButton}
          disabled={isLoading}
        >
          {isLoading ? (
            <MaterialIcon name="cached" size={20} color={Colors.grey[500]} />
          ) : (
            <MaterialIcon
              name={isPlaying ? 'pause' : 'play_arrow'}
              size={20}
              color={Colors.grey[900]}
            />
          )}
        </TouchableOpacity>

        {/* Time Text */}
        <Text style={styles.timeText}>
          {isLoading ? 'Loading...' : `${currentTime} / ${duration}`}
        </Text>

        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarBg} />
          <View style={[styles.progressBarFg, { width: `${progress * 100}%` }]} />
        </View>

        {/* Volume Control */}
        {/* <TouchableOpacity onPress={handleVolume} style={styles.iconButton}>
          <MaterialIcon name="volume_down" size={20} color={Colors.grey[900]} />
        </TouchableOpacity> */}

        {/* Menu */}
        <TouchableOpacity onPress={handleMenu} style={styles.iconButton}>
          <MaterialIcon name="more_vert" size={20} color={Colors.grey[900]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 60,
    backgroundColor: Colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border.light,
    paddingHorizontal: 24,
    paddingVertical: 0,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 0,
  },
  iconButton: {
    padding: 0,
    marginHorizontal: 0,
  },
  timeText: {
    ...Typography.captionLight,
    color: Colors.grey[600],
    minWidth: 80,
    textAlign: 'left',
    marginLeft: 4,
    marginRight: 0,
  },
  progressBarContainer: {
    width: 133,
    height: 10,
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  progressBarBg: {
    position: 'absolute',
    left: 0,
    width: 133,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.grey[50],
  },
  progressBarFg: {
    position: 'absolute',
    left: 0,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.grey[500],
    top: 2,
  },
});