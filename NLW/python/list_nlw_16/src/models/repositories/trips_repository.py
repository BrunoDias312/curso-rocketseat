from sqlite3 import Connection
from typing import Dict, Tuple


class TripsRepository:
    def __init__(self, conn) -> None:
        self.__conn = conn

    def create_trip(self, trips_infos: Dict) -> None:
        cursor = self.__conn.cursor()
        cursor.execute(
            """
                insert into trips(id, destination, start_date, end_date,owner_name, owner_email, status)
                values(?, ?, ?, ?, ? ,?, ?)
            """,
            (
                trips_infos["id"],
                trips_infos["destination"],
                trips_infos["start_date"],
                trips_infos["end_date"],
                trips_infos["owner_name"],
                trips_infos["owner_email"],
                trips_infos["status"],
            ),
        )
        self.__conn.commit()

    def find_trip_by_id(self, trip_id: str) -> Tuple:
        cursor = self.__conn.cursor()
        cursor.execute(
            """
                SELECT * FROM trips WHERE id = ? 
            """,
            (trip_id,),
        )
        trip = cursor.fetchone()
        return trip

    def update_trip_status(self, trip_id) -> None:
        cursor = self.__conn.cursor()
        cursor.execute(
            """
                update trips set status = 2 where id = ?
            """,
            (trip_id,),
        )

        self.__conn.commit()
