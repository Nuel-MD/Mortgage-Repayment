document.getElementById('mortgage').addEventListener('submit', useInput);

function useInput(event) {
    event.preventDefault();

    var Principal = document.getElementById("amount").value;
    var rate = document.getElementById("Rate").value;
    var Term = document.getElementById("Term").value;
    var repaymentType = document.querySelector('input[name="Repayment"]:checked');
    
    var isValid = true;

    // Get the error label elements with correct IDs
    var amountError = document.querySelector('#Amount');
    var rateError = document.querySelector('#rate');
    var termError = document.querySelector('#term');

    // Validation check for empty fields
    if (!Principal) {
        if (amountError) {
            amountError.classList.remove('invisible');
        document.querySelector('#Euro').style.backgroundColor = 'hsl(4, 69%, 50%)';
        document.querySelector('#Euro').style.color = 'hsl(0, 0%, 100%)';
        document.querySelector('#amount').style.borderColor = 'hsl(4, 69%, 50%)';
        document.querySelector('#Euro').style.border = ' 1px solid hsl(4, 69%, 50%)';


        }
        isValid = false;
    } else {
        if (amountError) {
            amountError.classList.add('invisible');
        }
    }

    if (!rate) {
        if (rateError) {
            rateError.classList.remove('invisible');
        document.querySelector('#percent').style.backgroundColor = 'hsl(4, 69%, 50%)';
        document.querySelector('#percent').style.color = 'hsl(0, 0%, 100%)';
        document.querySelector('#Rate').style.borderColor = 'hsl(4, 69%, 50%)';
        document.querySelector('#percent').style.border = ' 1px solid hsl(4, 69%, 50%)';



        }
        isValid = false;
    } else {
        if (rateError) {
            rateError.classList.add('invisible');
        }
    }

    if (!Term) {
        if (termError) {
            termError.classList.remove('invisible');
        document.querySelector('#years').style.backgroundColor = 'hsl(4, 69%, 50%)';
        document.querySelector('#years').style.color = 'hsl(0, 0%, 100%)';
        document.querySelector('#years').style.borderColor = 'hsl(4, 69%, 50%)';
        document.querySelector('#Term').style.border = ' 1px solid hsl(4, 69%, 50%)';



        }
        isValid = false;
    } else {
        if (termError) {
            termError.classList.add('invisible');
        }
    }

    if (!repaymentType) {
        alert("Please select a mortgage type.");
        document.querySelector('#radio-repay').classList.remove('invisible');
        isValid = false;
    }
    else {
        document.querySelector('#radio-repay').classList.add('invisible');

    }

    if (!isValid) {
        return;
    }

    var r = rate / (100 * 12);
    var n = Term * 12;
    var M = Principal * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    var Total = M * n;
    
    document.getElementById('monthly').innerText = "£" + M.toFixed(2);
    document.getElementById('repay').innerText = "£" + Total.toFixed(2);

    document.querySelector('.result').style.display = "none";
    document.querySelector('.completed').style.display = "block";
}
