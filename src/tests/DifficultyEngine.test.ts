import { describe, expect, it } from "vitest";
import { DifficultyEngine } from "../core/difficulty/DifficultyEngine";

describe("DifficultyEngine", () => {
  it("calcule un score", () => {
    const engine = new DifficultyEngine();

    const result = engine.analyze({
      secret: "427",

      clues: [
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
      ],
    });

    expect(result.score).toBeGreaterThan(0);
  });
});
