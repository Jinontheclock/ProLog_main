import { Audio } from "expo-av";
import React, { useState, useEffect } from "react";

const [speaking, setSpeaking] = useState(false);

// Function to handle Text-to-Speech API call
const speechToText = async (text, language) => {
    const key = YOUR_API_KEY; // Replace with actual API key
    const address = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${key}`;
    const payload = createRequest(text, language);

    try {
        const response = await fetch(address, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch audio");
        }

        const result = await response.json();
        await playBase64Audio(result.audioContent);
    } catch (err) {
        console.warn(err);
    }
};

async function playBase64Audio(base64) {
    try {
        const sound = new Audio.Sound();

        const source = {
            uri: `data:audio/mp3;base64,${base64}`,
        };

        await sound.loadAsync(source);
        await sound.playAsync();

        // optional: unload after playback
        sound.setOnPlaybackStatusUpdate((status) => {
            if (!status.isLoaded) return;
            if (status.didJustFinish) sound.unloadAsync();
        });
    } catch (e) {
        console.error("Audio play error", e);
    }
}

const createRequest = (text, language) => ({
    input: {
        text,
    },
    voice: {
        languageCode: language,
    },
    audioConfig: {
        audioEncoding: "MP3",
    },
});
