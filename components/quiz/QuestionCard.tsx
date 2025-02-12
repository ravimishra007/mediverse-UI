import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { Question } from '@/types/questions';

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
    
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [textAnswer, setTextAnswer] = useState(question.answer || "");

  const isSelected = (optionId: number) => selectedAnswers.includes(optionId);

  const handleSingleChoice = (optionId: number) => {
    setSelectedAnswers([optionId]);
  };

  const handleMultipleChoice = (optionId: number) => {
    setSelectedAnswers(prev => {
      const newAnswers = prev.includes(optionId)
        ? prev.filter(a => a !== optionId)
        : [...prev, optionId];
      return newAnswers;
    });
  };

  const handleTextInput = (value: string) => {
    console.log({ value});
    
    setTextAnswer(value);
    if (value.toLowerCase() === question.answer.toLowerCase()) {
    }
  };

  const renderAnswerType = () => {
    switch (question.answerType) {
      case 'single_choice':
      case 'multiple_choice':
        return (
          <div className="space-y-3">
            {question.options.map((option) => (
              <div
                key={option.id}
                onClick={() => question.answerType === 'single_choice' 
                  ? handleSingleChoice(option.id)
                  : handleMultipleChoice(option.id)
                }
                className={cn(
                  "p-3 rounded-lg border cursor-pointer transition-all flex items-center gap-3",
                  option.isCorrect && "border-green-500 bg-green-50",
                  isSelected(option.id) && (
                    option.isCorrect
                      ? "bg-green-50 border-green-500"
                      : "bg-red-50 border-red-500"
                  ),
                  !isSelected(option.id) && !option.isCorrect && "hover:bg-gray-50 border-gray-200"
                )}
              >
                <div className={cn(
                  "w-5 h-5 border rounded-sm flex items-center justify-center transition-colors",
                  option.isCorrect ? "border-green-500" : "border-gray-300",
                  option.isCorrect && "bg-green-500"
                )}>
                  {option.isCorrect && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className={cn(
                  "flex-1",
                  option.isCorrect && "text-green-700"
                )}>
                  {option.text}
                </span>
              </div>
            ))}
          </div>
        );

      case 'fill_in_blanks':
        return (
          <div className="relative">
            <input
              type="text"
              value={textAnswer}
              onChange={(e) => handleTextInput(e.target.value)}
              className={cn(
                "w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500",
                textAnswer.toLowerCase() === question.answer.toLowerCase() && "bg-green-50 border-green-500"
              )}
              placeholder="Type your answer here..."
            />
            {textAnswer.toLowerCase() === question.answer.toLowerCase() && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              </div>
            )}
          </div>
        );
    }
  };

  const getAnswerTypeLabel = () => {
    switch (question.answerType) {
      case 'single_choice':
        return 'Single Correct';
      case 'multiple_choice':
        return 'Multiple Correct Type';
      case 'fill_in_blanks':
        return 'Fill In The Blanks';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-medium">Question {question.questionNumber}</h2>
          <span className="px-3 py-1 bg-orange-100 darkText font-bold rounded-full text-sm">
            {getAnswerTypeLabel()}
          </span>
        </div>
        
        <p className="text-gray-800 mb-6">{question.question}</p>
        
        <div className="mb-6">
          {renderAnswerType()}
        </div>

          <div className="mt-4">
            <h3 className="font-medium mb-2">Explanation:</h3>
            <p className="text-gray-600">{question.explanation}</p>
          </div>
      </div>
    </div>
  );
};

export default QuestionCard;
