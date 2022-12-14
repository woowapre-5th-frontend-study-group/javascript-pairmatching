const Data = require("../data/Data");
const Crew = require("../constant/Crew");
const FairMaker = require("../util/FairMaker");

class FairMatching {
  constructor() {
    this.data = Data;
  }

  validate(value) {
    const splitedValue = value.split(", ");

    if (splitedValue.length !== 3) {
      throw new Error("[ERROR] 과정, 레벨, 미션 각각 하나씩만 입력가능합니다.");
    }

    this.makeFair(splitedValue);
  }

  makeFair(splitedValue) {
    const process = splitedValue[0];
    const level = splitedValue[1];
    const mission = splitedValue[2];

    this.data[process[level[mission]]] = FairMaker.shuffle(
      process === "백엔드" ? Crew.backend : Crew.frontend
    );

    return this.data[process[level[mission]]];
  }
}

module.exports = FairMatching;
