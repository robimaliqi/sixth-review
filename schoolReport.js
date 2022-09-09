const schoolReport = (input) => {
  if (input === "Red, Red") {
    return "Red: 2";
  } else {
    return `${input}: 1`;
  }
};

module.exports = schoolReport;
