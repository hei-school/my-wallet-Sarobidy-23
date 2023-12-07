from typing import List
from datetime import datetime

class HistoryType:
    def __init__(self, id: str, creation_datetime: str, action: str, status: str, amount: float = None):
        self.id = id
        self.creation_datetime = creation_datetime
        self.action = action
        self.status = status
        self.amount = amount

    def __repr__(self):
        return f"HistoryType(id={self.id}, creation_datetime={self.creation_datetime}, action={self.action}, status={self.status}, amount={self.amount})"

class HistorySession:
    def __init__(self):
        self.history_list = []

    def get_list(self) -> List[HistoryType]:
        return self.history_list

    def add(self, history: HistoryType) -> None:
        self.history_list.append(history)