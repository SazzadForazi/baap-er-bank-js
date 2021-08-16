
//handle deposit button event

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposite-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // update deposite total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;


    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    depositInput.value = '';

});

// handle withdraw  event handler

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);



    // set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawText);


    const newWithdrawTotal = previouswithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalancetatal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalancetatal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;




    //Clear withdraw input
    withdrawInput.value = '';
});