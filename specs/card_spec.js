const assert = require('assert');
const Card = require('../card.js');

describe("Card", function () {

  let card1, card2;

  beforeEach(function () {
     card1 = new Card("Superman", 6, 9, 7);
     card2 = new Card("Scarlet Witch", 7, 10, 5);
     
  })

  it("should have a name", function () {
    const actualValue = card1.name;
    assert.strictEqual(actualValue, "Superman");
  })

  it("should have intelligence", function () {
    const actualValue = card1.intelligence;
    assert.strictEqual(actualValue, 6);
  })

  it("should have strength", function () {
    const actualValue = card1.strength;
    assert.strictEqual(actualValue, 9);
  })

  it("should have agility", function () {
    const actualValue = card1.agility;
    assert.strictEqual(actualValue, 7);
  })

});
