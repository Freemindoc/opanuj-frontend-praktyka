function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', validate);

  button2.addEventListener('click', clear);
}

function validate () {
  if(!input.value) return;
  result.innerHTML = parseNumber(input.value) > 0 && parseNumber(input.value) < 100 ? "valid" : "invalid";
}

function parseNumber(inputValue) {
  const number = Math.round(inputValue);
  return parseInt(number);
}

function clear () {
  input.value = '';
  result.innerHTML = '';
}

validator();
