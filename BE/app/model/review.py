import uuid
from sqlalchemy import Column, Text, ForeignKey, Integer, DateTime
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
from app.config.db import Base
from sqlalchemy.orm import relationship
class Review(Base):
    __tablename__ = "reviews"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    content = Column(Text)
    rating = Column(Integer, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    user_id = Column(UUID, ForeignKey("users.id"), index=True)
    book_id = Column(UUID, ForeignKey("books.id"), index=True)
    user = relationship("User", back_populates="reviews")
    book = relationship("Book", back_populates="reviews")