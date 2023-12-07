from enum import Enum
from typing import Optional

class ActionType(Enum):
    DEPOSIT = "deposit"
    WITHDRAW = "withdraw"
    HISTORY = "history"
    BALANCE = "balance"
    EXIT = "exit"

class ActionStatusType(Enum):
    SUCCESS = "success"
    PENDING = "pending"
    ERROR = "error"

class HistoryType:
    def __init__(self, id: str, creation_datetime: str, action: ActionType, status: ActionStatusType, amount: Optional[float] = None):
        self.id = id
        self.creation_datetime = creation_datetime
        self.action = action
        self.status = status
        self.amount = amount

    def __repr__(self):
        return f"HistoryType(id={self.id}, creation_datetime={self.creation_datetime}, action={self.action}, status={self.status}, amount={self.amount})"
