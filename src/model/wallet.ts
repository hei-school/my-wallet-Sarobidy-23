export class Wallet {
  balance: number;

  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  setBalance(balance: number) {
    this.balance = balance;
  }
}
