const CrewInfo = require("./CrewInfo");

class Match {
  #options;
  #matchResult;

  constructor(options, matchResult) {
    this.validateOptions(options);
    this.#options = options;
    this.#matchResult = matchResult;
  }

  getOptions() {
    return this.#options;
  }

  getMatchResult() {
    return this.#matchResult;
  }

  validateOptions(options) {
    if (!CrewInfo.course.includes(options[0]))
      throw new Error("[ERROR] 올바른 코스명을 입력해주세요.");

    if (!CrewInfo.level.includes(options[1]))
      throw new Error("[ERROR] 올바른 레벨을 입력해주세요.");

    const level = options[1].split("벨")[1];
    if (!CrewInfo.mission[level - 1].includes(options[2]))
      throw new Error("[ERROR] 올바른 미션명을 입력해주세요.");
  }

  isSameOptions(options) {
    return options.toString() == this.#options;
  }

  isSameLevel(options) {
    return this.#options[0] == options[0] && this.#options[1] == options[1];
  }
}

module.exports = Match;
