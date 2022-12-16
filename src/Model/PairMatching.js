const MissionUtils = require("@woowacourse/mission-utils");
const { BACK_CREW, FRONT_CREW, TASK_NUMBER } = require("../constant/value");
const { division } = require("../utils/utils");
const Match = require("./Match");

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

  match() {
    const targetCrew = this.getTargetCrew();

    const numberArray = [];
    targetCrew.forEach((crew, index) => {
      numberArray.push(index);
    });

    const matchResult = MissionUtils.Random.shuffle(numberArray);

    const match = new Match(this.#currentOptions, [...matchResult]);
    this.#matches.push(match);

    return matchResult;
  }

  search() {
    let matchResult = [];
    this.#matches.forEach((match) => {
      if (match.isSameOptions(this.#currentOptions)) {
        matchResult = match.getMatchResult();
      }
    });
    return matchResult;
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
      if (match.isSameOptions(this.#currentOptions)) {
        isAvailable = false;
      }
    });
    return isAvailable;
  }

  hasSamePairs(matchResult) {
    this.#matches.forEach((match) => {
      if (match.isSameLevel(this.#currentOptions)) {
        existingPairs = this.pairing(match.getMatchResult());
        newPairs = this.pairing(matchResult);
      }
    });
  }

  pairing(matchResult) {
    return division(matchResult, 2);
  }

  reMatch() {
    this.#matches.forEach((match, index) => {
      if (match.isSameOptions(this.#currentOptions)) {
        const newMatches = this.#matches.splice(index, 1);
        this.setMatches([...newMatches]);
      }
    });
  }

  getTargetCrew() {
    return this.#currentOptions[0] == "백엔드" ? BACK_CREW : FRONT_CREW;
  }
}

module.exports = PairMatching;
