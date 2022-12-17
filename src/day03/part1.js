// Advent of Code - Day 3 - Part One

export function part1(input) {
  const rucksacks = input.split(/\r?\n/);
  let sum = 0;

  const letterValue = (letter) => {
    if (letter == letter.toUpperCase()) {
      return letter.charCodeAt(0) - 38
    } else {
      return letter.charCodeAt(0) - 96
    }
  }

  const findLetter = (firstHalf, secondHalf) => {
    for (const letter1 of firstHalf) {
      for (const letter2 of secondHalf) {
        if (letter1 === letter2) {
          return letterValue(letter1);
        }
      }
    }
  }


  for (const rucksack of rucksacks) {
    const half = rucksack.length / 2
    const firstHalf = rucksack.slice(0, half);
    const secondHalf = rucksack.slice(half);
    sum += findLetter(firstHalf, secondHalf)
  }

  return sum;
}
