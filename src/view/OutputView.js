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

  printEmptyLine() {
    MissionUtils.Console.print("");
  },

  printFairs(fairs) {
    const length = fairs.length;

    MissionUtils.Console.print("페어 매칭 결과입니다.");
    if (length % 2 === 0) {
      return this.whenOdd(fairs, length);
    }
    if (length % 2 === 1) {
      return this.whenEven(fairs, length);
    }
  },
  whenOdd(fairs, length) {
    for (let i = 0; i < length; i += 2) {
      MissionUtils.Console.print(`${fairs[i]} : ${fairs[i + 1]}`);
    }
  },
  whenEven(fairs, length) {
    for (let i = 0; i < length - 3; i += 2) {
      MissionUtils.Console.print(`${fairs[i]} : ${fairs[i + 1]}`);
    }
    MissionUtils.Console.print(
      `${fairs[length - 3]} : ${fairs[length - 2]} : ${fairs[length - 1]}`
    );
  },
};

module.exports = OutputView;
