# CD to backend > source env/Scripts/activate > pip install -r requirements.txt  > uvicron main:app --reload
# UI http://127.0.0.1:8000/docs http://127.0.0.1:8000/openapi.json
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from mec.database import engine, Base
import os
from mec.routes.meetings import routes as meetings
from mec.routes import root

Base.metadata.create_all(bind=engine)
description = '<h2>Meeting Efficiency Organizer</h2><br><blockquote>A custom app built by <a href="mailto:Ian.Mungovan@Rolls-Royce.com">Ian Mungovan</a> and <a href="mailto:Josh.Haines@Rolls-Royce.com">Josh Haines</a> to demonstrate a number of key principles in the move towards DevSecOps.</blockquote>'
app = FastAPI(title="MEC API", description=description, version="0.0.1")

# CORS Stuff
if os.environ.get("ENV") == "Local":
    ui_url = "http://localhost:3000"

# allow override
if os.environ.get("UI_URL", "http://localhost:3000"):
    ui_url = os.environ.get("UI_URL", "http://localhost:3000")

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

# Include api item submodules below
app.include_router(root.router, prefix="", tags=["root"])
app.include_router(meetings.router, prefix="/meetings", tags=["meetings"])
