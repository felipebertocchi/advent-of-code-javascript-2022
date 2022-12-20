// Advent of Code - Day 6 - Part Two

export function part2(input) {
  const checkForRepeatedChar = (packet) => {
    values = [];
    for (let i = 0; i < packet.length; i++) {
      if (values.includes(packet.charCodeAt(i))) {
        return false
      } else {
        values.push(packet.charCodeAt(i));
      }
    }
    return packet
  }

  for (let i = 0; i < input.length - 14; i++) {
    let j = i + 14;
    const packet = input.slice(i, j);
    // console.log(i);
    // console.log(j);
    // console.log(packet);
    let msg = checkForRepeatedChar(packet);
    if (!msg) {
      continue
    } else {
      console.log("msg:", msg);
      return j
    }
  }
}
