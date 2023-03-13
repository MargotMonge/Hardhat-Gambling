const { expect } = require("chai");
const hre = require("hardhat");

describe("Engine", function () {
  it("Should output the XOR result of the two params", async function () {
    // Set several results to test my function, take several extreme case scenarios and see how it react
    const result1 = 10;
    const result2 = 0;
    const result3 = 0;
    const result4 = 256;

    const Engine = await hre.ethers.getContractFactory("Engine");
    const engine = await Engine.deploy();

    // Assert that our results are correct
    expect(await engine.bitsoper(26, 42)).to.equal(result1);
    expect(await engine.bitsoper(0, 2)).to.equal(result2);
    expect(await engine.bitsoper(156, 289)).to.equal(result3);
    expect(await engine.bitsoper(256, 256)).to.equal(result4);
  });
});