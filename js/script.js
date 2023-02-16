let totalSalary;    // Always set total Income Salary for avoid calculate issue
let totalBalance;   // Set Total Balance for calculate saving amount
let totalExpenses;

// Calculate Income and Expenses
getId("calculate-btn").addEventListener('click', function() {
    totalSalary = findInputValue("total-salary");
    // expenses items value
    // always findInputValue automatic isNaN validation check
    const food = findInputValue("food");
    const rent = findInputValue("rent");
    const clothes = findInputValue("clothes");

    // Validation income totalSalary input field
    if(!totalSalary) {
        const salaryElement = getId("total-salary");
        salaryElement.setAttribute("placeholder", "enter amount*");
        salaryElement.classList.add("placeholder-rose-500", "font-normal");
        return toastMsg("Input your income salary")
    }
    // Compere totalSalary and total Expenses amount
    const validation = incomeValidation(totalSalary, food, rent, clothes);  // incomeValidation a part of utilities.js
    if(validation === false) {
        return toastMsg("You spend more than you earn");
    }

    // total expenses amount
    totalExpenses = food + rent + clothes;
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
    const percentageStr = getId("save").value;
    const percentage = Number(percentageStr);
    const savingAmount = totalSalary / 100 * percentage;
    const remainingAmount = totalBalance - savingAmount;


    // Saving amount field validations

    if (!percentage || percentage > 100 || remainingAmount < 0 || savingAmount > totalBalance) {
        if (!percentage) {
            return toastMsg("Input saving percentage");
        } else if (percentage > 100) {
            return toastMsg("Savings can't exceed 100%");
        } else {
            // calculation remaining percentage for saving the input field
            const remainingPercentage = Number(parseFloat(100 - totalExpenses/(totalSalary / 100))).toFixed(2);
            return toastMsg("Your savings should be equal to or less than " + remainingPercentage + "%");
        }
    }

    // set saving amount
    setElementValue("saving-amount", savingAmount);
    // set remaining amount in output field
    setElementValue("remaining-amount", remainingAmount);
})