let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldClearDisplay = false;

const numBtns = document.querySelectorAll('button.numbBtn');
const opBtns = document.querySelectorAll('button.opBtns');
const equalsBtn = document.querySelector('button.equalBtn');
const clrBtn = document.querySelector('button.clrBtn')
const dltBtn = document.querySelector('buttn.dltBtn');
const displayCurrent = document.querySelector('div.displayCurrent');
const displayPrevious = document.querySelectory('div.displayPrevious');



function appendDigit(number) {
  if(currentDisplay.textContent === '0' || shouldClearDisplay) {clearCurrentDisplay();}
  currentDisplay.textContent += number;
}

function appendPeriod() {
  if(shouldClearDisplay) {clearCurrentDisplay()}
  if(currentDisplay.textContent === '') {currentDisplay.textContent = '0';}
  if(currentDisplay.textContnet.includes('.'))return;
  currentDisplay.textContent += '.';
}

function clearCurrentDispla() {
  currentDisplay.textContent = '';
  shouldClearDisplay = false;
}

function setOperation(operator) {
  if(currentOperation !== null) evaluate();
  firstOperand = currentDisplay.textContent;
  currentOperation = operator;
  previousDisplay.textContent = `${firstOperand} ${currentOperation}`;
  shouldClearScreen = true;
}

function deleteDigit() {
  currentDisplay.textContent = currentDisplay.textContent
    .toString()
    .slice(0,-1)
}

function clearAll() {
  currentDisplay.textContent = '0';
  previousDisplay.textContent = '';
  firstOperand = '';
  secondOperand = '';
  currentOpperation = null;
}

function calculate() {
  if(currentOperation === null || shouldClearDisplay) return;
  if(currentOperation ==='/' && currentDisplay.textContent ==='0') {
    alert("You can't divide by 0!");
    return; }
  secondOperand = currentDisplay.textContent;
  currentDisplay.textContent = roundResult(
    operate(firstOperand, currentOperation, secondOperand);
  )
  previousDisplay.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentOperation = null;
}

function roundResult(number) {
  return Math.round(number*1000)/1000
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a/b;
}

function operate(a, operator, b) {
  a = Number(a);
  b = Number(b);
  switch(operator) {
    case '+' :
      return add(a,b);
    case '-' :
      return subtract(a,b);
    case '*':
      return multiply(a,b);
    case '/' :
      if(b === 0) return null;
      else return divide(a,b);
    default:
      return null;
  }
}
