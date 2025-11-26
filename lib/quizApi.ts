export type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export async function generateQuiz(skillId: string, content: string, apiKey: string): Promise<QuizQuestion[]> {
  console.log('Debug - API Key provided:', !!apiKey);
  console.log('Debug - API Key length:', apiKey?.length);
  
  if (!apiKey) {
    throw new Error('OpenAI API key not provided. Please set EXPO_PUBLIC_OPENAI_API_KEY in your .env file.');
  }
  
  if (apiKey.length < 50) {
    throw new Error(`OpenAI API key appears incomplete. Length: ${apiKey.length}. Expected 100+ characters.`);
  }
  const prompt = `Create exactly 5 multiple-choice questions from this content:

${content}

Return ONLY valid JSON:
{
  "questions": [
    {
      "question": "What is...?",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": "A"
    }
  ]
}`;
  
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You generate educational quizzes in JSON format.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 1000,
      stream: false,
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