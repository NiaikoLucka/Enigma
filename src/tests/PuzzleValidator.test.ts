import { describe, expect, it } from "vitest";
import { PuzzleValidator } from "../core/validators/PuzzleValidator";

describe("PuzzleValidator", () => {
  const validator = new PuzzleValidator();

  it("accepte un puzzle valide", () => {
    const result = validator.validate(
      "427",

      [
        {
          guess: "682",
          correctPlace: 0,
          correctWrongPlace: 1,
        },

        {
          guess: "931",
          correctPlace: 0,
          correctWrongPlace: 0,
        },

        {
          guess: "574",
          correctPlace: 0,
          correctWrongPlace: 2,
        },

        {
          guess: "268",
          correctPlace: 0,
          correctWrongPlace: 1,
        },
      ],
    );

    expect(result).toBe(false);
  });

  it("refuse un puzzle impossible", () => {
    const result = validator.validate(
      "427",

      [
        {
          guess: "268",
          correctPlace: 0,
          correctWrongPlace: 2,
        },
      ],
    );

    expect(result).toBe(false);
  });
});
