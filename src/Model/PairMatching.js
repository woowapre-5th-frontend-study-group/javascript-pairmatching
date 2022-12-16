const MissionUtils = require("@woowacourse/mission-utils");
const { BACK_CREW, FRONT_CREW } = require("../constant/value");
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
    this.#task = newTask;
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
    console.log(2);
    this.#matches.forEach((match) => {
      console.log("2", match.getMatchResult());
      console.log("1", match.getOptions());
      if (this.#currentOptions.toString() == match.getOptions()) {
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

    console.log(matchResult);
    const match = new Match([...this.#currentOptions], matchResult);

    this.#matches.push(match);
    console.log("?", match.getMatchResult());
    return matchResult;
  }

  // reMatch() {
  //   this.#pairList.forEach((pair, index) => {
  //     if (this.#currentOptions == pair.getOptions()) {
  //       this.#pairList = this.#pairList.splice(index, 1);
  //     }
  //   });
  // }

  // searchMatchResult() {
  //   this.#pairList.forEach((pair, index) => {
  //     if (this.#currentOptions == pair.getOptions()) {
  //       return pair.getMatchInfo();
  //     }
  //   });
  // }
}

module.exports = PairMatching;
