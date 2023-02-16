// Get Element Id
function getId(setId) {
    return document.getElementById(setId);
}

// Find Element Value
function findElementValue(setId) {
    return getId(setId).innerText;
}

// Set Element Value
function setElementValue(setId, value) {
    const valueFloat = parseFloat(value);
    const getElement = getId(setId);
    return getElement.innerText = Number(valueFloat.toFixed(2));    // this method for unexpected float amounts
}

// Find input Value
function findInputValue(setId) {
    const inputElement = getId(setId);
    // check input field validation [line no: 40]
    const checkInput = inputValidation(inputElement);
    if (checkInput === false) {
        return Number(0);
    }
    return parseFloat(inputElement.value);
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
        return false;
    } else if (isNaN(inputElement.value) || inputElement.value < 0) {
        inputElement.value = '';
        inputElement.setAttribute("placeholder", "invalid amount*");
        inputElement.classList.add("placeholder-rose-500", "font-normal");
        return false;
    }
}

// set warning validation massages using the toast
function toastMsg(massage) {
    document.getElementById("myToast").classList.remove("hidden");
            // Set Toast Massages using function argument
    document.getElementById("toast-msg").innerText = massage;
            // Hide the toast after 5 seconds (5000ms)
    setTimeout(function () {
        getId("myToast").classList.add("hidden");
    }, 5000);
}