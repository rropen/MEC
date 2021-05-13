from sqlalchemy import Boolean, Column, Integer, String, Numeric,DateTime
from database import Base
import datetime
class Meetings(Base):
    __tablename__ = "meetings"

    # The (3,0) means three digits in front of the decimal point but none behind
    meetingId = Column(Integer, primary_key=True, index=True)
    date = Column(String)
    employeeNumber = Column(Numeric(3,0))
    time = Column(Numeric(3,0))
    avgCost = Column(Numeric(7,2))
    totalCost = Column(Numeric(7,2))
    powerpoint = Column(Boolean(True))
    powerpointSlides = Column(Numeric(3,0))

