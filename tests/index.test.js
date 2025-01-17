import { test, expect, describe } from "vitest";
import { isLucky } from "..";

describe("isLucky", () => {
  describe("when ticket is not entered", () => {
    describe("and ticket is an empty string", () => {
      //ARRANGE
      test("should return error message string", () => {
        //ACT
        const ticket = "";
        const result = isLucky(ticket);
        //ASSERT
        expect(result).toStrictEqual("Ticket not provided"); //Bug 3
      });
    });

    describe("and ticket is null", () => {
      //ARRANGE
      test("should return error message string", () => {
        //ACT
        const ticket = null;
        const result = isLucky(ticket);
        //ASSERT
        expect(result).toStrictEqual("Ticket not provided");
      });
    });

    describe("and ticket is undefined", () => {
      //ARRANGE
      test("should return error message string", () => {
        //ACT
        const ticket = undefined;
        const result = isLucky(ticket);
        //ASSERT
        expect(result).toStrictEqual("Ticket not provided");
      });
    });
  });

  describe("when a ticket with 7 characters is entered", () => {
    //ARRANGE
    test("should return false", () => {
      //ACT
      const ticket = "3211232";
      const result = isLucky(ticket);
      //ASSERT
      expect(result).toBe(false);
    });
  });

  describe("when a ticket with 6 characters is entered", () => {
    describe("and the ticket isn't lucky", () => {
      //ARRANGE
      test("should return false", () => {
        //ACT
        const ticket = "123456";
        const result = isLucky(ticket);
        //ASSERT
        expect(result).toBe(false);
      });
    });

    describe("and the ticket is lucky", () => {
      //ARRANGE
      test("should return true", () => {
        //ACT
        const ticket = "123321";
        const result = isLucky(ticket);
        //ASSERT
        expect(result).toBe(true);
      });
    });
  });

  describe("when a ticket has 5 characters", () => {
    //ARRANGE
    test("should return false", () => {
      //ACT
      const ticket = "23454";
      const result = isLucky(ticket);
      //ASSERT
      expect(result).toBe(false);
    });
  });

  describe("when a ticket has a type of number", () => {
    //ARRANGE
    test("should return error message", () => {
      //ACT
      const ticket = 123321;
      const result = isLucky(ticket);
      //ASSERT
      expect(result).toStrictEqual("Ticket must be of type string");
    });
  });
});
