from datetime import datetime
from typing import List
import time

class ActionStatusType:
    SUCCESS = "success"
    PENDING = "pending"
    ERROR = "error"

class ActionType:
    DEPOSIT = "deposit"
    WITHDRAW = "withdraw"
    HISTORY = "history"
    BALANCE = "balance"
    EXIT = "exit"

class HistoryType:
    def __init__(self, id: str, creation_datetime: str, action: str, status: str, amount: float = None):
        self.id = id
        self.creation_datetime = creation_datetime
        self.action = action
        self.status = status
        self.amount = amount

    def __repr__(self):
        return f"HistoryType(id={self.id}, creation_datetime={self.creation_datetime}, action={self.action}, status={self.status}, amount={self.amount})"

class Wallet:
    def __init__(self):
        self.balance = 0

    def set_balance(self, balance):
        self.balance = balance

class Action:
    def __init__(self, wallet: Wallet):
        self.session: List[HistoryType] = []
        self.wallet = wallet

    def withdraw(self, amount: float) -> None:
        status = ActionStatusType.PENDING
        if self.validate_amount(amount, self.wallet.balance):
            self.wallet.set_balance(self.wallet.balance - amount)
            status = ActionStatusType.SUCCESS
            print(f"Successful withdraw of {amount} Ariary.")
        else:
            return
        self.add_history(self.new_history(ActionType.WITHDRAW, status, amount))

    def deposit(self, amount: float) -> None:
        status = ActionStatusType.PENDING
        if self.validate_amount(amount):
            self.wallet.set_balance(self.wallet.balance + amount)
            status = ActionStatusType.SUCCESS
            print(f"Successful deposit of {amount} Ariary.\n")
        else:
            return
        self.add_history(self.new_history(ActionType.DEPOSIT, status, amount))

    def add_history(self, new_history: HistoryType) -> None:
        self.session.append(new_history)

    def get_history(self) -> None:
        data = self.session
        for number in range(0,len(data)):
            actual = data[number]
            print(f"{actual.creation_datetime} | {actual.action} | {actual.status} | {actual.amount} Ariary")

    def get_balance(self) -> None:
        print(f"\nYour balance is {self.wallet.balance} Ariary.")

    @staticmethod
    def validate_amount(amount: float, balance: float = float("inf")) -> bool:
        try:
            temp_amount = float(amount)
            if temp_amount <= 0:
                print("Enter a correct amount value.")
                return False

            if balance is not None and balance < temp_amount:
                print("\nInsufficient balance.\n")
                return False
            return True

        except ValueError:
            print("Enter a correct amount value.")
            return False

    @staticmethod
    def new_history(action: str, status: str, amount: float = None) -> HistoryType:
        current_timestamp = int(time.time())
        current_date = datetime.utcfromtimestamp(current_timestamp)
        formatted_date = current_date.strftime("%Y-%m-%d %H:%M:%S")  # Format au choix
            
        return HistoryType(
            id="123",
            creation_datetime=str(formatted_date),
            action=action,
            status=status,
            amount=amount,
        )
        