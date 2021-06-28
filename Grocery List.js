let shoppingList = []; //initialize empty shoppingList array

//event listeners to ensure respective functions are enacted upon clicking their requisite buttons...
document.getElementById("addToList").addEventListener("click",addItem); //adds item to shoppingList array
document.getElementById("deleteFirst").addEventListener("click",deleteFirst); //deletes first item from shoppingList array
document.getElementById("deleteLast").addEventListener("click",deleteLast); //deletes last item from shoppignList array

//function to add user input to shoppingList array upon pressing "Add to List" button
function addItem() {
    let items = document.getElementById("items").value; //takes user input from text box
    if (shoppingList.indexOf(items) == -1) {
        shoppingList.push(items); //adds item to shoppingList array
        document.getElementById("groceryList").innerHTML = shoppingList.join(', '); //display array in grocerylist paragraph element
    }else if (shoppingList.indexOf(items) != -1) { //checking for duplicate entries...
        alert("You have already entered that item!");
        return shoppingList;
    }    
    
}

//function to delete the FIRST entry from shoppingList array upon pressing "Delete First Item" button
function deleteFirst() {
    shoppingList.shift(); //deletes first item from shoppingList array
    document.getElementById("groceryList").innerHTML = shoppingList; 
}

//function to delete the LAST entry from shoppingList array upon pressing "Delete Last Item" button
function deleteLast(){
    shoppingList.pop(); //deletes last item from shoppignList array
    document.getElementById("groceryList").innerHTML = shoppingList; 
}

