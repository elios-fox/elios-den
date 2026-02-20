let display = document.getElementById('display');
let currentInput = '';

function buttonPressed(value) {
  if (value === 'C') {
    currentInput = '';
    display.value = '0';
    return;
  }
  currentInput += value;
  display.value = currentInput;
}

function calculate() {
  try {
    let result = eval(currentInput.replace('×', '*').replace('÷', '/'));
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = 'Error – Fox says try again! 🦊';
    currentInput = '';
  }
}