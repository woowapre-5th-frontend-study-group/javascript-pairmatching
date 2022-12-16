const MissionUtils = require("@woowacourse/mission-utils");
const CrewInfo = require("../Model/CrewInfo");
const { BACK_CREW, FRONT_CREW } = require("../constant/value");
const { division } = require("../utils/utils");

const OutputView = {
  printCrewInfo() {
    MissionUtils.Console.print(
      "\n###############################################"
    );
    MissionUtils.Console.print("과정: " + CrewInfo.course.join(" | "));
    MissionUtils.Console.print("미션:");
    CrewInfo.level.forEach((level, index) => {
      MissionUtils.Console.print(
        "   - " + level + ": " + CrewInfo.mission[index].join(" | ")
      );
    });
    MissionUtils.Console.print(
      "###############################################"
    );
  },

  printMatchResult(matchResult) {
    console.log("1", matchResult);
    MissionUtils.Console.print("\n페어 매칭 결과입니다.");
    const pairs = division(matchResult, 2);

    pairs.forEach((pair) => {
      MissionUtils.Console.print(
        BACK_CREW[pair[0]] + " : " + BACK_CREW[pair[1]]
      );
    });
    MissionUtils.Console.print("");
  },

  printInitComment() {
    MissionUtils.Console.print("\n초기화 되었습니다.\n");
  },

  printSearchFail() {
    MissionUtils.Console.print("\n매칭 이력이 없습니다. 다시 선택해주세요.");
  },
};

module.exports = OutputView;
