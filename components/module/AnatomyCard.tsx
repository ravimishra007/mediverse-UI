import { Edit, Eye, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

// import  Heart from "../../public/images/Heart.png";

interface CardProps {
  id: string;
  title: string;
  views: string;
  description?: string;
  imageUrl?: string;
  category?: string;
  isVisible?: boolean;
  onDelete?: (id: string) => void;
}

const AnatomyCard = ({
  id,
  title,
  views,
  description,
  isVisible,
  onDelete,
}: CardProps) => {
  //   const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter()
  const handleDelete = () => {
    if (onDelete) {
      onDelete(module.id); // Ensure `module.id` exists
      alert("Module deleted");
    } else {
      console.warn("onDelete function is not defined.");
    }
  };

  const handleEdit = () => {
    router.push(`/anatomy/editAnatomy?id=${id}`)
  };

  return (
    <div className="w-full max-w-6xl mx-auto ">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center gap-4">
          {/* Image */}
          <div className="relative w-[80px] h-[80px] rounded-lg overflow-hidden bg-gray-50">
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
          <div className="flex-1 flex flex-col">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              {title}
            </h2>
            <div className="flex items-center text-gray-500 text-sm">
              {/* <Eye className="w-4 h-4 mr-1" /> */}
              <span>{description} </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-around flex-col gap-2">
            <button className=" inline-flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Eye className="w-4 h-4" />
              {views} views
            </button>
            <div>
             
              {isVisible && (
                <button
                onClick={handleEdit}
                className=" inline-flex items-center gap-2 p-2 text-[black] hover:bg-gray-100 rounded-lg transition-colors">
                    <Edit className="w-4 h-4 text-[black]" />
                    Edit
                  </button>
              )}
              <button
                onClick={handleDelete}
                className="inline-flex items-center gap-2 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomyCard;
