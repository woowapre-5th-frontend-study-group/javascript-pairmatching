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

    const process = splitedValue[0];
    const level = splitedValue[1];
    const mission = splitedValue[2];

    if (process === "백엔드") {
      this.data[process[level[mission]]] = FairMaker.shuffle(Crew.backend);
    }
    if (process === "프론트엔드") {
      this.data[process[level[mission]]] = FairMaker.shuffle(Crew.frontend);
    }

    return this.data[process[level[mission]]];
  }
}

module.exports = FairMatching;
