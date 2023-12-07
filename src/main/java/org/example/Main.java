package org.example;

import java.util.Scanner;
import org.example.model.Action;
import org.example.model.Wallet;
import org.example.utils.Enum.ActionType;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    int choosenOption = -1;
    Wallet wallet = new Wallet();
    Action interact = new Action(wallet);
    int exitValue = ActionType.values().length - 1;

    while (choosenOption != exitValue) {
      choosenOption = view(scanner);

      switch (choosenOption) {
        case 4:
          System.out.println("\nThank you for visiting.");
          break;
        case 0: {
          double amount = amountView(scanner);
          interact.deposit(amount);
          break;
        }
        case 1: {
          double amount = amountView(scanner);
          interact.withdraw(amount);
          break;
        }
        case 2:
          interact.getHistory();
          break;
        case 3:
          interact.getBalance();
          break;
        default:
          System.out.println("\nPlease, enter a valid option.\n");
          break;
      }
    }

    closeRecord(scanner);
  }

  private static int view(Scanner scanner) {
    System.out.println("\nExisting options: ");

    ActionType[] actionTypes = ActionType.values();
    for (int i = 0; i < actionTypes.length; i++) {
      System.out.println(" " + i + ". " + actionTypes[i]);
    }

    System.out.print("\nChoose an option: ");
    return scanner.nextInt();
  }

  private static double amountView(Scanner scanner) {
    System.out.print("\nEnter an amount: ");
    return scanner.nextDouble();
  }

  private static void closeRecord(Scanner scanner) {
    scanner.close();
  }
}