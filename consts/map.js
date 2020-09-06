const colors = {
  RED: "RED",
  YELLOW: "YELLOW",
  BLUE: "BLUE",
  GREEN: "GREEN",
};
const START = "START";
const WINNER = "WINNER";
const STAR = "STAR";
const HOME = "HOME";

const { BLUE, GREEN, RED, YELLOW } = colors;

const map = {
  1: [RED, START, STAR],
  2: [RED],
  3: [RED],
  4: [RED],
  5: [RED],
  6: [RED],
  7: [RED],
  8: [RED],
  9: [RED, STAR],
  10: [RED],
  11: [RED],
  12: [RED],
  HOME1: [YELLOW, HOME],
  HOME2: [YELLOW, HOME],
  HOME3: [YELLOW, HOME],
  HOME4: [YELLOW, HOME],
  HOME5: [YELLOW, HOME],
  HOME6: [YELLOW, WINNER],
  13: [RED],
  14: [YELLOW, START, STAR],
  15: [YELLOW],
  16: [YELLOW],
  17: [YELLOW],
  18: [YELLOW],
  19: [YELLOW],
  20: [YELLOW],
  21: [YELLOW],
  22: [YELLOW, STAR],
  23: [YELLOW],
  24: [YELLOW],
  25: [YELLOW],
  HOME7: [GREEN, HOME],
  HOME8: [GREEN, HOME],
  HOME9: [GREEN, HOME],
  HOME10: [GREEN, HOME],
  HOME11: [GREEN, HOME],
  HOME12: [GREEN, WINNER],
  26: [YELLOW],
  27: [GREEN, START, STAR],
  28: [GREEN],
  29: [GREEN],
  30: [GREEN],
  31: [GREEN],
  32: [GREEN],
  33: [GREEN],
  34: [GREEN],
  35: [GREEN, STAR],
  36: [GREEN],
  37: [GREEN],
  38: [GREEN],
  HOME13: [BLUE, HOME],
  HOME14: [BLUE, HOME],
  HOME15: [BLUE, HOME],
  HOME16: [BLUE, HOME],
  HOME17: [BLUE, HOME],
  HOME18: [BLUE, WINNER],
  39: [GREEN],
  40: [BLUE, START, STAR],
  41: [BLUE],
  42: [BLUE],
  43: [BLUE],
  44: [BLUE],
  45: [BLUE],
  46: [BLUE],
  47: [BLUE],
  48: [BLUE, STAR],
  49: [BLUE],
  50: [BLUE],
  51: [BLUE],
  HOME19: [RED, HOME],
  HOME20: [RED, HOME],
  HOME21: [RED, HOME],
  HOME22: [RED, HOME],
  HOME23: [RED, HOME],
  HOME24: [RED, WINNER],
  52: [BLUE],
};

let START_POSITIONS = {};

for (let elements in map) {
  const CURRENT = map[elements];
  if (CURRENT.includes(START)) {
    START_POSITIONS = {
      ...START_POSITIONS,
      [CURRENT[0]]: Number(elements),
    };
  }
}

module.exports = {
  map,
  START_POSITIONS,
  colors,
};
