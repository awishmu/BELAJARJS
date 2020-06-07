//alert('This is Work!); 
const defaultResult = 0;
let currentResult = defaultResult;

function getNumberInput(){
    parseInt(userInput.value)
}

function add() {
    const enterdNumber = parseInt(usrInput.value);
    const calcDescription = ${currentResult} + ${enterdNumber};
    currentResult = currentResult + enterdNumber; //.toString = parseInt(userInput.value);
    outputResult(currentResult, '');
}

function subtract (){
    const enterdNumber = parseInt(usrInput.value);
    const calcDescription = ${currentResult} + ${enterdNumber};
    currentResult = currentResult + enterdNumber; //.toString = parseInt(userInput.value);
    outputResult(currentResult, '');
}

function multiply(){

}

function devide() {

}

addBtn.addEventlistener('click', add);
//outputResult(currentResult, calculationDescription);
