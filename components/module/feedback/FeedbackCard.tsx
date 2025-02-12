import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface FeedbackCardProps {
  name: string;
  rating: number;
  date: string;
  location: string;
  comment: string;
  avatarUrl: string;
}

const FeedbackCard = ({ name, rating, date, location, comment, avatarUrl }: FeedbackCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star
            key={i}
            className="w-4 h-4 fill-amber-400 text-amber-400"
            aria-hidden="true"
          />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <StarHalf
            key={i}
            className="w-4 h-4 fill-amber-400 text-amber-400"
            aria-hidden="true"
          />
        );
      } else {
        stars.push(
          <Star
            key={i}
            className="w-4 h-4 text-gray-300"
            aria-hidden="true"
          />
        );
      }
    }
    return stars;
  };

  return (
    <div className="group relative overflow-hidden rounded-xl bg-[white]  p-6 transition-all duration-300 hover:bg-white/60 hover:shadow-lg backdrop-blur-sm border border-gray-100">
      <div className="flex items-start gap-4">
        <img
          src={avatarUrl}
          alt={`${name}'s avatar`}
          className="h-10 w-10 rounded-full object-cover"
          loading="lazy"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">
              Reviewed in <span className='text-[#1b1a1a] font-bold'>{location}</span> on  <span  className='text-[#1b1a1a] font-bold'>{date}</span>
            </p>
          </div>
          <div className="mt-1 flex items-center gap-1">
            <div className="flex">{renderStars(rating)}</div>
            <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
          </div>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
