import { test, expect, describe } from "vitest";

import { isLucky } from "./index";

describe("Fixed tests", () => {
  //0 Test if the function is empty
  //If the ticket parameter is not called, then this error should be thrown
  //ARRANGE
  test("Throws error if ticket is empty", () => {
    //ACT
    const ticket = "";
    //ASSERT
    expect(() => isLucky(ticket)).toThrowError("Invalid input");
  });
});
