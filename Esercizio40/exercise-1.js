class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    // throw an exception if amount is negative
    if (amount < 0) {
      throw  "You can't deposite negative values";  
      } else {
        this.#amount += amount;
      }
  }


  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    if (this.#amount < 0) {
      throw "You don't have sufficient balance";
    } else if (amount > this.#amount) {
      throw "You can't withdraw more than your balance";
    }else{
    this.#amount -= amount;}
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();