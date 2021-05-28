from sqlalchemy import Boolean, Column, Integer, String, Numeric,DateTime
from api.database import Base
import datetime

class Meeting(Base):
    __tablename__ = "meetings"

    # The (3,0) means three digits in front of the decimal point but none behind
    id = Column(Integer, primary_key=True, index=True)
    meetingId = Column(String)
    date = Column(String)
    employeeNumber = Column(Numeric(3,0))
    time = Column(Numeric(3,0))
    totalCost = Column(Numeric(7,2))
    powerpoint = Column(Boolean(True))
    powerpointSlides = Column(Numeric(3,0))
    comment = Column(String)
    title = Column(String)

