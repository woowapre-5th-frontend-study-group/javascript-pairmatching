class Match {
  #matchResult;
  #options;

  constructor(options, matchResult) {
    this.#matchResult = matchResult;
    this.#options = options;
  }

  getOptions() {
    return this.#options;
  }

  getMatchResult() {
    return this.#matchResult;
  }

  // checkPairInfo(pairInfo) {
  //   const pairInfoArray = pairInfo.split(", ");
  //   if (this.#options == pairInfoArray) {
  //     return true;
  //   }
  // }
}

module.exports = Match;
