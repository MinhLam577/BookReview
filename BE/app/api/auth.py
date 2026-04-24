from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.config.db import SessionLocal
from app.model.user import User
from app.schema.auth import LoginRequest
from app.utils.security import verify_password
from app.utils.jwt import create_access_token

router = APIRouter(prefix="/auth")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
def to_dict(obj):
    return {c.name: getattr(obj, c.name) for c in obj.__table__.columns}
@router.post("/login")
def login(data: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == data.email).first()

    if not user or not verify_password(data.password, user.password):
        raise HTTPException(status_code=401, detail="Email or Password is incorrect")

    token = create_access_token({"sub": str(user.id)})

    return {"access_token": token}