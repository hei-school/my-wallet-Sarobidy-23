from model.wallet import Wallet
from model.action import Action
from model.type import ActionType
from model.menu import view, amount_view

def main():
    choosen_option = None
    wallet = Wallet()
    interact = Action(wallet)
    exit_value = len(ActionType) - 1

    while choosen_option != exit_value:
        choosen_option =  view()

        if choosen_option == exit_value:
            print("\nThank you for visiting.")
        elif choosen_option == 0:
            amount =  amount_view()
            interact.deposit(amount)
        elif choosen_option == 1:
            amount =  amount_view()
            interact.withdraw(amount)
        elif choosen_option == 2:
            interact.get_history()
        elif choosen_option == 3:
            interact.get_balance()
        else:
            print("\nPlease, enter a valid option.\n")

main()