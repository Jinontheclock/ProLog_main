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
  const prompt = `
You are an educational assistant creating a comprehensive skills assessment quiz. Generate exactly 10 multiple-choice questions based on the following skill content:

${content}

REQUIREMENTS:
- Generate exactly 10 questions
- Questions should cover different aspects of the skill content
- Each question should have exactly 4 options
- Options should be plausible but only one correct
- Mix difficulty levels (beginner to advanced)
- Make questions practical and applicable

Return ONLY a valid JSON object in this exact format:
{
  "questions": [
    {
      "question": "What is the primary purpose of...?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": "Option A"
    }
  ]
}

Ensure all 10 questions are relevant, educational, and test understanding of the skill content.`;
  
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
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