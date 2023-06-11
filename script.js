let currentExpression = '';

function appendNumber(number) {
  currentExpression += number;
  updateResult();
}

function appendOperator(operator) {
  currentExpression += operator;
  updateResult();
}

function calculate() {
  try {
    const result = eval(currentExpression);
    currentExpression = result.toString();
    updateResult();
  } catch (error) {
    currentExpression = '';
    updateResult();
    alert('Invalid expression');
  }
}

function clearResult() {
  currentExpression = '';
  updateResult();
}

function updateResult() {
  document.getElementById('result').value = currentExpression;
}
