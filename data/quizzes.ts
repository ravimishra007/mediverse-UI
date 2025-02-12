import { Quiz } from "@/types/module";

export const dummyQuizzes: Quiz[] = [
  {
    id: "1",
    title: "Circulatory System Disease 1",
    questions: 10,
    duration: "35 min",
    attempts: 220,
    category: "Cardiology",
    imageUrl: "/images/heart.png",
  },
  {
    id: "2",
    title: "Respiratory System Basics",
    questions: 15,
    duration: "45 min",
    attempts: 180,
    category: "Pulmonology",
    imageUrl: "/images/lungs.png",
  },
  {
    id: "3",
    title: "Nervous System Fundamentals",
    questions: 12,
    duration: "40 min",
    attempts: 250,
    category: "Neurology",
    imageUrl: "/images/brain.png",
  },
  {
    id: "4",
    title: "Digestive System Overview",
    questions: 8,
    duration: "30 min",
    attempts: 150,
    category: "Gastroenterology",
    imageUrl: "/images/stomach.png",
  },
  {
    id: "5",
    title: "Endocrine System Quiz",
    questions: 10,
    duration: "35 min",
    attempts: 275,
    category: "Endocrinology",
    imageUrl: "/images/gland.png",
  },
];
