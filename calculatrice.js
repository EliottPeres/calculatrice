function addToScreen(value) {
  document.getElementById('screen').value += value;
}

function clearScreen() {
  document.getElementById('screen').value = '';
}

function clearLast() {
  var screen=document.getElementById('screen').value;
  var taille=screen.length;
  var clear=screen.substring(0,taille-1);
  document.getElementById('screen').value = clear;
}

function calculate() {
  var input = document.getElementById('screen').value;
  var result = eval(input);
  document.getElementById('screen').value = result;
}