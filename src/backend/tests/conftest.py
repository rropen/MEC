import pytest
from starlette.testclient import TestClient

# from mec.models import Meeting
from mec.main import app

# Creates a new connection
@pytest.fixture(scope="module")
def test_app():
    client = TestClient(app)
    yield client
