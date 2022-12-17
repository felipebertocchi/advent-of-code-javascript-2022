// Advent of Code - Day 3 - Part Two

export function part2(input) {
  const rucksacks = input.split(/\r?\n/);
  let sum = 0;

  const letterValue = (letter) => {
    if (letter == letter.toUpperCase()) {
      return letter.charCodeAt(0) - 38
    } else {
      return letter.charCodeAt(0) - 96
    }
  }

  const findLetter = (first, second, third) => {
    for (const letter1 of first) {
      for (const letter2 of second) {
        for (const letter3 of third) {
          if (letter1 === letter2 && letter2 === letter3) {
            return letterValue(letter1);
          }
        }
      }
    }
  }

  let firstLimit = 0;
  let secondLimit = 3;

  for (let i = 0; i < rucksacks.length; i++) {
    if (rucksacks.slice(firstLimit, secondLimit).length === 0) {
      break
    }
    let rucksackx3 = rucksacks.slice(firstLimit, secondLimit)
    sum += findLetter(rucksackx3[0], rucksackx3[1], rucksackx3[2]);
    firstLimit += 3;
    secondLimit += 3;
  }

  return sum;
}
