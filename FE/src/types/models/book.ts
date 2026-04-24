import { Review } from "./review";

export interface Book {
    id: string;
    title: string;
    author?: string;
    coverImage?: string;
    description?: string;
    category?: string;
    rating?: number;
    reviewCount?: number;
    reviews?: Review[];
}
