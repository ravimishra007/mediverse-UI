'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
    anatomyName: string;
  category: string;
  description: string;
  sortDescription: string;
//   photo: File | null;
  notes: File | null;
}

const AnatomyForm = ({isEdit}:{isEdit?:boolean}) => {
  const [formData, setFormData] = useState<FormData>({
    anatomyName: "",
    category: "",
    description: "",
    sortDescription: "",
    // photo: null,
    notes: null,
  });

  const categories = [
    "Circulatory System",
    "Respiratory System",
    "Digestive System",
    "Nervous System",
    "Skeletal System",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "photo" | "notes"
  ) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    alert("Anatomy added successfully!");
  };

  return (
    <div className=" flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full min-w-xl bg-white rounded-xl shadow-lg p-8 space-y-6 transition-all duration-300 hover:shadow-xl"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm  font-bold text-gray-700">Anatomy Name</label>
            <Input
              name="anatomyName"
              value={formData.anatomyName}
              onChange={handleInputChange}
              placeholder="Enter Anatomy name"
              className="w-full transition-all duration-300 focus:ring-2 focus:ring-purple-200"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Category</label>
            <Select onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-full transition-all duration-300 focus:ring-2 focus:ring-purple-200">
                <SelectValue placeholder="Select category" className="font-medium" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Description</label>
          <Input
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter Description..."
            className="w-full transition-all duration-300 focus:ring-2 focus:ring-purple-200"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Keywords and Tags</label>
          <Input
            name="sortDescription"
            value={formData.sortDescription}
            onChange={handleInputChange}
            placeholder="Enter Sort Description..."
            className="w-full transition-all duration-300 focus:ring-2 focus:ring-purple-200"
          />
        </div>

        {/* <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Upload Photo</label>
          <div className="flex items-center gap-4">
            <Input
              type="file"
              onChange={(e) => handleFileChange(e, "photo")}
              accept="image/*"
              className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file: file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition-all duration-300"
            />
            <Button
              type="button"
            //   variant="outline"
              className="transition-all duration-300 text-darkText borderColor commonBG hover:bg-purple-200"
              onClick={() => document.querySelector<HTMLInputElement>('input[type="file"]')?.click()}
            >
              Choose File
            </Button>
          </div>
        </div> */}

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Upload Model file</label>
          <div className="flex items-center gap-4">
            <Input
              type="file"
              onChange={(e) => handleFileChange(e, "notes")}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition-all duration-300"
            />
            <Button
              type="button"
            //   variant="outline"
              className="transition-all duration-300 text-darkText borderColor commonBG hover:bg-purple-200"
              onClick={() => document.querySelectorAll<HTMLInputElement>('input[type="file"]')[1]?.click()}
            >
              Choose File
            </Button>
          </div>
        </div>

       
        <div className="flex gap-4 pt-4">
          <Button
            type="submit"
            className="flex-1 commonDarkBG text-white hover:bg-[#581770] transition-all duration-300"
          >
           { `${isEdit ? "Save Changes " : "Add Anatomy" }`}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="flex-1 hover:bg-orange-50 border-orange-200 text-orange-500 transition-all duration-300"
            onClick={() => setFormData({
                anatomyName: "",
                category: "",
                description: "",
                sortDescription: "",
                notes: null,
            })}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AnatomyForm;
