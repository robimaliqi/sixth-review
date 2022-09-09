const schoolReport = (input) => {
  const inputArray = input.split(" ");
  let greenCount = 0;
  let amberCount = 0;
  let redCount = 0;

  let newGrades = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === "Green") {
      greenCount++;
    } else if (inputArray[i] === "Amber") {
      amberCount++;
    } else if (inputArray[i] === "Red") {
      redCount++;
    }
  }

  if (greenCount > 0) {
    newGrades.push(`Green: ${greenCount}`);
  }
  if (redCount > 0) {
    newGrades.push(`Red: ${redCount}`);
  }
  if (amberCount > 0) {
    newGrades.push(`Amber: ${amberCount}`);
  }

  return newGrades.join(" ");
};

module.exports = schoolReport;
