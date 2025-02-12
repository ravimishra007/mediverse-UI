export type AnswerType = 'single_choice' | 'multiple_choice' | 'fill_in_blanks';

interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface Question {
    id: number;
  questionNumber: number;
  question: string;
  explanation: string;
  answerType: AnswerType;
  options: Option[];
  answer: string;
}
