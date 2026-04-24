from fastapi import APIRouter, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session, joinedload
from jose import jwt
from app.config.db import SessionLocal
from app.model.user import User
from app.model.review import Review
from app.schema.user import UserUpdate
from app.utils.jwt import decode_access_token
import uuid
security = HTTPBearer()

router = APIRouter(prefix="/users")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db) 
):
    token = credentials.credentials
    payload = decode_access_token(token)
    user_id = payload.get("sub")
    user = db.query(User).filter(User.id == user_id).first()
    return user

@router.get("/me")
def get_me(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    user = db.query(User)\
        .options(joinedload(User.reviews).joinedload(Review.book))\
        .filter(User.id == current_user.id)\
        .first()

    total_reviews = len(user.reviews)
    total_books_read = len(set(r.book_id for r in user.reviews))

    return {
        "id": str(user.id),
        "email": user.email,
        "name": user.name,
        "avatar": user.avatar,
        "bio": user.bio,
        "joinedDate": user.joined_date.strftime("%B %Y") if user.joined_date else None,

        "totalReviews": total_reviews,
        "totalBooksRead": total_books_read,

        "reviews": [
            {
                "id": str(r.id),
                "rating": r.rating,
                "content": r.content,
                "date": r.created_at.isoformat(),
                "book": {
                    "id": str(r.book.id),
                    "title": r.book.title
                } if r.book else None
            }
            for r in user.reviews
        ]
    }

@router.put("/{user_id}")
def update_user(user_id: str, data: UserUpdate, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == uuid.UUID(user_id)).first()

    if not user:
        return {"error": "User not found"}

    for key, value in data.dict(exclude_unset=True).items():
        setattr(user, key, value)

    db.commit()
    db.refresh(user)

    return user