class BaseCalculator {
  constructor() { 
    this.screen = document.getElementById('screen');
    this.histo = [];
  }
  addToScreen(value) {
      fetch('http://localhost:3000/timer/start', { method: 'POST' })
          .then(response => response.text())
          .then(text => {
              console.log(text);
          })
          .catch(error => {
              console.error(error);
          });
      if (this.screen.value == "Erreur !") {
          this.screen.value = "";
      }
      this.screen.value += value;
  }
  calculate() {
      fetch('http://localhost:3000/timer/stop', { method: 'POST' })
          .then(response => response.text())
          .then(text => {
              console.log(text);
              let time = 0;
              if (!isNaN(text.split(' ')[5])) {
                  time = text.split(' ')[5];
              }
              const expression = this.screen.value;
              this.histo.push(expression);
              fetch('http://localhost:3000/calculate', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ expression }),
              })
                  .then(response => response.json())
                  .then(data => {
                      if (!isNaN(data)) {
                          console.log(data);
                          this.screen.value = data;
                      } else {
                          console.error("Le résultat n'a pas été renvoyé par le serveur. Vérifier l'expression.");
                          this.screen.value = "Erreur !";
                      }
                  });
          })
          .catch(error => {
              console.error(error);
          });
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
  historique() {
    let hist=this.histo.pop();
    if (hist != undefined) {
      this.clearScreen();
      this.addToScreen(hist);
    }
  }
}
let calc = new BaseCalculator();