let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldClearDisplay = false;

const numBtns = document.querySelectorAll('button.numbBtn');
const opBtns = document.querySelectorAll('button.opBtn');
const equalsBtn = document.querySelector('button.equalsBtn');
const clrBtn = document.querySelector('button.clearBtn')
const dltBtn = document.querySelector('button.dltBtn');
const currentDisplay = document.querySelector('div.displayCurrent');
const previousDisplay = document.querySelector('div.displayPrevious');
const periodBtn = document.querySelector('button.periodBtn');

equalsBtn.addEventListener('click', calculate);
clrBtn.addEventListener('click', clearAll);
dltBtn.addEventListener('click', deleteDigit);
periodBtn.addEventListener('click', appendPeriod);

numBtns.forEach((button => button.addEventListener('click', () => appendDigit(button.textContent))))

opBtns.forEach((button => button.addEventListener('click', () => setOperation(button.textContent))))
                
function appendDigit(number) {
  if(currentDisplay.textContent === '0' || shouldClearDisplay) {clearCurrentDisplay();}
  currentDisplay.textContent += number;
}

function appendPeriod() {
  if(shouldClearDisplay) {clearCurrentDisplay()}
  if(currentDisplay.textContent === '') {currentDisplay.textContent = '0';}
  if(currentDisplay.textContent.includes('.'))return;
  currentDisplay.textContent += '.';
}

function clearCurrentDisplay() {
  currentDisplay.textContent = '';
  shouldClearDisplay = false;
}

function setOperation(operator) {
  if(currentOperation !== null) {calculate()};
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
    operate(firstOperand, currentOperation, secondOperand));
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
