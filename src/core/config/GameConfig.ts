import { Difficulty } from "./Difficulty";

export interface GameConfig {
  digits: number;

  maxAttempts: number;

  minClues: number;

  maxClues: number;
}

export const GAME_CONFIG: Record<Difficulty, GameConfig> = {
  [Difficulty.EASY]: {
    digits: 3,

    maxAttempts: 15,

    minClues: 3,

    maxClues: 6,
  },

  [Difficulty.NORMAL]: {
    digits: 3,

    maxAttempts: 10,

    minClues: 4,

    maxClues: 8,
  },

  [Difficulty.HARD]: {
    digits: 3,

    maxAttempts: 8,

    minClues: 6,

    maxClues: 10,
  },

  [Difficulty.EXPERT]: {
    digits: 4,

    maxAttempts: 10,

    minClues: 8,

    maxClues: 15,
  },
};
