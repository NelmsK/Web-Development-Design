document.getElementById("calculate").addEventListener("click", userInput); //event listener takes user input and converts it to cents after clicking calculate button

function userInput() {
    let cents = parseInt($("cents").value); //takes user input from text box 
    //ensuring user input is within listed 0-99 cent range...
    if(cents >= 0 && cents <= 99) {
        calcChange(cents); //calls the calcChange function        
    } else {
        alert("Error: user input outside of 0-99 cent range.");
        break; 
    }
}

//function to convert user input cents into respective coin equivalents...
function calcChange(cents){
    let quarters = Math.floor(cents/25); //floor used to get MIN # of quarters (rounds down) out of total user input # of cents
    cents %= 25; //mod used to calc remaining number of cents after finding number of quarters
    $("quarters").value=quarters //displaying number of quarters in the textbox

    let dimes = Math.floor(cents/10); //floor used to get MIN # of dimes (rounds down) out of total user input # of cents
    cents %= 10; //mod used to calc remaining number of cents after finding number of dimes
    $("dimes").value = dimes //displaying number of dimes in the textbox

    let nickels = Math.floor(cents/5); //floor used to get MIN # of nickels (rounds down) out of total user input # of cents
    cents %= 5; //mod used to calc remaining number of cents after finding number of nickels
    $("nickels").value = nickels //displaying number of nickels in the textbox

    let pennies = Math.floor(cents/1); //floor used to get MIN # of pennies (rounds down) out of total user input # of cents
    cents %= 1; //mod used to calc remaining number of cents after finding number of pennies
    $("pennies").value = pennies //displaying number of pennies in the textbox
}



var $ = function (id) {
    return document.getElementById(id);
}
