import { ActionSatusType, ActionType, HistoryType } from "./typeUtil";

export const parseTimeStamp = (timestamp: number) => {
  const currentDate = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const localeDateString = currentDate.toLocaleString("fr-FR", options);
  return localeDateString;
};
export const validateAmount = (amount: number, balance?: number) => {
  let tempAmount = Number(amount);
  if (!Boolean(tempAmount)) {
    console.log("Enter a correct amount value.");
  }
  if (balance !== null && balance < amount) {
    console.log("\nInsufficient balance.\n");
  }

  return Boolean(tempAmount) && balance !== null && !(balance < amount);
};

export const newHistory = (
  action: ActionType,
  status: ActionSatusType,
  amount?: number
): HistoryType => {
  const TIMESTAMP = Date.now();
  return {
    id: TIMESTAMP.toString(),
    creationDatetime: parseTimeStamp(TIMESTAMP),
    action,
    status,
    amount,
  };
};
