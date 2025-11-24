import axios from "axios";

export type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
};

/**
 * Fetches quiz questions from OpenAI API based on skill page content.
 * @param skillPageContent - The content of the skill page to generate questions from.
 * @param numQuestions - The number of questions to generate.
 * @returns A promise that resolves to an array of QuizQuestion.
 */
export const fetchQuizQuestions = async (
  skillPageContent: string,
  numQuestions: number
): Promise<QuizQuestion[]> => {
  try {
    const response = await axios.post("https://api.openai.com/v1/completions", {
      model: "gpt-4",
      prompt: `Generate ${numQuestions} multiple-choice quiz questions based on the following content:\n\n${skillPageContent}\n\nFormat the response as a JSON array with each question having 'question', 'options', and 'correctAnswer'.`,
      max_tokens: 1000,
      temperature: 0.7,
    }, {
      headers: {
        Authorization: `Bearer YOUR_OPENAI_API_KEY`,
        "Content-Type": "application/json",
      },
    });

    const data = response.data.choices[0].text;
    return JSON.parse(data) as QuizQuestion[];
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
    throw new Error("Failed to fetch quiz questions. Please try again later.");
  }
};