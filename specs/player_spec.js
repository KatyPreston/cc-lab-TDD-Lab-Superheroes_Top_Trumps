const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');


describe("Player", function () {
  let player;
  let card1;

  beforeEach(function () {
    card1 = new Card("Superman", 6, 9, 7);
    cards = [card1]
    player = new Player(cards)
  })

  it("should have a card", function () {
    const actualValue = player.hand;
    assert.strictEqual(actualValue, cards)
  })

})
