import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Image, X, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  id: number;
  text: string;
  image?: File;
  isCorrect: boolean;
}

const QuestionForm = ({ questionNumber }: { questionNumber: number }) => {
  const [question, setQuestion] = useState("");
  const [explanation, setExplanation] = useState("");
  const [options, setOptions] = useState<Option[]>([{ id: 1, text: "" ,isCorrect: false}]);
  const [answerType, setAnswerType] = useState("multiple_choice");
  const [answer, setAnswer] = useState("");

  const handleAddOption = () => {
    const newId = options.length + 1;
    setOptions([...options, { id: newId, text: "", isCorrect: false }]);
  };

  const handleRemoveOption = (id: number) => {
    if (options.length > 1) {
      setOptions(options.filter((option) => option.id !== id));
    }
  };

  const handleOptionChange = (id: number, text: string) => {
    setOptions(
      options.map((option) => (option.id === id ? { ...option, text } : option))
    );
  };

  const handleImageUpload = (id: number, file: File) => {
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, image: file } : option
      )
    );
  };

   // NEW - Handler for marking correct option(s)
   const handleOptionCorrectChange = (id: number, checked: boolean) => {
    // If single choice, you want to ensure only one option is correct:
    if (answerType === "single_choice") {
      setOptions(
        options.map((option) =>
          option.id === id
            ? { ...option, isCorrect: checked }
            : { ...option, isCorrect: false }
        )
      );
    } else {
      // For multiple_choice, just toggle that particular option
      setOptions(
        options.map((option) =>
          option.id === id ? { ...option, isCorrect: checked } : option
        )
      );
    }
  };


  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Question {questionNumber}</h3>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Image className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4">
          <div>
            <label className="block text-sm font-bold mb-2">Question</label>
            <Input
              placeholder="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Answer Type</label>
            <Select value={answerType} onValueChange={setAnswerType}>
              <SelectTrigger>
                <SelectValue placeholder="Answer Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="multiple_choice">Multiple choice</SelectItem>
                <SelectItem value="single_choice">Single choice</SelectItem>
                <SelectItem value="fill_in_blanks">
                  Fill in the blanks
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {answerType === "fill_in_blanks" ? (
          <>
            <div className="space-y-2">
              <label className="block text-sm font-bold mb-2">Answer</label>
              <Input
                placeholder="Enter the correct answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Explanation</label>
              <Input
                placeholder="Explanation"
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
              />
            </div>
          </>
        ) : (
          <div className="space-y-3">
            {options.map((option) => (
              <div key={option.id} className="flex items-center gap-2">
                {/* <div className="w-4 h-4 rounded-full border border-gray-300 " /> */}
                 {/* 
                  If single choice, use radio input; 
                  if multiple choice, use checkbox. 
                */}
                {answerType === "single_choice" ? (
                  <input
                    type="radio"
                    className="w-4 h-4 rounded-full button"
                    checked={option.isCorrect}
                    onChange={(e) =>
                      handleOptionCorrectChange(option.id, e.target.checked)
                    }
                  />
                ) : (
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded-full button"

                    checked={option.isCorrect}
                    onChange={(e) =>
                      handleOptionCorrectChange(option.id, e.target.checked)
                    }
                  />
                )}

                <Input
                  placeholder={`Option ${option.id}`}
                  value={option.text}
                  onChange={(e) =>
                    handleOptionChange(option.id, e.target.value)
                  }
                  className="flex-1"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    const input = document.createElement("input");
                    input.type = "file";
                    input.accept = "image/*";
                    input.onchange = (e) => {
                      const file = (e.target as HTMLInputElement).files?.[0];
                      if (file) {
                        handleImageUpload(option.id, file);
                      }
                    };
                    input.click();
                  }}
                >
                  <Image className="h-4 w-4" />
                </Button>
                {options.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveOption(option.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}

            <Button
              type="button"
              variant="ghost"
              className="flex items-center gap-2"
              onClick={handleAddOption}
            >
              <Plus className="h-4 w-4" />
              Add Option
            </Button>
            <div>
              <label className="block text-sm font-bold mb-2">Explanation</label>
              <Input
                placeholder="Explanation"
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionForm;
