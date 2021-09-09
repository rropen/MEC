from decimal import Decimal

from sqlalchemy.sql.functions import grouping_sets
from mec.models import Meeting
from mec.schemas import MeetingBase
from sqlalchemy.orm import Session


def get_all(db: Session, skip: int = 0, limit: int = 25):
    """Get all the meetings and return the them."""

    return db.query(Meeting).offset(skip).limit(limit).all()


def update_group_cost(db: Session, meeting, meeting_data=None, is_delete=False):
    if meeting_data:
        groupMeetings = (
            db.query(Meeting).filter_by(meetingGroup=meeting_data.meetingGroup).all()
        )
    else:
        groupMeetings = (
            db.query(Meeting).filter_by(meetingGroup=meeting.meetingGroup).all()
        )

    if not is_delete:
        if (
            not groupMeetings
        ):  # if no matching groups, must be first meeting and thus groupCost == totalCost
            meeting.groupCost = meeting_data.totalCost
        else:
            # new_group_cost = groupMeetings[-1].groupCost + Decimal(str(meeting_data.totalCost))
            new_group_cost = sum([m.totalCost for m in groupMeetings]) + Decimal(
                str(meeting_data.totalCost)
            )
            meeting.groupCost = new_group_cost

            for old_cost_mtg in groupMeetings:
                old_cost_mtg.groupCost = new_group_cost

        return [meeting, groupMeetings]

    else:
        # new_group_cost = meeting.groupCost - Decimal(str(meeting_data.totalCost))
        new_group_cost = sum([m.totalCost for m in groupMeetings]) - Decimal(
            str(meeting.totalCost)
        )
        for old_cost_mtg in groupMeetings:
            old_cost_mtg.groupCost = new_group_cost

        return groupMeetings


def create_meeting(db: Session, meeting_data):
    """Take data from request and create a new meeting in the database."""
    meeting = Meeting()
    meeting.meetingId = meeting_data.meetingId
    meeting.totalCost = meeting_data.totalCost
    meeting.time = meeting_data.time
    meeting.date = meeting_data.date
    meeting.employeeNumber = meeting_data.employeeNumber
    meeting.meetingGroup = meeting_data.meetingGroup
    meeting.powerpointSlides = meeting_data.powerpointSlides
    meeting.comment = meeting_data.comment
    meeting.title = meeting_data.title

    [meeting, groupMeetings] = update_group_cost(db, meeting, meeting_data)

    db.add(meeting)
    db.add_all(groupMeetings)
    db.commit()

    # Check the new record
    new_meeting = db.query(Meeting).filter_by(id=meeting.id).first()
    if new_meeting.meetingId == meeting_data.meetingId:
        return True  # successfully created record
    else:
        return False  # didn't store correctly


def delete_meeting(db: Session, item_id):
    """Take a meetingId (not primary key "id") and remove the row from the database."""
    mtg = db.query(Meeting).filter_by(meetingId=item_id).first()
    # print(mtg)
    groupMeetings = update_group_cost(db, mtg, is_delete=True)

    # if type(groupMeetings) is list:
    #
    for meeting in groupMeetings:
        print(meeting)
        db.add(meeting)
    db.delete(mtg)
    db.commit()

    # Check our work
    row = db.query(Meeting).filter_by(meetingId=item_id).first()
    if row:
        return False  # Row didn't successfully delete or another one exists
    else:
        return True  # We were successful
