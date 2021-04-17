from sqlalchemy import Boolean, Column, Integer, String, Numeric,DateTime
from database import Base
import datetime
class Meetings(Base):
    __tablename__ = "meetings"

    id = Column(Integer, primary_key=True, index=True)
    # date = Column(String(datetime.datetime))
    # The (3,0) means three digits in front of the decimal point but none behind
    employeeNumber = Column(Numeric(3,0))
    time = Column(Numeric(3,0))
    cost = Column(Numeric(7,2))
    powerpoint = Column(Boolean(True))
    powerpointSlides = Column(Numeric(3,0))

