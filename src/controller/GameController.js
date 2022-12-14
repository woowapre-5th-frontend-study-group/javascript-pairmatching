const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

const FairManager = require("../model/FairManager");

class GameController {
  #fairMatching = new FairManager();

  gameStart() {
    this.chooseFunction();
  }

  chooseFunction() {
    InputView.chooseFunction(this.moveToFunction.bind(this));
  }

  moveToFunction(number) {
    OutputView.printprintEmptyLine();

    if (number === "1") {
      return this.printProcessAndMission(this.startFairMatching.bind(this));
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

    OutputView.printprintEmptyLine();
    this.chooseFunction();
  }
}

const gameController = new GameController();
gameController.gameStart();

module.exports = GameController;
