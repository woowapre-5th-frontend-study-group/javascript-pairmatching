const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  chooseFunction(fn) {
    MissionUtils.Console.readLine(
      "기능을 선택하세요.\n" +
        "1. 페어 매칭\n" +
        "2. 페어 조회\n" +
        "3. 페어 초기화\n" +
        "Q. 종료\n",
      (number) => fn(number)
    );
  },
};

module.exports = InputView;
