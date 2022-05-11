class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
  get balance() {
    return this.#amount
  }
}
class BankAccountVip extends BankAccount{
  constructor(initialAmount) {
    super(initialAmount);
  }
  deposit(amount) {
  // console.log(super.balance);
    if (super.balance >= 1000) {
      let interest = (amount / 100) * 3;
      let compoundAmount = interest + amount;
      super.deposit(compoundAmount);      
    } else {
      super.deposit(amount)
    }
  }
 
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();


// bankAccountVip.deposit();

// const balanceOFCur = new BankAccount(1000);
// console.log( balanceOFCur.balance);