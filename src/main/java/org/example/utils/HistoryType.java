package org.example.utils;

  public interface HistoryType {
    String getId();
    String getCreationDatetime();
    Enum.ActionType getAction();
    Enum.ActionSatusType getStatus();
    Double getAmount();
  }

