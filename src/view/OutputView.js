const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  processAndMission() {
    MissionUtils.Console.print("#############################################");
    MissionUtils.Console.print("과정: 백엔드 | 프론트엔드");
    MissionUtils.Console.print("미션:");
    MissionUtils.Console.print("  - 레벨1: 자동차경주 | 로또 | 숫자야구게임");
    MissionUtils.Console.print("  - 레벨2: 장바구니 | 결제 | 지하철노선도");
    MissionUtils.Console.print("  - 레벨3: ");
    MissionUtils.Console.print("  - 레벨4: 성능개선 | 배포");
    MissionUtils.Console.print("  - 레벨5: ");
    MissionUtils.Console.print("############################################");
  },
  emptyLine() {
    MissionUtils.Console.print("");
  },
};

module.exports = OutputView;
