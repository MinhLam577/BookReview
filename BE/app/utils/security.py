import hashlib
from passlib.context import CryptContext

pwd_context = CryptContext(
    schemes=["bcrypt"], 
    deprecated="auto"
)
def hash_password(password: str):
    digest = hashlib.sha256(password.encode("utf-8")).digest()
    return pwd_context.hash(digest)

def verify_password(plain, hashed):
    digest = hashlib.sha256(plain.encode("utf-8")).digest()
    return pwd_context.verify(digest, hashed)