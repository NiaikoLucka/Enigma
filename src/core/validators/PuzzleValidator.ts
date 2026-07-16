import { CombinationGenerator } from "../generators/CombinationGenerator";
import { GuessEvaluator } from "./GuessEvaluator";
import type { Clue } from "../models/types";

export class PuzzleValidator {
  private evaluator = new GuessEvaluator();

  private generator = new CombinationGenerator();

  validate(secret: string, clues: Clue[]): boolean {
    const candidates = this.generator.generate(secret.length);

    const possible = candidates.filter((candidate) => {
      return clues.every((clue) => {
        const result = this.evaluator.evaluate(candidate, clue.guess);

        return (
          result.correctPlace === clue.correctPlace &&
          result.correctWrongPlace === clue.correctWrongPlace
        );
      });
    });

    return possible.length === 1;
  }
}
