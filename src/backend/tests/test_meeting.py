# This test conducts a post an get request to the test database

import json
import pytest
from icecream import ic

from mec.routes.meetings import crud

# Get tests: Queries data from the database and makes sure that the right types are called. Ex int, string, boolean ect
def test_get_meetings(test_app, monkeypatch):
    test_data = [
        {
            "id": 1,
            "meetingId": "string",
            "date": "string",
            "employeeNumber": 0,
            "time": 0,
            "totalCost": 0,
            "powerpoint": 1,
            "powerpointSlides": 0,
            "comment": "string",
            "title": "string",
        },
        {
            "id": 1,
            "meetingId": "string",
            "date": "string",
            "employeeNumber": 0,
            "time": 0,
            "totalCost": 0,
            "powerpoint": 1,
            "powerpointSlides": 0,
            "comment": "string",
            "title": "string",
        },
    ]

    def mock_get_meetings(*args, **kwargs):
        return test_data

    # monkeypatch.setattr("mec.routes.meetings.crud.bar._defaults_",('test'))
    monkeypatch.setattr(crud, "get_all", mock_get_meetings)

    response = test_app.get("/meetings/?skip=0&limit=2")
    ic(response.json())
    assert response.status_code == 200
    assert response.json() == test_data


# Post Tests:
# def test_create_meetings(test_app, monkeypatch):
#     test_request = {
#         "meetingId": "string",
#         "date": "string",
#         "employeeNumber": 0,
#         "time": 0,
#         "totalCost": 0,
#         "powerpoint": True,
#         "powerpointSlides": 0,
#         "comment": "string",
#         "title": "string",
#     }
#     test_response = {
#         "id": 1,
#         "meetingId": "string",
#         "date": "string",
#         "employeeNumber": 0,
#         "time": 0,
#         "totalCost": 0,
#         "powerpoint": True,
#         "powerpointSlides": 0,
#         "comment": "string",
#         "title": "string",
#     }


#     async def mock_post(db):
#         return 1

#     monkeypatch.setattr(crud, "create_meeting", mock_post)

#     response = test_app.post("/meetings/", data=json.dumps(test_request))

#     assert response.status_code == 422
#     assert response.json() == test_response
