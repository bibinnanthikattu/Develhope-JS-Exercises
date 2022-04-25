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
}

class bankAccountVip extends BankAccount {
  #vipAmount = 0;
  constructor(initialAmount) {
    super(initialAmount);
    this.#vipAmount = initialAmount;
  }
  deposit(depositAmount) {
  if (this.#vipAmount >= 1000) {
    this.#vipAmount += depositAmount + (depositAmount / 100) * 3;
    return this.#vipAmount;
  }
    else {
      this.#vipAmount += depositAmount;
      return this.#vipAmount;
    }
  
  }
  withdraw(withdrawAmount) {
    this.#vipAmount -= withdrawAmount;
    return this.#vipAmount;
    }
   view() {
     console.log(this.#vipAmount);
   }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();