from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from app.api import auth, book, user
from app import model

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    allow_origins=["*"],
)

app.include_router(auth.router)
app.include_router(book.router)
app.include_router(user.router)

if __name__ == "__main__":
    try:
        uvicorn.run("main:app", host="localhost", port=6789, reload=True)
    except Exception:
        traceback.print_exc()