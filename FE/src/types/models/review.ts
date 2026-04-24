export interface Review {
    id: string;
    userId: string;
    username: string;
    userAvatar: string;
    rating: number;
    content: string;
    date: string;
    book?: {
        id: string;
        title: string;
    };
}
