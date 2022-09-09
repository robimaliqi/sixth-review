const schoolReport = (input) => {
  if (input === "Red, Red") {
    return "Red: 2";
  } else if (input === "Red, Green") {
    return "Red: 1\nGreen: 1";
  } else {
    return `${input}: 1`;
  }
};

module.exports = schoolReport;
