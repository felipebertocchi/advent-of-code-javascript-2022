// Advent of Code - Day 5 - Part One

export function part1(input) {
  const crateList = input.split(/\r?\n/);

  let crates = [[], [], [], [], [], [], [], [], []];
  let moves = [];

  for (const crateRow of crateList) {
    if (crateRow.includes('[')) {
      let firstLimit = 0;
      let secondLimit = 4;
      let crateNum = 0
      for (let i = 0; i < crateRow.length + 1; i += 4) {
        let crateSpace = crateRow.slice(firstLimit, secondLimit);
        if (crateSpace.includes('[')) {
          crates[crateNum].push(crateSpace[1]);
        } else {
          crates[crateNum].push('');
        }
        firstLimit += 4;
        secondLimit += 4;
        crateNum++
      }
    } else if (crateRow.includes('move')) {
      moves.push(crateRow.split(' '));
    }
  }

  // [T] [V]                     [W]    
  // [V] [C] [P] [D]             [B]    
  // [J] [P] [R] [N] [B]         [Z]    
  // [W] [Q] [D] [M] [T]     [L] [T]    
  // [N] [J] [H] [B] [P] [T] [P] [L]    
  // [R] [D] [F] [P] [R] [P] [R] [S] [G]
  // [M] [W] [J] [R] [V] [B] [J] [C] [S]
  // [S] [B] [B] [F] [H] [C] [B] [N] [L]
  //  1   2   3   4   5   6   7   8   9 

  crates.forEach(pile => {
    pile.reverse();
    while (pile[pile.length - 1] === '') {
      pile.pop();
    }
  });

  console.log(crates);
  console.log(moves);
  console.log('================================================');

  moves.forEach(move => {
    const crateQ = Number(move[1]);
    const originPile = Number(move[3] - 1);
    const destinationPile = Number(move[5] - 1);
  
    for (let i = 0; i < crateQ; i++) {
      crates[destinationPile].push(crates[originPile].pop());
    }
  });

  console.log(crates);
  const result = []
  crates.forEach(pile => {
    result.push(pile[pile.length - 1])
  });

  return result.join('');
}
