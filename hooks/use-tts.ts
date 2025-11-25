import { GoogleTTSService, TTSConfig, formatTime } from '@/lib/tts-service';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

interface UseTTSReturn {
  isPlaying: boolean;
  isLoading: boolean;
  currentTime: string;
  duration: string;
  progress: number;
  error: string | null;
  speak: (text: string, config?: Partial<TTSConfig>) => Promise<void>;
  pause: () => Promise<void>;
  resume: () => Promise<void>;
  stop: () => Promise<void>;
}

export const useTTS = (apiKey: string): UseTTSReturn => {
  const [ttsService] = useState(() => new GoogleTTSService(apiKey));
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [currentSound, setCurrentSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout | null = null;

    if (isPlaying && currentSound) {
      progressInterval = setInterval(async () => {
        try {
          const status = await currentSound.getStatusAsync();
          if (status.isLoaded && status.durationMillis && status.positionMillis !== undefined) {
            const currentSeconds = status.positionMillis / 1000;
            const totalSeconds = status.durationMillis / 1000;
            
            setCurrentTime(formatTime(currentSeconds));
            setDuration(formatTime(totalSeconds));
            setProgress(currentSeconds / totalSeconds);

            // Check if audio finished playing
            if (status.didJustFinish) {
              setIsPlaying(false);
              setProgress(0);
              setCurrentTime('0:00');
            }
          }
        } catch (error) {
          console.error('Error getting audio status:', error);
        }
      }, 100);
    }

    return () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
    };
  }, [isPlaying, currentSound]);

  const speak = async (text: string, config: Partial<TTSConfig> = {}): Promise<void> => {
    try {
      console.log('useTTS speak called with:', { textLength: text.length, hasApiKey: !!apiKey });
      setIsLoading(true);
      setError(null);

      // Stop current audio if playing
      if (currentSound) {
        await stop();
      }

      const fullConfig: TTSConfig = {
        text,
        languageCode: 'en-US',
        voiceName: 'en-US-Standard-A',
        gender: 'FEMALE',
        speakingRate: 1.0,
        pitch: 0.0,
        ...config
      };

      console.log('Calling TTS service with config:', fullConfig);
      const sound = await ttsService.speakText(fullConfig);
      console.log('TTS service returned sound object');
      setCurrentSound(sound);

      // Set up audio completion callback
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          console.log('Audio playback finished');
          setIsPlaying(false);
          setProgress(0);
          setCurrentTime('0:00');
        }
      });

      console.log('Starting audio playback');
      await sound.playAsync();
      setIsPlaying(true);
      setIsLoading(false);
      console.log('Audio playback started successfully');
    } catch (error) {
      console.error('Error in speak function:', error);
      setError(error instanceof Error ? error.message : 'Failed to synthesize speech');
      setIsLoading(false);
      setIsPlaying(false);
    }
  };

  const pause = async (): Promise<void> => {
    try {
      await ttsService.pauseAudio();
      setIsPlaying(false);
    } catch (error) {
      console.error('Error pausing audio:', error);
      setError('Failed to pause audio');
    }
  };

  const resume = async (): Promise<void> => {
    try {
      await ttsService.resumeAudio();
      setIsPlaying(true);
    } catch (error) {
      console.error('Error resuming audio:', error);
      setError('Failed to resume audio');
    }
  };

  const stop = async (): Promise<void> => {
    try {
      await ttsService.stopAudio();
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime('0:00');
      setCurrentSound(null);
    } catch (error) {
      console.error('Error stopping audio:', error);
      setError('Failed to stop audio');
    }
  };

  return {
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
  };
};