// function addToScreen(value) {
//   document.getElementById('screen').value += value;
// }

// function clearScreen() {
//   document.getElementById('screen').value = '';
// }

// function clearLast() {
//   let screen = document.getElementById('screen').value;
//   let taille = screen.length;
//   let clear = screen.substring(0, taille - 1);
//   document.getElementById('screen').value = clear;
// }

// function calculate() {
//   let input = document.getElementById('screen').value;
//   let result = eval(input);
//   document.getElementById('screen').value = result;
// }

class BaseCalculator {
  constructor() {
    this.screen = document.getElementById('screen');
    this.histo = [];
  }
  addToScreen(value) {
    this.screen.value += value;
  }

  clearScreen() {
    this.screen.value = '';
  }

  clearLast() {
    let screen_ = this.screen.value;
    let taille = screen_.length;
    let clear = screen_.substring(0, taille - 1);
    this.screen.value = clear;
  }

  calculate() {
    this.histo.push(this.screen.value);
    let input = this.screen.value;
    let result = eval(input);
    this.screen.value = result;
  }
  historique() {
    let hist=this.histo.pop();
    if (hist != undefined) {
      this.clearScreen();
      this.addToScreen(hist);
    }
  }
}
let baseCalculator = new BaseCalculator();