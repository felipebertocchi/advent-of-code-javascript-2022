// Advent of Code - Day 1 - Part Two

export function part2(input) {
  const splitInput = input.split(/\r?\n|\r|\n/g);
  let mainArray = [];
  let tempSum = 0
  splitInput.forEach(el => {
    if (el === "") {
      mainArray.push(tempSum);
      tempSum = 0
    } else {
      tempSum += (+el);
    }
  });
  mainArray.sort(function(a, b){return b - a});
  return mainArray[0] + mainArray[1] + mainArray[2] 
}
