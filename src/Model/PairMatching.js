const MissionUtils = require("@woowacourse/mission-utils");
const { BACK_CREW, FRONT_CREW } = require("../constant/value");
const Match = require("./Match");
const { TASK_NUMBER } = require("../constant/value");

class PairMatching {
  #task;
  #matches;
  #currentOptions;

  constructor() {
    this.#task = "";
    this.#matches = [];
    this.#currentOptions = [];
  }

  validateTask(task) {
    if (!(task == 1 || task == 2 || task == 3 || task == "Q"))
      throw new Error("[ERROR] 올바른 기능을 선택하세요.");
  }

  getTask() {
    return this.#task;
  }

  getMatches() {
    return this.#matches;
  }

  getCurrentOptions() {
    return this.#currentOptions;
  }

  setTask(newTask) {
    this.validateTask(newTask);
    this.#task = TASK_NUMBER[newTask];
  }

  setMatches(newMatches) {
    this.#matches = newMatches;
  }

  setCurrentOptions(newCurrentOptions) {
    this.#currentOptions = newCurrentOptions;
  }

  init() {
    this.#matches = [];
  }

  quit() {
    MissionUtils.Console.close();
  }

  isAvailableMatch() {
    let isAvailable = true;
    this.#matches.forEach((match) => {
      if (this.#currentOptions.toString() == match.getOptions()) {
        console.log("?", match.getMatchResult());
        isAvailable = false;
      }
    });

    return isAvailable;
  }

  match() {
    const targetCrew =
      this.#currentOptions[0] == "백엔드" ? BACK_CREW : FRONT_CREW;

    const numberArray = [];
    targetCrew.forEach((crew, index) => {
      numberArray.push(index);
    });

    const matchResult = MissionUtils.Random.shuffle(numberArray);
    const match = new Match(this.#currentOptions, [...matchResult]);
    this.#matches.push(match);
    return matchResult;
  }

  reMatch() {
    this.#matches.forEach((match, index) => {
      if (this.#currentOptions.toString() == match.getOptions()) {
        const newMatches = this.#matches.splice(index, 1);
        this.setMatches([...newMatches]);
      }
    });
  }

  search() {
    let matchResult;
    this.#matches.forEach((match) => {
      if (this.#currentOptions.toString() == match.getOptions()) {
        matchResult = match.getMatchResult();
      }
    });
    return matchResult;
  }
}

module.exports = PairMatching;
