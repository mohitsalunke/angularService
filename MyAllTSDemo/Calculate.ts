function calculate(qty:number,rate:number,dis?:number)
{
    console.log(qty);
    console.log(rate);
    console.log(dis);
    let bill=qty*rate;
    if(dis==undefined)
    {
       console.log(bill)
    }
    else{
        console.log(bill-(bill/dis));
    }

}
calculate(12,39999);
calculate(12,39999,10);