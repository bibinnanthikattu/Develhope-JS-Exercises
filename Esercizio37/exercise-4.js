class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(depositValue){
    this.balance += depositValue;
    return this.balance
    }
    withdraw(withdrawValue) {
        this.balance -= withdrawValue;
        return this.balance;
    }
    view(){
        console.log(this.balance);
    }
}


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();