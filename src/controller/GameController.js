const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

class GameController {
  gameStart() {
    InputView.chooseFunction(this.moveToFunction);
  }

  moveToFunction(number) {
    OutputView.emptyLine();
    if (number === "1") {
      OutputView.processAndMission();
    }
  }
}

const game = new GameController();
game.gameStart();

module.exports = GameController;
