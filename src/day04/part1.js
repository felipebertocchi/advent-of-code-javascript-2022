// Advent of Code - Day 4 - Part One

export function part1(input) {
  const sectionsList = input.split(/\r?\n/);

  function isContained(firstPair, secondPair) {
    const firstLimits = firstPair.split('-');
    const secondLimits = secondPair.split('-');
    if (Number(firstLimits[0]) <= Number(secondLimits[0]) && Number(firstLimits[1]) >= Number(secondLimits[1])) { // First pair contains second pair
      return 1
    } else if (Number(firstLimits[0]) >= Number(secondLimits[0]) && Number(firstLimits[1]) <= Number(secondLimits[1])) { // Second pair contains first pair
      return 1
    } else { // Not contained in any way
      return 0
    }
  }

  let sum = 0;

  for (const sectionPair of sectionsList) {
    let sections = sectionPair.split(',');
    console.log(sections);
    console.log(isContained(sections[0], sections[1]));
    sum += isContained(sections[0], sections[1]);
  }

  return sum;
}
