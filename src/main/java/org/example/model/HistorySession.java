package org.example.model;

import java.util.ArrayList;
import java.util.List;
import org.example.utils.HistoryType;

public class HistorySession {
  private List<HistoryType> historyList;

  public HistorySession() {
    this.historyList = new ArrayList<>();
  }

  public List<HistoryType> getList() {
    return this.historyList;
  }

  public void add(HistoryType history) {
    this.historyList.add(history);
  }
}
