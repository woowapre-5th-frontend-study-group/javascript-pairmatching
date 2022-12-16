const MissionUtils = require("@woowacourse/mission-utils");
const CrewInfo = require("../Model/CrewInfo");

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

  printMatchResult(pairs, targetCrew) {
    MissionUtils.Console.print("\n페어 매칭 결과입니다.");

    pairs.forEach((pair) => {
      const name = pair.map((crew) => targetCrew[crew]);

      MissionUtils.Console.print(name.join(" : "));
    });
    MissionUtils.Console.print("");
  },

  printInitComment() {
    MissionUtils.Console.print("\n초기화 되었습니다.\n");
  },
};

module.exports = OutputView;
