document.getElementById('btn-add-money').addEventListener('click', function(event){
   event.preventDefault()

    const addMoney = getInputFieldValueById('input-add-money');
    const inputPin = getInputFieldValueById('input-pin')
    if (isNaN(addMoney)) {
        alert('Failed to add money')
        return
    }
   
    if (inputPin=== 1234) {
        
    const balance = getTextFieldValueById('account-balance');
    const newBalance = balance+ addMoney;
    document.getElementById('account-balance').innerText= newBalance;
    // add to transaction history
    const p =document.createElement('p');
    p.innerText=`add:${addMoney}Tk. New Balance:${newBalance}`;
    // console.log(p);

    // common function
    document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert('Failed to add the money!')
    }

    
})