let display = document.getElementById('display');
let currentInput = '';

function appendNumber(num) {
  currentInput += num;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === '') return;
  currentInput += op;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculateResult() {
  try {
    let expression = currentInput.replace('^', '**');
    let result = eval(expression);
    currentInput = result.toString();
    updateDisplay();
  } catch {
    display.textContent = 'Error';
  }
}

function sqrt() {
  try {
    currentInput = Math.sqrt(eval(currentInput)).toString();
    updateDisplay();
  } catch {
    display.textContent = 'Error';
  }
}

function percentage() {
  try {
    currentInput = (eval(currentInput) / 100).toString();
    updateDisplay();
  } catch {
    display.textContent = 'Error';
  }
}

function reciprocal() {
  try {
    currentInput = (1 / eval(currentInput)).toString();
    updateDisplay();
  } catch {
    display.textContent = 'Error';
  }
}

function updateDisplay() {
  display.textContent = currentInput || '0';
}