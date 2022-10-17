const sinon = require("sinon");
var assert = require("assert");
const { expect } = require("chai");

describe("index.js", function () {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(console, "log");
  });

  afterEach(() => {
    spy.restore();
  });

  describe("addOne()", function () {
    it("adds one to each number", () => {
      addOne([1, 2, 3, 4, 5]);
      expect(
        spy.calledWithExactly(2),
        "Expected countDown([1,2,3,4,5]) to log 2, 3, 4, 5, 6"
      ).to.be.true;
      expect(
        spy.calledWithExactly(3),
        "Expected countDown([1,2,3,4,5]) to log 2, 3, 4, 5, 6"
      ).to.be.true;
      expect(
        spy.calledWithExactly(4),
        "Expected countDown([1,2,3,4,5]) to log 2, 3, 4, 5, 6"
      ).to.be.true;
      expect(
        spy.calledWithExactly(5),
        "Expected countDown([1,2,3,4,5]) to log 2, 3, 4, 5, 6"
      ).to.be.true;
      expect(
        spy.calledWithExactly(6),
        "Expected countDown([1,2,3,4,5]) to log 2, 3, 4, 5, 6"
      ).to.be.true;
    });
  });

  describe("subtractOne()", function () {
    it("subtracts one from each number", () => {
      subtractOne([1, 2, 3, 4, 5]);
      expect(
        spy.calledWithExactly(0),
        "Expected countDown([1,2,3,4,5]) to log 0,1,2,3,4"
      ).to.be.true;
      expect(
        spy.calledWithExactly(1),
        "Expected countDown([1,2,3,4,5]) to log 0,1,2,3,4"
      ).to.be.true;
      expect(
        spy.calledWithExactly(2),
        "Expected countDown([1,2,3,4,5]) to log 0,1,2,3,4"
      ).to.be.true;
      expect(
        spy.calledWithExactly(3),
        "Expected countDown([1,2,3,4,5]) to log 0,1,2,3,4"
      ).to.be.true;
      expect(
        spy.calledWithExactly(4),
        "Expected countDown([1,2,3,4,5]) to log 0,1,2,3,4"
      ).to.be.true;
    });
  });

  describe("fizzBuzz()", function () {
    it("logs the number when num is not divisible by 3 or 5", () => {
      fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
      expect(spy.calledWithExactly(1), "Expected 1 to log 1").to.be.true;
      expect(spy.calledWithExactly(2), "Expected 2 to log 2").to.be.true;
      expect(spy.calledWithExactly(4), "Expected 4 to log 4").to.be.true;
      expect(spy.calledWithExactly(7), "Expected 7 to log 7").to.be.true;
      expect(spy.calledWithExactly(8), "Expected 8 to log 8").to.be.true;
      expect(spy.calledWithExactly(11), "Expected 11 to log 11").to.be.true;
      expect(spy.calledWithExactly(13), "Expected 13 to log 13").to.be.true;
      expect(spy.calledWithExactly(14), "Expected 14 to log 14").to.be.true;
    });

    it("logs FizzBuzz when num is divisible by 3 and 5", () => {
      fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
      expect(spy.calledWithExactly(15), "Expected 15 to log FizzBuzz").to.be
        .false;
      expect(console.log.calledWith("FizzBuzz")).to.be.true;
    });

    it("logs Fizz when num is divisible by 3", () => {
      fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
      expect(spy.calledWithExactly(3), "Expected 3 to log Fizz").to.be.false &&
        expect(console.log.calledWith("Fizz")).to.be.true;

      expect(spy.calledWithExactly(6), "Expected 6 to log Fizz").to.be.false &&
        expect(console.log.calledWith("Fizz")).to.be.true;

      expect(spy.calledWithExactly(9), "Expected 9 to log Fizz").to.be.false &&
        expect(console.log.calledWith("Fizz")).to.be.true;

      expect(spy.calledWithExactly(12), "Expected 12 to log Fizz").to.be
        .false && expect(console.log.calledWith("Fizz")).to.be.true;
    });

    it("logs Buzz when num is divisible by 5", () => {
      fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
      expect(spy.calledWithExactly(5), "Expected 5 to log Buzz").to.be.false &&
        expect(console.log.calledWith("Buzz")).to.be.true;

      expect(spy.calledWithExactly(10), "Expected 10 to log Buzz").to.be
        .false && expect(console.log.calledWith("Buzz")).to.be.true;
    });
  });
});
