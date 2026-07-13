export const Difficulty = {
  EASY: "easy",
  NORMAL: "normal",
  HARD: "hard",
  EXPERT: "expert",
} as const;

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty];
