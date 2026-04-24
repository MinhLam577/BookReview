export interface Review {
  id: string;
  userId: string;
  username: string;
  userAvatar: string;
  rating: number;
  content: string;
  date: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  rating: number;
  reviewCount: number;
  category: string;
  reviews: Review[];
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
  bio: string;
  joinedDate: string;
}
