from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from app.config.db import SessionLocal
from app.model.book import Book
from app.utils.convert import map_book
router = APIRouter(prefix="/books")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def get_books(
    category: str | None = None,
    search: str | None = None,
    db: Session = Depends(get_db)
):
    query = db.query(Book)

    if category and category != "All":
        query = query.filter(Book.category == category)

    if search:
        query = query.filter(Book.title.ilike(f"%{search}%"))

    return {"data": [map_book(book) for book in query.all()]}
  
@router.get("/categories")
def get_categories(db: Session = Depends(get_db)):
    return [ "All" ] + list(set([b.category for b in db.query(Book).all()]))