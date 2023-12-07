package org.example.model;

import java.util.Scanner;
import org.example.utils.Enum;

public class Menu {

  private static final Scanner scanner = new Scanner(System.in);

  public static int view() {
    System.out.println("\nExisting option: ");

    Enum.ActionType[] actionTypes = Enum.ActionType.values();
    for (int i = 0; i < actionTypes.length; i++) {
      System.out.println(" " + i + ". " + actionTypes[i].getValue());
    }

    return scanner.nextInt();
  }

  public static double amountView() {
    System.out.print("\nEnter an amount: ");
    return scanner.nextDouble();
  }

  public static void closeScanner() {
    scanner.close();
  }
}
