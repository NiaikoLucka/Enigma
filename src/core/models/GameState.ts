import type { Clue } from "./types";

export type GameStatus = "READY" | "PLAYING" | "WON" | "LOST";

export interface LockGameState {
  clues: Clue[];

  attempts: number;

  maxAttempts: number;

  status: GameStatus;

  secretCode?: string;

  startTime: number;

  endTime?: number;
}
