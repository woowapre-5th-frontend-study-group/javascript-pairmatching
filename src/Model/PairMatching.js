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

    const matchResult = this.uniqueMatch(numberArray);

    const match = new Match(this.#currentOptions, [...matchResult]);
    this.#matches.push(match);

    return matchResult;
  }

  uniqueMatch(numberArray) {
    let matchResult = MissionUtils.Random.shuffle(numberArray);

    if (this.checkHasSamePairs(matchResult)) {
      for (let i = 0; i < 3; i++) {
        matchResult = MissionUtils.Random.shuffle(numberArray);
        if (!this.checkHasSamePairs(matchResult)) break;
      }
    }

    if (this.checkHasSamePairs(matchResult))
      throw new Error("[ERROR] 매칭을 할 수 있는 경우의 수가 없습니다.");

    return [...matchResult];
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

  checkHasSamePairs(matchResult) {
    let hasSamePairs = false;
    const newPairs = this.pairing([...matchResult]);

    this.#matches.forEach((match) => {
      if (match.isSameLevel(this.#currentOptions)) {
        const existingPairs = this.pairing([...match.getMatchResult()]);
        existingPairs.forEach((existingPair) => {
          newPairs.forEach((newPair) => {
            let intersection = 0;
            existingPair.forEach((crew) => {
              if (newPair.includes(crew)) intersection++;
            });
            if (intersection >= 2) {
              hasSamePairs = true;
            }
          });
        });
      }
    });
    return hasSamePairs;
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
