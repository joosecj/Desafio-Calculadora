const inputNumberUm = document.querySelector("#number1");
const inputNumberDois = document.querySelector("#number2");

const btnPlus = document.querySelector("#btn-plus");
const btnTimes = document.querySelector("#btn-times");
const btnClear = document.querySelector("#btn-clear");
const resultBox = document.querySelector("#result-box");

btnTimes.addEventListener("click", handleBtnTimesClick);
btnPlus.addEventListener("click", handleBtnPlusClick);
btnClear.addEventListener("click", handleBtnClearClick);
inputNumberUm.addEventListener("keyup", handleNumberKeyup);
inputNumberDois.addEventListener("keyup", handleNumberKeyup);



function handleBtnPlusClick(event) {
  event.preventDefault;
  const n1 = Number(inputNumberUm.value);
  const n2 = Number(inputNumberDois.value);

  if (!isNumber(n1)) {
    inputNumberUm.classList.add('input-error')
  }
  if (!isNumber(n2)) {
    inputNumberDois.classList.add('input-error')
  }
  const sum = n1 + n2;
  if (!isNumber(sum)) {
    resultBox.innerHTML = 0;
  } else {
    resultBox.innerHTML = sum;
  }
}

function handleBtnTimesClick(event) {
  event.preventDefault;
  const n1 = Number(inputNumberUm.value);
  const n2 = Number(inputNumberDois.value);

  if (!isNumber(n1)) {
    inputNumberUm.classList.add('input-error')
  }
  if (!isNumber(n2)) {
    inputNumberDois.classList.add('input-error')
  }
  const multiplication = n1 * n2;
  if (!isNumber(multiplication)) {
    resultBox.innerHTML = 0;
  } else {
    resultBox.innerHTML = multiplication;
  }
}

function handleBtnClearClick(event) {
  event.preventDefault;
  inputNumberUm.value = ' ';
  inputNumberDois.value = ' ';
  resultBox.innerHTML = 0;
  inputNumberUm.classList.remove('input-error');
  inputNumberDois.classList.remove('input-error');
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function handleNumberKeyup(event) {
  event.target.value = event.target.value.replace(/[^0-9.]/g, "");
}



