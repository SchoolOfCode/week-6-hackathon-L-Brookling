import { test, expect, describe } from "vitest";

import { isLucky } from "./index";

describe("Fixed tests", () => {
  //0 Test if the function is empty
  //If the ticket parameter is not called, then this error should be thrown
  //ARRANGE
  // test("Throws error if ticket is empty", () => {
  //   //ACT
  //   const ticket = "";
  //   //ASSERT
  //   expect(() => isLucky(ticket)).toThrowError("Invalid input");
  // });

  //1 Testing if ticket is lucky
  //If an input of 123321 is given then the correct outcome returned should be true.
  //Use .toThrowError to catch and check the error. The test should currently fail.
  //ARRANGE
  test("Should return lucky ticket as true", () => {
    //ACT
    const ticket = "123321";
    //ASSERT
    expect(isLucky(ticket)).toBe(true);
  });
});
