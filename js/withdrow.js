// add even  withdrow buttton 
document.getElementById('btn-withdrow').addEventListener('click', function(){
    // get withdrow amound deposit field 
    const withdrowField = document.getElementById('withdrow-file');
    const newWithdrowAmountString = withdrowField.value;
   const newWithdrowAmount = parseFloat(newWithdrowAmountString);
//    step -2 this is the value work 
   withdrowField.value='';
    // step-3 get withdrow total amount 
    const withdrowTotalElement = document.getElementById('withdrow-total');
    const prevousWithdrowTotalString=withdrowTotalElement.innerText;
    const prevousWithdrowTotal = parseFloat(prevousWithdrowTotalString);
      // step-4 get the new withdrow total amount 
   const newWithdrowTotal = prevousWithdrowTotal+newWithdrowAmount;
   withdrowTotalElement.innerText = newWithdrowTotal;
   //    step-5 current balance 
   const balanceTotalElement = document.getElementById('balance-total');
   const prevousBalanceTotalString = balanceTotalElement.innerText;
   const prevousBalanceTotalAmount = parseFloat(prevousBalanceTotalString);
//   step-6 balance total 
   const newBalanceTotal = prevousBalanceTotalAmount - newWithdrowAmount;
    balanceTotalElement.innerText = newBalanceTotal;




})