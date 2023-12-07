import { record } from "../util/prompt";
import { ActionType } from "../util/typeUtil";

export const view = async () => {
  console.log("\nExisting option: ");

  Object.values(ActionType).forEach((action, index) => {
    console.log(` ${index}. ${action}`);
  });
  return Number(await record("\nChoose an option: "));
};

export const amountView = async () => {
  return Number(await record("\nEnter an amount: "));
};
