const MissionUtils = require("@woowacourse/mission-utils");
const CrewInfo = require("../Model/CrewInfo");
const { BACK_CREW, FRONT_CREW } = require("../constant/value");
const { division } = require("../utils/utils");

const OutputView = {
  printCrewInfo() {
    MissionUtils.Console.print(
      "\n###############################################"
    );
    MissionUtils.Console.print("과정: 백엔드 | 프론트엔드");
    MissionUtils.Console.print("미션:");
    MissionUtils.Console.print(
      "   - 레벨1: 자동차경주 | 로또 | 숫자야구게임\n   - 레벨2: 장바구니 | 결제 | 지하철노선도\n   - 레벨3:\n   - 레벨4: 성능개선 | 배포\n   - 레벨5: "
    );
    MissionUtils.Console.print(
      "###############################################"
    );
  },

  printMatchResult(matchResult) {
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
    MissionUtils.Console.print("초기화 되었습니다.\n");
  },
};

module.exports = OutputView;
