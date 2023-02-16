let totalSalary;
let totalBalance;
// Calculate Income and Expenses
getId("calculate-btn").addEventListener('click', function() {
    totalSalary = findInputValue("total-salary");
    // expenses items value
    const food = findInputValue("food");
    const rent = findInputValue("rent");
    const clothes = findInputValue("clothes");
    const validation = incomeValidation(totalSalary, food, rent, clothes);
    if(!totalSalary) {
        const salaryElement = getId("total-salary");
        salaryElement.setAttribute("placeholder", "enter amount*");
        salaryElement.setAttribute("class", "w-36 h-7 rounded-md bg-gray-400 text-white px-2 placeholder-rose-500");
        return;
    }

    if(validation === false) {
        return alert("You don't expenses larger than your income!");
    }
    // total expenses amount
    const totalExpenses = food + rent + clothes;
    // Calculate totalSalary to totalExpenses
    totalBalance = totalSalary - totalExpenses;

    // set total expenses in output field
    setElementValue("total-expenses", totalExpenses);
    // set total balance in output field
    setElementValue("balance", totalBalance);

    // Enable Saving Amount Calculator
    getId("save").removeAttribute("disabled");
    getId("save-btn").removeAttribute("disabled");
})

// Calculate Saving Amount
getId("save-btn").addEventListener('click', function() {

    const percentage = findInputValue("save");
    const savingAmount = totalSalary / 100 * percentage;
    const remainingAmount = totalBalance - savingAmount;

    // set saving amount
    setElementValue("saving-amount", savingAmount);
    // set remaining amount in output field
    setElementValue("remaining-amount", remainingAmount);
})