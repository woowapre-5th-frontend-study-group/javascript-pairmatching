const MissionUtils = require("@woowacourse/mission-utils");

const FairMaker = {
  shuffle(arr) {
    const length = arr.length;
    const clone = Array.from({ length: length }, (v, i) => i + 1);
    MissionUtils.Random.shuffle(clone);

    const shuffledArr = clone.map((item) => {
      return arr[item - 1];
    });

    return shuffledArr;
  },
};

module.exports = FairMaker;
