const { MissionUtils } = require("@woowacourse/mission-utils");
const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");
const PairMatching = require("./Model/PairMatching");

class App {
  #pairMatching;

  getPairMatching() {
    return this.#pairMatching;
  }

  play() {
    this.#pairMatching = new PairMatching();
    InputView.readTask(this.#readTaskCallback);
  }

  #controller() {
    if (this.#pairMatching.getTask() == "match") this.#match();
    else if (this.#pairMatching.getTask() == "search") this.#search();
    else if (this.#pairMatching.getTask() == "init") this.#init();
    else if (this.#pairMatching.getTask() == "quit") this.#quit();
  }

  #match() {
    OutputView.printCrewInfo();
    InputView.readOptions(this.#readOptionsForMatchCallback);
  }

  #search() {
    OutputView.printCrewInfo();
    InputView.readOptions(this.#readOptionsForSearchCallback);
  }

  #init() {
    this.#pairMatching.init();

    OutputView.printInitComment();
    InputView.readTask(this.#readTaskCallback);
  }

  #quit() {
    this.#pairMatching.quit();
  }

  #readTaskCallback = (task) => {
    this.#pairMatching.setTask(task);
    this.#controller();
  };

  #readOptionsForMatchCallback = (options) => {
    this.#pairMatching.setCurrentOptions(options);

    if (this.#pairMatching.isAvailableMatch()) {
      const matchResult = this.#pairMatching.match();
      this.#result(matchResult);
    } else {
      InputView.readReMatchOption(this.#readReMatchOptionCallback);
    }
  };

  #readOptionsForSearchCallback = (options) => {
    this.#pairMatching.setCurrentOptions(options);

    const matchResult = this.#pairMatching.search();

    if (matchResult.length == 0) {
      OutputView.printSearchFail();
      this.#controller();
    } else {
      this.#result(matchResult);
    }
  };

  #readReMatchOptionCallback = (option) => {
    if (option == "네") {
      this.#pairMatching.reMatch();
      const matchResult = this.#pairMatching.match();
      this.#result(matchResult);
    }

    if (option == "아니오") {
      MissionUtils.Console.print("");
      InputView.readOptions(this.#readOptionsForMatchCallback);
    }
  };

  #result(matchResult) {
    const pairs = this.#pairMatching.pairing(matchResult);
    const targetCrew = this.#pairMatching.getTargetCrew();

    OutputView.printMatchResult(pairs, targetCrew);
    InputView.readTask(this.#readTaskCallback);
  }
}

module.exports = App;
