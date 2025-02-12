import { Question } from "@/types/questions";

export const questions: Question[] = [
    {
        id: 1,
      questionNumber: 1,
      question: "What is the capital of France?",
      explanation: "Paris is the capital city of France.",
      answerType: "single_choice",
      options: [
        { id: 1, text: "London", isCorrect: false },
        { id: 2, text: "Paris", isCorrect: true },
        { id: 3, text: "Berlin", isCorrect: false },
        { id: 4, text: "Madrid", isCorrect: false },
      ],
      answer: "",
    },
    {
        id: 2,
      questionNumber: 2,
      question: "Which planet is known as the Red Planet?",
      explanation: "Mars is called the Red Planet due to its reddish appearance.",
      answerType: "single_choice",
      options: [
        { id: 1, text: "Earth", isCorrect: false },
        { id: 2, text: "Saturn", isCorrect: false },
        { id: 3, text: "Mars", isCorrect: true },
      ],
      answer: "",
    },
    {
        id: 3,
      questionNumber: 3,
      question: "Which of the following are programming languages?",
      explanation: "C++, Java, and Python are programming languages; HTML is a markup language.",
      answerType: "multiple_choice",
      options: [
        { id: 1, text: "C++", isCorrect: true },
        { id: 2, text: "HTML", isCorrect: false },
        { id: 3, text: "Java", isCorrect: true },
        { id: 4, text: "Python", isCorrect: true },
      ],
      answer: "",
    },
    {
        id: 4,
      questionNumber: 4,
      question: "Which fruits are typically yellow when ripe?",
      explanation: "Bananas, pineapples, and lemons are commonly yellow when ripe; apples can have many colors.",
      answerType: "multiple_choice",
      options: [
        { id: 1, text: "Banana", isCorrect: true },
        { id: 2, text: "Pineapple", isCorrect: true },
        { id: 3, text: "Lemon", isCorrect: true },
        { id: 4, text: "Green Apple", isCorrect: false },
      ],
      answer: "",
    },
    {
        id: 5,
      questionNumber: 5,
      question: "Who developed the theory of relativity?",
      explanation: "Albert Einstein published his special relativity in 1905 and general relativity in 1915.",
      answerType: "fill_in_blanks",
      options: [],
      answer: "Albert Einstein",
    }
  ];