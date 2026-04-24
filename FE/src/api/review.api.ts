import { fetchAPI } from "../lib/helperFetchApi";
import { Review } from "../types/models/review";

export async function getReviewsByBook(bookId: string) {
    return fetchAPI<Review[]>(`/reviews/book/${bookId}`);
}

export async function createReview(
    bookId: string,
    content: string,
    rating: number
) {
    return fetchAPI<Review>("/reviews", {
        method: "POST",
        body: JSON.stringify({
            book_id: bookId,
            content,
            rating,
        }),
    });
}
