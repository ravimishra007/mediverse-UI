import { Module } from "../types/module";
import { Eye, MessageSquareCode, Star, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface ModuleCardProps {
  module: Module;
  onDelete: (id: string) => void;
}

const ModuleCard = ({ module, onDelete }: ModuleCardProps) => {
  const handleDelete = () => {
    onDelete(module.id);
    alert("module deleted");
  };

  return (
    <div className="bg-white rounded-[20px] shadow-md hover:shadow-sm transition-shadow duration-300 p-4">
      <div className="flex items-center gap-6">
        <img
          //   src={module.imageUrl}
          src="/images/module.png"
          alt={module.title}
          className="w-[90px] h-[90px] rounded-[12px] object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-4">
            <div className="min-w-0 flex flex-col gap-2">
              <Link
                href={`./modules/singleModule?id=${
                  module.id
                }&name=${encodeURIComponent(module.title)}`}
              >
                <h3 className="text-[20px] font-semibold text-gray-900  truncate">
                  {module.title}
                </h3>
              </Link>

              <div className="text-[16px] text-gray-500">
                {module.chaptersCount} Chapters <span className="mr-1 ml-1 text-[darkText] ">•</span> {module.modulesCount} Models
              </div>
              <div className="text-[16px] text-gray-500 flex justify-between items-center gap-2">
                <Eye className="h-4 w-4"/>{module.views} Views  <MessageSquareCode  className="h-4 w-4"/>{module.feedbacks} Feedbacks
              </div>
            </div>
            <div className="flex items-center gap-6 flex-col justify-between ">
              <div className="flex items-center">
                <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
                <span className="ml-2 text-[20px] font-medium text-gray-900">
                  {module.rating}
                </span>
              </div>

              <div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDelete}
                  className="text-[red] hover:text-red-700 hover:bg-red-50 font-medium px-1"
                >
                  <Trash2  className=" text-[red] hover:text-red-700" />
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
