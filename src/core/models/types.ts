export interface GuessResult {
  correctPlace: number;

  correctWrongPlace: number;
}

export interface Clue extends GuessResult {
  guess: string;
}

export interface Puzzle {
  secret: string;

  clues: Clue[];
}

export interface GameState {
  puzzle: Puzzle | null;

  attempts: number;

  maxAttempts: number;

  isFinished: boolean;

  isWon: boolean;
}
