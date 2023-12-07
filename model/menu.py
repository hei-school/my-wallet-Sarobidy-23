from model.type import ActionType

def view():
    print("\nExisting option: ")

    for index, action in enumerate(ActionType):
        print(f" {index}. {action.value}")

    return int( input("\nChoose an option: "))

def amount_view():
    return float( input("\nEnter an amount: "))
