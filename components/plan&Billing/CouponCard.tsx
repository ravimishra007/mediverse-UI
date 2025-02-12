import { Edit2, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

interface PricingCardProps {
  title: string;
  discount: number;
  details: string[];
  onEdit?: () => void;
  onDelete?: () => void;
}

const CouponCard = ({
  title,
  discount,
  details,
  onEdit,
  onDelete,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full min-w-xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold darkText">{title}</h2>
          <div className="flex gap-2">
            {onEdit && (
              <button
                onClick={onEdit}
                className="p-2  hover:bg-gray-100 rounded-full transition-colors duration-200 flex gap-2"
              >
                <Edit2 className="w-5 h-5 text-gray-600" />
                Edit
              </button>
            )}
            {onDelete && (
              <button
                onClick={onDelete}
                className="p-2 hover:bg-red-50 rounded-full transition-colors duration-200 flex gap-2"
              >
                <Trash2 className="w-5 h-5 text-red-500" />
                Delete
              </button>
            )}
          </div>
        </div>
         <hr className="-mt-3 border border-[#919090]"/>
        <div className=" mt-3">
          <div className="flex items-center">
            <span className="darkText">Discount </span> <span className="font-bold ml-2">:</span>
            <span className="mx-2 text-xl font-bold text-gray-900">
              ${discount}
            </span>
          </div>
          {/* <div className="flex items-center">
            <span className="darkText">Yearly</span>
            <span className="mx-2 text-xl font-bold text-gray-900">
              ${yearlyPrice}
            </span>
          </div> */}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold mt-2 darkText">Details</h3>
          <ul className="space-y-1">
            {details.map((detail, index) => (
              <li
                key={index}
                className="flex items-start text-gray-600"
              >
                <span className="mr-2">•</span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default CouponCard;