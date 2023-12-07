import { Wallet } from "./model/wallet";
import { Action } from "./model/action";
import { closeRecord } from "./util/prompt";
import { amountView, view } from "./model/menu";
import { ActionType } from "./util/typeUtil";

const main = async () => {
  let choosenOption = null;
  const wallet = new Wallet();
  const interact = new Action(wallet);
  const exitValue = Object.keys(ActionType).length - 1;

  while (choosenOption !== exitValue) {
    choosenOption = await view();

    switch (choosenOption) {
      case exitValue:
        console.log("\nThank you for visiting.");
        break;
      case 0: {
        let amount = await amountView();
        interact.deposit(amount);
        break;
      }
      case 1: {
        let amount = await amountView();
        interact.withdraw(amount);
        break;
      }
      case 2: {
        interact.getHistory();
        break;
      }
      case 3: {
        interact.getBalance();
        break;
      }
      default:
        console.log("\nPlease, enter a valid option.\n");
        break;
    }
  }
  closeRecord();
};

main();
