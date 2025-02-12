'use client'
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { X} from "lucide-react";
import QuestionCard from "./QuestionCard";
import { questions } from "@/data/question";


const QuizEditForm = () => {
  const [quizName, setQuizName] = useState("Circulatory System Disease 1");
  const [time, setTime] = useState("00:05:00");
  const [category, setCategory] = useState("Circulatory System");
  const [tags, setTags] = useState<string[]>(["Circulatory System","Respiratory System Basics"]);
  const [newTag, setNewTag] = useState("");
  const [instruction, setInstruction] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTag.trim()) {
      e.preventDefault();
      if (!tags.includes(newTag.trim())) {
        setTags([...tags, newTag.trim()]);
      }
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      quizName,
      time,
      category,
      tags,
      instruction,
      selectedFile,
    });
  };



  return (
    <div className="min-w-xl mx-auto mt-4 p-3">
      <div className="flex justify-between items-center mb-4">
        <div>
            <h1 className="text-2xl font-semibold">{quizName}</h1>
  
        </div>
        <div className="space-x-3">
          <Button 
            className="button px-12 hover:bg-[#57176e]"
            onClick={handleSubmit}
          >
            Edit Quiz
          </Button>

        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-[white] rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl  ">        <div>
          <label className="block text-sm font-bold mb-2">Quiz name</label>
          <Input
            value={quizName}
            onChange={(e) => setQuizName(e.target.value)}
            placeholder="Write the Quiz name"
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
        <div >
      <label className="block text-sm font-bold mb-2">Time</label>
      
      <div className="relative">
        {/* Input Field */}
        <input
          type="time"
          step="1"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full px-4 pr-15 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#742193]"
        />

      </div>
    </div>

          <div>
            <label className="block text-sm font-bold mb-2">Category</label>
            <Input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Write the category name "
              className="w-full"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Keywords and Tags</label>
          <div className="flex flex-wrap gap-2 p-2 border rounded-md mb-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 px-2 py-1 rounded-full text-sm flex items-center"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
            <Input
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyDown={handleAddTag}
              placeholder="Add Tags"
              className="border-0 outline-none flex-grow min-w-[120px]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Upload Photo</label>
          <Input
            type="file"
            onChange={handleFileChange}
            className="w-full"
            accept="image/*"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Instruction</label>
          <Textarea
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
            placeholder="Explain in minimum 300 chars"
            className="w-full min-h-[100px]"
          />
        </div>

      </form>
      <div className="min-w-xl mx-auto space-y-6 mt-5">
        {questions.map((question) => (
            
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default QuizEditForm;
