import { newHistory, validateAmount } from "../util/globalFunction";
import { ActionSatusType, ActionType, HistoryType } from "../util/typeUtil";
import { Wallet } from "./wallet";

export class Action {
  session: HistoryType[];
  wallet: Wallet;

  constructor(wallet: Wallet) {
    this.session = [];
    this.wallet = wallet;
  }

  withdraw(amount: number) {
    let status = ActionSatusType.PENDING;
    if (validateAmount(amount, this.wallet.balance)) {
      this.wallet.setBalance(this.wallet.balance - amount);
      status = ActionSatusType.SUCCESS;
      console.log(`Successful withdraw of ${amount} Ariary.`);
    } else {
      return;
    }
    this.addHistory(newHistory(ActionType.WITHDRAW, status, amount));
  }

  deposit(amount: number) {
    let status = ActionSatusType.PENDING;
    if (validateAmount(amount)) {
      this.wallet.setBalance(amount);
      status = ActionSatusType.SUCCESS;
      console.log(`Successful deposit of ${amount} Ariary.\n`);
    } else {
      return;
    }
    this.addHistory(newHistory(ActionType.DEPOSIT, status, amount));
  }

  addHistory(newHistory: HistoryType) {
    this.session = [...this.session, newHistory];
  }

  getHistory() {
    console.table(this.session);
  }
  getBalance() {
    console.log(`\nYour balance is ${this.wallet.balance} Ariary.`);
  }
}
