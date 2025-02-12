import { Eye, FileText, Box, Edit, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// import  Heart from "../../public/images/Heart.png";

interface CardProps {
  title: string;
  id: number;
  views: number;
  imageSrc?: string;
}

const ChapterCard = ({ title, views,id }: CardProps) => {
//   const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="w-full min-w-4xl mx-auto ">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center gap-4">
          {/* Image */}
          <div className="relative w-[80px] h-[80px] rounded-lg overflow-hidden bg-gray-50">
            <img
            //   src={imageSrc}
              src='/images/Heart.png'
              alt={title}
              className={cn(
                "w-full h-full object-cover "              )}
            //   onLoad={() => setImageLoaded(true)}
            />
            {/* {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gray-200" />
            )} */}
          </div>

          {/* Title and Views */}
          <div className="flex-1 flex justify-between flex-col gap-3">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">{title}</h2>
            <div className="flex items-center text-gray-500 text-sm">
              <Eye className="w-4 h-4 mr-1" />
              <span>{views} views</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm hover:bg-purple-100 transition-colors">
              <FileText className="w-4 h-4 mr-1.5" />
              Notes
            </button>
            <button className="inline-flex items-center px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm hover:bg-purple-100 transition-colors">
              <Box className="w-4 h-4 mr-1.5" />
              3D Anatomy
            </button>
            <Link href={`/modules/editChapter?${id}`}>
            <button className=" inline-flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Edit className="w-4 h-4" />
              Edit
            </button>

            </Link>
           
            <button className="inline-flex items-center gap-2 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterCard;