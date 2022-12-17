// Advent of Code - Day 4 - Part Two

export function part2(input) {

  const sectionsList = input.split(/\r?\n/);

  function isOverlapping(firstPair, secondPair) {
    const firstLimits = firstPair.split('-');
    const secondLimits = secondPair.split('-');
    if (Number(firstLimits[1]) < Number(secondLimits[0])) { // First pair behind second pair
      return 0
    } else if (Number(firstLimits[0]) > Number(secondLimits[1])) { // Second pair behind first pair
      return 0
    } else { // Overlaps
      return 1
    }
  }

  let sum = 0;

  for (const sectionPair of sectionsList) {
    let sections = sectionPair.split(',');
    console.log(sections);
    console.log(isOverlapping(sections[0], sections[1]));
    sum += isOverlapping(sections[0], sections[1]);
  }

  return sum;
}
