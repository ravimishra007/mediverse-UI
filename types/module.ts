export interface Module {
    id: string;
    title: string;
    imageUrl: string;
    chaptersCount: number;
    modulesCount: number;
    rating: number;
    category: string;
    views:string,
    feedbacks:string
  }


  export interface Chapter {
    id: number;
    title: string;
    imageSrc: string;
    views: number;
  }

export interface Anatomy {
    id: string;
    title: string;
    views: string;
    imageUrl: string;
    description: string;
    category: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: number;
  duration: string;
  attempts: number;
  category: string;
  imageUrl: string;
}


export interface User {
  id: string;
  name: string;
  role: string;
  joinDate: string;
  avatarUrl?: string;
}


export interface UserType {
  id: number;
  name: string;
  country: string;
  joinDate: string;
  subscription: string;
  avatar: string;
}

export interface AdminType {
  id: number;
  name: string;
  country: string;
  joinDate: string;
  role: string;
  avatar: string;
}


export interface MetricCardProps {
  title: string;
  value:  string;
  icon: React.ReactNode;
}