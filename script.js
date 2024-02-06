const display = document.getElementById('display');
const historyList = document.getElementById('historico');
let history = [];

function numero(value) {
  display.value += value;
}

function limpar() {
  display.value = '';
}

function igual() {
  try {
    const result= eval(display.value);
    addToHistory(`${display.value} = ${result}`);
    display.value = result;
    
  } catch (error) {
    display.value = 'Erro';
  }
}

function addToHistory(entry) {
  history.push(entry);
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = '';
  history.forEach(entry => {
    const listItem = document.createElement('li');
    listItem.textContent = entry;
    historyList.appendChild(listItem);
  });
}