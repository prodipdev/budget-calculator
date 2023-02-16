// Get Element Id
function getId(setId) {
    return document.getElementById(setId);
}

// Set Element Value
function setElementValue(setId, value) {
    const getElement = getId(setId);
    return getElement.innerText = value;
}

// Find input Value
function findInputValue(setId) {
    const inputElement = getId(setId);

    const checkInput = inputValidation(inputElement);
    if (checkInput === false) {
        return Number(0);
    }

    const inputValue = parseFloat(inputElement.value);
    return Number(inputValue.toFixed(1));
}

// Find Element Value
function findElementValue(setId) {

    return getId(setId).innerText;
}

// Calculate income and expenses validation
function incomeValidation(totalSalary, food, rent, clothes) {
    const totalExpenses = food + rent + clothes;
    if(totalSalary < totalExpenses) {
        return false;
    }
}

// input validation
function inputValidation(inputElement) {
    // if (!inputElement.value) {
    //     inputElement.value = '';
    //     inputElement.setAttribute("placeholder", "enter amount");
    //     inputElement.setAttribute("class", "w-36 h-7 rounded-md bg-gray-400 text-white px-2 placeholder-rose-500");
    //     return false;
    // }
    if (!inputElement.value) {
        return false
    } else if (isNaN(inputElement.value) || inputElement.value < 0) {
        inputElement.value = '';
        inputElement.setAttribute("placeholder", "invalid amount");
        inputElement.setAttribute("class", "w-36 h-7 rounded-md bg-gray-400 text-white px-2 placeholder-rose-500");
        return false;
    }
}