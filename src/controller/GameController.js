const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

const FairMatching = require("../model/FairMatching");

class GameController {
  #fairMatching = new FairMatching();

  gameStart() {
    InputView.chooseFunction(this.moveToFunction.bind(this));
  }

  moveToFunction(number) {
    OutputView.printEmptyLine();

    if (number === "1") {
      this.printProcessAndMission(this.startFairMatching.bind(this));
    }
  }

  printProcessAndMission(fn) {
    OutputView.processAndMission();
    InputView.choosePLM(fn);
  }

  startFairMatching(value) {
    const fairs = this.#fairMatching.validate(value);

    OutputView.printEmptyLine();
    OutputView.printFairs(fairs);
  }
}

const game = new GameController();
game.gameStart();

module.exports = GameController;
