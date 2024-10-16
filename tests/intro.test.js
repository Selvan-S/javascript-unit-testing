import { describe, test, it, expect } from "vitest";
import { calculateAverage, factorial, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    //   AAA
    // Arrange
    // const a = 2;
    // const b = 1;

    // Act
    // const retult = max(a, b);

    // Assert
    // expect(retult).toBe(2);

    expect(max(2, 1)).toBe(2);
  });
  it("should return the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("should return the first argument if arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

// Fizz Buzz test
describe("fizzBuzz", () => {
  it("should return the FizzBuzz if argument is divisible by both 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return the Fizz if argument is only divisible by 3", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });
  it("should return the Buzz if argument is only divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  it("should return the arg as a string if it is not divisible by 3 or 5", () => {
    expect(fizzBuzz(4)).toBe("4");
  });
});

describe("calculateAverage", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });
  it("should calculate the average of an array with a single elements", () => {
    expect(calculateAverage([1])).toBe(1);
  });
  it("should calculate the average of an array with two elements", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
  it("should calculate the average of an array with three elements", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe("factorial", () => {
  it("should return 1 if given arg is an 0", () => {
    expect(factorial(0)).toBe(1);
  });
  it("should return 1 if given arg is an 1", () => {
    expect(factorial(1)).toBe(1);
  });
  it("should return 6 if given arg is an 3", () => {
    expect(factorial(3)).toBe(6);
  });
  it("should return 40320 if given arg is an 8", () => {
    expect(factorial(8)).toBe(40320);
  });
});
