from dataclasses import dataclass
from typing import Optional


@dataclass
class Task:
    title: str
    description: str
    id: Optional[int] = None
    completed: Optional[bool] = False

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "completed": self.completed,
        }
