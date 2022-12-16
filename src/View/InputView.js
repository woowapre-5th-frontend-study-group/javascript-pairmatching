const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  readTask(callback) {
    MissionUtils.Console.readLine(
      "기능을 선택하세요.\n1. 페어 매칭\n2. 페어 조회\n3. 페어 초기화\nQ. 종료\n",
      (input) => {
        callback(input);
      }
    );
  },

  readOptions(callback) {
    MissionUtils.Console.readLine(
      "과정, 레벨, 미션을 선택하세요.\nex) 백엔드, 레벨1, 자동차경주\n",
      (input) => {
        const stringsArray = input.split(", ");
        callback(stringsArray);
      }
    );
  },

  readReMatchOption(callback) {
    MissionUtils.Console.readLine(
      "\n매칭 정보가 있습니다. 다시 매칭하시겠습니까?\n",
      (input) => {
        callback(input);
      }
    );
  },
};

module.exports = InputView;
