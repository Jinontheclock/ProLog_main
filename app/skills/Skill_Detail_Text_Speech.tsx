import React, { useState } from "react";
import { Audio } from "expo-av";

const SkillDetailTextSpeech = () => {
  const [speaking, setSpeaking] = useState(false);

  const handleSpeak = async (text) => {
    if (!text) return;

    setSpeaking(true);

    try {
      const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
      const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;

      const requestBody = {
        input: { text },
        voice: { languageCode: "en-US", ssmlGender: "FEMALE" },
        audioConfig: { audioEncoding: "MP3" },
      };

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch audio from TTS API");
      }

      const data = await response.json();
      const audioContent = data.audioContent;

      const { sound } = await Audio.Sound.createAsync({
        uri: `data:audio/mp3;base64,${audioContent}`,
      });

      await sound.playAsync();

      // Unload the sound after playback
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    } catch (error) {
      console.error("TTS error:", error);
    } finally {
      setSpeaking(false);
    }
  };

  return (
    <div>
      <button onClick={() => handleSpeak("Hello, this is a test.")} disabled={speaking}>
        {speaking ? "Speaking..." : "Speak"}
      </button>
    </div>
  );
};

export default SkillDetailTextSpeech;
