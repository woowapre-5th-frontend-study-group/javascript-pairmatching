const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

const FairManager = require("../model/FairManager");

class GameController {
  #fairMatching = new FairManager();

  gameStart() {
    InputView.chooseFunction(this.moveToFunction.bind(this));
  }

  moveToFunction(number) {
    OutputView.printprintEmptyLine();

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

    OutputView.printprintEmptyLine();
    OutputView.printFairs(fairs);
  }
}

const game = new GameController();
game.gameStart();

module.exports = GameController;
