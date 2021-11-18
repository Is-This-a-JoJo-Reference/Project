const calc = document.getElementById("calc")
const display = document.getElementById("display")
const calcButtonResult = document.getElementById("calcButtonResult")
const eraseButton = document.getElementById("displayErase")
var operation = ''//This variable contains type of operation
var firstNumber = 0
var secondNumber = 0
var tempString = ""//It is temporary string to replace '.' to ',' when float number outputs

function OnNumberOrOperationButtonClick(ev){
    var element = ev.target
    if(element.classList.contains("number-btn")){
        if(display.innerText != "0"){//This is made to avoid leading zero
            display.innerText += element.innerText
        }
    }
    if(element.classList.contains("operation")){
        firstNumber = parseFloat(display.innerText.replace(",", "."))
        display.innerText = ""
        operation = element.innerText
    }
    if(element.classList.contains("change-sign-btn")){
        if(display.innerText[0] == '-'){//Checking if minus already has
            display.innerText = display.innerText.slice(1, display.innerText.length)
        }
        else{
            display.innerText = "-" + display.innerText
        }
    }
    if(element.classList.contains("add-point")){
        if(display.innerText.indexOf(",") == -1){//Checking if ',' already has
            display.innerText += ','
        }
    }
    if(element.classList.contains("single-operation")){//Operations using one argument
        firstNumber = parseFloat(display.innerText.replace(",", "."))
        if(element.innerText == "1/x"){
            tempString = "" + 1 / firstNumber
            display.innerText = tempString.replace(".", ",")
        }
        else if(element.innerText == "x^2"){
            tempString = "" + firstNumber * firstNumber
            display.innerText = tempString.replace(".", ",")
        }
        else if(element.innerText == "√x"){
            tempString = "" + Math.sqrt(firstNumber)
            display.innerText = tempString.replace(".", ",")
        }
    }
}

function OnResultButtonClick(ev){
    var element = ev.target
    secondNumber = parseFloat(display.innerText.replace(",", "."))
    if(operation == '+'){
        tempString = "" + (firstNumber + secondNumber)
        display.innerText = tempString.replace(".", ",")
    }
    else if(operation == '-'){
        tempString = "" + (firstNumber - secondNumber)
        display.innerText = tempString.replace(".", ",")
    }
    else if(operation == '*'){
        tempString = "" + (firstNumber * secondNumber)
        display.innerText = tempString.replace(".", ",")
    }
    else if(operation == '/' && secondNumber != 0){
        tempString = "" + (firstNumber / secondNumber)
        display.innerText = tempString.replace(".", ",")
    }
    else if(operation == '/' && secondNumber == 0){
        display.innerText = "error"
    }
}

function OnEraseButtonClick(ev){
    var element = ev.target
    display.innerText = ""
    firstNumber = 0
    secondNumber = 0
    operation = ''
}

calc.addEventListener("click", OnNumberOrOperationButtonClick)
calcButtonResult.addEventListener("click", OnResultButtonClick)
eraseButton.addEventListener("click", OnEraseButtonClick)
