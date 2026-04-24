from app.model.book import Book
from app.schema.book import BookResponse
from app.schema.review import ReviewResponse
def map_book(book: Book) -> BookResponse:
    reviews = []

    for r in book.reviews:
        reviews.append(ReviewResponse(
            id=str(r.id),
            userId=str(r.user_id),
            username=r.user.name if r.user else None,
            userAvatar=r.user.avatar if r.user else None,
            rating=r.rating,
            content=r.content,
            date=r.created_at.isoformat()
        ))

    rating = (
        sum(r.rating for r in book.reviews) / len(book.reviews)
        if book.reviews else 0
    )

    return BookResponse(
        id=str(book.id),
        title=book.title,
        author=book.author,
        coverImage=book.cover_image,
        description=book.description,
        category=book.category,
        rating= round(rating, 1),
        reviewCount=len(book.reviews),
        reviews=reviews
    )