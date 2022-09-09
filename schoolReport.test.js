const schoolReport = require("./schoolReport");

describe("schoolReport", () => {
  it("it returns an empty string", () => {
    expect(schoolReport("")).toEqual("");
  });
});
