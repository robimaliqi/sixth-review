const schoolReport = require("./schoolReport");

describe("schoolReport", () => {
  it("it returns an the amount of one input", () => {
    expect(schoolReport("Green")).toEqual("Green: 1");
  });
});
