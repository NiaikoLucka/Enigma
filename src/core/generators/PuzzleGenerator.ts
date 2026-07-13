import { SecretGenerator } from "./SecretGenerator";
import { CombinationGenerator } from "./CombinationGenerator";
import { CandidateManager } from "../validators/CandidateManager";
import { GuessEvaluator } from "../validators/GuessEvaluator";
import type { GameConfig } from "../config/GameConfig";
import type { Puzzle } from "../models/types";

export class PuzzleGenerator {
  private secretGenerator = new SecretGenerator();

  private combinationGenerator = new CombinationGenerator();

  private evaluator = new GuessEvaluator();

  private random: () => number;

  constructor(random: () => number = Math.random) {
    this.random = random;
  }

  generate(config: GameConfig): Puzzle {
    const secret = this.secretGenerator.generate(config.digits);

    const candidates = this.combinationGenerator.generate(config.digits);

    const manager = new CandidateManager(candidates);

    const clues = [];

    while (manager.count() > 1) {
      const guess = this.findGuess(manager);

      const result = this.evaluator.evaluate(secret, guess);

      clues.push({
        guess,

        ...result,
      });

      manager.filter(guess, result);
    }

    return {
      secret,

      clues,
    };
  }

  private findGuess(manager: CandidateManager): string {
    const list = manager.getCandidates();

    return list[Math.floor(this.random() * list.length)];
  }
}
