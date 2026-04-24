from pydantic import BaseModel
from typing import List

class ReviewResponse(BaseModel):
    id: str
    userId: str
    username: str | None
    userAvatar: str | None
    rating: int
    content: str
    date: str