import { PuzzleGenerator } from "../generators/PuzzleGenerator";
import type { GameConfig } from "../config/GameConfig";
import type { Puzzle } from "../models/types";
import type { LockGameState } from "../models/GameState";
import type { GuessResult } from "../models/GuessResult";
import type { LockAnimation } from "../models/LockAnimation";

export class LockGameEngine {
  private generator = new PuzzleGenerator();

  private puzzle!: Puzzle;

  private state!: LockGameState;

  start(config: GameConfig): void {
    this.puzzle = this.generator.generate(config);

    this.state = {
      clues: this.puzzle.clues,

      attempts: 0,

      maxAttempts: config.maxAttempts,

      status: "PLAYING",

      secretCode: this.puzzle.secret,

      startTime: Date.now(),
    };
  }

  getState(): LockGameState {
    return this.state;
  }

  getClues() {
    return this.state.clues;
  }

  checkAnswer(answer: string): GuessResult {
    if (this.state.status !== "PLAYING") {
      return {
        correct: false,

        status: this.state.status,

        attempts: this.state.attempts,

        remainingAttempts: this.getRemainingAttempts(),

        gameOver: this.isFinished(),

        animation: "idle",
      };
    }

    this.state.attempts++;

    const correct = answer === this.puzzle.secret;

    if (correct) {
      this.state.status = "WON";

      this.state.endTime = Date.now();
    } else if (this.state.attempts >= this.state.maxAttempts) {
      this.state.status = "LOST";

      this.state.endTime = Date.now();
    }

    let animation: LockAnimation;

    if (correct) {
      animation = "open";
    } else if (this.state.status === "LOST") {
      animation = "broken";
    } else {
      animation = "shake";
    }

    return {
      correct,

      status: this.state.status,

      attempts: this.state.attempts,

      remainingAttempts: this.getRemainingAttempts(),

      gameOver: this.isFinished(),

      animation,
    };
  }

  isFinished(): boolean {
    return this.state.status === "WON" || this.state.status === "LOST";
  }

  getAttempts(): number {
    return this.state.attempts;
  }

  getRemainingAttempts(): number {
    return this.state.maxAttempts - this.state.attempts;
  }

  getStatus() {
    return this.state.status;
  }

  getSecret(): string {
    return this.puzzle.secret;
  }

  restart(config: GameConfig): void {
    this.start(config);
  }
}
