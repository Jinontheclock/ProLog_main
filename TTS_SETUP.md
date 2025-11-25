# Google Text-to-Speech Integration Setup

This project now includes Google Cloud Text-to-Speech integration for converting competency text content to speech.

## Features

- Convert competency text content to natural-sounding speech
- Play/pause/stop audio controls
- Real-time progress tracking
- Customizable voice settings (language, voice, speed, pitch)
- Loading states and error handling
- Integration with existing AudioPlayer UI

## Setup Instructions

### 1. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Text-to-Speech API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Cloud Text-to-Speech API"
   - Click "Enable"

### 2. Create API Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy your API key
4. (Recommended) Restrict the API key to only the Text-to-Speech API for security

### 3. Environment Configuration

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your Google TTS API key to `.env`:
   ```env
   EXPO_PUBLIC_GOOGLE_TTS_API_KEY=your_actual_api_key_here
   ```

### 4. Dependencies

The following dependencies are required and should already be installed:
- `expo-av` - For audio playback functionality
- `@expo/vector-icons` - For UI icons

If not installed, run:
```bash
npm install expo-av @expo/vector-icons
```

## Usage

### TextToSpeechPlayer Component

The `TextToSpeechPlayer` component is used in the skills details page:

```tsx
<TextToSpeechPlayer
  text={competencyText}
  apiKey={process.env.EXPO_PUBLIC_GOOGLE_TTS_API_KEY || ''}
  languageCode="en-US"
  voiceName="en-US-Standard-A"
  speakingRate={1.0}
  pitch={0.0}
/>
```

### Available Voice Options

#### Language Codes
- `en-US` - English (US)
- `en-GB` - English (UK)
- `es-ES` - Spanish (Spain)
- `fr-FR` - French (France)
- `de-DE` - German (Germany)
- `it-IT` - Italian (Italy)
- `ja-JP` - Japanese (Japan)
- `ko-KR` - Korean (South Korea)

#### Voice Names (en-US examples)
- `en-US-Standard-A` - Female voice
- `en-US-Standard-B` - Male voice
- `en-US-Standard-C` - Female voice
- `en-US-Standard-D` - Male voice
- `en-US-Wavenet-A` - High-quality female voice (premium)
- `en-US-Wavenet-B` - High-quality male voice (premium)

#### Voice Settings
- `speakingRate`: 0.25 to 4.0 (1.0 = normal speed)
- `pitch`: -20.0 to 20.0 (0.0 = normal pitch)

## File Structure

```
lib/
  tts-service.ts          # Core TTS service class
hooks/
  use-tts.ts              # React hook for TTS functionality
components/shared/
  TextToSpeechPlayer.tsx  # TTS player component
app/skills/
  details.tsx             # Updated to use TTS player
```

## API Costs

Google Cloud Text-to-Speech API pricing (as of 2024):
- Standard voices: $4.00 per 1 million characters
- WaveNet voices: $16.00 per 1 million characters
- First 1 million characters per month are free

## Security Notes

- Never commit your `.env` file to version control
- Restrict your API key to only the Text-to-Speech API
- Consider implementing usage quotas in production
- Monitor API usage in the Google Cloud Console

## Troubleshooting

### Common Issues

1. **"API key not valid" error**
   - Verify your API key is correct in the `.env` file
   - Ensure the Text-to-Speech API is enabled
   - Check API key restrictions

2. **"Cannot find module 'expo-av'" error**
   - Run `npm install expo-av`

3. **Audio doesn't play**
   - Check device volume settings
   - Ensure the app has audio permissions
   - Try different voice settings

4. **Long loading times**
   - Network connectivity issues
   - Large text content (consider splitting into chunks)
   - API rate limiting

### Debug Mode

Enable detailed logging by adding to your environment:
```env
EXPO_PUBLIC_TTS_DEBUG=true
```

## Future Enhancements

- Offline TTS support
- Voice caching for repeated content
- Speed and pitch controls in UI
- Multiple language support in UI
- Audio bookmark/chapter support