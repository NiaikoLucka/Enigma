import type { Puzzle } from "../models/types";
import type { GameConfig } from "../config/GameConfig";
import type { DifficultyScore } from "./DifficultyScore";

export class DifficultyEngine {
  analyze(puzzle: Puzzle): DifficultyScore {
    const clueCount = puzzle.clues.length;

    /*
            Pour le moment :
            plus il y a d'indices,
            plus le puzzle est facile
        */

    const score = clueCount * 10;

    return {
      clueCount,

      candidateReduction: 0,

      score,
    };
  }

  validate(puzzle: Puzzle, config: GameConfig): boolean {
    const result = this.analyze(puzzle);

    return (
      result.clueCount >= config.minClues && result.clueCount <= config.maxClues
    );
  }
}
