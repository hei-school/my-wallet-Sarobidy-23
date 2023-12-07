package org.example.utils;

public class Enum {
  public enum ActionSatusType {
    SUCCESS("success"),
    PENDING("pending"),
    ERROR("error");
    private final String value;

    ActionSatusType(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }
  }
  public enum ActionType {
    DEPOSIT("deposit"),
    WITHDRAW("withdraw"),
    HISTORY("history"),
    BALANCE("balance"),
    EXIT("exit");
    private final String value;

    ActionType(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }
  }
  }
