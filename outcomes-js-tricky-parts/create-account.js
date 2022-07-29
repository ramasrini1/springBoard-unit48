function createAccount(pin, amount=0) {
  let myPin = pin;
  let amt = amount;

  return {
    checkBalance(inputPin) {
      if (inputPin !== myPin)  {
        return "Invalid PIN.";
      }
      return `$${amt}`;
    },
    deposit(inputPin, newDepositAmt){
      if (inputPin !== myPin)  {
        return "Invalid PIN.";
      }
      amt = amt + newDepositAmt;
      return `Succesfully deposited $${newDepositAmt}. Current balance: $${amt}.`;
    },
    withdraw(inputPin, withDrawAmt){
      if ( inputPin !== myPin) {
        return "Invalid PIN.";
      }
      if (amt - withDrawAmt < 0) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      } 
      amt = amt - withDrawAmt;
      return `Succesfully withdrew $${withDrawAmt}. Current balance: $${amt}.`;  
    },
    changePin(inputPin, changePin) {
      if (inputPin !== myPin) {
        return "Invalid PIN.";
      }
      myPin = changePin;
      return "PIN successfully changed!";
    }
  }
}

// let smallAct = createAccount('1234', 300);
// console.log(smallAct.checkBalance('1234'));
// console.log(smallAct.deposit('1234', 300));
// console.log(smallAct.checkBalance('oopd'));
// console.log(smallAct.changePin('1234', '5678'));

module.exports = { createAccount };
