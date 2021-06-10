import {Account} from "./InterfaceAccount";

class SavingAccount implements Account{
   depositAmount:number;
   withdrawAmount:number;
   

   constructor(depositAmount:number,withdrawAmount:number)
   {
       this.depositAmount=depositAmount;
       this.withdrawAmount=withdrawAmount;
       
   }


  

    deposit(amount:number)
    {
        this.depositAmount=this.depositAmount+amount;
    }

    withdraw(amount:number)
    {
        this.withdrawAmount=this.withdrawAmount-amount;
    }

    getBalance(){
        var totalbalance=this.depositAmount-this.withdrawAmount;
        console.log("Total Balance "+totalbalance);
 
     }


}

var obj=new SavingAccount(800000,60000);
obj.getBalance();