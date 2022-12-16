// Advent of Code - Day 2 - Part One

export function part1(input) {
  const results = {
    A: 1, // rock
    B: 2, // paper
    C: 3, // scissors
    X: 1, // rock
    Y: 2, // paper
    Z: 3, // scissors
  };

  const checkResult = (round) => {
    let turn1 = results[round[0]];
    let turn2 = results[round[2]];

    if ((turn1 === 1 && turn2 === 2) || (turn1 === 2 && turn2 === 3) || (turn1 === 3 && turn2 === 1)) { // Win
      return (6 + turn2);
    } else if ((turn1 === 1 && turn2 === 3) || (turn1 === 2 && turn2 === 1) || (turn1 === 3 && turn2 === 2)) { // Lose
      return (0 + turn2);
    } else { // Draw
      return (3 + turn2);
    }
  };

  const rounds = input.split(/\r?\n/);

  let score = 0;

  for (const round of rounds) {
    const result = checkResult(round);
    score += result;
  };

  return score;
}
