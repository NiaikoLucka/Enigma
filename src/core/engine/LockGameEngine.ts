import { PuzzleGenerator } from "../generators/PuzzleGenerator";
import type { GameConfig } from "../config/GameConfig";
import type { Puzzle } from "../models/types";
import type { LockGameState } from "../models/GameState";

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

      startTime: Date.now(),
    };
  }

  getState(): LockGameState {
    return this.state;
  }

  getClues() {
    return this.state.clues;
  }

  checkAnswer(answer: string): boolean {
    if (this.state.status !== "PLAYING") {
      return false;
    }

    this.state.attempts++;

    const isCorrect = answer === this.puzzle.secret;

    if (isCorrect) {
      this.state.status = "WON";

      this.state.endTime = Date.now();
    } else if (this.state.attempts >= this.state.maxAttempts) {
      this.state.status = "LOST";

      this.state.endTime = Date.now();
    }

    return isCorrect;
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
}
