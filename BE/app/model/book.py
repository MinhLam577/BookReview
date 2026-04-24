import uuid
from sqlalchemy import Column, String, Text
from sqlalchemy.dialects.postgresql import UUID
from app.config.db import Base
from sqlalchemy.orm import relationship

class Book(Base):
    __tablename__ = "books"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = Column(String, nullable=False)
    author = Column(String)
    cover_image = Column(String)
    description = Column(Text)
    category = Column(String)
    reviews = relationship(
        "Review",
        back_populates="book",
        cascade="all, delete-orphan"
    )