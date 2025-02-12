import React, { useState, useMemo } from 'react';
import FeedbackCard from './FeedbackCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Feedback {
  id: number;
  name: string;
  rating: number;
  date: string;
  location: string;
  comment: string;
  avatarUrl: string;
  timestamp: number;
}

const DUMMY_FEEDBACK: Feedback[] = [
  {
    id: 1,
    name: "Ravi Mishra",
    rating: 5,
    date: "17/10/24",
    location: "India",
    comment: "Good Module. Well Detailed Good Module. Well Detailed Good Module. Well Detailed",
    avatarUrl: "https://github.com/shadcn.png",
    timestamp: 1697548800000
  },
  {
    id: 2,
    name: "Alex Chen",
    rating: 4.5,
    date: "17/10/24",
    location: "India",
    comment: "Good Module. Well Detailed Good Module. Well Detailed Good Module. Well Detailed",
    avatarUrl: "https://github.com/shadcn.png",
    timestamp: 1697548800000
  },
  {
    id: 3,
    name: "Sarah Johnson",
    rating: 3,
    date: "17/10/24",
    location: "India",
    comment: "Good Module. Well Detailed Good Module. Well Detailed",
    avatarUrl: "https://github.com/shadcn.png",
    timestamp: 1697548800000
  },
  {
    id: 4,
    name: "Michael Brown",
    rating: 4.0,
    date: "17/10/24",
    location: "India",
    comment: "Good Module. Well Detailed",
    avatarUrl: "https://github.com/shadcn.png",
    timestamp: 1697548800000
  },
  {
    id: 5,
    name: "Emily Davis",
    rating: 2.5,
    date: "17/10/24",
    location: "India",
    comment: "Good Module. Well Detailed Good Module. Well Detailed Good Module. Well Detailed",
    avatarUrl: "https://github.com/shadcn.png",
    timestamp: 1697548800000
  }
];

const FeedbackList = () => {
  const [sortBy, setSortBy] = useState<string>("recent");

  const sortedFeedback = useMemo(() => {
    const feedbackCopy = [...DUMMY_FEEDBACK];
    
    switch (sortBy) {
      case "highest":
        return feedbackCopy.sort((a, b) => b.rating - a.rating);
      case "lowest":
        return feedbackCopy.sort((a, b) => a.rating - b.rating);
      case "recent":
        return feedbackCopy.sort((a, b) => b.timestamp - a.timestamp);
      default:
        return feedbackCopy;
    }
  }, [sortBy]);

  return (
    <div className="w-full min-w-xl mx-auto px-2 py-4">
      <div className="mb-2">
        <div className="flex items-center justify-between">
          <div>
           
            <p className="text-sm text-gray-600">All Feedbacks</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm darkText">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[140px] borderColor">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="highest">Highest Rated</SelectItem>
                <SelectItem value="lowest">Lowest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
        {sortedFeedback.map((feedback) => (
          <FeedbackCard
            key={feedback.id}
            name={feedback.name}
            rating={feedback.rating}
            date={feedback.date}
            location={feedback.location}
            comment={feedback.comment}
            avatarUrl={feedback.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;
