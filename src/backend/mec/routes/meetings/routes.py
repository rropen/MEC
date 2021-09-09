from mec.routes.meetings import crud
from mec.schemas import Meeting, MeetingCreate
from typing import List
from sqlalchemy.orm import Session
from fastapi import APIRouter, HTTPException, Depends, Path
from mec.database import SessionLocal
from icecream import ic
import json

# Create a database connection we can use
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


router = APIRouter()


@router.get("/", response_model=List[Meeting])
def get_meetings(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """
    ## Get Meetings

    Get a list of all the meetings stored in the database
    """
    meetings = crud.get_all(db, skip=skip, limit=limit)
    if not meetings:
        raise HTTPException(status_code=404, detail="Meetings not found")
    return meetings


@router.post("/")
def create_meeting(meeting_data: MeetingCreate, db: Session = Depends(get_db)):
    """
    ## Create Meeting

    Create a new meeting in the database from the data provided in the request.
    """
    if not meeting_data:
        raise HTTPException(status_code=404, detail="Meeting data not provided")

    # Creates the database row and stores it in the table

    new_meeting_success = crud.create_meeting(db, meeting_data)

    if new_meeting_success:
        return {
            "code": "success",
            "message": "Row Created",
        }
    else:
        return {"code": "error", "message": "Row Not Created"}


@router.delete("/{meetingId}")
def delete_meeting(
    meetingId: str = Path(..., title="The ID of the meeting"),
    db: Session = Depends(get_db),
):
    """
    ## Delete a Meeting

    Pass a meetingId (**NOT the database primary key**) value and the meeting will be deleted from the database.
    """
    if not meetingId:
        raise HTTPException(status_code=404, detail="meetingId not provided")

    response = crud.delete_meeting(db, meetingId)

    if response:
        return {"code": "success", "message": "Meeting {} Deleted".format(meetingId)}
    else:
        return {
            "code": "error",
            "message": "Meeting not Deleted or Multiple Meetings with same meetingId existed.",
        }
