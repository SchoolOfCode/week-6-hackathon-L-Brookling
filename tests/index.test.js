import { test, expect, describe } from "vitest";

import { isLucky } from "../index";

describe("Checking the output value of the function", () => {
  //0 Test if the function is empty.
  //If the ticket parameter is not called, then this error should be thrown
  //ARRANGE
  test("ticket is empty", () => {
    //ACT
    const ticket = "";
    //ASSERT
    expect(() => isLucky(ticket)).toThrowError("Missing input");
  });

  //1 Testing if ticket is lucky.
  //If an input of 123321 is given then the correct outcome returned should be true.
  //ARRANGE
  test("returns lucky ticket as true", () => {
    //ACT
    const ticket = "123321";
    //ASSERT
    expect(isLucky(ticket)).toBe(true);
  });
});

describe("Checking the number of digits in the ticket", () => {
  //2 Testing that only six-digit numbers are allowed in the ticket.
  //If input of more than or less than six-digits is given, then error message: "Ticket can only be six-digits" should be thrown.
  //ARRANGE
  test("only contains six-digits", () => {
    // ACT
    const ticket = "123321";

    // ASSERT
    expect(() => isLucky(ticket)).not.toThrow();
  });

  test("has a value with more than six digits", () => {
    // ACT
    const ticket = "1233211";

    // ASSERT
    expect(() => isLucky(ticket)).toThrow("Ticket can only be six-digits");
  });

  test("has a value with less than six digits", () => {
    // ACT
    const ticket = "12321";

    // ASSERT
    expect(() => isLucky(ticket)).toThrow("Ticket can only be six-digits");
  });
});
