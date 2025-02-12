import { Eye, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// import  Heart from "../../public/images/Heart.png";

interface CardProps {
  id: string;
  title: string;
  questions?: number;
  attempts?: number;
  imageUrl?: string;
  duration?: string;
  category?: string;
  onDelete?: (id: string) => void;
}

const QuizCard = ({
  id,
  title,
  questions,
  duration,
  attempts,
  onDelete,
}: CardProps) => {
  //   const [imageLoaded, setImageLoaded] = useState(false);
  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
      alert("Module deleted");
    } else {
      console.warn("onDelete function is not defined.");
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto ">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center gap-4">
          {/* Image */}
          <div className="relative w-[120px] h-[120px] rounded-lg overflow-hidden bg-gray-50">
            <img
              //   src={imageSrc}
              src="/images/Heart.png"
              alt={title}
              className={cn("w-full h-full object-cover ")}
              //   onLoad={() => setImageLoaded(true)}
            />
            {/* {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gray-200" />
            )} */}
          </div>

          {/* Title and Views */}
          <div className="flex-1 flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              {title}
            </h2>
            <div className="flex  flex-col text-gray-500 text-sm gap-2">
              {/* <Eye className="w-4 h-4 mr-1" /> */}
              <span>
                {questions} Questions{" "}
                <span className="mr-1 ml-1 text-[darkText] ">•</span> {duration}
              </span>
              <span>({attempts} Attempts)</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm gap-2">
              <Link href={`/quizzes/${id}`}>
              <button className="flex items-center gap-2 p-2  darkText font-semibold rounded-md ">
                  <Eye className="w-4 h-4 font-semibold"/> View Quiz
                </button>
              </Link>

             
              <button
                onClick={handleDelete}
                className="inline-flex items-center gap-2 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          {/* <div className="flex items-center justify-around flex-col gap-2">
           
            <div>
             
              <button
                onClick={handleDelete}
                className="inline-flex items-center gap-2 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
