document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');
    const inputPin = getInputFieldValueById('cash-out-pin');
    // console.log(cashOut, inputPin);
    // console.log("hello");
    if (isNaN(cashOut)) {
        alert('Failed to cash out')
        return
    }

    if (inputPin=== 1234) {
        const balance = getTextFieldValueById('account-balance');
        if (cashOut> balance) {
            alert('You do not have enough money to cash out');
            return;
        }
        const newBalance = balance-cashOut;
        document.getElementById('account-balance').innerText= newBalance;
    }
    else{
        alert('Please try again')
    }
})