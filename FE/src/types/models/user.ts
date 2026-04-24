import { Review } from "./review";

export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    bio?: string;
    joinedDate?: string;
    totalReviews?: number;
    totalBooksRead?: number;
    reviews?: Review[];
}
