const Game = function (players, cards) {
  this.players = players;
  this.cards = cards;
}

const strengthWin = function (players) {
  if (players[0].hand[0].strength > players[1].hand[0].strength) {
    return player1
  }
    else {
      return player2
    }
}

module.exports = Game;
