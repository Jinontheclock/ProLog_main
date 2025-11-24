import Constants from 'expo-constants';

export type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const OPENAI_API_KEY = Constants.manifest?.extra?.OPENAI_API_KEY;

export async function generateQuiz(skillId: string, content: string): Promise<QuizQuestion[]> {
  if (!OPENAI_API_KEY) throw new Error('OpenAI API key not set.');
  const prompt = `
You are an educational assistant. Generate a quiz for a skill with the following content:
${content}

Return the output as a JSON array named "questions". Each element should be an object with keys:
- question: string
- options: string array (4 options)
- correctAnswer: one of the options (string)
Example format:
{
  "questions": [
    {
      "question": "What is ...?",
      "options": ["A","B","C","D"],
      "correctAnswer": "A"
    }
    // ... more questions
  ]
}
Ensure the quiz is relevant to the skill content.`;
  
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You generate educational quizzes in JSON format.' },
        { role: 'user', content: prompt }
      ],
    }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error?.message || 'Failed to generate quiz.');
  const text = data.choices?.[0]?.message?.content || '';
  // Parse the JSON from the assistant's message
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('Invalid quiz format from OpenAI.');
  const quizObj = JSON.parse(match[0]);
  return quizObj.questions as QuizQuestion[];
}