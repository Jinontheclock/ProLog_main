const textToSpeech = require("@google-cloud/text-to-speech");
const client = new textToSpeech.TextToSpeechClient();

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).send({ error: "Method not allowed" });
    }

    const { text } = req.body;

    if (!text) {
        return res.status(400).send({ error: "Text is required" });
    }

    const request = {
        input: { text },
        voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
        audioConfig: { audioEncoding: "MP3" },
    };

    try {
        const [response] = await client.synthesizeSpeech(request);
        const audioContent = response.audioContent;
        const base64Audio = audioContent.toString("base64");
        res.status(200).send({ audio: base64Audio });
    } catch (e) {
        console.error("TTS error:", e);
        res.status(500).send({ error: "Failed to generate audio" });
    }
};
