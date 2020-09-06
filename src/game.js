const {
  colors,
  START_POSITIONS,
  INITIAL_POSITIONS,
  START,
} = require("../consts/map");
const errors = require("../consts/errors");
const spawnDice = require("../utils/spawn");

class Ludo {
  constructor(
    players = [colors.RED, colors.BLUE, colors.YELLOW, colors.GREEN],
    initialPlayer = colors.RED,
    positions = INITIAL_POSITIONS
  ) {
    const numberOfPlayers = players.length;
    if (numberOfPlayers <= 1) {
      throw new Error(errors.insufficientPlayerError);
    }

    if (numberOfPlayers > 4) {
      throw new Error(errors.playersLimitExceededError);
    }

    if (!colors[initialPlayer]) {
      throw new Error(errors.invalidPlayerError);
    }
    this.numberOfPlayers = numberOfPlayers;
    this.initialPlayer = initialPlayer;
    this.currentPlayer = initialPlayer;
    this.positions = positions;
    this.players = players;
    this.previousRolledNumber = null;
  }

  canRepeat(rolledItem) {
    return rolledItem === 6 || rolledItem === 1;
  }

  next(rolledItem) {
    if (this.canRepeat(rolledItem)) {
      this.currentPlayer = this.currentPlayer;
    } else {
      let currentPlayerIndex = this.players.indexOf(this.currentPlayer);
      if (currentPlayerIndex === this.numberOfPlayers - 1) {
        this.currentPlayer = this.players[0];
      } else {
        this.currentPlayer = this.players[currentPlayerIndex + 1];
      }
    }
  }

  moveItem(rolledItem) {
    if (this.positions[this.currentPlayer] !== START) {
      this.positions[this.currentPlayer] =
        this.positions[this.currentPlayer] + rolledItem;
    } else if (this.canRepeat(rolledItem)) {
      this.positions[this.currentPlayer] = START_POSITIONS[this.currentPlayer];
    } else {
    }
    this.next(rolledItem);
  }

  getPreviousValue() {
    let positions = { ...this.positions };
    let player = this.currentPlayer;
    let rolledNumber = this.previousRolledNumber;
    return {
      positions,
      player,
      rolledNumber,
    };
  }

  rollDice() {
    const previous = this.getPreviousValue();
    const rolledItem = spawnDice();
    this.moveItem(rolledItem);
    return {
      positions: this.positions,
      next: this.currentPlayer,
      rolledItem,
      previous,
    };
  }
}

module.exports = Ludo;
