import type { GameStatus } from "./GameState";
import type { LockAnimation } from "./LockAnimation";

export interface GuessResult {
  correct: boolean;

  status: GameStatus;

  attempts: number;

  remainingAttempts: number;

  gameOver: boolean;

  animation: LockAnimation;
}