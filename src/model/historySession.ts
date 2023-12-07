import { HistoryType } from "../util/typeUtil";

export class HistorySession {
  historyList: HistoryType[];
  constructor() {
    this.historyList = [];
  }

  getList() {
    return this.historyList;
  }

  add(history: HistoryType) {
    this.historyList = [...this.historyList, history];
  }
}
