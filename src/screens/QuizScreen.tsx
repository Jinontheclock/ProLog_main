import QuizFooterButton from "@/components/shared/quiz/QuizFooterButton";
import QuizHeader from "@/components/shared/quiz/QuizHeader";
import QuizOption from "@/components/shared/quiz/QuizOption";
import QuizProgressBar from "@/components/shared/quiz/QuizProgressBar";
import QuizQuestionContainer from "@/components/shared/quiz/QuizQuestionContainer";
import QuizScreenLayout from "@/components/shared/quiz/QuizScreenLayout";
import { fetchQuizQuestions, QuizQuestion } from "@/src/api/quizApi";
import React, { useEffect, useState } from "react";

const QuizScreen: React.FC = () => {
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isChecking, setIsChecking] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const skillPageContent =
        "This is a demo skill page content about React and TypeScript."; // Mock content

    useEffect(() => {
        const loadQuestions = async () => {
            try {
                const fetchedQuestions = await fetchQuizQuestions(
                    skillPageContent,
                    5
                );
                setQuestions(fetchedQuestions);
            } catch (error) {
                console.error("Failed to load quiz questions:", error);
            }
        };

        loadQuestions();
    }, []);

    if (questions.length === 0) {
        return <QuizHeader title="Loading questions..." />;
    }

    const currentQuestion = questions[currentQuestionIndex];

    const handleOptionPress = (index: number) => {
        if (!isChecking && !isAnswered) {
            setSelectedOption(index);
        }
    };

    const handleCheck = () => {
        if (selectedOption === null) return;

        setIsChecking(true);

        setTimeout(() => {
            const correct =
                currentQuestion.options[selectedOption] ===
                currentQuestion.correctAnswer;
            setIsCorrect(correct);
            setIsAnswered(true);
            setIsChecking(false);
        }, 1000);
    };

    const handleNext = () => {
        setSelectedOption(null);
        setIsAnswered(false);
        setIsCorrect(false);
        setCurrentQuestionIndex((prev) => prev + 1);
    };

    return (
        <QuizScreenLayout
            header={
                <QuizHeader title={`Question ${currentQuestionIndex + 1}`} />
            }
            progressBar={
                <QuizProgressBar
                    progress={currentQuestionIndex + 1}
                    total={questions.length}
                />
            }
            question={
                <QuizQuestionContainer question={currentQuestion.question} />
            }
            options={currentQuestion.options.map((option, index) => (
                <QuizOption
                    key={index}
                    label={option}
                    isSelected={selectedOption === index}
                    isCorrect={
                        isAnswered && option === currentQuestion.correctAnswer
                    }
                    isIncorrect={
                        isAnswered &&
                        selectedOption === index &&
                        option !== currentQuestion.correctAnswer
                    }
                    disabled={isChecking || isAnswered}
                    onPress={() => handleOptionPress(index)}
                />
            ))}
            footer={
                isAnswered ? (
                    <QuizFooterButton
                        label="Next"
                        onPress={handleNext}
                        disabled={
                            isChecking ||
                            currentQuestionIndex === questions.length - 1
                        }
                    />
                ) : (
                    <QuizFooterButton
                        label="Check"
                        onPress={handleCheck}
                        disabled={selectedOption === null || isChecking}
                        loading={isChecking}
                    />
                )
            }
        />
    );
};

export default QuizScreen;
