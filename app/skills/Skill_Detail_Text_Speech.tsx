import React, { useState } from "react";

const SkillDetailTextSpeech = ({ content, skill }) => {
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);

  const speakText = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      console.warn("Speech synthesis not supported on this platform.");
      return;
    }

    const textToRead =
      content?.description || content?.body || skill?.content || "";
    const trimmedText = textToRead.trim();

    if (!trimmedText) return;

    try {
      window.speechSynthesis.cancel(); // Cancel any ongoing speech

      const utterance = new SpeechSynthesisUtterance(trimmedText);
      utterance.lang = "en-US";
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onend = () => {
        setSpeaking(false);
        setPaused(false);
      };

      utterance.onerror = () => {
        setSpeaking(false);
        setPaused(false);
      };

      setSpeaking(true);
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error("TTS error", e);
    }
  };

  const pauseSpeech = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setPaused(true);
    }
  };

  const resumeSpeech = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setPaused(false);
    }
  };

  return (
    <div>
      <button onClick={speakText} disabled={speaking}>
        {speaking ? "Speaking..." : "🔊 Read Aloud"}
      </button>
      <button onClick={pauseSpeech} disabled={!speaking || paused}>
        Pause
      </button>
      <button onClick={resumeSpeech} disabled={!paused}>
        Resume
      </button>
    </div>
  );
};

export default SkillDetailTextSpeech;
