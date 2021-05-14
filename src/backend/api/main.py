# CD to backend > source env/Scripts/activate > pip install -r requirements.txt  > uvicron main:app --reload
# UI http://127.0.0.1:8000/docs http://127.0.0.1:8000/openapi.json
import api.models
from fastapi import FastAPI, Request, Depends
from starlette.middleware.cors import CORSMiddleware
from api.database import SessionLocal, engine
from sqlalchemy.orm import Session
from pydantic import BaseModel
from api.models import Meetings
import os

app = FastAPI(title="MEC API", description="Meeting Efficiency Organizer", version="0.0.1")

api.models.Base.metadata.create_all(bind=engine)

# CORS Stuff
if os.environ.get("ENV") == "Local":
    ui_url = "http://localhost:3000"

# allow override
if os.environ.get("UI_URL"):
    ui_url = os.environ.get("UI_URL")

# throw an error if URL is unset.
assert ui_url != ""
origins = [ui_url]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TableRequest(BaseModel):
    id: int
    cost: float
    time: int
    employeeNumber:int
    powerpoint: bool
    powerpointSlides: int

# Makes sure we are connected to database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        
# This pulls information from the datbase to the table
@app.get('/table')
def get_table(db: Session = Depends(get_db)):
    """
    ## Route Notes

    You can write markdown here in the function docstrings and it will be parsed on the API documentation.  Amazing right?
    """
    meetings = db.query(Meetings).all()
    return meetings
    
# IF we send information to the database this tells us the information was correctly sent
@app.post('/table')
def create_table(table_request: TableRequest, db: Session = Depends(get_db)):
    # Creates the row and stores it in the table
    meetings = Meetings()
    meetings.id = table_request.id
    meetings.cost = table_request.cost
    meetings.time = table_request.time
    meetings.employeeNumber = table_request.employeeNumber
    meetings.powerpoint = table_request.powerpoint
    meetings.powerpointSlides = table_request.powerpointSlides

    db.add(meetings)
    db.commit()

    return {
        "code": "success",
        "message": "Row Created",
        }