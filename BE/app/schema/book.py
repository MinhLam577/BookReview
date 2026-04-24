from pydantic import BaseModel
from typing import List
from app.schema.review import ReviewResponse
class BookResponse(BaseModel):
    id: str
    title: str
    author: str
    coverImage: str | None
    description: str | None
    category: str | None
    rating: float
    reviewCount: int
    reviews: List[ReviewResponse]