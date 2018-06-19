const assert = require('assert');
const Game = require('../game.js');
const Card = require('../card.js');
const Player = require('../player.js');

describe("Game", function () {
  let game;
  let card1, card2;
  let player1, player2;

  beforeEach(function () {
    card1 = new Card("Superman", 6, 9, 7);
    card2 = new Card("Scarlet Witch", 7, 10, 5);
    player1 = new Player(card1);
    player2 = new Player(card2);
    players = [player1, player2];
    cards = [card1, card2];
    game = new Game(players, cards);
  })

  it("should have players", function () {
    const actualValue = game.players;
    assert.strictEqual(actualValue, players);
  })

  it("should have cards", function () {
    const actualValue = game.cards;
    assert.strictEqual(actualValue, cards);
  })

  it("should get winner", function () {
    const actualValue = game.strengthWin;
    assert.deepStrictEqual(actualValue, player2)
  })

})
