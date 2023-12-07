package org.example.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import org.example.utils.Enum.ActionSatusType;
import org.example.utils.Enum.ActionType;
import org.example.utils.HistoryType;

public class Action {
  private List<HistoryType> session;
  private Wallet wallet;
  Scanner scanner = new Scanner(System.in);

  public Action(Wallet wallet) {
    this.session = new ArrayList<>();
    this.wallet = wallet;
  }

  public void withdraw(double amount) {
   ActionSatusType status = ActionSatusType.PENDING;
    if (validateAmount(amount, wallet.getBalance())) {
      wallet.setBalance(wallet.getBalance() - amount);
      status = ActionSatusType.SUCCESS;
      System.out.println("Successful withdraw of " + amount + " Ariary.");
    } else {
      return;
    }
    addHistory(newHistory(ActionType.WITHDRAW, status, amount));
  }

  public void deposit(double amount) {
    ActionSatusType status = ActionSatusType.PENDING;
      wallet.setBalance(wallet.getBalance() + amount);
      status = ActionSatusType.SUCCESS;
      System.out.println("Successful deposit of " + amount + " Ariary.\n");
    addHistory(newHistory(ActionType.DEPOSIT, status, amount));
  }

  private void addHistory(HistoryType newHistory) {
    session.add(newHistory);
  }

  public void getHistory() {
    for (HistoryType history : session) {
      System.out.println("Id: " + history.getId());
      System.out.println("CreationDatetime: " + history.getCreationDatetime());
      System.out.println("Action: " + history.getAction());
      System.out.println("Status: " + history.getStatus());
      System.out.println("Amount: " + history.getAmount());
    }
  }

  public void getBalance() {
    System.out.println("\nYour balance is " + wallet.getBalance() + " Ariary.");
  }

  private boolean validateAmount(double amount, double balance) {
    if (balance < amount) {
      System.out.println("\nInsufficient balance.\n");
      return false;
    }

    return true;
  }

  private HistoryType newHistory(ActionType action, ActionSatusType status, double amount) {
    return null;
  }
}
