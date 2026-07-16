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

    maxAttempts: 8,

    minClues: 5,

    maxClues: 10,
  },

  [Difficulty.NORMAL]: {
    digits: 3,

    maxAttempts: 6,

    minClues: 5,

    maxClues: 10,
  },

  [Difficulty.HARD]: {
    digits: 4,

    maxAttempts: 4,

    minClues: 5,

    maxClues: 4,
  },

  [Difficulty.EXPERT]: {
    digits: 4,

    maxAttempts: 2,

    minClues: 5,

    maxClues: 15,
  },
};
