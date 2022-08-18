// add even  deposit buttton 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // get deposit amound deposit field 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
   const newDepositAmount = parseFloat(newDepositAmountString);
//    step -2 this is the value work 
    depositField.value='';
   
    // step-3 get deposit total amount 
    const depositTotalElement = document.getElementById('deposit-total');
    const prevousDepositTotalString=depositTotalElement.innerText;
    const prevousDepositTotal = parseFloat(prevousDepositTotalString);
    // step-4 get the new deposit total amount 
   const newDepositTotal = prevousDepositTotal+newDepositAmount;
   depositTotalElement.innerText = newDepositTotal;
//    step-5 current balance 
    const balanceTotalElement = document.getElementById('balance-total');
    const prevousBalanceTotalString = balanceTotalElement.innerText;
    const prevousBalanceTotalAmount = parseFloat(prevousBalanceTotalString);
//   step-6 balance total 
    const newBalanceTotal = prevousBalanceTotalAmount + newDepositAmount;
     balanceTotalElement.innerText = newBalanceTotal;

})