const schoolReport = require("./schoolReport");

describe("schoolReport", () => {
  it("it returns an the amount of one input", () => {
    expect(schoolReport("Green")).toEqual("Green: 1");
  });

  it("it returns an the amount of one input", () => {
    expect(schoolReport("Amber")).toEqual("Amber: 1");
  });

  it("it returns an the amount of one input", () => {
    expect(schoolReport("Red")).toEqual("Red: 1");
  });

  it("it returns the amount of two of the same inputs", () => {
    expect(schoolReport("Red, Red")).toEqual("Red: 2");
  });

  it("it returns the amount of two of different inputs", () => {
    expect(schoolReport("Red, Green")).toEqual("Red: 1\nGreen: 1");
  });

  it("it returns the amount of two of different inputs", () => {
    expect(schoolReport("Green, Red")).toEqual("Green: 1\nRed: 1");
  });
});
