import type { GuessResult } from "../models/types";

export class GuessEvaluator {
  evaluate(secret: string, guess: string): GuessResult {
    let correctPlace = 0;

    let correctWrongPlace = 0;

    const secretUsed = new Array(secret.length).fill(false);

    const guessUsed = new Array(guess.length).fill(false);

    for (let i = 0; i < secret.length; i++) {
      if (secret[i] === guess[i]) {
        correctPlace++;

        secretUsed[i] = true;

        guessUsed[i] = true;
      }
    }

    for (let i = 0; i < guess.length; i++) {
      if (guessUsed[i]) continue;

      for (let j = 0; j < secret.length; j++) {
        if (!secretUsed[j] && guess[i] === secret[j]) {
          correctWrongPlace++;

          secretUsed[j] = true;

          break;
        }
      }
    }

    return {
      correctPlace,

      correctWrongPlace,
    };
  }
}
