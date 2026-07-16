import { describe, expect, it } from "vitest";
import { PuzzleGenerator } from "../core/generators/PuzzleGenerator";
import { PuzzleValidator } from "../core/validators/PuzzleValidator";

describe("PuzzleGenerator", () => {
  it("génère un puzzle valide", () => {
    const generator = new PuzzleGenerator();

    const validator = new PuzzleValidator();

    const puzzle = generator.generate({
      digits: 3,

      maxAttempts: 10,

      minClues: 3,

      maxClues: 10,
    });

    expect(puzzle.secret.length).toBe(3);

    expect(puzzle.clues.length).toBeGreaterThan(0);

    expect(validator.validate(puzzle.secret, puzzle.clues)).toBe(true);
  });

  it("respecte la plage d’indices définie dans la configuration", () => {
    const generator = new PuzzleGenerator();

    const config = {
      digits: 3,

      maxAttempts: 10,

      minClues: 3,

      maxClues: 3,
    };

    const puzzle = generator.generate(config);

    expect(puzzle.clues.length).toBe(3);
  });
});
