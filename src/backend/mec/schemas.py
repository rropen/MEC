""" 
	Pydantic Models of our Sqlalchemy Models.  We're calling pydantic models "schemas"
	to reduce confusion.

	"Models are sqlalchemy db models
	"Schemas" are pydantic data shape models.
"""
from pydantic import BaseModel
from mec.models import Meeting

# Meeting
class MeetingBase(BaseModel):
    meetingId: str
    date: str
    employeeNumber: int
    time: int
    totalCost: float 
    powerpoint: bool
    powerpointSlides: int
    comment: str
    title: str


class MeetingCreate(MeetingBase):
    pass


class Meeting(MeetingBase):
    id: int

    class Config:
        orm_mode = True
