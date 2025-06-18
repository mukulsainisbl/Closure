function createBankAccount(initialBalance) {
  let balance = initialBalance; 
  return {
    deposit(amount) {
      if (amount <= 0) {
        console.log("Deposit must be a positive amount.");
        return balance;
      }
      balance += amount;
      return balance;
    },

    withdraw(amount) {
      if (amount <= 0) {
        console.log("Withdrawal must be a positive amount.");
        return balance;
      }
      if (amount > balance) {
        console.log("Insufficient funds.");
        return balance;
      }
      balance -= amount;
      return balance;
    },

    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);

console.log(account.deposit(50));    
console.log(account.withdraw(30));  
console.log(account.getBalance());   
