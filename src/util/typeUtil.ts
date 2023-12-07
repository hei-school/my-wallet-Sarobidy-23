export enum ActionType {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
  HISTORY = "history",
  BALANCE = "balance",
  EXIT = "exit",
}

export enum ActionSatusType {
  SUCCESS = "success",
  PENDING = "pending",
  ERROR = "error",
}

export interface HistoryType {
  id: string;
  creationDatetime: string;
  action: ActionType;
  status: ActionSatusType;
  amount?: number;
}
