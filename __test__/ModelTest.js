const Model = require("../src/Model/Model");

describe("Model class 테스트", () => {
  test("테스트", () => {
    const model = new Model();

    expect(model).tobe(); // 원시값 비교
    expect(model).toEqual(); // 참조값 비교
    expect(() => {
      model;
    }).toThrow(); // Thorw
    expect().toBeFalsy(); // false
    expect().toBeTruthy(); // true
  });
});
