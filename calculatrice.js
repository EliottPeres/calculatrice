function addToScreen(value) {
  document.getElementById('screen').value += value;
}

function clearScreen() {
  document.getElementById('screen').value = '';
}

function clearLast() {
  let screen=document.getElementById('screen').value;
  let taille=screen.length;
  let clear=screen.substring(0,taille-1);
  document.getElementById('screen').value = clear;
}

function calculate() {
  let input = document.getElementById('screen').value;
  let result = eval(input);
  document.getElementById('screen').value = result;
}