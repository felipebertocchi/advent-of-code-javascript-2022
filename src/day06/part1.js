// Advent of Code - Day 6 - Part One

export function part1(input) {
  for (let i = 0; i < input.length; i++) {
    let j = i + 4;
    const packet = input.slice(i,j);
    if (packet.charCodeAt(0) !== packet.charCodeAt(1) &&
        packet.charCodeAt(0) !== packet.charCodeAt(2) &&
        packet.charCodeAt(0) !== packet.charCodeAt(3) &&
        packet.charCodeAt(1) !== packet.charCodeAt(2) &&
        packet.charCodeAt(1) !== packet.charCodeAt(3) &&
        packet.charCodeAt(2) !== packet.charCodeAt(0) &&
        packet.charCodeAt(2) !== packet.charCodeAt(3) &&
        packet.charCodeAt(3) !== packet.charCodeAt(0)) {
      console.log(packet);
      return j;
    }
  }
}
