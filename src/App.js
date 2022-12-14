const GameController = require("./controller/GameController");

class App {
  #gameController = new GameController();

  play() {
    this.#gameController.gameStart();
  }
}

const app = new App();
app.play();
