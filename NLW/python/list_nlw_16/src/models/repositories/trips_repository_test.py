from .trips_repository import TripsRepository
from src.models.settings.db_connection_handle import db_connection_handle

import uuid

from datetime import datetime, timedelta


db_connection_handle.connect()
trip_id = str(uuid.uuid4())


def test_create_trip():
    conn = db_connection_handle.get_connection()
    trips_repositories = TripsRepository(conn)

    trips_infos = {
        "id": trip_id,
        "destination": "osasco",
        "start_date": datetime.strptime("02-01-2024", "%d-%m-%Y"),
        "end_date": datetime.strptime("02-01-2024", "%d-%m-%Y") + timedelta(days=5),
        "owner_name": "Osvaldo",
        "owner_email": "osvalsdo@gmail.com",
        "status": "0",
    }

    trips_repositories.create_trip(trips_infos)


def test_find_trip_by_id():
    conn = db_connection_handle.get_connection()
    trips_repositories = TripsRepository(conn)

    trip = trips_repositories.find_trip_by_id(trip_id)
    print(f"\n\n {trip}\n\n")


def test_update_trip_status():
    conn = db_connection_handle.get_connection()
    trips_repositories = TripsRepository(conn)

    trip = trips_repositories.update_trip_status(trip_id)
