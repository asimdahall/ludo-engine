const { colors, START_POSITIONS } = require("../consts/map");
const errors = require("../consts/errors");
const spawnDice = require("../utils/spawn");

class Ludo {
  constructor(
    players = [colors.RED, colors.BLUE, colors.YELLOW, colors.GREEN],
    initialPlayer = colors.RED,
    positions = START_POSITIONS
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

  next(rolledItem) {
    if (rolledItem === 6 || rolledItem === 1) {
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
    this.positions[this.currentPlayer] =
      this.positions[this.currentPlayer] + rolledItem;
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
