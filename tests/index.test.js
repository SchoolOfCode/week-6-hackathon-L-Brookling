import { test, expect, describe } from "vitest";
import { isLucky } from "..";

describe("isLucky", () => {
  describe("when ticket is not entered", () => {
    describe("and ticket is an empty string", () => {
      test("should return error message string", () => {
        const ticket = "";
        const result = isLucky(ticket);
        expect(result).toStrictEqual("Ticket not provided");
      });
    });

    describe("and ticket is null", () => {
      test("should return error message string", () => {
        const ticket = null;
        const result = isLucky(ticket);
        expect(result).toStrictEqual("Ticket not provided");
      });
    });

    describe("and ticket is undefined", () => {
      test("should return error message string", () => {
        const ticket = undefined;
        const result = isLucky(ticket);
        expect(result).toStrictEqual("Ticket not provided");
      });
    });
  });

  describe("when a ticket with 7 characters is entered", () => {
    test("should return false", () => {
      const ticket = "3211232";
      const result = isLucky(ticket);
      expect(result).toBe(false);
    });
  });

  // describe("when a ticket with 6 characters is entered", () => {
  //   describe("and the ticket isn't lucky", () => {
  //     test("should return false", () => {
  //       const ticket = "123456";
  //       const result = isLucky(ticket);
  //       expect(result).toBe(false);
  //     });
  //   });

  //   describe("and the ticket is lucky", () => {
  //     test("should return true", () => {
  //       const ticket = "123321";
  //       const result = isLucky(ticket);
  //       expect(result).toBe(true);
  //     });
  //   });
  // });

  // describe("when a ticket has 5 characters", () => {
  //   test("should return false", () => {
  //     const ticket = "23454";
  //     const result = isLucky(ticket);
  //     expect(result).toBe(false);
  //   });
  // });

  // describe("when a ticket has a type of number", () => {
  //   test("should return error message", () => {
  //     const ticket = 123321;
  //     const result = isLucky(ticket);
  //     expect(result).toStrictEqual("Ticket must be of type string");
  //   });
  // });
});
