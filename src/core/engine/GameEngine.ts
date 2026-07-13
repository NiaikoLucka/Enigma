import { Difficulty } from "../config/Difficulty";
import { GAME_CONFIG } from "../config/GameConfig";
import { PuzzleGenerator } from "../generators/PuzzleGenerator";
import { GuessEvaluator } from "../validators/GuessEvaluator";
import type { GameState } from "../models/types";

export class GameEngine {
  private generator = new PuzzleGenerator();

  private evaluator = new GuessEvaluator();

  private state: GameState = {
    puzzle: null,

    attempts: 0,

    maxAttempts: 0,

    isFinished: false,

    isWon: false,
  };

  start(difficulty: Difficulty) {
    const config = GAME_CONFIG[difficulty];

    this.state = {
      puzzle: this.generator.generate(config),

      attempts: 0,

      maxAttempts: config.maxAttempts,

      isFinished: false,

      isWon: false,
    };

    return this.state;
  }

  play(guess: string) {
    if (!this.state.puzzle) throw new Error("Game not started");

    const result = this.evaluator.evaluate(this.state.puzzle.secret, guess);

    this.state.attempts++;

    if (result.correctPlace === this.state.puzzle.secret.length) {
      this.state.isWon = true;

      this.state.isFinished = true;
    }

    if (this.state.attempts >= this.state.maxAttempts) {
      this.state.isFinished = true;
    }

    return result;
  }

  getState() {
    return this.state;
  }
}
