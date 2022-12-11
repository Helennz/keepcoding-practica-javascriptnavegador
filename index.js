const AddNewExpense = document.querySelector("#CreateNewExpense");
const expenseListElement = document.querySelector(".Expenses-List");
const totalListElement = document.querySelector(".TotalExpenses")
const ExpensesList = []

const localStorageExpenses = JSON.parse(
    localStorage.getItem('Expenses')
);

AddNewExpense.addEventListener("click", (event) => {
    event.preventDefault();
    //inputs
    const InputAmount = document.querySelector('#amount');
    localStorage.setItem("SavedAmount", InputAmount.value);
    const InputConcept = document.querySelector('#concept');
    localStorage.setItem("SavedConcept", InputConcept.value);
    //saved inputs Local Storge
    const amountFromLocalStorage = localStorage.getItem('SavedAmount');
    const conceptFromLocalStorage = localStorage.getItem('SavedConcept');
    
    //expense var 
    let expense = {
        concept: conceptFromLocalStorage,
        amount: parseInt(amountFromLocalStorage),
    }
    //final plan
    ExpensesList.push(expense)
    printExpense(expense)
    AddingTotalExpenses(ExpensesList)

    InputAmount.value=" "; InputConcept.value=" ";
    UpdatedExpenses()
});

//no he conseguido que funcione el borrar historial
const deletehistory = (itemIndex) =>{
    ExpensesList.splice(ExpensesList, 1);
    return UpdatedExpenses 
}

function AddingTotalExpenses(ExpensesList) {
    const AmountList = []
    ExpensesList.forEach(expense => {
    AmountList.push(expense.amount)
    });
    //var
    let totalAmount = AmountList.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    
    const totalItem = document.createElement("element");

    let totalElement = `
    <p>${totalAmount}</p>
  `
    totalItem.innerHTML = totalElement;
    totalListElement.prepend(totalItem);
   
}

function printExpense(expense) {
    const expenseItem = document.createElement("element");
    let expenseElement = `
    <p> Concept: ${expense.concept} 
    Amount: ${expense.amount}, </p>
  `
    expenseItem.innerHTML = expenseElement;
    expenseListElement.prepend(expenseItem);
}
