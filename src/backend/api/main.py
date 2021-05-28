# CD to backend > source env/Scripts/activate > pip install -r requirements.txt  > uvicron main:app --reload
# UI http://127.0.0.1:8000/docs http://127.0.0.1:8000/openapi.json
import api.models
from fastapi import FastAPI, Request, Depends
from starlette.middleware.cors import CORSMiddleware
from api.database import SessionLocal, engine
from sqlalchemy.orm import Session
from pydantic import BaseModel
from api.models import Meeting
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
print("origins: {}".format(origins))
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class MeetingRequest(BaseModel):
    meetingId: str
    date:str
    totalCost: float
    time: int
    employeeNumber:int
    powerpoint: bool
    powerpointSlides: int
    comment: str
    title: str

# Makes sure we are connected to database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        
# This pulls information from the datbase to the table
@app.get('/meetings')
def get_meetings(db: Session = Depends(get_db)):
    """
    ## Get Meetings

    Get a list of all the meetings stored in the database
    """
    meetings = db.query(Meeting).all()
    return meetings
    
# IF we send information to the database this tells us the information was correctly sent
@app.post('/meeting')
def create_table(meeting_request: MeetingRequest, db: Session = Depends(get_db)):
    # Creates the row and stores it in the table
    meeting = Meeting()
    meeting.meetingId = meeting_request.meetingId
    meeting.totalCost = meeting_request.totalCost
    meeting.time = meeting_request.time
    meeting.date = meeting_request.date
    meeting.employeeNumber = meeting_request.employeeNumber
    meeting.powerpoint = meeting_request.powerpoint
    meeting.powerpointSlides = meeting_request.powerpointSlides
    meeting.comment = meeting_request.comment
    meeting.title = meeting_request.title

    db.add(meeting)
    db.commit()

    return {
        "code": "success",
        "message": "Row Created",
        }