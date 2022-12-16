// Advent of Code - Day 2 - Part Two

export function part2(input) {
  const results = {
    A: 1, // rock
    B: 2, // paper
    C: 3, // scissors
    X: 1, // rock
    Y: 2, // paper
    Z: 3, // scissors
  };

  const checkResult = (play) => {
    let turn1 = results[play[0]];
    let turn2 = results[play[2]];

    if ((turn1 === 1 && turn2 === 2) || (turn1 === 2 && turn2 === 3) || (turn1 === 3 && turn2 === 1)) { // Win
      return (6 + turn2);
    } else if ((turn1 === 1 && turn2 === 3) || (turn1 === 2 && turn2 === 1) || (turn1 === 3 && turn2 === 2)) { // Lose
      return (0 + turn2);
    } else { // Draw
      return (3 + turn2);
    }
  };

  const selectShape = (round) => {
    if (round[2] === 'X') { // lose
      switch (round[0]) {
        case 'A':
          return 'Z'
        case 'B':
          return 'X'
        case 'C':
          return 'Y'
        default:
          break;
      }
    } else if (round[2] === 'Y') { // draw
      switch (round[0]) {
        case 'A':
          return 'X'
        case 'B':
          return 'Y'
        case 'C':
          return 'Z'
        default:
          break;
      }
    } else { // win
      switch (round[0]) {
        case 'A':
          return 'Y'
        case 'B':
          return 'Z'
        case 'C':
          return 'X'
        default:
          break;
      }
    }
  }

  const rounds = input.split(/\r?\n/);

  let score = 0;

  for (const round of rounds) {
    const newPlay = selectShape(round);
    const result = checkResult([round[0], null, newPlay]);
    score += result;
  };

  return score;
}
