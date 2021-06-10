"use strict";
exports.__esModule = true;
var SavingAccount = /** @class */ (function () {
    function SavingAccount(depositAmount, withdrawAmount) {
        this.depositAmount = depositAmount;
        this.withdrawAmount = withdrawAmount;
    }
    SavingAccount.prototype.deposit = function (amount) {
        this.depositAmount = this.depositAmount + amount;
    };
    SavingAccount.prototype.withdraw = function (amount) {
        this.withdrawAmount = this.withdrawAmount - amount;
    };
    SavingAccount.prototype.getBalance = function () {
        var totalbalance = this.depositAmount - this.withdrawAmount;
        console.log("Total Balance " + totalbalance);
    };
    return SavingAccount;
}());
var obj = new SavingAccount(800000, 60000);
obj.getBalance();
