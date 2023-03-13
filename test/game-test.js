const { expect } = require("chai");
const hre = require("hardhat");

describe("gameResults", function () {
  it("Should output the boolean result of an equality operation", async function () {
    // Set two possible outcomes to test my function
    const result1 = false;
    const result2 = true;
  
    const Game = await hre.ethers.getContractFactory("Game");
    const game = await Game.deploy();

    // assert that the value is correct
    expect(await game.gameResults(0)).to.emit(result1);
    expect(await game.gameResults(0)).to.emit(result2);
  });
});


