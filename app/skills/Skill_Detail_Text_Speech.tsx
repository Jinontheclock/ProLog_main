import axios from "axios";
import Sound from "react-native-sound";
import RNFS from "react-native-fs";

const [speaking, setSpeaking] = useState(false);
let speech;
let timer;

// Function to handle Text-to-Speech API call
const speechToText = async (text, language) => {
    const key = YOUR_API_KEY; // Replace with actual API key
    const address = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${key}`;
    const payload = createRequest(text, language);
    const path = `${RNFS.DocumentDirectoryPath}/voice.mp3`;

    try {
        const response = await axios.post(address, payload);
        const result = await response.data;
        await RNFS.writeFile(path, result.audioContent, "base64");

        playMusic(path);
    } catch (err) {
        console.warn(err);
    }
};

const playMusic = (music) => {
    const speech = new Sound(music, "", (error) => {
        if (error) {
            console.warn("Failed to load the sound", error);
            return;
        }
        speech.play();
    });
};

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
